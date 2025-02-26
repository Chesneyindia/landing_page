import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>CHESNEY</h1>
          <h1>INDIA</h1>
        </div>

        <div className="footer-links">
          <div className="link-column">
            <p><a href="/">HOME</a></p>
            <p><a href="/work">WORK</a></p>
            <p><a href="/about">ABOUT</a></p>
            <p><a href="/services">SERVICES</a></p>
            <p><a href="/contact">CONTACT</a></p>
          </div>

          <div className="link-column">
            <p><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">INSTAGRAM</a></p>
            <p><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LINKEDIN</a></p>
            <p><a href="https://vimeo.com" target="_blank" rel="noopener noreferrer">VIMEO</a></p>
            <p><a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">TIKTOK</a></p>
            <p><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YOUTUBE</a></p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <hr />
        <div className="footer-bottom-content">
          <span>© 2024 CHESNEY INDIA</span>
          <span><a href="/privacy-policy">PRIVACY POLICY</a></span>
          <span><a href="/cookie-policy">COOKIE POLICY</a></span>
          <span>BY THE CREATORS</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
