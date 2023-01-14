import React from "react";
import { Link } from "react-router-dom";
// import { FaHome } from "react-icons/fa";
import styled from 'styled-components';
import { Nav, NavbarContainer, NavMenu, NavItem } from "./NavbarElements";

const StyledLink = styled(Link)`
color: grey;
justify-self: flex-start;
cursor: pointer;
font-size: 2rem;
display: flex;
justify-content: center;
align-items: center;
font-weight: bold;
text-decoration: none;
`

const Navbar = () => {
    
    return (
        // come back to make styling global
        <>
            <Nav>
                <NavbarContainer>
                    <NavMenu>
                        <NavItem id="Poetry">
                            <StyledLink to="/poetry">Poetry</StyledLink>
                        </NavItem>
                        <NavItem id="home">
                            <StyledLink to="/">Home</StyledLink>
                        </NavItem>
                        <NavItem id="contact">
                            <StyledLink to="/contact">Contact</StyledLink>
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