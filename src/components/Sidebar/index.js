import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarItem,
  // SidebarLink,
} from "./SidebarElements";
import { FaBars } from 'react-icons/fa';
import { MobileIcon } from "../Navbar/NavbarElements";


const Sidebar = () => {
  const [isSidebarShowing, setIsSidebarShowing] = useState(false)
  const toggle = () => setIsSidebarShowing(!isSidebarShowing)
  // const hide = () => setIsSidebarShowing(!isSidebarShowing)


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


  function Menu() {
    return isSidebarShowing ? (
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarItem aria-label="Go to homepage" id="home">
            <Link to="/" className="link" onClick={toggle}>Home</Link>
          </SidebarItem>
          <SidebarItem aria-label="View Contact Form" id="contact">
            <Link to="/contact" className="link" onClick={toggle}>Contact</Link>
          </SidebarItem>
          <SidebarItem aria-label="Go to portfolio" id="portfolio">
            <Link to="/portfolio" className="link" onClick={toggle}>Portfolio</Link>
          </SidebarItem>
          <SidebarItem aria-label="Go to projects" id="projects">
            <Link to="/projects" className="link" onClick={toggle}>Projects</Link>
          </SidebarItem>
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
