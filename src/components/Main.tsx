import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import myPhoto from '../assets/images/myphoto.jpg';


function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
         <img src={myPhoto} alt="My Avatar" />

        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/nethmi999" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/nethmi-sathsarani-b2a0752b4/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>D.P.G.N.N sathsarani</h1>
          <p>UI/UX Designer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/nethmi999" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/nethmi-sathsarani-b2a0752b4/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;