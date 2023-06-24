import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown, Form, Button } from 'react-bootstrap';
import '../StyleSheet/Navbar.css'; // Import Navbar styles


export default function NaviBar(props) {
  return (
    //#97114C

    <Navbar className="navbar" fixed="top" bg="dark" expand="lg" variant="dark">
    <Container fluid>
      <Navbar.Brand  style={{ color: "#FFFFFF"}} href="#"><img src="Images/logo192.png" style={{ height: "50px", marginRight: "20px"}} />WINE C.</Navbar.Brand>
      <Navbar.Toggle aria-controls="" />
      <Navbar.Collapse id=""> 
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          
        >
          <Nav.Link  href="#action1">Home</Nav.Link>
          <Nav.Link  href="#action2">Sell</Nav.Link>
          <Nav.Link  href="#action2">Profile</Nav.Link>
          <NavDropdown  title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Signin
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Signup
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        {/* <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Navbar.Collapse>
    </Container>
  </Navbar>



  );
}


