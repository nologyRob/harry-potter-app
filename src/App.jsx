import "./App.css";
import "./App.scss";
import Nav from "./containers/Nav/Nav";
import Characters from "./containers/Characters/Characters"
import charactersArr from "./data/characters";
import React, {useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [house, setHouse] = useState("")
  const handleInput = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredSearch = charactersArr.filter(character => character.name.includes(searchTerm))

  return (
    <div className="App">
      <Nav handleInput={handleInput} searchTerm={searchTerm} house={house}/>
      <Characters characterArr={filteredSearch}/>
    </div>
  );
}

export default App;
