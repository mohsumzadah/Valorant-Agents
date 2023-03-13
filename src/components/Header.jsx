import React from "react"
import TitleText  from "./TitleText";
import Search from "./Search";


function Header({handleSearch}){

    return <div className="header">
        <TitleText  text="Valorant Agents"/>
        <Search  handleSearch={handleSearch}/>
    </div>
}

export default Header;