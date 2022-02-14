import React, { useState } from "react";
// import { Link } from "react-router-dom";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  // SidebarLink,
} from "./SidebarElements";
import { FaBars } from 'react-icons/fa'
import { MobileIcon, NavLogo } from "../Navbar/NavbarElements";

const Sidebar = () => {
  const [isSidebarShowing, setIsSidebarShowing] = useState(false)

  const toggle = () => {
    setIsSidebarShowing(!isSidebarShowing)
  };

  function NavIcon() {
    return isSidebarShowing ? (
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
    ) : (
      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>
    )
  }


  function Menu({ toggle, isOpen }) {
    return isSidebarShowing ? (
      <SidebarWrapper>
        <SidebarMenu>
          <NavLogo to="/" onClick={toggle}>Christina Reanna</NavLogo>

          <a href="#about" isOpen={isOpen} onClick={toggle}>About</a>
          <a href="#discover" isOpen={isOpen} onClick={toggle}>Discover</a>
          <a href="#contact" isOpen={isOpen} onClick={toggle}>Contact</a>

          {/* <Link to='about' isOpen={isOpen} onClick={toggle}>About</Link>
          <Link to='discover' isOpen={isOpen} onClick={toggle}>Discover</Link>
          <Link to='contact' isOpen={isOpen}onClick={toggle}>Contact</Link> */}
        </SidebarMenu>
      </SidebarWrapper>
    ) : null
  }

  return (
    <SidebarContainer>
      <NavIcon />
      <Menu />
    </SidebarContainer>
  );
};

export default Sidebar;
