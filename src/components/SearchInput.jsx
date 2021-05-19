import React from 'react';
import PropTypes from 'prop-types';

import '../css/SearchInput.css';

class SearchInput extends React.Component {
  render() {
    const { handleChange, getProductsBySearch } = this.props;

    return (
      <form onSubmit={ getProductsBySearch } method="get" className="search-bar">
        <input
          data-testid="query-input"
          onChange={ handleChange }
          className="search-bar-input"
          type="text"
          name="searchInput"
        />
        <button
          data-testid="query-button"
          className="search-bar-btn"
          type="submit"
        >
          Pesquisar
        </button>
      </form>
    );
  }
}

SearchInput.propTypes = {
  handleChange: PropTypes.func,
  getProductsBySearch: PropTypes.func,
}.isRequired;

export default SearchInput;
