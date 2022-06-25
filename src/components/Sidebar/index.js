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
          {/* <NavLogo to="/" onMouseDown={hide}>Christina Reanna</NavLogo> */}
          {/* <div onMouseDown={hide} onClick={() => window.location.replace("/#about")}>
            <span>Go to about</span>
          </div> */}
          <SidebarItem id="blogs" style={{ width: "100%", margin: "3em 0", }}>
            <Link to="/blogs" onClick={toggle} style={{ color: "#FF1493", fontSize: "44px", textDecoration: "none" }}>Blogs</Link>
          </SidebarItem>
          <SidebarItem id="home" style={{ width: "100%", margin: "3em 0", }}>
            <Link to="/" onClick={toggle} style={{ color: "#FF1493", fontSize: "44px", textDecoration: "none" }}>Home</Link>
          </SidebarItem>
          <SidebarItem id="contact" style={{ width: "100%", margin: "3em 0", }}>
            <Link to="/contact" onClick={toggle} style={{ color: "#FF1493", fontSize: "44px", textDecoration: "none" }}>Contact</Link>
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
