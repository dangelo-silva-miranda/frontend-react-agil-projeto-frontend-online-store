import React, { Component } from 'react';

import PropTypes from 'prop-types';

class Category extends Component {
  render() {
    const {
      category: { name, id }, getProductsByCategory,
    } = this.props;
    return (
      <div>
        <button
          onClick={ () => getProductsByCategory(id) }
          data-testid="category"
          type="button"
        >
          {name}
        </button>
      </div>
    );
  }
}

Category.propTypes = {
  category: PropTypes.shape().isRequired,
  getProductsByCategory: PropTypes.func.isRequired,
};

export default Category;
