import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';
import ProductNotFound from './ProductNotFound';

import '../css/ProductList.css';

class ProductList extends React.Component {
  render() {
    const { products, addToCart } = this.props;

    return (
      <div className="products">
        { products.length
          ? products.map((product) => (
            <ProductCard
              key={ product.id }
              product={ product }

              addToCart={ addToCart }
>
            />))
          : <ProductNotFound /> }
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductList;
