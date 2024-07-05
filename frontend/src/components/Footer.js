import React from 'react';
import './Footer.css';
import chefconnectlogo from '../assests/chefconnectlogo.png';
import checfconnect from '../assests/image 3.png';
import facebook from '../assests/facebook.png';
import instagram from '../assests/instagram.png';
import twitter from '../assests/twitter.png';
import linkedin from '../assests/linkedin.png';
import youtube from '../assests/youtube.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="logo-section">
          <img src={chefconnectlogo} alt="Chef Connect Logo" className="logo" />
          <img src={checfconnect} alt='Chef Connect' className="secondary-logo" />
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#gallery">About us</a></li>
            <li><a href="#contact">Contact us</a></li>
            <li><a href="/blogs">Blogs</a></li>
          </ul>
          <ul>
            <li><a href="/chef-for-party">Chef for Party</a></li>
            <li><a href="/permanent-chef">Permanent Chef</a></li>
            <li><a href="/private-chef">Private Chef</a></li>
          </ul>
          <ul>
            <li><a href="/chefs-cooks">Chefs & Cooks</a></li>
            <li><a href="/bartenders">Bartenders</a></li>
            <li><a href="/waiters">Waiters</a></li>
          </ul>
        </div>
      </div>
      <div className="follow-us-container"> 
        <div className="follow-us">
          <p>Follow Us</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/people/Chef-Connect/100064049360566/" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" className="social-icon" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" className="social-icon" />
            </a>
            <a href="https://www.instagram.com/chefconnectindia/?hl=en" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" className="social-icon" />
            </a>
            <a href="https://in.linkedin.com/company/rida-rahil-a76540203" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://www.youtube.com/channel/UCaVoAAozf_KFj5qcvXhQ3sA" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="Youtube" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>&copy;Copyright 2024 Chef Connect India Pvt Ltd.</p>
        </div>
        <div className="footer-bottom-right">
          <a href="/privacy-policy">Privacy Policy  </a>
          <a href="/terms-of-service">Terms of service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
