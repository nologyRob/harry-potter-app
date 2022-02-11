import React from 'react'
import "./SearchBar.scss"

const SearchBar = () => {
  return (
     <form className = "searchBar" action="">
        <label htmlFor="search"></label>
        <input className="searchBar__input" type="text" placeholder="Search..." />
      </form>
  )
}

export default SearchBar