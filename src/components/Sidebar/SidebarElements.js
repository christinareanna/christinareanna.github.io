import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
// import { Link } from 'react-router-dom';


export const SidebarContainer = styled.aside`
  position: initial;
  z-index: 999;
  width: 100%;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  background-color: beige;
`;

export const CloseIcon = styled(FaTimes)`
  color: black;
  transition: 0.3s;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  color: black;
`;


export const SidebarWrapper = styled.div`
  background-color: beige;
  transition: opacity 0.75s, visibility 0.75s, height 0.75s;
`
export const SidebarItem = styled.li`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  color: black;
  text-decoration: none;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 18vh);
    text-align: center;
    



    @media screen and (max-width: 768px) {
        grid-template-rows: repeat(4, 22vh);
        font-size: 38px;
        justify-content: center;
        padding: 6vh 0;
        margin: 0;
        color: black;
        text-decoration: none;
    }
`

//padding: 14rem 0;
// @media screen and (min-width: 768px) {
//  padding: 14rem 0;
//}

// export const SidebarLink = styled(Link)`
//     font-size: 1.5rem;
//     list-style: none;
//     transition: 0.2s ease-in-out;
//     text-decoration: none;
//     color: #FF1493;
//     margin: 6rem 0;
//     cursor: pointer;

//     &:hover {
//         color: black;
//     }
// `