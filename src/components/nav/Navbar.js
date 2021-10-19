import React from 'react';
import logo from './newestLogo.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@material-ui/core/IconButton';

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
        
      <Nav >
      <Bars />
            <NavMenu >
      <NavLink className="logo" to="/" activeStyle>
      <img src={logo}  width="320" height="100" ></img>
      </NavLink>
            
    
           
                <NavLink to="/" activestyle>
                    Home
                </NavLink>
                
                <NavLink to="/about" activestyle>
                    About
                </NavLink>
                
                
                <NavLink to="/projects" activestyle>
                    Projects
                </NavLink>
                
                <NavLink to="/contact" activestyle>
                    Contact
                </NavLink>
               
                   
            </NavMenu>
            
            <div class="icons">
            <IconButton aria-label="instagram.com" onClick={() => window.open('https://www.instagram.com/dtomp7/')}>
                     <InstagramIcon fontSize="large"/>
                    </IconButton>                
                    
                    <IconButton aria-label="twitter.com" onClick={() => window.open('https://twitter.com/TomTerrificLOL')}>
                     <TwitterIcon fontSize="large"/>
                    </IconButton>                 
                    
                    <IconButton aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/dilantompkins/')}>
                     <LinkedInIcon fontSize="large" />
                    </IconButton>                
                    
                    <IconButton aria-label="github.com" onClick={() => window.open('https://github.com/TomTerrific7')}>
                     <GitHubIcon fontSize="large"/>
                    </IconButton> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
        </Nav>
        </>
        
    )
};

export default Navbar;