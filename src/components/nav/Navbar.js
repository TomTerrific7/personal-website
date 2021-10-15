import React from 'react';
import logo from './newLogo.png'
import {Link} from 'react-router-dom';
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements"

const Navbar = () => {
    return (
        <>
        
      <Nav>
      <NavLogo to="/">
      <img src={logo} width="390" height="230" class="homelogo"></img>
            </NavLogo>
           <Bars />
            <NavMenu>
                <NavLink to="/" activestyle>
                    Home
                </NavLink>
                <NavLink to="/about" activestyle>
                    About
                </NavLink>
                <NavLink to="/services" activestyle>
                    Services
                </NavLink>
                <NavLink to="/projects" activestyle>
                    Projects
                </NavLink>
                <NavLink to="/contact" activestyle>
                    Contact
                </NavLink>
                <NavBtn>
                    <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>                
                </NavBtn>
            </NavMenu>
        </Nav>
        </>
        
    )
};

export default Navbar;