import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";



const Header = () => {
  return (
    <Navbar variant="light" bg="dark" expand="lg">
      <Container fluid>
        <NavLink className="navbar-brand" to="/">
          Quiz App
        </NavLink>
        <Navbar aria-controls="navbar-dark-example" />
        <Navbar id="navbar-dark-example">
          <Nav>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/users">
              Users
            </NavLink>
            <NavLink className="nav-link" to="/admin">
              Admin
            </NavLink>
          </Nav>
          <Nav>
            <button className="button button-login">Log In</button>
            <button className="button button-signup">Sign Up</button>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Setting"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
};

export default Header;
