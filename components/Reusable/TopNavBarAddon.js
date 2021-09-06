import ls from "@/styles/Reusable/TopNavBarAddon.module.css";
import React from "react";
import { Nav } from "react-bootstrap";

const TopNavBarAddon = ({ darkMode = false }) => {
  return (
    <Nav className={`${darkMode && ls.addon} justify-content-end p-3`}>
      <Nav.Item>
        <Nav.Link
            href="/to_other_pi_wallet"
          className={`${ls.nav_menu_link_light} rounded-pill py-1 px-3 me-5`}>
          MAKE TRANSFER
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default TopNavBarAddon;
