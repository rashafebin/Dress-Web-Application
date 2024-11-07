import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaHeart } from 'react-icons/fa';

export default function Navigationbar() {
  const [role, setRole] = useState("");

  useEffect(() => {
    setRole(localStorage.getItem('role'));
  }, []);

  console.log(role);

  return (
    <>
      {
        role === 'admin' ? (
          <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">DNK</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="/viewproduct">Product</Nav.Link>
                  <Nav.Link href="#features">Shop</Nav.Link>
                  <Nav.Link href="#pricing">User</Nav.Link>
                  <Nav.Link href="#pricing">About</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="#wishlist" className="d-flex align-items-center">
                    <FaHeart />
                  </Nav.Link>
                  <Nav.Link href="#deets">Logout</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        ) : role === 'shop' ? (
          <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">DNK</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/home">Home</Nav.Link>
                  <NavDropdown title="Manage Product" id="collapsible-nav-dropdown">
                    <NavDropdown.Item href="/addproduct">Add Product</NavDropdown.Item>
                    <NavDropdown.Item href="/viewproduct">View Product</NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                  <Nav.Link href="/shopprofile">Profile</Nav.Link>
                  <Nav.Link href="#pricing">Order</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="#wishlist" className="d-flex align-items-center">
                    <FaHeart /> Wishlist
                  </Nav.Link>
                  <Nav.Link href="#deets">Logout</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        ) : role === 'user' ? (
          <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">DNK</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#features">Home</Nav.Link>
                  <Nav.Link href='/viewproduct'>Product</Nav.Link>
                  <Nav.Link href="/cartdress">Cart</Nav.Link>
                  <Nav.Link href="/viewuserprofile">Profile</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="/wishlist" className="d-flex align-items-center">
                    <FaHeart /> 
                  </Nav.Link>
                  <Nav.Link href="/home">Logout</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        ) : (
          <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">DNK</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#features">Home</Nav.Link>
                  <Nav.Link href="#features">Contact Us</Nav.Link>
                </Nav>
                <Nav>
                  <NavDropdown title="Registration" id="collapsible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">User Registration</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Shop Registration</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#features">Login</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )
      }
    </>
  );
}
