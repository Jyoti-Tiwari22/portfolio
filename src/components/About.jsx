import React, { useState } from "react";
import aboutData from "../data/about.json";
import { BrowserRouter as Router, Link } from "react-router-dom";
import imageSrc from "../assets/images/image2.jpeg"
import pdfSrc from "../assets/pdf/JyotiTiwari_3.5years.pdf"

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
                                <span>Hi! I'm {aboutInfo.name},</span> a passionate Full Stack Developer with over {aboutInfo.experience} of experience in building and maintaining high-performance web applications.
                            </p>
                            <p>
                                I hold a <strong>{aboutInfo.degree}</strong> from <strong>{aboutInfo.university}</strong> (2022) and a <strong>{aboutInfo.bachelorDegree}</strong> from <strong>{aboutInfo.bachelorUniversity}</strong> (2020).
                            </p>
                            <p>
                                I thrive at the intersection of logic and creative design, crafting visually engaging, accessible, and user-friendly applications. My expertise spans <strong>React.js, Next.js, Golang, and PostgreSQL</strong>, with a strong focus on frontend performance, responsive design, and API integrations.
                            </p>
                            <p>
                                I have contributed to projects like <strong>MossPark's Collision Conf 2024 platform</strong> and the <strong>LumeDot MVP</strong>, where I developed dynamic SPAs, landing pages, and mobile applications using React Native. Additionally, I worked on backend API development using Golang, enhancing functionality and security in financial and content-driven platforms.
                            </p>
                            <p>
                                I am highly detail-oriented, a firm believer in the mobile-first approach, and committed to delivering seamless user experiences. My work on responsive web design resulted in a <strong>20% increase in mobile traffic</strong>, demonstrating my ability to optimize digital solutions for modern users.
                            </p>

                            <a href={pdfSrc}
                                download="JyotiTiwari_3.5years.pdf"
                                className="btn-1 outer-shadow hover-in-shadow"
                            >
                                Download CV
                            </a>

                            <a href="#contact" className="link-item btn-1 outer-shadow hover-in-shadow" style={{ marginLeft: "10px" }}>
                                Hire Me
                            </a>
                        </div>

                    </div>
                    <div className="row margintop">
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
                                                <p className="alignLeft">{exp.description}</p>
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