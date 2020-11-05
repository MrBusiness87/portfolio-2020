import React, { Component, setState } from "react";
import Nav, { PAGE_NAMES } from "./nav";
import Main from "./pages/main";

class Portfolio extends Component {
  state={
    current: PAGE_NAMES.MAIN
  }  
  componentDidMount() {
    setState({current:page})
  }

  render() {
    const {current:page} = this.state
    return (
      <Root>
        <Sidebar>
          {page ? (
            page.map(page => (
              <SidebarItem key={page.id}>
                {page.description || "[NONE]"}
              </SidebarItem>
            ))
          ) : (
            <div>LOADING PAGE ... PLEASE BE PATIENT</div>
          )}
        </Sidebar>
          <div className="portfolio">
            <h1>MAIN PORTFOLIO PAGE</h1>
          </div>
      </Root>
    )
  }
}

export default Portfolio;
  
// tabs=()=> {
//     switch(state.current) {
//       case PAGE_NAMES.MAIN:
//         return <Main />;
//       default:
//         return <Main />
//     }
//   }