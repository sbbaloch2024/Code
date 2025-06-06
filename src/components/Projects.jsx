import React from 'react';
import './Projects.css';
import clairdoc from '../assets/clairdoc.png'
import icsa from "../assets/icsa.png"
import almari from "../assets/1.png"
import crypto from "../assets/crypto.png"
 

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <div className="projects-header">
        <h2><span className="highlight">Featured Projects</span></h2>
        <p className="description">Have coded more than 400 projects over 7 years but the following had most impact</p>
      </div>

      <div className="projects-grid">
        <div className="project-card">
          <img src={clairdoc} alt="Portfolio Design" />
          <div className="project-info">
            <p>  <span style={{ fontWeight: "bold" }}> AI Healthcare App:</span> Winner of NYC Accelerator Program</p>
                <a href="https://www.clairdoc.com" target="_blank" rel="noopener noreferrer">
                <span className="tag pink">Demo</span>
                </a>          </div>
        </div>

        <div className="project-card">
          <img src={icsa} alt="Color System" />
          <div className="project-info">
            <p> <span style={{ fontWeight: "bold" }}>CS Club Portfolio Interface:</span> Used by 500+ CS students</p>
<a href="https://icsa-portfolio-sulemanbaloch2025.vercel.app" target="_blank" rel="noopener noreferrer">
  <span className="tag blue">Demo</span>
</a>
          </div>
        </div>

        <div className="project-card">
          <img src={almari}alt="Onboarding" />
          <div className="project-info">
            <p> <span style={{ fontWeight: "bold" }}>Almari Marketplace App:</span>  Used by 200+ university students</p>
<a href="https://github.com/sbbaloch2024/MarketPlace-App" target="_blank" rel="noopener noreferrer">
  <span className="tag yellow">Demo</span>
</a>
          </div>
        </div>

        <div className="project-card">
          <img src={crypto}alt="Onboarding" />
          <div className="project-info">
            <p><span style={{ fontWeight: "bold" }}>Web3 Blockchain App: </span>Built with Solidity for cryptocurrency</p>
<a href="https://sulemanbalochweb3.vercel.app" target="_blank" rel="noopener noreferrer">
  <span className="tag green">Demo</span>
</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
