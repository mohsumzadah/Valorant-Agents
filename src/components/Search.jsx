import React from "react";
import {useState} from "react";

function Search({handleSearch}){

    function updateSearch(event){
        var value = event.target.value;
        handleSearch(value);
    }

    return <div className="search-container">
        <input type="text" name="" id="" onChange={updateSearch}/>
    </div>
}

export default Search