// components/layout.tsx
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from 'react-bootstrap/Nav'

export function Layout() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            <NavDropdown title="Articles" id="collasible-nav-dropdown">
              <NavDropdown.Item href="../articles/first_article">Ses Origines</NavDropdown.Item>
              <NavDropdown.Item href="../articles/second_article">Pouvoirs</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="../articles/divers">Divers</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}