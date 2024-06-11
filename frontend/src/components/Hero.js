import React from 'react';
import chefImage from '../assests/newchef.png'
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className='herohead'>
      <h1>Prepare Meals According To Your Culinary or Dietary Preference</h1>
      <p className="hero-description">Bring a <span className="highlight">professional chef</span> to your kitchen. Find your <span className="highlight">Perfect Cook</span>.</p>
      <div className='booknowparent'>
        <div className='booknow'> Book a Chef</div>
      </div>
      </div>
      <div className="hero-image-container">
        <img src={chefImage} alt="Chef" className="hero-image chef" />
      </div>
    </div>
  );
}

export default Hero;
