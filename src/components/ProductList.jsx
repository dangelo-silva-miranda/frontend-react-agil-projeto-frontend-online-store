import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';
import ProductNotFound from './ProductNotFound';

import '../css/ProductList.css';

class ProductList extends React.Component {
  render() {
    const { products } = this.props;

    return (
      <div className="products">
        { products.length
          ? products.map((product) => (
            <ProductCard
              key={ product.id }
              product={ product }
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
};

export default ProductList;
