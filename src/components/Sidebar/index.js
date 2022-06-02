import React, { useState } from "react";
import { Link } from "react-router-dom";
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

// {/* Link instead of a href */ }
// {/* build component Contact */ }


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
        <SidebarMenu style={{ padding: "10em" }}>
          {/* <NavLogo to="/" onMouseDown={hide}>Christina Reanna</NavLogo> */}


          <Link to="about" onMouseDown={hide} style={{ color: "#FF1493", fontSize: "44px", padding: "1em 0", margin: "0", textDecoration: "none" }}>About</Link>
          {/* <div onMouseDown={hide} onClick={() => window.location.replace("/#about")}>
            <span>Go to about</span>
          </div> */}
          <Link to="blogs" onMouseDown={hide} style={{ color: "#FF1493", fontSize: "44px", padding: "3em 0", textDecoration: "none" }}>Blogs</Link>
          <Link to="contact" onMouseDown={hide} style={{ color: "#FF1493", fontSize: "44px", padding: "5em 0", textDecoration: "none" }}>Contact</Link>
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
