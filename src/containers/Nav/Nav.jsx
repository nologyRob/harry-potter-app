import React from "react";
import "./Nav.scss";
import logo from "../../assets/images/logo.png";
import SearchBar from "../../components/SearchBar/SearchBar";
import Checkboxes from "../../components/CheckBoxes/Checkboxes"
const Nav = () => {
  return (
    <div className="sidenav">
      <img className="sidenav__logo" src={logo} alt="" />
      <SearchBar />
      <Checkboxes />
    </div>
  );
};

export default Nav;
