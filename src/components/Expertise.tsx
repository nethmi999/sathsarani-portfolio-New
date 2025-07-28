import React from "react";
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPenNib,
  faDiagramProject,
  faUsers,
  faLightbulb,
  faPuzzlePiece,
  faPeopleGroup
} from '@fortawesome/free-solid-svg-icons';

const skillsList = [
  { label: "UI Design", icon: faPenNib },
  { label: "Wireframing & Prototyping", icon: faDiagramProject },
  { label: "User Research & Persona Building", icon: faUsers },
  { label: "Creative Thinking", icon: faLightbulb },
  { label: "Problem Solving", icon: faPuzzlePiece },
  { label: "Collaboration & Teamwork", icon: faPeopleGroup },
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Skills</h1>
        <div className="skills-grid single-column">
          {skillsList.map((skill, index) => (
            <Chip
              key={index}
              className='chip'
              label={
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <FontAwesomeIcon icon={skill.icon} style={{ marginRight: '10px', fontSize: '1.5rem' }} />
                  {skill.label}
                </span>
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expertise;
