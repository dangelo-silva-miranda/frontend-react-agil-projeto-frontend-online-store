import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/CartButton.css';

import CartIcon from '../img/cart.png';

class CartButton extends Component {
  render() {
    return (
      <div className="container-cart-button">
        <Link data-testid="shopping-cart-button" to="/cart">
          {/* <button type="button" className="">Teste</button> */}
          <img className="cart-icon" src={ CartIcon } alt="teste" />
        </Link>
      </div>
    );
  }
}

export default CartButton;
