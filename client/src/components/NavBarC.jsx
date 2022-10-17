import React from "react";
import NavBar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import logo from '../assets/img/logo.svg'

const NavBarC = () =>{
    return(
        <Router>
            <NavBar>
                <Container className="container-navbar">
                    <NavBar.Brand >
                        <img className="navbar-logo" src={logo} alt=""/>
                    </NavBar.Brand>
                    <NavBar.Collapse>
                        <Nav className="navbar-links">
                            <Nav.Link href="#Features">Features</Nav.Link>
                            <Nav.Link href="#Pricing">Pricing</Nav.Link>
                            <Nav.Link href="#Resources">Resources</Nav.Link>
                        </Nav>
                        <HashLink to='#connect-Login'>
                                <button className="btn-login"><span>Login</span></button>
                        </HashLink>
                        <HashLink to='#connect-SignUp'>
                                <button className="btn-singUp"><span>Sing Up</span></button>
                        </HashLink>
                    </NavBar.Collapse>
                </Container>
            </NavBar>
        </Router>
    )

}

export default NavBarC;