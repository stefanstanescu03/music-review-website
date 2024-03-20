import React from 'react'
import "../styles/SearchBar.css"
import search from "../assets/search.png"

function SearchBar() {
    return (<div className='searchbar-container'>
        <input className="searchbar" type="text" placeholder="search" />
        <button className='search-btn'><img src={search} alt="search" id="search-icon"/></button>
    </div>)
}

export default SearchBar