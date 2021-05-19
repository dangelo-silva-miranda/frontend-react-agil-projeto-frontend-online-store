import React from 'react';
import EmptyBox from '../img/empty-box.png';

class EmptyCart extends React.Component {
  render() {
    return (
      <div>
        <img className="empty-box-icon" src={ EmptyBox } alt="" />
        <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
      </div>
    );
  }
}

export default EmptyCart;
