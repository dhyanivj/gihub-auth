import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavText,
} from "reactstrap";

import { Link } from "react-router-dom";

import { userContext } from "../context/UserContext";
const Header = () => {
  return (
    <>
      <Navbar color="info" light></Navbar>
    </>
  );
};

export default Header;
