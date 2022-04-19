import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import '../estilos.css'
import cartWitget from "./cartWitget";
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <div>
           <Navbar bg="light" expand="lg">
            <NavLink to="/">
                <Container>
                        <Navbar.Brand href="#home">
                        <img
                            src={cartWitget.img1}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                        </Navbar.Brand>
                    </Container>
            </NavLink>
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to="categoria/grass">Pokemon de grass</NavLink>
                    <NavLink to="categoria/fire">Pokemon de fire</NavLink>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default NavBar