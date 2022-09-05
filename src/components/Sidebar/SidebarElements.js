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
  background-color: black;
  `;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
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
`;


export const SidebarWrapper = styled.div`
  background-color: black;
  transition: opacity 0.75s, visibility 0.75s, height 0.75s;
`
export const SidebarItem = styled.li`
  margin: 0;
  padding: 0;
  width: 100%;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    padding: 14rem 0;



    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }

    @media screen and (min-width: 768px) {
      padding: 14rem 0;
    }
`

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