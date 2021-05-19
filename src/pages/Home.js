import React from 'react';

import { getProductsFromCategoryAndQuery } from '../services/api';

import Categories from '../components/Categories';
import InitialMessage from '../components/InitialMessage';
import SearchInput from '../components/SearchInput';
import ProductList from '../components/ProductList';

import '../css/Home.css';

import CartButton from '../components/CartButton';

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

  componentDidMount() {
    console.log('didMount');
  }

  handleChange = ({ target: { name, value } }) => {
    console.log('change');
    this.setState({
      [name]: value,
    });
  }

  getProductsByCategory = async (id) => {
    const { results } = await getProductsFromCategoryAndQuery(id);

    this.setState({
      searchStatus: true,
      products: results,
      category: id,
      searchInput: '',
    });
  }

  getProductsBySearch = async (event) => {
    event.preventDefault();

    const { searchInput, category } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(category, searchInput);

    this.setState({
      searchStatus: true,
      products: results,
    });
  }

  render() {
    const { searchStatus, products } = this.state;
    const { handleChange, getProductsBySearch, getProductsByCategory } = this;

    return (
      <div className="store">
        <section className="left-content">
          <Categories getProductsByCategory={ getProductsByCategory } />
        </section>
        <section className="right-content">
          <div className="header">
            <SearchInput
              handleChange={ handleChange }
              getProductsBySearch={ getProductsBySearch }
            />
            <CartButton />
          </div>
          { !searchStatus ? <InitialMessage /> : <ProductList products={ products } /> }
        </section>
      </div>
    );
  }
}

export default Home;
