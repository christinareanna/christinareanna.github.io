// style components
import styled from 'styled-components';

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    top: 0;
    z-index: 10;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 6rem;
background-color: beige;
z-index: 1;
width: 100%;
max-width: 100%;
`



export const MobileIcon = styled.div`
display: none;
@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: black;
}
`

export const NavMenu = styled.ul`
text-decoration: none;
display: flex;
height: 6em;
align-items: center;
list-style: none;
text-align: center;
margin: 0;
padding: 0;
font-family: monospace; 
font-size: 1rem;
background-color: beige;
width: 100%;
max-width: 100%;
justify-content: center;


@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavItem = styled.li`
margin-top: 20px;
text-decoration: none;
width: 100%; 
`