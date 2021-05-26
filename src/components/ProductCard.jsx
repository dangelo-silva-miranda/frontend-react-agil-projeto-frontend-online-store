import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../css/ProductCard.css';

class ProductCard extends React.Component {
  render() {
    const {
      product: {
        id,
        price,
        title,
        thumbnail,
        attributes,
        permalink,
      },
      addToCart,
    } = this.props;

    return (

      <div data-testid="product" className="product-card">
        <div className="product-title-section">
          <h2 className="product-title">{ title }</h2>
        </div>

        <img className="product-img" src={ thumbnail } alt="Product" />
        <h3 className="product-price">
          R$
          {' '}
          { price.toFixed(2) }
        </h3>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => addToCart(id) }
        >
          Adicionar ao Carrinho
        </button>

        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/products/${id}/details`,
            data: {
              title,
              price,
              thumbnail,
              attributes,
              permalink,
              addToCart,
            },
          } }
        >
          <button type="button">
            Detalhes
          </button>
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    attributes: PropTypes.arrayOf(
      PropTypes.shape().isRequired,
    ).isRequired,
    permalink: PropTypes.string.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
}.isRequired;

export default ProductCard;
