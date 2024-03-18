import React, { useState } from "react";
import aboutData from "../data/about.json";
import { BrowserRouter as Router, Link } from "react-router-dom";
import imageSrc from "../assets/images/image2.jpeg"
import pdfSrc from "../assets/pdf/resume3.pdf"

const About = () => {
  const {
    socialLinks,
    aboutInfo,
    skills,
    experience,
    education
  } = aboutData;

  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState('skills');

  // Function to change the active tab
  const changeTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
        <Router>
            <section className="about-section section" id="about">
                <div className="container">
                    <div className="row">
                        <div className="section-title">
                            <h2 data-heading="main info">About me</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="about-img">
                            <div className="img-box inner-shadow">
                                <img
                                    src={imageSrc}
                                    className="outer-shadow"
                                    alt="profile-pic"
                                    onContextMenu={(e) => e.preventDefault()}
                                />
                            </div>
                            <div className="social-links">
                                <Link to={socialLinks.github} className="outer-shadow hover-in-shadow">
                                    <i className="fab fa-github" aria-hidden="true"></i>
                                </Link>
                                <Link to={socialLinks.linkedin} className="outer-shadow hover-in-shadow">
                                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="about-info">
                            <p>
                                <span>Hi! My name is {aboutInfo.name},</span> I am a {aboutInfo.degree} student in the department of
                                computer application at {aboutInfo.university} in August 2022. I have a {aboutInfo.bachelorDegree} degree
                                from {aboutInfo.bachelorUniversity}.
                            </p>
                            <p>
                                I love combining the worlds of logic and creative design to make eye-catching, accessible, and
                                user-friendly websites and applications.
                            </p>
                            <p>
                                I am a dedicated person with a family of {aboutInfo.familyMembers}. Meticulous front-end developer with over
                                 {aboutInfo.experience} of experience and passion for responsive website design and a firm
                                believer in the mobile-first approach. Implemented new responsive website approach which increased
                                mobile traffic by 20%.
                            </p>
                            <a href={pdfSrc}
                                download="JyotiTewari.pdf"
                                className="btn-1 outer-shadow hover-in-shadow"
                                >
                                Download CV
                            </a>

                            <a href="#contact" className="link-item btn-1 outer-shadow hover-in-shadow" style={{ marginLeft: "10px" }}>
                                Hire Me
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="about-tabs">
                            <span className={`tab-item outer-shadow ${activeTab === 'skills' ? 'active' : ''}`} onClick={() => changeTab('skills')}>
                                Skills
                            </span>
                            <span className={`tab-item outer-shadow ${activeTab === 'experience' ? 'active' : ''}`} onClick={() => changeTab('experience')}>
                                Experience
                            </span>
                            <span className={`tab-item outer-shadow ${activeTab === 'education' ? 'active' : ''}`} onClick={() => changeTab('education')}>
                                Education
                            </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className={`skills tab-content ${activeTab === 'skills' ? 'active' : ''}`}>
                            <div className="row">
                                {skills && skills.map((skill, index) => (
                                    <div className="skills-item" key={index}>
                                        <p>{skill.name}</p>
                                        <div className="progress outer-shadow">
                                            <div className="progress-bar" style={{ width: `calc(${skill.percentage}% - 14px)` }}>
                                                <span>{skill.percentage}%</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={`experience tab-content ${activeTab === 'experience' ? 'active' : ''}`}>
                            <div className="row">
                                <div className="timeline">
                                    {experience && experience.map((exp, index) => (
                                        <div className="timeline-item" key={index}>
                                            <div className="timeline-item-inner outer-shadow">
                                                <i className="fa fa-briefcase icon" aria-hidden="true"></i>
                                                <span>{exp.startDate} - {exp.endDate}</span>
                                                <h3>{exp.position}</h3>
                                                <h4>{exp.company}</h4>
                                                <p>{exp.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={`education tab-content ${activeTab === 'education' ? 'active' : ''}`}>
                            <div className="row">
                                <div className="timeline">
                                    {education && education.map((edu, index) => (
                                        <div className="timeline-item" key={index}>
                                        <div className="timeline-item-inner outer-shadow">
                                        <i className="fa fa-graduation-cap icon" aria-hidden="true"></i>
                                        <span>{edu.startDate} - {edu.endDate}</span>
                                        <h3>{edu.degree}</h3>
                                        <h4>{edu.university}</h4>
                                        <p>{edu.description}</p>
                                        </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Router>
    );
}

export default About;