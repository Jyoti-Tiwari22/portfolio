import React from 'react';
import Slider from 'react-slick';
import project from '../data/project.json';

// Updated ProjectCarousel to accept and display media items
const ProjectCarousel = ({ media }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      {media.map((file, index) => (
        <div key={index}>
          {file.type === 'video' ? (
            <video controls width="100%">
              <source src={process.env.PUBLIC_URL + file.src} type="video/mp4" />
            </video>
          ) : (
            <img src={process.env.PUBLIC_URL + file.src} alt={`Slide ${index}`} style={{ width: '100%' }} />
          )}
        </div>
      ))}
    </Slider>
  );
};

// PortfolioSection now correctly passes each project's images to ProjectCarousel
const PortfolioSection = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 data-heading="latest work">Latest Works</h2>
          </div>
        </div>
        <div className="row portfolio-items">
          {project.map((projectItem) => (
            <div className="portfolio-item" data-category="e-commerce" key={projectItem.id}>
              <div className="portfolio-item-inner outer-shadow">
                <div className="portfolio-item-img">
                  <ProjectCarousel media={projectItem.images} />
                </div>
                <div className="portfolio-item-details">
                  <div className="row">
                    <div className="info">
                      <h3>Project info</h3>
                      <ul>
                        {Object.entries(projectItem.info).map(([key, value], i) => (
                          <li key={i}>{key} - <span>{value.toString()}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
