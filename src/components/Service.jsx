import React from 'react';

// Example service data, this could also be imported from a JSON file
const servicesData = [
  {
    id: 1,
    icon: "fa fa-mobile",
    title: "Responsive Design",
    description: "My layouts will work on any device, big or small."
  },
  {
    id: 2,
    icon: "fa fa-laptop",
    title: "Web Design",
    description: "Creating web and responsive design. Maintaining, optimizing, troubleshooting, and improving websites."
  },
  {
    id: 3,
    icon: "fa fa-code",
    title: "Clean Code",
    description: "I like to code things from scratch, and enjoy bringing ideas to life in the browser."
  },
  {
    id: 4,
    icon: "fa fa-bullhorn",
    title: "Dev Tools",
    description: "Bootstrap, Codekit, Codepen, Github, Gitlab, Terminal, Linux"
  }
];

// Service Component
const ServiceItem = ({ icon, title, description }) => (
  <div className="service-item">
    <div className="service-item-inner outer-shadow">
      <div className="icon inner-shadow">
        <i className={icon} aria-hidden="true"></i>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

// Services Section Component
const Service = () => (
  <section className="service-section section" id="services">
    <div className="container">
      <div className="row">
        <div className="section-title">
          <h2 data-heading="Services">What I do............</h2>
        </div>
      </div>
      <div className="row">
        {servicesData.map(service => (
          <ServiceItem key={service.id} {...service} />
        ))}
      </div>
    </div>
  </section>
);

export default Service;
