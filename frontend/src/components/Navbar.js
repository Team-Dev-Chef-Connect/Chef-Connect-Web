import React, { Component } from 'react'; 
import './Navbar.css';
import logoImage from '../assests/image 3.png';

class Navbar extends Component {
  state = { clicked: false };
  handleSignup =() =>{
    window.location.href='/signup';
  };
  render(){
    return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logoImage} alt="ChefConnectIndia" /> 
      </div>
      <div className="navbar-links">
        <a href="#home" className="navbar-link">Home</a>
        <a href="#services" className="navbar-link">Our Services</a>
        <a href="#about" className="navbar-link">About us</a>
        <a href="#contact" className="navbar-link">Contact us</a>
      </div>
      <div className='hireNowParent'>
        <div className='hireNow' onClick={this.handleSignup}>Log In</div>
      </div>
    </nav>
  );
}
}

export default Navbar;
