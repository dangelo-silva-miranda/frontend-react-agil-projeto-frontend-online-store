import React from 'react';
import { Link } from 'react-router-dom';

import BackArrow from '../img/back-arrow.png';
import EmptyCart from '../components/EmptyCart';
import CartProducts from '../components/CartProducts';

import '../css/Cart.css';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
    };
  }

  componentDidMount() {
    this.updateCart();
  }

  readCart = () => JSON.parse(localStorage.getItem('cart'));

  updateCart = () => {
    const cart = this.readCart();
    console.log(cart);

    this.setState({
      cart,
    });
  }

  render() {
    const { cart } = this.state;

    return (
      <div className="container-cart">
        <h1>Carrinho de compras</h1>
        <Link to="/">
          <img className="back-arrow-icon" src={ BackArrow } alt="" />
        </Link>
        { cart.length ? <CartProducts cart={ cart } /> : <EmptyCart /> }
      </div>
    );
  }
}

export default Cart;
