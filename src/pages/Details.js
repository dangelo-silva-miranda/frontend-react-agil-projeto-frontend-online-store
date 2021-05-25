import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import BackArrow from '../img/back-arrow.png';

import '../css/Details.css';
import ProductRating from '../components/ProductRating';

class Details extends Component {
  render() {
    const {
      location: {
        data: {
          title,
          thumbnail,
          price,
          attributes,
          permalink,
          addToCart,
        },
      },
      match: {
        params: {
          id,
        },
      },
    } = this.props;

    return (
      <div>
        <h1 data-testid="product-detail-name" className="title-product">{` ${title}`}</h1>
        <img src={ thumbnail } alt="Thumbnail Product" className="img-product" />
        <h2>{`R$ ${price.toFixed(2)}`}</h2>
        <ul className="list-attributes">
          { attributes.map((attribute) => (
            <li key={ attribute.id }>
              {`${attribute.name}: ${attribute.value_name}`}
            </li>
          )) }
        </ul>
        <h3>
          {/*
          Correção de rel="noreferrer" para rel="noopener noreferrer" de acordo com a sugestão do warning abaixo:
          Line 36:33:  Using target="_blank" without rel="noopener noreferrer" is a security risk: see https://mathiasbynens.github.io/rel-noopener  react/jsx-no-target-blank
          */}
          <a href={ permalink } target="_blank" rel="noopener noreferrer">Link ML</a>
        </h3>
        <Link to="/">
          <img className="back-arrow-icon" src={ BackArrow } alt="" />
        </Link>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => addToCart(id) }
        >
          Adicionar ao Carrinho
        </button>
        <ProductRating />
      </div>
    );
  }
}

Details.propTypes = {
  location: PropTypes.shape({
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      attributes: PropTypes.arrayOf(
        PropTypes.shape().isRequired,
      ).isRequired,
      permalink: PropTypes.string.isRequired,
      addToCart: PropTypes.func.isRequired,
    }).isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}.isRequired;

export default Details;
