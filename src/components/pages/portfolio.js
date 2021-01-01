import React from "react";

const floatL = {
  paddingRight: "20%",
}
const floatR = {
  paddingLeft: "20%",
}

function Portfolio() {
  return (
    <div className="column">
      <br /><br /><br />
      <a href="https://www.linkedin.com/in/borjanbartula" target="_blank" rel="noreferrer">
        <img src={require ("../assets/thumbnails/LINKEDIN thumbnail.jpg")} alt="LINKEDIN" />
      </a>
      <a href="http://www.google.com/" target="_blank" rel="noreferrer">
        <img src={require ("../assets/thumbnails/Google thumbnail.jpg")}
          alt="GOOGLE" />
      </a>
      <br />
      <a href="https://mrbusiness87.github.io/QUIZ-GAME/" target="_blank" rel="noreferrer" style={floatL} >
        <img src={require ("../assets/thumbnails/QUIZ thumbnail.png")} alt="QUIZ"/>
      </a>
      <a href="https://mrbusiness87.github.io/Weather-Forecaster/" target="_blank" rel="noreferrer" style={floatR}>
        <img src={require ("../assets/thumbnails/WEATHER thumbnail.png")} alt="WEATHER" />
      </a>
      <p className="ball"><br /><br /><br />
      <h2 className="title">PORTFOLIO<br />PAGE</h2>
      </p>
      <br />
      <a href="https://mrbusiness87.github.io/Work-Day-Scheduler/" target="_blank" rel="noreferrer" style={floatL}>
        <img src={require ("../assets/thumbnails/WORKDAY thumbnail.png")} alt="SCHEDULER" />
      </a>
      <a href="https://scratch.mit.edu/projects/389542029" target="_blank" rel="noreferrer" style={floatR}>
        <img src={require ("../assets/thumbnails/Scratch thumbnail.jpg")} alt="SCRATCH" />
      </a>
      <br />
      <a href="https://mrbusiness87.github.io/Finder-Project1/" target="_blank" rel="noreferrer">
        <img src={require ("../assets/thumbnails/SF-thumbnail.jpg")} alt="SPORTS APP" />
      </a>
      <a href="https://your-kitchen.herokuapp.com/" target="_blank" rel="noreferrer">
        <img src={require ("../assets/thumbnails/Project2.png")} alt="YOUR KITCHEN APP" />
      </a>
      <br /><br /><br />
    </div>
  );
}

export default Portfolio;