import React from 'react';
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
            <NavLink to="/" >
           {/* <img src={logo} alt="HTML5 Icon" width="130" height="90"></img> */}
           <Bars />
            </NavLink>
            <NavMenu>
                <NavLink to="/" activestyle>
                    Home
                </NavLink>
                <NavLink to="/about" activestyle>
                    About Me
                </NavLink>
                <NavLink to="/services" activestyle>
                    Services
                </NavLink>
                <NavLink to="/projects" activestyle>
                    Projects
                </NavLink>
                <NavLink to="/contact" activestyle>
                    Contact Me
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