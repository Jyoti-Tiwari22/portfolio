import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="row justify-content-between">
            <div className="logo">
              <button>k</button>
            </div>
            <div
              className={`hamburger-btn outer-shadow hover-in-shadow ${
                isMenuOpen ? "open" : ""
              }`}
              onClick={toggleMenu}
            >
              <span></span>
            </div>
          </div>
        </div>
      </header>

      <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <div
          className="close-nav-menu outer-shadow hover-in-shadow"
          onClick={toggleMenu}
        >
          &times;
        </div>
        <div className="nav-menu-inner">
          <ul>
            <li>
              <a href="#home" className="link-item inner-shadow active">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="link-item outer-shadow hover-in-shadow">
                about us
              </a>
            </li>
            <li>
              <a href="#services" className="link-item outer-shadow hover-in-shadow">
                services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="link-item outer-shadow hover-in-shadow">
                portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="link-item outer-shadow hover-in-shadow">
                contact
              </a>
            </li>
          </ul>
        </div>
        <p className="copyright-text">&copy; 2020 Jyoti Tewari</p>
      </nav>
      <div className="fade-out-effect"></div>
    </div>
  );
}

export default Header;
