import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaSearch, FaPen } from "react-icons/fa";
import { Nav, NavbarContainer, NavMenu, NavItem } from "./NavbarElements";


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavMenu style={{ fontFamily: "calibri", width: "100%", maxWidth: "100%", justifyContent: "center" }}>
                        <NavItem id="blogs" style={{ width: "100%" }}>
                            <Link to="/blogs" style={{ fontSize: "2em", color: "aqua", width: "100%", textDecoration: "none" }}>Blogs <FaSearch /></Link>
                        </NavItem>
                        <NavItem id="home" style={{ width: "100%" }}>
                            <Link to="/" style={{ fontSize: "2em", color: "aqua", width: "100%", textDecoration: "none" }}><FaHome /></Link>
                        </NavItem>
                        <NavItem id="contact" style={{ width: "100%" }}>
                            <Link to="/contact" style={{ fontSize: "2em", color: "aqua", width: "100%", textDecoration: "none" }}>Contact <FaPen /></Link>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
            <div id="target" style={{
                fontFamily: "calibri",
                fontSize: "4em",
                textAlign: "center",
                padding: "0.5em",
                color: "#FF1493",
                animation: "slideRight 2s ease-in-out"
            }}>
                Christina Reanna Knapp
            </div>
            <div id="desc" style={{
                fontFamily: "calibri",
                textAlign: "center",
                fontSize: "3em",
                color: "white",
                animation: "slideIn 2s ease-in-out"
            }}>
                Product Engineering Associate at Accenture.
            </div>
        </>
    )
};

export default Navbar;