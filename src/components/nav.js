import React from "react";

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

const homeImg = {
  url: "./assets/links/home.png",
}

function NavTabs(props) {
  return (
    <p class="navbar">
      <div class="links">
        <a href="#home" onClick={() => props.handlePageChange(PAGE_NAMES.HOME)} title="HOME" className="nav-link">
        <img src={homeImg} style={navImg} />
        </a>
        <a href="#about" onClick={() => props.handlePageChange(PAGE_NAMES.ABOUT)} title="ABOUT" className="nav-link">
        <img src={require ("./assets/links/about.png")} style={navImg} />
        </a>
        <a href="#portfolio" onClick={() => props.handlePageChange(PAGE_NAMES.PORTFOLIO)} title="PORTFOLIO" className="nav-link">
        <img src={require ("./assets/links/portfolio.png")} style={navImg} />
        </a>
        <a href="#node" onClick={() => props.handlePageChange(PAGE_NAMES.NODE)} title="NODE" className="nav-link">
        <img src={require ("./assets/links/nodejs.png")} style={navImg} />
        </a>
      </div>
    </p>
  );
}

export default NavTabs;
