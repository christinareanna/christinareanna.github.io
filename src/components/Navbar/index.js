import React from "react";
// import { Link } from "react-router-dom"
// import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  // MobileIcon,
  NavMenu,
  NavItem,
} from "./NavbarElements";

// come back to fix later, sidebar works but nav 
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggle}>Christina Reanna</NavLogo>
          <NavMenu>
            <NavItem>
              <a href="#about">About</a>
            </NavItem>
            <NavItem>
              <a href="#discover">Discover</a>
            </NavItem>
            <NavItem>
              <a href="#contact">Contact</a>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
