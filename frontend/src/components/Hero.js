import React from 'react';
import chefImage from '../assests/chef.png'
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <h1>Prepare Meals According To Your Culinary or Dietary Preference</h1>
      <p className="hero-description">Bring a <span className="highlight">professional chef</span> to your kitchen. Find your <span className="highlight">Perfect Cook</span>.</p>
      <button>Book a Chef</button>
      <div className="hero-image-container">
        <img src={chefImage} alt="Chef" className="hero-image chef" />
      </div>
    </div>
  );
}

export default Hero;
