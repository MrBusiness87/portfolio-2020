import React from "react";

import READMEGEN from "../assets/thumbnails/node/READMEGEN thumbnail.png";
import NOTE from "../assets/thumbnails/node/NOTE thumbnail.png";
import TEMPLATE from "../assets/thumbnails/node/TEMPLATE thumbnail.png";
import SQLTRACKER from "../assets/thumbnails/node/mysql.jpg";

function Node() {
  return (
    <div className="column">
      <br /><br /><br />
        <a href="https://drive.google.com/file/d/1fXtRFc8gkI2u-qZqqKyhHd6V4E-nQUKa/view" target="_blank" rel="noreferrer">
          <img src={READMEGEN} alt="README GENERATOR" />
        </a>
        <a href="https://github.com/MrBusiness87/note-taker/blob/master/README.md" alt="NOTE TAKER">
          <img src={NOTE} alt="NOTE-TAKER" />
        </a>
        <p className="ball"><br /><br /><br />
        <h2 className="title">NODE<br />PAGE</h2>
        </p>
        <a href="https://github.com/MrBusiness87/Template-Engine/blob/master/README.md" target="_blank" rel="noreferrer">
          <img src={TEMPLATE} alt="TEMPLATE-ENGINE" />
        </a>
        <a href="https://drive.google.com/file/d/1AxPLo9gAZDjIqjkD-EtLOHyISK4ZLvlk/view?usp=sharing" target="_blank" rel="noreferrer">
          <img src={SQLTRACKER} alt="EMPLOYEE TRACKER" />
        </a>
    </div>
  );
}

export default Node;
