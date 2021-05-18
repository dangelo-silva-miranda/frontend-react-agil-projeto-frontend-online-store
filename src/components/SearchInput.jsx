import React from 'react';
import PropTypes from 'prop-types';

import '../css/Searchinput.css';

class SearchInput extends React.Component {
  render() {
    const { handleChange, updateSearch } = this.props;

    return (
      <form onSubmit={ updateSearch } method="get" className="search-bar">
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
  updateSearch: PropTypes.func,
}.isRequired;

export default SearchInput;
