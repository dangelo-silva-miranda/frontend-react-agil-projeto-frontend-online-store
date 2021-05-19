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
      cart: [],
      products: [],
      searchInput: '',
      searchStatus: false,
      category: '',
    };
  }

  readCart = () => JSON.parse(localStorage.getItem('cart'));

  saveCart = (cart) => localStorage.setItem('cart', JSON.stringify(cart));

  addToCart = async (id) => {
    const { products, cart } = this.state;

    const result = products.find((product) => product.id === id);

    this.saveCart([...cart, result]);

    this.setState({ cart: [...cart, result] });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  getCategory = (id) => {
    this.setState({ category: id });
    this.updateCategory();
  }

  updateCategory = async () => {
    const { category } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(category);

    this.setState({
      searchStatus: true,
      products: results,
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
    const { handleChange, updateSearch, getCategory, addToCart } = this;

    return (
      <div className="store">
        <section className="left-content">
          <Categories getCategory={ getCategory } />
        </section>
        <section className="right-content">
          <div className="header">
            <SearchInput
              handleChange={ handleChange }
              updateSearch={ updateSearch }
            />
            <CartButton />
          </div>
          { !searchStatus
            ? <InitialMessage />
            : <ProductList products={ products } addToCart={ addToCart } /> }
        </section>
      </div>
    );
  }
}

export default Home;
