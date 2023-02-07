import React from 'react';
import searchIcon from '../img/icon/search.svg';

function Search() {
    return (
        <div className="centerblock__search search">
        <div className="search__svg">
            <img src={searchIcon} alt="Logo" />
        </div>
        <input className="search__text" type="search" placeholder="Поиск" name="search" />
    </div>
    );
  }

  export default Search;