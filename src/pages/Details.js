import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Details extends Component {
  render() {
    const { location: { state } } = this.props;

    return (
      <div>
        <h1 data-testid="product-detail-name">
          {state.title}
        </h1>
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape().isRequired,
  params: PropTypes.string.isRequired,
}.isRequired;

export default Details;
