import React from 'react';
import { Link } from 'react-router-dom';

import BackArrow from '../img/back-arrow.png';
import EmptyBox from '../img/empty-box.png';

import '../css/Cart.css';

class Cart extends React.Component {
  render() {
    return (
      <div className="container-cart">
        <h1>Carrinho de compras</h1>
        <Link to="/">
          <img className="back-arrow-icon" src={ BackArrow } alt="" />
        </Link>
        <img className="empty-box-icon" src={ EmptyBox } alt="" />
        <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
      </div>
    );
  }
}

export default Cart;
