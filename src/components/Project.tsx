import React from "react";
import HumanFirst from '../assets/images/HumanFirst.png';
import muzammalmart from '../assets/images/muzammalmart.png';
import edgeextension from '../assets/images/edgeextension.png';
import Plagarismchecker from '../assets/images/Plagarismchecker.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <img src={HumanFirst} className="zoom" alt="HumanFirst Dashboard" width="100%"/>
                <h2>HUMANFIRST</h2>
                <p>An enterprise-ready AI control system for educational institutions to restrict LLM usage during exams. Implemented device-level enforcement using a local DNS/VPN tunnel to block specific AI platforms without invasive screen recording or keystroke logging. Built a multi-tenant admin dashboard with Role-Based Access Control (RBAC) to manage policies, view pilot analytics, and track device trust scores.</p>
            </div>
            <div className="project">
                <img src={muzammalmart} className="zoom" alt="Muzammal Mart" width="100%"/>
                <h2>MUZAMMAL MART</h2>
                <p>A high-performance grocery e-commerce website engineered using pure Vanilla JavaScript (zero dependencies) to ensure maximum load speed and SEO friendliness. Features a persistent Shopping Cart system using the LocalStorage API with real-time total calculations, quantity adjustments, and a promo code discount engine. Integrated a "WhatsApp Checkout" workflow allowing users to instantly send formatted orders to the store owner.</p>
            </div>
            <div className="project">
                <img src={edgeextension} className="zoom" alt="Edge Daily Cleaner" width="100%"/>
                <h2>EDGE DAILY CLEANER</h2>
                <p>A Microsoft Edge extension (v1.2.0) developed to automate search history management and privacy cleaning. Implemented smart background scripts to generate unique daily search queries and automatically clear specific Bing/browser history logs. Features a modern, animated popup UI with persistent user settings and daily progress tracking.</p>
            </div>
            <div className="project">
                <img src={Plagarismchecker} className="zoom" alt="Plagiarism Checker" width="100%"/>
                <h2>PLAGIARISM CHECKER</h2>
                <p>An offline plagiarism detection engine designed using rolling hashes and unordered sets. Achieved fast document similarity calculation using a custom string chunking and mathematical hashing algorithm. Built entirely in C++ for optimal performance and accuracy.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;