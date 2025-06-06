import React from "react";
import "./WhatIDo.css";
import { HiAcademicCap } from "react-icons/hi2";
import { HiDesktopComputer } from "react-icons/hi";
import { FaBookOpen } from "react-icons/fa";
import IowaLogo from "../assets/iowa.png";


const WhatIDo = () => {
  return (
    <div  id="about" className="whatido-container">
        <p>A little bit about me </p>
      <div className="card-grid">
        <div className="skill-card yellow-card">
          <span className="tool-tag">PhD</span>
          <HiAcademicCap className="skill-icon" />
          <p className="skill-text"> AI/ML PhD @ <br />University of Iowa</p>
        </div>

        <div className="skill-card blue-card">
          <span className="tool-tag">BA</span>
          <HiDesktopComputer className="skill-icon" />
          <p className="skill-text">CS BA @<br />DePauw University</p>
        </div>

        <div className="skill-card pink-card">
          <span className="tool-tag">Research</span>
          <FaBookOpen className="skill-icon" />
          <p className="skill-text">Deep Learning<br />Researcher</p>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
