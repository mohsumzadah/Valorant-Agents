import { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main"


function App() {

  const [searchValue, setSearchValue] = useState("");

  function handleSearch(value){
    setSearchValue(value);
  }

  return (
    <div>
      <Header handleSearch={handleSearch}/>
      <Main searchValue={searchValue}/>
    </div>
  );
}

export default App;
