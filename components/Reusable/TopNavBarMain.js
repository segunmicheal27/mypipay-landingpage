import ls from "@/styles/Reusable/TopNavBarMain.module.css";
// import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const TopNavBarMain = () => {
  const imgFaviconSrc = require('../../public/images/my_pipay_favicon.png?resize&size=100');
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgFaviconSrc.src}
              alt="Logo"
              height={30}
              width={45}
              className="me-1 align-top"
            />
          <h3 className="fw-bolder mb-0 d-inline pb-1">
            My<span className={ls.header_highlighter}>Pi</span>Pay
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Link href="/" passHref>
              <Nav.Link className={`${ls.nav_menu_link_dark}`}>Home</Nav.Link>
            </Link>
            <Link href="/about_us" passHref>
              <Nav.Link className={`${ls.nav_menu_link_dark}`}>About</Nav.Link>
            </Link>
            <Link href="/contact_us" passHref>
              <Nav.Link
                href="#contact-us"
                className={`${ls.nav_menu_link_dark}`}
              >
                Contact
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavBarMain;
