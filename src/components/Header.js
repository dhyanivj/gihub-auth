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

// import { userContext } from "../context/UserContext";
const Header = () => {
  return (
    <>
      <Navbar color="info" light expand="md">
        <NavbarBrand>
          <Link to="/" className="text-white">
            gitAuthApp
          </Link>
        </NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>Signup</NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto">
            <NavItem>
              <NavLink>Signin</NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto">
            <NavItem>
              <NavLink>logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        {/* <Link to="/">Home</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link> */}
      </Navbar>
    </>
  );
};

export default Header;
