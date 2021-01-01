import React from "react";

function Node() {
  return (
    <div className="column">
      <br /><br /><br />
        <a href="https://drive.google.com/file/d/1fXtRFc8gkI2u-qZqqKyhHd6V4E-nQUKa/view" target="_blank" rel="noreferrer">
          <img src={require ("../assets/thumbnails/node/READMEGEN thumbnail.png")} alt="README GENERATOR" />
        </a>
        <a href="https://github.com/MrBusiness87/note-taker/blob/master/README.md" alt="NOTE TAKER">
          <img src={require ("../assets/thumbnails/node/NOTE thumbnail.png")} alt="NOTE-TAKER" />
        </a>
        <p className="ball"><br /><br /><br />
        <h2 className="title">NODE<br />PAGE</h2>
        </p>
        <a href="https://github.com/MrBusiness87/Template-Engine/blob/master/README.md" target="_blank" rel="noreferrer">
          <img src={require ("../assets/thumbnails/node/TEMPLATE thumbnail.png")} alt="TEMPLATE-ENGINE" />
        </a>
        <a href="assets/thumbnails/SQL_Employee_Tracker_Aug 8, 2020 10_47 PM.webm" target="_blank" rel="noreferrer">
          <img src={require ("../assets/thumbnails/node/SQL_Employee_Tracker_GIF.gif")} alt="EMPLOYEE TRACKER" />
        </a>
    </div>
  );
}

export default Node;
