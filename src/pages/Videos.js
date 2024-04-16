import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import React from "react";

export default function Home() {
  return (
    <div className="background">
      <Navbar
        className="header"
        collapseOnSelect
        expand="lg"
        bg="transparent"
        variant="dark"
      >
        <Navbar.Brand href="#/">Abyon Ausar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#/">Home</Nav.Link>
            <Nav.Link href="#Know">Get To Know Abyon</Nav.Link>
            <NavDropdown title="Where to Find Me" id="collasible-nav-dropdown">
              <NavDropdown.Item
                target="_blank"
                href="https://www.imdb.com/name/nm11718272/"
              >
                IMDB
              </NavDropdown.Item>
              <NavDropdown.Item
                target="_blank"
                href="https://www.instagram.com/oswiftt/"
              >
                Instagram
              </NavDropdown.Item>
              <NavDropdown.Item
                target="_blank"
                href="https://www.facebook.com/oSwiftt/"
              >
                Facebook
              </NavDropdown.Item>
              <NavDropdown.Item
                target="_blank"
                href="https://www.youtube.com/user/itcost2beaboss"
              >
                Youtube
              </NavDropdown.Item>
              <NavDropdown.Item
                target="_blank"
                href="https://www.linkedin.com/in/abyonmcinnis/"
              >
                LinkedIn
              </NavDropdown.Item>
              <NavDropdown.Item
                target="_blank"
                href="https://resumes.actorsaccess.com/abyonausar"
              >
                Actors Access
              </NavDropdown.Item>
              <NavDropdown.Item
                target="_blank"
                href="https://www.acclaimtalent.com/profiles/abyon-ausar/"
              >
                Acclaim Talent
              </NavDropdown.Item>
              <NavDropdown.Item
                target="_blank"
                href="https://www.slammmanagement.com/talent/abyon-mcinnis-64862"
              >
                Slamm Management
              </NavDropdown.Item>
              <NavDropdown.Item
                target="_blank"
                href="http://www.wallflowermanagement.com/boy_portfolio.php?id=169"
              >
                Wallflower Management
              </NavDropdown.Item>
              <NavDropdown.Item
                target="_blank"
                href="http://www.anthm.agency/men/main/507-abyon-m/"
              >
                ANTHM NY
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Modeling">Modeling</Nav.Link>
            <NavDropdown title="Resume" id="collasible-nav-dropdown">
              <NavDropdown.Item
                target="_blank"
                href="https://docs.google.com/document/d/1R3vjehY55V9Kma0rHOP_HlB2u69No3oDtBN66UQ9VdA/edit"
              >
                Resume
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Published">Features</Nav.Link>
            {/* <Nav.Link href="#Videos">Videos</Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link href="mailto:abyon.mcinnis@yahoo.com">Email</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="content-area">
        <div className="mt-3">
          <iframe
            src="https://www.youtube.com/embed/3Bokskx6qT0"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="mt-3">
          <iframe
            src="https://www.youtube.com/embed/sDK6onFjQm8"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="mt-3">
          <iframe
            src="https://www.youtube.com/embed/BYlwpB0VTsY"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="mt-3">
          <iframe
            src="https://www.youtube.com/embed/qIi8_DMqfpU"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="mt-3">
          <iframe
            src="https://www.youtube.com/embed/_YaJpkEX4FU"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="mt-3">
          <iframe
            src="https://www.youtube.com/embed/JaZACzvxQxU"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="mt-3 mb-3">
          <iframe
            src="https://www.youtube.com/embed/0EAvO4hLVow"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
        <Navbar.Brand href="#/">A</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#/">Home</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="mailto:abyon.mcinnis@yahoo.com">Email</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
