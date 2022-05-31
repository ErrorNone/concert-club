import React from "react";
import { Button, Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { Link } from "react-router-dom";

const NaviBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <NavbarBrand><Link style={{color: 'white', textDecoration: 'none'}} to="/home"><h2>Concert CLUB</h2></Link> </NavbarBrand>
          <NavbarToggle aria-controls="responsive-navbar-nav" />
          <NavbarCollapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Button variant="light" style={{'marginBottom': '0.5rem'}}
                className="me-md-2 mb-md-0 rounded-0"> 
                Версия для слабовидящих
              </Button>
              <Button variant="light" className="rounded-0">
                Мой профиль
              </Button>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NaviBar;
