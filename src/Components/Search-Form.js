import React from "react";
import PropTypes from "prop-types";
import "../styles/Search-Form.css";

const SearchForm = ({ findCity, setSearchText, searchText }) => {
  const handleInputChange = (event) => setSearchText(event.target.value);

  // const onClick = (e) => {
  //   e.preventDefault();

  //   console.log(props.searchText);

  //   props.onSearch();

  //   props.setSearchText("");
  // };
  // Previously

  return (
    <form className="searchForm">
      <input
        className="searchInput"
        type="text"
        value={searchText}
        onChange={handleInputChange}
        placeholder="Name of city"
      />
      <button className="searchButton" onClick={(event) => findCity(event)}>
        Search
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

export default SearchForm;
