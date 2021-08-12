import React from 'react';
import './searchsection';
import SearchBar from 'material-ui-search-bar';

export default function SearchSection(props) {
  return (
    <>
      <div className="search-section">
        <div className="background-poster">
          <img
            src="https://i.ibb.co/g9QGhpP/ahp0l9ecx0vfwsdo1rwxcdtynfyzn4gweomwnblntp5glupfrmnapoab88tzxyjd.jpg"
            alt="poster"
          />
          <div className="search-input">
            <p>Search Your Restaurant Here</p>
            <SearchBar className="search-bar" onChange={props.handleSearch} />
          </div>
        </div>
      </div>
    </>
  );
}
