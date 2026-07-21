import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import mypic from '../assets/images/mypic.jpg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={mypic} alt="Abdul Hafeez" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/abdulhafeezaidev" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/abdulhafeezaidev/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Abdul Hafeez</h1>
          <p>Founder & Product Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/abdulhafeezaidev" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/abdulhafeezaidev/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;