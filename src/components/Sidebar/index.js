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
import { MobileIcon } from "../Navbar/NavbarElements";

const Sidebar = () => {
  const [isSidebarShowing, setIsSidebarShowing] = useState(false)
  const toggle = () => setIsSidebarShowing(!isSidebarShowing)
  const hide = () => setIsSidebarShowing(!isSidebarShowing)


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
          {/* <NavLogo to="/" onMouseDown={hide}>Christina Reanna</NavLogo> */}
          <a href="#about" onMouseDown={hide}>About</a>
          {/* <div onMouseDown={hide} onClick={() => window.location.replace("/#about")}>
            <span>Go to about</span>
          </div> */}
          <a href="#discover" onMouseDown={hide}>Discover</a>
          <a href="#contact" onMouseDown={hide}>Contact</a>
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
