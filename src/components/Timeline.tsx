import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career & Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jan 2025 - Present"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Founder & Solo Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">HumanFirst Control (Faisalabad, Pakistan)</h4>
            <p>
              Built complete production SaaS solo (React, TypeScript, Supabase, Electron, .NET 8 Windows Service). Implemented domain-blocking, cryptographic PDF signing, MediaPipe ML proctoring, and automated CI/CD. Product accepted into NIC Faisalabad incubator.
            </p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - Present"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Freelance Web Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Upwork / Direct Clients</h4>
            <p>
              Developed React/TypeScript dashboards and client web applications with Supabase and REST API backends. Refactored codebases for maximum performance.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2024 - Present"
            iconStyle={{ background: '#e07a5f', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">BS Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">NUML, Faisalabad</h4>
            <p>
              Studying core Software Engineering, Data Structures, Algorithms, and Systems. Self-directed studies in Supabase, Electron, .NET, and cryptography applied directly to building production products.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2024"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Website Development Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">CodeAlpha (Remote)</h4>
            <p>
              Built responsive, user-friendly frontend interfaces and optimized site layouts across client web projects.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2021 - 2023"
            iconStyle={{ background: '#e07a5f', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Intermediate in Pre-Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Aspire Group of Colleges, Mian Channu</h4>
            <p>
              Graduated with 859/1100 (78%). Awarded a 100% Academic Merit Scholarship.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2019 - 2021"
            iconStyle={{ background: '#e07a5f', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Matriculation in Science</h3>
            <h4 className="vertical-timeline-element-subtitle">Govt M.C. High School, Arifwala</h4>
            <p>
              Graduated with 1094/1100 (99.4%). Awarded 100% Scholarship and ranked 3rd in school.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;