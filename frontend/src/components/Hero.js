import React from 'react';
import chefImage from '../assests/chef1.png'
import vector5 from '../assests/Vector 5.png';
import vector6 from '../assests/Vector 6.png'
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <h1>Prepare Meals According To Your Culinary or Dietary Preference</h1>
      <p className="hero-description">Bring a <span className="highlight">professional chef</span> to your kitchen. Find your <span className="highlight">Perfect Cook</span>.</p>
      <button>Book a Chef</button>
      <div className="hero-image-container">
        <img src={chefImage} alt="Chef" className="hero-image chef" />
        <img src={vector6} alt="Vector6" className="hero-image vector6" />
        <img src={vector5} alt="Vector5" className="hero-image vector5" />
      </div>
    </div>
  );
}

export default Hero;
