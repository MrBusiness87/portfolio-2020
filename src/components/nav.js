import React from "react";

import home from "./assets/links/home.png";
import about from "./assets/links/about.png";
import portfolio from "./assets/links/portfolio.png";
import node from "./assets/links/nodejs.png";

export const PAGE_NAMES = {
  HOME: "Home",
  ABOUT: "About",
  PORTFOLIO: "Portfolio",
  NODE: "Node",
  CONTACT: "Contact",
}

const navImg = {
  margin:"4px",
  width:"50px",
}

function NavTabs(props) {
  return (
    <p className="navbar">
      <div className="links">
        <a href="#home" onClick={() => props.handlePageChange(PAGE_NAMES.HOME)} title="HOME" className="nav-link">
        <img src={home} style={navImg} alt="HOME" />
        </a>
        <a href="#about" onClick={() => props.handlePageChange(PAGE_NAMES.ABOUT)} title="ABOUT" className="nav-link">
        <img src={about} style={navImg} alt="ABOUT" />
        </a>
        <a href="#portfolio" onClick={() => props.handlePageChange(PAGE_NAMES.PORTFOLIO)} title="PORTFOLIO" className="nav-link">
        <img src={portfolio} style={navImg} alt="PORTFOLIO" />
        </a>
        <a href="#node" onClick={() => props.handlePageChange(PAGE_NAMES.NODE)} title="NODE" className="nav-link">
        <img src={node} style={navImg} alt="NODE" />
        </a>
      </div>
    </p>
  );
}

export default NavTabs;
