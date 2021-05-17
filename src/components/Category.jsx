import React, { Component } from 'react';

import PropTypes from 'prop-types';

class Category extends Component {
  render() {
    const {
      category: { name },
    } = this.props;
    return (
      <div>
        <button data-testid="category" type="button">
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
