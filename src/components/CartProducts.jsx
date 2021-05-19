import React from 'react';
import PropTypes from 'prop-types';

import CartItem from './CartItem';

class CartProducts extends React.Component {
  // constructor(props) {
  //   super(props);

  //   const { cart } = this.props;
  // }

  // teste = () => {
  //   const { cart } = this.props;

  //   cart.map((product) => (
  //     <CartItem
  //       key={ product.id }
  //       product={ product }
  //     />));
  // }

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
