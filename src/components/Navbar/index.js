import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <Navbar className="navbar">
      <Container>
        <div className="header-logo">
          <a href="/home"></a>
        </div>
        <Nav className="ms-auto px-5">
          <Nav.Link className="nav-links" href="/home">Home</Nav.Link>
          <Nav.Link className="nav-links" href="/about">About</Nav.Link>
          <Nav.Link className="nav-links" href="/projects">Projects</Nav.Link>
          <Nav.Link className="nav-links" href="/resume">Resume</Nav.Link>
        </Nav>
        <div className="contact-me">
        <a href="/contact" className="header-right-link btn btn-filled">Contact Me</a>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navigation;
