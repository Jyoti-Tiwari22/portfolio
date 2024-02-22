import React from 'react';
import contactData from '../data/contactInfo.json';

const ContactSection = () => {
  return (
    <section className="contact-section section" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>Get In Touch........</h2>
          </div>
        </div>
        <div className="row">
          {contactData.map((item, index) => (
            <div className="contact-item" key={index}>
              <div className="contact-item-inner outer-shadow">
                <i className={item.icon}></i>
                <span>{item.type}</span>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;