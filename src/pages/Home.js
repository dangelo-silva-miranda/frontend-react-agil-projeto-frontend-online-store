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

  /*
  Removido pois limpava o carrinho toda vez que voltada para Home.
  Precisa criar botão LIMPAR CARRINHO na página do Carrinho
  componentDidMount() {
    localStorage.setItem('cart', '[]');
  }
  */

  readCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    return (cart) || [];
  }

  saveCart = (cart) => localStorage.setItem('cart', JSON.stringify(cart));

  addToCart = (id, quantity = 1) => {
    const { products } = this.state;

    const cart = this.readCart();
    // console.log(cart);
    const oldProduct = cart.find((product) => product.id === id);

    if (cart.length && oldProduct) {
      const index = cart.indexOf(oldProduct);
      oldProduct.quantity += quantity;
      cart[index] = oldProduct;
      this.saveCart(cart);
    } else {
      const newProductToCart = products.find((product) => product.id === id);
      newProductToCart.quantity = quantity;
      this.saveCart([...cart, newProductToCart]);
    }
    // console.log(cart);
  }

  handleChange = ({ target: { name, value } }) => {
    // console.log('change');
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
    const { handleChange, getProductsBySearch, getProductsByCategory, addToCart } = this;

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
          { !searchStatus
            ? <InitialMessage />
            : <ProductList products={ products } addToCart={ addToCart } /> }
        </section>
      </div>
    );
  }
}

export default Home;
