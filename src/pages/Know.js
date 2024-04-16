import Know1 from "../assets/know/Amazon.PNG";
import Know2 from "../assets/know/Dynamax.PNG";
import Know3 from "../assets/know/Fogo.PNG";
import Know5 from "../assets/headshots/headshot5.jpg";
import KnowPics from "../components/carousels/knowPics";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import React from "react";

export default function KnowPage() {
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
            <Nav.Link className="staticLink" href="#Know">
              Get To Know Abyon
            </Nav.Link>
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
            <Nav.Link href="#Acting">Acting</Nav.Link>
            <Nav.Link href="#Modeling">Modeling</Nav.Link>
            <Nav.Link href="#Voiceover">Voiceover</Nav.Link>
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
      <div className="content-area background">
        <br />
        <div className="textColorWhite ml-5 mr-5 ">
          Abyon Ausar, a model and actor from Jacksonville, FL. is a
          multifaceted experiential marketing specialist. His focus is on
          opportunities in brand management, entertainment, social media
          marketing, and hosting.
          <div />
          <br />
          <div className="mb-5">
            Abyon signed with his first agency in the summer of 2018, and
            started working professionally in 2019. Since entering the business
            he's been involved in a variety of commercials, fashion shows,
            social media campaigns, influencer campaigns, print ads, skits, and
            independent films. He currently represented for acting and modeling
            throughout TX, GA, and NY.
          </div>
        </div>

        <div>
          <img className="w-50" src={Know5} alt="slide" />
          <br />
          <img className="w-50 mt-3" src={Know3} alt="slide" />
        </div>
      </div>
      <br />
      <div className="textColorWhite ml-5 mr-5 mb-5">
        Abyon is big on character, connection, and experience. His legacy will
        be in the people he leaves behind. It’s not about what he leaves for
        himself, it’s what he leaves for others. Abyon wants to be remembered
        for the positive impact he has on those that are close to him. Abyon
        will be remembered for using his resilience and resourcefulness to defy
        the odds to better himself and those around him.
      </div>
      <div className="mx-3">
        <img className="w-50" src={Know2} alt="slide" />
        <div className="mt-4"></div>
        <img className="w-50" src={Know1} alt="slide" />
      </div>
      <div className="extra-content"></div>
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
