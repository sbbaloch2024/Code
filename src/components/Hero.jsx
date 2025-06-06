import React from "react";
import "./Hero.css";
import Profile from "../assets/profile.png"
import hello from "../assets/hello.png"
import WhatIDo from "./WhatIDo";
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="left-pane">
        
    <div className="intro-column">
  <img src={Profile} alt="Profile" className="profile-pic" />
  <h2 className="section-name">Hi, I am Suleman </h2>
    <p className="intro-text">
         and learning AI makes me happy
        </p>
</div>
      
           <WhatIDo/>
      </div>
       
      

      <div className="right-pane">
        <h2 id="work"  className="section-title">Work Experience</h2>

        <div className="experience-box">
          <div className="number-box yellow">1</div>
          <div className="job-details">
            <p><strong>AI Engineer Intern at <span className="highlight1">Paradowski Creative</span></strong></p>
            <p>Built LLM-Powered Slack bot with Open AI and Gemini 3.5</p>
            <p className="date">May 2025 - Aug 2025</p>
          </div>
        </div>

        <div className="experience-box">
          <div className="number-box blue">2</div>
          <div className="job-details">
            <p><strong>Deep Learning Intern at <span className="highlight2">Chopra Science Lab</span></strong></p>
            <p>Built GPT-Powered AI chatbot for Dementia Patients</p>
            <p className="date">Dec 2024 - May 2025</p>
          </div>
        </div>

        <div className="experience-box">
          <div className="number-box pink">3</div>
          <div className="job-details">
            <p><strong>Machine Learning Intern at <span className="highlight3">University of Oklahoma</span></strong></p>
            <p>Built a sentiment analysis classification pipeline </p>
            <p className="date">Aug 2024 - Dec 2024</p>
          </div>
        </div>

            <div className="experience-box">
          <div className="number-box purple">4</div>
          <div className="job-details">
            <p><strong>Machine Learning Intern at <span className="highlight4">DePauw University</span></strong></p>
            <p>Designed hybrid BERT models for summarization</p>
            <p className="date">May 2024 - Aug 2024</p>
          </div>
        </div>

            <div className="experience-box">
          <div className="number-box orange">5</div>
          <div className="job-details">
            <p><strong>SWE Intern at <span className="highlight5">Sports Excitement</span></strong></p>
            <p>Led 13 interns to design an MVP for a Sports Application</p>
            <p className="date">May 2023 - Aug 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
