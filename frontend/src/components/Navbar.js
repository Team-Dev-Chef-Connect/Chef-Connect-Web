import React, { Component } from 'react';
import './Navbar.css';
import logoImage from '../assests/image 3.png';
import Popup from './Popup'; // Ensure correct path to Popup component

class Navbar extends Component {
  state = { 
    clicked: false,
    showPopup: false, // State to manage popup visibility
  };

  // Toggle the burger menu
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  // Toggle the popup visibility
  handlePopupToggle = () => {
    this.setState({ showPopup: !this.state.showPopup });
  };

  // Close the popup
  handlePopupClose = () => {
    this.setState({ showPopup: false });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logoImage} alt="ChefConnectIndia" />
        </div>
        <div className={`navbar-links ${this.state.clicked ? 'active' : ''}`}>
          <a href="/" className="navbar-link">Home</a>
          <a href="#services" className="navbar-link">Our Services</a>
          <a href="#contact" className="navbar-link">Contact us</a>
          <a href="#gallery" className="navbar-link">Gallery</a>
        </div>

        {/* Hum से जुड़े Button to open the popup */}
        <div className='hireNowParent' onClick={this.handlePopupToggle}>
          <div className='hireNow'>Hum से जुड़े</div>
        </div>

        {/* Burger menu toggle */}
        <div className="navbar-toggle" onClick={this.handleClick}>
          {this.state.clicked ? '✕' : '☰'}
        </div>

        {/* Render the Popup component if showPopup is true */}
        {this.state.showPopup && <Popup onClose={this.handlePopupClose} />}
      </nav>
    );
  }
}

export default Navbar;
