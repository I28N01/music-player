import React from 'react';
import SearchCSS from './Search.module.scss';
import searchIcon from '../../img/icon/search.svg';

function Search() {
    return (
        <div className={SearchCSS.centerblock__search}>
        <div className={SearchCSS.search__svg}>
            <img src={searchIcon} alt="Logo" />
        </div>
        <input className={SearchCSS.search__text} type="search" placeholder="Поиск" name="search" />
    </div>
    );
  }

  export default Search;