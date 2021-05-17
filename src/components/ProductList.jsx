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
          ? products.map(({
            id,
            price,
            title,
            thumbnail,
          }) => (
            <ProductCard
              key={ id }
              price={ price }
              title={ title }
              thumbnail={ thumbnail }
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
