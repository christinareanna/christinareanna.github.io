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

// {/* Link instead of a href */ }
// {/* build component Contact */ }


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
          <SidebarItem aria-label="View Projects" id="projects">
            <Link to="/projects" className="link" onClick={toggle} style={{ color: "#df717e", fontSize: "40px", textDecoration: "none" }}>Projects</Link>
          </SidebarItem>
          <SidebarItem aria-label="View Blogs" id="blogs">
            <Link to="/blogs" className="link" onClick={toggle} style={{ color: "#df717e", fontSize: "40px", textDecoration: "none" }}>Blogs</Link>
          </SidebarItem>
          <SidebarItem aria-label="View Contact Form" id="contact">
            <Link to="/contact" className="link" onClick={toggle} style={{ color: "#df717e", fontSize: "40px", textDecoration: "none" }}>Contact</Link>
          </SidebarItem>
          <SidebarItem aria-label="Go to homepage" id="home">
            <Link to="/" className="link" onClick={toggle} style={{ color: "#df717e", fontSize: "40px", textDecoration: "none" }}>Home</Link>
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
