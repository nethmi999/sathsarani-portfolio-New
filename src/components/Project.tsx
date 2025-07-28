import React from "react";
import beauty from '../assets/images/beauty.png';
import flower from '../assets/images/flower.png';
import job from '../assets/images/job.png';
import candyc from '../assets/images/candyc.png';
import web from '../assets/images/web.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://www.figma.com/design/Mo426xpt00aaEaCNgz9TF0/skincare?node-id=0-1&p=f&t=xEQ2S4F9SQQuTgKQ-0" target="_blank" rel="noreferrer">
                        <img src={beauty} className="zoom" alt="Skin care app thumbnail" width="100%" />
                    </a>
                    <a href="https://www.figma.com/design/Mo426xpt00aaEaCNgz9TF0/skincare?node-id=0-1&p=f&t=xEQ2S4F9SQQuTgKQ-0" target="_blank" rel="noreferrer">
                        <h2>Skin Care App</h2>
                    </a>
                    <p>Designed the user interface in Skin Care App</p>
                </div>

                <div className="project">
                    <a href="https://www.figma.com/design/HLrb6d5KU41anbWdMXu1p8/Event?node-id=41-204&t=ZZAziILlNVxkU2gJ-0" target="_blank" rel="noreferrer">
                        <img src={flower} className="zoom" alt="Flower shop thumbnail" width="100%" />
                    </a>
                    <a href="https://www.figma.com/design/HLrb6d5KU41anbWdMXu1p8/Event?node-id=41-204&t=ZZAziILlNVxkU2gJ-0" target="_blank" rel="noreferrer">
                        <h2>Online Flower Shop</h2>
                    </a>
                    <p>Designed a very attractive user interface for an online flower shop website</p>
                </div>

                <div className="project">
                    <a href="https://www.figma.com/design/UqsJ1aBRfKDw0scyvAvsZG/mobile-app?t=xEQ2S4F9SQQuTgKQ-0" target="_blank" rel="noreferrer">
                        <img src={job} className="zoom" alt="Job app thumbnail" width="100%" />
                    </a>
                    <a href="https://www.figma.com/design/UqsJ1aBRfKDw0scyvAvsZG/mobile-app?t=xEQ2S4F9SQQuTgKQ-0" target="_blank" rel="noreferrer">
                        <h2>Job Seeking App</h2>
                    </a>
                    <p>Designed the job seeking app that helps users find jobs matching their interests</p>
                </div>

                <div className="project">
                    <a href="https://www.figma.com/design/HmBbl4cmJBCoG3z0UW6lfR/Glass-Morphism-Food-delivery-website--Community-?node-id=0-1&p=f&t=09mQFVsPuRopeaGV-0" target="_blank" rel="noreferrer">
                        <img src={candyc} className="zoom" alt="Candy Cloud thumbnail" width="100%" />
                    </a>
                    <a href="https://www.figma.com/design/HmBbl4cmJBCoG3z0UW6lfR/Glass-Morphism-Food-delivery-website--Community-?node-id=0-1&p=f&t=09mQFVsPuRopeaGV-0" target="_blank" rel="noreferrer">
                        <h2>Candy Cloud</h2>
                    </a>
                    <p>“Candy Cloud” Sweet Factory Management System Website UI/UX Design (University Group Project)</p>
                </div>

                <div className="project">
                    <a href="https://www.figma.com/design/YPxZEChdAAinfkb7XSFGY0/Untitled?node-id=0-1&p=f&t=rJL0mtLYhdRrTCXy-0" target="_blank" rel="noreferrer">
                        <img src={web} className="zoom" alt="Craigslist website thumbnail" width="100%" />
                    </a>
                    <a href="https://www.figma.com/design/YPxZEChdAAinfkb7XSFGY0/Untitled?node-id=0-1&p=f&t=rJL0mtLYhdRrTCXy-0" target="_blank" rel="noreferrer">
                        <h2>Craigslist Website</h2>
                    </a>
                    <p>Craigslist Website Recreated UI/UX Design (University Group Project)</p>
                </div>
            </div>
        </div>
    );
}

export default Project;
