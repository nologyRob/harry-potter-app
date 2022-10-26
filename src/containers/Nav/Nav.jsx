import React from "react";
import "./Nav.scss";
import logo from "../../assets/images/logo.png";
import SearchBar from "../../components/SearchBar/SearchBar";
import Checkboxes from "../../components/CheckBoxes/Checkboxes";
const Nav = (props) => {
  const { searchTerm, handleInput, handleCheckbox } = props;
  return (
    <div className="sidenav">
      <img className="sidenav__logo" src={logo} alt="" />
      <SearchBar handleInput={handleInput} searchTerm={searchTerm} />
      <Checkboxes handleCheckbox={handleCheckbox} />
    </div>
  );
};

export default Nav;
