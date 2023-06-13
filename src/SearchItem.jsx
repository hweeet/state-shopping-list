import React from "react";

const SearchItem = ( {search, setSearch} ) => {
    return (
        <form className="searchForm">
                <label htmlFor="search" />
                <input type="text" 
                       id="search"
                       role="searchbox"
                       value={search} 
                       onChange={(e) => setSearch(e.target.value)} 
                       placeholder="Type to search"></input>
        </form>
    )
}

export default SearchItem;