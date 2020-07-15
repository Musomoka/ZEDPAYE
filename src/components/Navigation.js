import React from 'react'
 import {Navbar, Nav } from 'react-bootstrap';
 import {Link} from 'react-router-dom';
export default function Navigation() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand ><Link to="/"></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav className="nav-link"><Link  to="/"  >Home</Link></Nav>
                    <Nav className="nav-link"><Link to="/PAYE" >Tax Calc</Link></Nav>
                    <Nav className="nav-link"><Link to="/About" >About</Link></Nav>
                    <Nav className="nav-link"><Link to="/Contact" >Contact</Link></Nav>        
                </Nav>
            
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
