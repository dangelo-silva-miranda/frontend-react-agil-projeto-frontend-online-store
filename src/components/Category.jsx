import React, { Component } from 'react';

import PropTypes from 'prop-types';

class Category extends Component {
  render() {
    const {
      category: { name, id }, getCategory,
    } = this.props;
    return (
      <div>
        <button
          onClick={ () => getCategory(id) }
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
};

export default Category;
