import React, {Component, Root, Sidebar, SidebarItem, setState} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Nav, {PAGE_NAMES} from "./nav";
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
      <Router>
        <Root>
          <Sidebar>
            {page ? (
              page.map(page => (
                <SidebarItem key={page.id}>
                  {page.description || "[NONE]"}
                </SidebarItem>
              ))
            ) : (
              <div>
                <h1>LOADING PAGE ...</h1>
                <br />
                <h1> PLEASE BE PATIENT</h1>
              </div>
            )}
          </Sidebar>
        </Root>
        <Nav />
        <div className="portfolio">
          <h1>MAIN PORTFOLIO PAGE</h1>
        </div>
        <Main />
      </Router>
    )
  }
}

export default PortfolioArea;