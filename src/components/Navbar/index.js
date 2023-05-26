import React from "react";
import { Link } from "react-router-dom";
// import { FaHome } from "react-icons/fa";
import styled from 'styled-components';
import { Nav, NavbarContainer, NavMenu, NavItem } from "./NavbarElements";


const StyledLink = styled(Link)`
justify-self: flex-start;
cursor: pointer;
font-size: 2rem;
color: #957E84;
display: flex;
justify-content: center;
align-items: center;
font-weight: bold;
text-decoration: none;
`

const Navbar = () => {

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavMenu>
                        <NavItem id="Poetry">
                            <StyledLink to="/poetry"><span className="nav-link">Poetry</span></StyledLink>
                        </NavItem>
                        <NavItem id="home">
                            <StyledLink to="/"><span className="nav-link">Home</span></StyledLink>
                        </NavItem>
                        <NavItem id="contact">
                            <StyledLink to="/contact"><span className="nav-link">Contact</span></StyledLink>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
};

export default Navbar;