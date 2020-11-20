import React from "react";

function Home() {
  return (
    <div>
      <link rel="icon" href="./assets/links/index.png"></link>
      <p>
        <div class="line1">
          WELCOME TO:<br />BORJANS PORTFOLIO<br /><br />
        <img src={require ("../assets/profile.jpg")} class="top" />
        </div>
        <br />
        <div class="line2">
        <br />USE NAVBAR TO NAVIGATE THE PAGE
        </div>
      </p>
    </div>
  );
}

export default Home;
