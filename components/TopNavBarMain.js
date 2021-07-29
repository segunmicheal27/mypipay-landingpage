import Image from "next/image";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import ls from "../styles/TopNavBarMain.module.css";

const TopNavBarMain = () => {
  return (
    <Navbar
      className={ls.bg_color}
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container fluid className="px-3">
        <Navbar.Brand className="py-0" href="#home">
          <Image src="/vercel.svg" alt="Logo" height={30} width={150} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={`${ls.nav_menu_link_dark}`}>
              Home
            </Nav.Link>
            <Nav.Link href="#about" className={`${ls.nav_menu_link_dark}`}>
              About
            </Nav.Link>
            <Nav.Link href="#contact-us" className={`${ls.nav_menu_link_dark}`}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavBarMain;
