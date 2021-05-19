import React from 'react';
import PropTypes from 'prop-types';

class CartItem extends React.Component {
  render() {
    const { product: { title, quantity } } = this.props;

    return (
      <div>
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
      </div>
    );
  }
}

CartItem.propTypes = {
  product: PropTypes.shape().isRequired,
};

export default CartItem;
