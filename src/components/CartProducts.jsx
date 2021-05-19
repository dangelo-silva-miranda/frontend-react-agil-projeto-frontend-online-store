import React from 'react';
import PropTypes from 'prop-types';

import CartItem from './CartItem';

class CartProducts extends React.Component {
  render() {
    const { cart } = this.props;

    return (
      <div>
        { cart.map((product) => (
          <CartItem
            key={ product.id }
            product={ product }
          />)) }
      </div>
    );
  }
}

CartProducts.propTypes = {
  cart: PropTypes.arrayOf().isRequired,
};

export default CartProducts;
