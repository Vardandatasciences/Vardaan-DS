import React, { useState } from 'react';
import './Navbar.css';
import logoImage from '../../assets/Images/Home/Vardaan Ds.png';

const Navbar = () => {
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMobileMenuOpen((prev) => !prev);
    setServicesDropdown(false);
    setProductsDropdown(false);
  };

  const handleCloseMenu = () => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    setProductsDropdown(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <img src={logoImage} alt="Vardaan Data Sciences" className="logo-image" />
          {/* <span className="logo-text">Vardaan Data Sciences Pvt. Ltd.</span> */}
        </div>

        {/* Hamburger Icon (only visible when menu is closed) */}
        {!mobileMenuOpen && (
          <div className="hamburger" onClick={handleHamburgerClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}

        {/* Navigation Menu */}
        <ul className={`navbar-menu${mobileMenuOpen ? ' mobile-open' : ''}`}>
          {/* Close button for mobile menu */}
          {mobileMenuOpen && (
            <button className="mobile-close-btn" onClick={handleCloseMenu} aria-label="Close Menu">&times;</button>
          )}
          <li 
            className="navbar-item dropdown"
            onMouseEnter={() => !mobileMenuOpen && setServicesDropdown(true)}
            onMouseLeave={() => !mobileMenuOpen && setServicesDropdown(false)}
            onClick={() => mobileMenuOpen && setServicesDropdown((prev) => !prev)}
          >
            <a href="#services" className="navbar-link">
              Services <span className="dropdown-arrow">▼</span>
            </a>
            {(servicesDropdown || (!servicesDropdown && mobileMenuOpen && servicesDropdown)) && (
              <ul className="dropdown-menu">
                <li><a href="#service1">Data Strategy & Consulting</a></li>
                <li><a href="#service2">Advanced Analytics & Machine Learning</a></li>
                <li><a href="#service3">Data Engineering & Integration</a></li>
                <li><a href="#service4">Business Intelligence & Visualization</a></li>
              </ul>
            )}
          </li>
          
          <li 
            className="navbar-item dropdown"
            onMouseEnter={() => !mobileMenuOpen && setProductsDropdown(true)}
            onMouseLeave={() => !mobileMenuOpen && setProductsDropdown(false)}
            onClick={() => mobileMenuOpen && setProductsDropdown((prev) => !prev)}
          >
            <a href="#products" className="navbar-link">
              Products <span className="dropdown-arrow">▼</span>
            </a>
            {(productsDropdown || (!productsDropdown && mobileMenuOpen && productsDropdown)) && (
              <ul className="dropdown-menu dropdown-menu--products">
                <li><a href="#product1">GRC</a></li>
                <li><a href="#product2">ProSync</a></li>
                <li><a href="#product3">Lapsec</a></li>
                <li><a href="#product4">SmartLogistics</a></li>
              </ul>
            )}
          </li>
          
          <li className="navbar-item">
            <a href="#about" className="navbar-link">About us</a>
          </li>
          
          <li className="navbar-item">
            <a href="#contact" className="navbar-link">Contact us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 