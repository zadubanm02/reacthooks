import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">Explr.</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link>
          <Link to="/">Home</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/prispevky">Prispevky</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/blog">Blog</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="uzitocne">Uzitocne</Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
