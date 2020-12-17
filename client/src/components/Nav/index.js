import React from 'react';
import minimal from '../../assets/minimal-logo.png';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavBar = () => {

    return (
        <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="/">
                <image src={minimal} alt="E.Y. logo"></image>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    <Nav.Link href="#resume">Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    )
}

export default NavBar;