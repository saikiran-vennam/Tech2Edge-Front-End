import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

const NavBar = () => {
  const expand = window.innerWidth > 600 ? "sm" : "xxl";
  return (
    <>
      <Navbar fixed="top" key={expand} expand={expand} className="mb-3">
        <Container fluid>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKOn83DIJEhDJcVpL15QtCLsy7R4LxkyUZ-A&usqp=CAU"
            className="logo"
            alt="logo"
          />
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKOn83DIJEhDJcVpL15QtCLsy7R4LxkyUZ-A&usqp=CAU"
                  className="logo"
                  alt="logo"
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-grow-1 custom-nav">
                <Nav variant="tabs" className="ul" defaultActiveKey="/">
                  <Nav.Item>
                    <Nav.Link className="nav-item">Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="nav-item">Movies</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="nav-item">Rankings</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="nav-item">Ratings</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="nav-item">Rewiews</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
