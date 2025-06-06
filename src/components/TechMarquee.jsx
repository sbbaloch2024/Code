import React from 'react';
import './TechMarquee.css';

import reactLogo from '../assets/logos/react.png';
import nodeLogo from '../assets/logos/node.png';
import pythonLogo from '../assets/logos/python.png';
import dockerLogo from '../assets/logos/docker.png';
import awsLogo from '../assets/logos/aws.png';
import mongoLogo from '../assets/logos/java.png';
import tailwindLogo from '../assets/logos/js.png';
import jsLogo from '../assets/logos/image.png';
import c from '../assets/logos/c.png';


const logos = [
  reactLogo,
  nodeLogo,
  pythonLogo,
  dockerLogo,
  awsLogo,
  mongoLogo,
  tailwindLogo,
  jsLogo,
  c
];

const TechMarquee = () => {
  return (
    <div className="tech-marquee-container">
      <div className="tech-marquee-track">
        {logos.concat(logos).map((src, index) => (
          <img key={index} src={src} alt={`tech-${index}`} className="tech-logo" />
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
