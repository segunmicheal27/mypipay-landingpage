import React from "react";
import { Nav } from "react-bootstrap";
import ls from "../styles/TopNavBarAddon.module.css";

const TopNavBarAddon = () => {
  return (
    <Nav className={`${ls.addon} justify-content-center py-2 px-3`}>
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
