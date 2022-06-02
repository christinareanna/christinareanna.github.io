// import React from "react";
// import { Outlet, Link } from "react-router-dom"
// import { FaBars, FaBookOpen, FaSearch, FaPen } from "react-icons/fa";
// import {
//   Nav,
//   NavbarContainer,
//   // NavLogo,
//   // MobileIcon,
//   NavMenu,
//   NavItem,
// } from "./NavbarElements";


// const Navbar = ({ toggle }) => {

// // router for pages somewhere somehow idk maybe here lol
//   return (
//     <>
//       <Nav>
//         <NavbarContainer>
//           {/* <NavLogo to="/" onClick={toggle}>Christina Reanna</NavLogo> */}
//           <NavMenu style={{width: "100%", padding: "20px 200px", justifyContent: "center"}}>
//             <NavItem>
//               {/* change to Links*/}
//               {/* <a href="about">About</a> */}
//             <h2 style={{color: "white"}}>About Me <FaBookOpen/></h2>
//             </NavItem>
//             <NavItem>
//               {/* <a href="discover">Discover</a> */}
//             <h2 style={{color: "white"}}>Discover <FaSearch/></h2>
//             </NavItem>
//             <NavItem>
//               {/* <a href="contact">Contact</a> */}
//             <h2 style={{color: "white"}}>Contact <FaPen/></h2>
//             </NavItem>
//           </NavMenu>
//         </NavbarContainer>
//       </Nav>
//     </>
//   );
// };

// export default Navbar;


import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { FaBars, FaHome, FaSearch, FaPen } from "react-icons/fa";
import { Nav, NavbarContainer, NavMenu, NavItem } from "./NavbarElements";


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavMenu style={{ fontFamily: "calibri", margin: 0, width: "100%", maxWidth: "100%", justifyContent: "center" }}>
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
                padding: "0.5em",
                color: "#FF1493",
                animation: "slideRight 2s ease-in-out"
                // backgroundColor: "white",
            }}>
                Christina Reanna Knapp
            </div>
            <div id="desc" style={{
                fontFamily: "calibri",
                fontSize: "2em",
                // padding: "1em",
                color: "white",
                animation: "slideIn 2s ease-in-out"
                // backgroundColor: "white",
            }}>
                Product Engineering Associate at Accenture.
            </div>
        </>
    )
};

export default Navbar;