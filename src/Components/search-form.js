import React from "react";
import PropTypes from "prop-types";

const SearchForm = (props) => {
  const handleInputChange = (event) => props.setSearchText(event.target.value);

  return (
    <form>
      <input
        type="text"
        value={props.searchText}
        onChange={handleInputChange}
        placeholder="Name of city"
      />
      <button onClick={() => props.onSearch(props.searchText)}>Search</button>
    </form>
  );
};

SearchForm.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

export default SearchForm;
