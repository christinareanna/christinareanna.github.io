import React from "react";
import { Link } from "react-router-dom";
// import { FaHome } from "react-icons/fa";
import styled from 'styled-components';
import { Nav, NavbarContainer, NavMenu, NavItem } from "./NavbarElements";


const StyledLink = styled(Link)`
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
color:rgb(0, 0, 0);
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
`

const Navbar = () => {

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavMenu>
                        <NavItem id="home">
                            <StyledLink to="/"><span className="nav-link">Home</span></StyledLink>
                        </NavItem>
                        <NavItem id="portfolio">
                            <StyledLink to="/portfolio"><span className="nav-link">Portfolio</span></StyledLink>
                        </NavItem>
                        <NavItem id="projects">
                            <StyledLink to="/projects"><span className="nav-link">Projects</span></StyledLink>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
};

export default Navbar;