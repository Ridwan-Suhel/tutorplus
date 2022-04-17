import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <header>
      <Navbar expand="lg" className="py-4 my-2">
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
              {user ? (
                <CustomLink to="/login" onClick={handleSignOut}>
                  Logout
                </CustomLink>
              ) : (
                <CustomLink to="/login">Login</CustomLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
