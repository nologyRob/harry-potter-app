import React, { useState, useEffect } from "react";
import "./App.css";
import "./App.scss";
import Nav from "./containers/Nav/Nav";
import Characters from "./containers/Characters/Characters";
import charactersArr from "./data/characters";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [gryfCheck, setGryfCheck] = useState(false);
  const [ravenCheck, setRavenCheck] = useState(false);
  const [huffleCheck, setHuffleCheck] = useState(false);
  const [slytherinCheck, setSlytherinCheck] = useState(false);

  const handleInput = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };
  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters")
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);

  console.log(data)
  const handleChecked = (event) => {
    if (event.target.id === "Gryffindor") {
      setGryfCheck(event.target.checked);
    } else if (event.target.id === "Ravenclaw") {
      setRavenCheck(event.target.checked);
    } else if (event.target.id === "Hufflepuff") {
      setHuffleCheck(event.target.checked);
    } else {
      setSlytherinCheck(event.target.checked);
    }
  };

  const filteredSearch = data.filter((character) => {
    if (gryfCheck) {
      return (
        character.name.toincludes(searchTerm) && character.house === "Gryffindor"
      );
    } else if (ravenCheck) {
      return (
        character.name.includes(searchTerm) && character.house === "Ravenclaw"
      );
    } else if (huffleCheck) {
      return (
        character.name.includes(searchTerm) && character.house === "Hufflepuff"
      );
    } else if (slytherinCheck) {
      return (
        character.name.includes(searchTerm) && character.house === "Slytherin"
      );
    } else {
      return character.name.toLowerCase().includes(searchTerm);
    }
  });

  return (
    <div className="App">
      <Nav
        handleInput={handleInput}
        searchTerm={searchTerm}
        handleChecked={handleChecked}
      />
      <Characters characterArr={filteredSearch} />
    </div>
  );
}

export default App;
