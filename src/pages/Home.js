import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'


export default function Home() {
    return (
        <div className="background">
             <Navbar className="header" collapseOnSelect expand="lg" bg="transparent" variant="dark">
        <Navbar.Brand href="#home">Abyon Ausar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <NavDropdown title="Resumes" id="collasible-nav-dropdown">
              <NavDropdown.Item target="_blank" href="https://docs.google.com/document/d/1R3vjehY55V9Kma0rHOP_HlB2u69No3oDtBN66UQ9VdA/edit">Actor Resume</NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://drive.google.com/drive/u/0/folders/1VTOSj2tns_3iLfshmJYWYNrPikSC0nIv">Entertainment Resume</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Where to Find Me" id="collasible-nav-dropdown">
              <NavDropdown.Item target="_blank" href="https://www.linkedin.com/in/abyonmcinnis/">LinkedIn</NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.facebook.com/oSwiftt/">Facebook</NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.instagram.com/oswiftt/">Instagram</NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.imdb.com/name/nm11718272/">IMDB</NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.acclaimtalent.com/profiles/abyon-ausar/">Acclaim Talent</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Gallery">Corporate</Nav.Link>
            <Nav.Link href="#VidPage">Fashion</Nav.Link>
            <Nav.Link href="#Published">Fitness Modeling</Nav.Link>
            <Nav.Link href="#Webdev">Headshots</Nav.Link>
            <Nav.Link href="#Webdev">Published Print Content</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="mailto:abyon09@gmail.com">Email</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="content-area">
        Content
      </div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">A</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="mailto:abyon09@gmail.com">Email</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        </div>
    )
}
