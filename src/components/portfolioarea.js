import React, { Component, setState } from "react";
import Nav, { PAGE_NAMES } from "./nav";
import Main from "./pages/main";

class PortfolioArea extends Component {
  state={
    current: PAGE_NAMES.MAIN
  }  
  componentDidMount(page) {
    this.setState({current:page})
  }

  render() {
    const {current:page} = this.state
    return (
      <div className="root">
        <div className="sidebar">
          {page ? (
            page.map(page => (
              <div className="sidebaritem" key={page.id}>
                {page.description || "[NONE]"}
              </div>
            ))
          ) : (
            <div>LOADING PAGE ... PLEASE BE PATIENT</div>
          )}
        </div>
          <Nav />
          <div className="portfolio">
            <h1>MAIN PORTFOLIO PAGE</h1>
          </div>
          <Main />
      </div>
    )
  }
}

export default PortfolioArea;