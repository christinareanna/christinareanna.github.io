import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { Nav, NavbarContainer, NavMenu, NavItem } from "./NavbarElements";


const Navbar = () => {
    return (
        // come back to make styling global pls this is so ugly lol
        <>
            <Nav>
                <NavbarContainer>
                    <NavMenu style={{ fontFamily: "calibri", width: "100%", paddingTop: "20px", maxWidth: "100%", justifyContent: "center" }}>
                        <NavItem id="blogs" style={{ width: "100%" }}>
                            <Link to="/blogs" style={{ fontSize: "2em", color: "black", border: "2px solid aqua", width: "100%", borderRadius: "60%", padding: "20px", backgroundColor: "aqua", textDecoration: "none" }}>Blogs</Link>
                        </NavItem>
                        <NavItem id="home" style={{ width: "100%" }}>
                            <Link to="/" style={{ fontSize: "2em", color: "black", border: "2px solid aqua", borderRadius: "60%", backgroundColor: "aqua", padding: "20px", width: "100%", textDecoration: "none" }}><FaHome /></Link>
                        </NavItem>
                        <NavItem id="contact" style={{ width: "100%" }}>
                            <Link to="/contact" style={{ fontSize: "2em", color: "black", border: "2px solid aqua", width: "100%", borderRadius: "60%", padding: "20px", backgroundColor: "aqua", textDecoration: "none" }}>Contact</Link>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
            <div id="target">
                Christina Reanna Knapp
            </div>
            <div id="desc">
                Product Engineering Associate at Accenture.
            </div>
        </>
    )
};

export default Navbar;