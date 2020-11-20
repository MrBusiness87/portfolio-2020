import React, { Component } from "react";
import Nav, { PAGE_NAMES } from "./nav";
import Home from "./pages/home";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Node from "./pages/node";
import Footer from "./footer";

class PortfolioArea extends Component {
  state = {
    currentPage: PAGE_NAMES.HOME
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  
  renderTabs = () => {
    switch (this.state.currentPage) {
      case PAGE_NAMES.HOME:
        return <Home />;
      case PAGE_NAMES.ABOUT:
        return <About />;
      case PAGE_NAMES.PORTFOLIO:
        return <Portfolio />;
        case PAGE_NAMES.NODE:
          return <Node />;
      default:
        return <Home />
    }
  }

  render() {
    return (
      <div>
        <Nav
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderTabs()}
        <br />
        <Footer />
      </div>
    );
  }
}

export default PortfolioArea;