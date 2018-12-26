import React, { Component } from 'react';
import PropTypes from 'prop-types';
const SEARCH_ICON = 'https://www.shareicon.net/data/128x128/2017/06/21/887375_view_512x512.png';

class SearchInput extends Component {
  onSearchQueryChange = event => {
  this.props.onChange(event.target.value);
};

  render() {
    const { props } = this;
    return (
      <div className="searchInputContainer">
        <img className="searchIcon" src={SEARCH_ICON} />
        <input
          className="searchInput"
          onChange={this.onSearchQueryChange}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          type="text"
          id="search-users"
          placeholder='Search'
          value={props.value}
          autoFocus={props.isFocused}
        />
        {props.value ? <div onClick={props.clearText} className="crossIcon">x</div> : ''}
      </div>
    );
  }
}

SearchInput.propTypes = {
  className: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  isFocused: PropTypes.bool,
  clearText: PropTypes.func,
  value: PropTypes.string,
};

export default SearchInput;
