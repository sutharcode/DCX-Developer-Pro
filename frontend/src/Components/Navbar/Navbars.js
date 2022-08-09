import React from 'react';
import {Nav , NavLink ,Bars,NavMenu,NavBtn,NavBtnLink} from './NavbarElement';


const Navbar=()=>{
    return(
        <>
        <header>
            <h1 style={{"color": "white", "textAlign":"center"}}><span style={{"color":"cyan"}}> DCX  </span>  Developer  Directory</h1>
        </header>
        <Nav>
    
            <Bars />
            <NavLink to="/home" activeStyle>
                Home
            </NavLink>

            <NavLink to="/about" activeStyle>
                About Us
            </NavLink>

            <NavLink to="/browse" activeStyle>
                Browse Developer
            </NavLink>

            <NavLink to="/register" activeStyle>
                Register As Developer
            </NavLink>

            <NavLink to="/contact" activeStyle>
                Contact Us
            </NavLink>
        </Nav>
        </>
    );
};

export default Navbar;