import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/CartButton.css';

import CartIcon from '../img/cart.png';

class CartButton extends Component {
  render() {
    return (
      <div className="container-cart-button">
        <Link data-testid="shopping-cart-button" to="/cart">
          <img className="cart-icon" src={ CartIcon } alt="botão carrinho de compras" />
        </Link>
      </div>
    );
  }
}

export default CartButton;
