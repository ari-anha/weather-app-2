import React from "react";
import PropTypes from "prop-types";

const SearchForm = (props) => {
  const handleInputChange = (event) => props.setSearchText(event.target.value);

  const onClick = (e) => {
    e.preventDefault();

    console.log(props.searchText);

    props.onSearch();

    props.setSearchText("");
  };

  // Previously

  return (
    <form>
      <input
        type="text"
        value={props.searchText}
        onChange={handleInputChange}
        placeholder="Name of city"
      />
      <button onClick={onClick}>Search</button>
    </form>
  );
};

SearchForm.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

export default SearchForm;
