import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { Nav, NavbarContainer, NavMenu, NavItem } from "./NavbarElements";


const Navbar = () => {
    return (
        // come back to make styling global
        <>
            <Nav>
                <NavbarContainer>
                    <NavMenu style={{ fontFamily: "calibri", width: "100%", maxWidth: "100%", justifyContent: "center" }}>
                        <NavItem id="projects" style={{ width: "100%", margin: "3rem" }}>
                            <Link to="/projects" style={{ color: "#df717e", textDecoration: "none" }}><div style={{ display: "flex", justifyContent: "center" }}><span style={{ fontSize: "2em" }}>Projects</span></div></Link>
                        </NavItem>
                        <NavItem id="home" style={{ width: "100%", margin: "0px", padding: "0px" }}>
                            <Link to="/" style={{ color: "#df717e", textDecoration: "none" }}><div style={{ display: "flex", justifyContent: "center" }}><span><FaHome size={35} /></span></div></Link>
                        </NavItem>
                        {/* <NavItem id="blogs" style={{ width: "100%", margin: "3rem" }}>
                            <Link to="/blogs" style={{ color: "#df717e", textDecoration: "none" }}><div style={{display: "flex", justifyContent: "center"}}><span style={{fontSize: "2em"}}>Blogs</span></div></Link>
                        </NavItem> */}

                        <NavItem id="contact" style={{ width: "100%", margin: "3rem" }}>
                            <Link to="/contact" style={{ color: "#df717e", textDecoration: "none" }}><div style={{ display: "flex", justifyContent: "center" }}><span style={{ fontSize: "2em" }}>Contact</span></div></Link>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
            {/* <div id="target">
                Christina Reanna Knapp
            </div>
            <div id="desc">
                Product Engineering Associate at Accenture.
            </div> */}
        </>
    )
};

export default Navbar;