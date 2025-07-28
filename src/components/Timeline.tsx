import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'; // changed to match education
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="education">
      <div className="items-container">
        <h1>Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2022 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(255, 255, 255)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Sri Lanka Institute of Information Technology (SLIIT)</h3>
            <h4 className="vertical-timeline-element-subtitle">Malabe, Sri Lanka</h4>
            <p>
              BSc. Honors in Information Technology (Undergraduate)
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(255, 255, 255)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Thopawawa National College, Polonnaruwa</h3>
            <h4 className="vertical-timeline-element-subtitle">G.C.E Advanced Level Examination</h4>
            <p>
              Art Stream
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2017"
            iconStyle={{ background: '#5000ca', color: 'rgb(255, 255, 255)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Thopawawa National College, Polonnaruwa</h3>
            <h4 className="vertical-timeline-element-subtitle">G.C.E Ordinary Level Examination</h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
