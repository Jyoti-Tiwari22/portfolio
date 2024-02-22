import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import '../src/assets/css/style.css';
import '../src/assets/css/color1.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import PortfolioSection from './components/PortfolioSection'
import ContactSection from './components/ContactSection'



function App() {
  return (
    <React.StrictMode>
        <Header />
        <Home />
        <About />
        <Service />
        <PortfolioSection />
        <ContactSection />
    </React.StrictMode>
  );
}

export default App;
