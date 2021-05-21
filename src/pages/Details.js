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
        state: {
          title,
          thumbnail,
          price,
          attributes,
          permalink,
        },
      } } = this.props;

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
          <a href={ permalink } target="_blank" rel="noreferrer">Link ML</a>
        </h3>
        <Link to="/">
          <img className="back-arrow-icon" src={ BackArrow } alt="" />
        </Link>
        <ProductRating />
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape().isRequired,
  params: PropTypes.string.isRequired,
}.isRequired;

export default Details;
