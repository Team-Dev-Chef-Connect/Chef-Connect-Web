import React, { Component } from 'react'; 
import './Navbar.css';
import logoImage from '../assests/image 3.png';

class Navbar extends Component {
  state = { clicked: false };

  handleSignup = () => {
    window.location.href = '/signup';
  };

  handlechefdetails = () => {
    window.location.href = '/forchef';
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render(){
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logoImage} alt="ChefConnectIndia" /> 
        </div>
        <div className='hinditext' onClick={this.handlechefdetails}>
          Hum से जुड़े
        </div>
        <div className={`navbar-links ${this.state.clicked ? 'active' : ''}`}>
          <a href="/" className="navbar-link">Home</a>
          <a href="#services" className="navbar-link">Our Services</a>
          <a href="#contact" className="navbar-link">Contact us</a>
          <a href="#gallery" className="navbar-link">Gallery</a>
        </div>
        <div className='hireNowParent' onClick={this.handleSignup}>
          <div className='hireNow'>Log In</div>
        </div>
        <div className="navbar-toggle" onClick={this.handleClick}>
          {this.state.clicked ? '✕' : '☰'}
        </div>
      </nav>
    );
  }
}

export default Navbar;
