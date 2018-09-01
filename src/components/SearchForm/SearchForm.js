import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
const root = css`
  flex: 1;
  padding: 0 10px;
  height: 100%;

  input[type="search"] {
    width: 100%;
    height: 100%;
    border: none;
    padding: 0 5px;
  }
`;
class SearchForm extends Component {
  render() {
    const { placeholder } = this.props;
    return (
      <form className={root}>
        <input type="search" placeholder={placeholder} />
      </form>
    );
  }
}

SearchForm.propTypes = {
  placeholder: PropTypes.string.isRequired
};

export default SearchForm;
