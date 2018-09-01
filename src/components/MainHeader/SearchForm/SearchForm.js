import React, { Component } from "react";
import PropTypes from "prop-types";
import "./SearchForm.css";

class SearchForm extends Component {
  render() {
    const { placeholder } = this.props;
    return (
      <form className="sj-mh__search">
        <input type="search" placeholder={placeholder} />
      </form>
    );
  }
}

SearchForm.propTypes = {
  placeholder: PropTypes.string.isRequired
};

export default SearchForm;
