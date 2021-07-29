import React from "react";
import { Nav } from "react-bootstrap";
import ls from "../styles/TopNavBarAddon.module.css";

const TopNavBarAddon = () => {
  return (
    <Nav className={`${ls.addon} justify-content-end py-2`}>
      <Nav.Item>
        <Nav.Link href="#login" className={`${ls.nav_menu_link_light}`}>
          Login
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#register" className={`${ls.nav_menu_link_light}`}>
          Register
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default TopNavBarAddon;
