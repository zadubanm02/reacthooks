import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">Explr.</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Prispevky</Nav.Link>
        <Nav.Link href="#pricing">Blog</Nav.Link>
        <Nav.Link href="#pricing">Uzitocne</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
