import "./App.css";
import "./App.scss";
import Nav from "./containers/Nav/Nav";
import Characters from "./containers/Characters/Characters";
import charactersArr from "./data/characters";
import React, { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [houses, setHouses] = useState([]);
  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCheckbox = (event) => {
    if (event.target.checked && event.target.value.length > 0) {
      setHouses([...houses, event.target.value]);
    } else if (!event.target.checked) {
      const uncheckedItem = event.target.value;
      const newHousesChecked = houses.filter(
        (item) => !item.includes(uncheckedItem)
      );
      setHouses(newHousesChecked);
    } else {
      setHouses([event.target.value]);
    }
  };

  const filteredSearch = charactersArr.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let newCharArray = [];
  charactersArr.forEach((character) => {
    houses.forEach((singleHouse) => {
      if (character.house.includes(singleHouse)) {
        newCharArray.push(character);
      }
    });
  });

  return (
    <div className="App">
      <Nav
        handleInput={handleInput}
        handleCheckbox={handleCheckbox}
        searchTerm={searchTerm}
      />
      {newCharArray.length > 0 ? (
        <Characters characterArr={newCharArray} />
      ) : (
        <Characters characterArr={filteredSearch} />
      )}
    </div>
  );
}

export default App;
