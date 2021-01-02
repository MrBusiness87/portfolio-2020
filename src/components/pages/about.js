import React from "react";

import profile from "../assets/profile.jpg";
import cats from "../assets/candp.jpg";
import resume from "./RESUME.pdf";

function About() {
  const floatL = {
    float: "left",
  }
  
  return (
    <div>
      <link rel="icon" href="./assets/links/about.png"></link>
    <p className="info">
      <img src={profile} className="infoStyle" alt="profile"></img>
      <p>Hello, thank you for coming to visit my page, hope you enjoy what I have done with the place!<br /><br />
      My name is <span className="lightgreen">Borjan Bartula</span>.<br />
      Pronounced <span
      className="red">Bor</span>-<span className="orange">y&#275;n</span> <span
      className="red">Bar</span>-<span className="lightblue">t&#363;</span>-<span
      className="orange">la</span>.<br /><br />Aspiring to gain as much knowledge as possible. Driven, passionate, resourceful, witty, strategic, honest; just some of the
      words that describe me. Mainly, kind and helpful. I have always enjoyed working with computers, whether it was
      playing games, writing, reading, learning, teaching, manipulating, researching, I have always enjoyed the concept of
      a world connected. Wanting to be a bigger part of that world, I have started taking steps to achieve my newest goal:
      <span className="lightgreen">Coder/Programmer/Developer!</span>
      </p>
      <p>My plan to achieve this
      starts with:<br /><span className="skyblue">Coding Bootcamp</span> at <span
      className="skyblue">University of North Carolina at Chapel Hill</span>.</p>
    </p>
    <p className="achievement">
      <p><span className="palegreen" style={floatL}>LINKS THAT MAY INTEREST YOU:</span></p><br />
      <ul className="palegreen" style={floatL}>
        <li><a href="https://github.com/MrBusiness87" target="_blank" rel="noopener noreferrer">GIT HUB PROFILE</a></li>
        <li><a href="https://www.linkedin.com/in/borjanbartula" target="_blank" rel="noopener noreferrer">LINKEDIN PROFILE</a></li>
        <li>Email: bbartula87@gmail.com</li>
        <li>Phone#: (919) 332-4516</li>
        <li><a href={resume} download>
          CLICK HERE TO<br />DOWNLOAD RESUME
        </a></li>
      </ul>
      <p className="cats"><img src={cats} className="catsStyle" alt="cats" /></p>
    </p>
  </div>
  );
}

export default About;
