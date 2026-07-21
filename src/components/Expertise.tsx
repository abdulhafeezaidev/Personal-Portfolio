import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faWindows, faGithub } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "shadcn/ui",
    "Supabase",
    "PostgreSQL",
    "REST APIs"
];

const labelsSecond = [
    "Electron.js",
    "C#",
    ".NET 8",
    "Windows Services",
    "HMAC Cryptography",
    "C++",
    "C",
    "Java",
    "OOP",
    "Data Structures"
];

const labelsThird = [
    "MediaPipe ML",
    "Claude Code AI",
    "Git",
    "GitHub Actions",
    "CI/CD Pipelines",
    "Cursor",
    "Vercel",
    "npm",
    "SEO/SEM"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I build responsive, clean, and interactive web interfaces, from multi-tenant dashboards to database schemas. Proficient in modern frontend frame architectures and Supabase database structures.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faWindows} size="3x"/>
                    <h3>Systems & Desktop Apps</h3>
                    <p>I design and develop desktop-level applications and system services. Experienced in building local VPN/DNS tunnels, cryptographic PDF signing, and OS-level security utilities.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGithub} size="3x"/>
                    <h3>AI Integration & Workflows</h3>
                    <p>I leverage modern AI-assisted tools and machine learning APIs to streamline dev pipelines. Expert in configuring automated CI/CD deployments and smart local workflows.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;