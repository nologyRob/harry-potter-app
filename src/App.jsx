import "./App.css";
import "./App.scss";
import Nav from "./containers/Nav/Nav";
import Characters from "./containers/Characters/Characters"
import React, { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Nav />
      <Characters />
    </div>
  );
}

export default App;
