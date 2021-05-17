import React from 'react';

import { getProductsFromCategoryAndQuery } from '../../services/api';

import Categories from '../../components/Categories';
import InitialMessage from '../../components/InitialMessage';
import SearchInput from '../../components/SearchInput';
import ProductList from '../../components/ProductList';

import '../../css/Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      searchInput: '',
      searchStatus: false,
      category: '',
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      searchInput: target.value,
    });
  }

  updateSearch = async (event) => {
    event.preventDefault();

    const { category, searchInput } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(category, searchInput);

    this.setState({
      searchStatus: true,
      products: results,
    });
  }

  render() {
    const { searchStatus, products } = this.state;
    const { handleChange, updateSearch } = this;

    return (
      <div className="store">
        <section className="left-content">
          <Categories />
        </section>
        <section className="right-content">
          <SearchInput
            handleChange={ handleChange }
            updateSearch={ updateSearch }
          />
          { !searchStatus ? <InitialMessage /> : <ProductList products={ products } /> }
        </section>
      </div>
    );
  }
}

export default Home;
