import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  render(){
    return (
      <div class="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" />
        <a>SEARCH</a>
      </div>
    );
  }
}
export default SearchBar;