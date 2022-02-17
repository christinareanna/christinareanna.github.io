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
              <button><a href="#about">About</a></button>
            </NavItem>
            <NavItem>
              <button><a href="#discover">Discover</a></button>
            </NavItem>
            <NavItem>
              <button><a href="#contact">Contact</a></button>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
