import React from "react";

import profile from "../assets/profile.jpg";

function Home() {
  return (
    <div>
      <link rel="icon" href="./assets/links/index.png"></link>
      <p>
        <div className="line1">
          WELCOME TO:<br />BORJANS PORTFOLIO<br /><br />
        <img src={profile} className="top" alt="PROFILE" />
        </div>
        <br />
        <div className="line2">
        <br />USE NAVBAR TO NAVIGATE THE PAGE
        </div>
      </p>
    </div>
  );
}

export default Home;
