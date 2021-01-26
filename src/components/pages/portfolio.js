import React from "react";

import LINKEDIN from "../assets/thumbnails/LINKEDIN thumbnail.jpg";
import GOOGLE from "../assets/thumbnails/Google thumbnail.jpg";
import QUIZ from "../assets/thumbnails/QUIZ thumbnail.png";
import WEATHER from "../assets/thumbnails/WEATHER thumbnail.png";
import SCHEDULER from "../assets/thumbnails/WORKDAY thumbnail.png";
import SCRATCH from "../assets/thumbnails/Scratch thumbnail.jpg";
import SPORTS from "../assets/thumbnails/SF-thumbnail.jpg";
import KITCHEN from "../assets/thumbnails/Project2.png";

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
        <img src={LINKEDIN} alt="LINKEDIN" />
      </a>
      <a href="http://www.google.com/" target="_blank" rel="noreferrer">
        <img src={GOOGLE}
          alt="GOOGLE" />
      </a>
      <br />
      <a href="https://mrbusiness87.github.io/QUIZ-GAME/" target="_blank" rel="noreferrer" style={floatL} >
        <img src={QUIZ} alt="QUIZ"/>
      </a>
      <a href="https://mrbusiness87.github.io/Weather-Forecaster/" target="_blank" rel="noreferrer" style={floatR}>
        <img src={WEATHER} alt="WEATHER" />
      </a>
      <p className="ball"><br /><br /><br />
      <h2 className="title">PORTFOLIO<br />PAGE</h2>
      </p>
      <br />
      <a href="https://mrbusiness87.github.io/Work-Day-Scheduler/" target="_blank" rel="noreferrer" style={floatL}>
        <img src={SCHEDULER} alt="SCHEDULER" />
      </a>
      <a href="https://scratch.mit.edu/projects/389542029" target="_blank" rel="noreferrer" style={floatR}>
        <img src={SCRATCH} alt="SCRATCH" />
      </a>
      <br />
      <a href="https://mrbusiness87.github.io/Finder-Project1/" target="_blank" rel="noreferrer">
        <img src={SPORTS} alt="SPORTS APP" />
      </a>
      <a href="https://your-kitchen.herokuapp.com/" target="_blank" rel="noreferrer">
        <img src={KITCHEN} alt="YOUR KITCHEN APP" />
      </a>
      <br /><br /><br />
    </div>
  );
}

export default Portfolio;