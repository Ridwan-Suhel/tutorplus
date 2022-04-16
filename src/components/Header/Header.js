import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <span>TUTOR</span>
            <span>PLUS</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <CustomLink to="/">Home</CustomLink>
              <CustomLink to="/about">About</CustomLink>
              <CustomLink to="/blog">Blog</CustomLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
