import React from 'react';
import chefImage from '../assests/burger.png';
import './Home.css';

const Home = () => {
  return (
    <div className="herop">
      <div className="heroheadp">
        <h1>Trusted By 10K+ Households</h1>
        <p className="highlightp hire-cook">To Hire a Cook</p>
        <p className="hero-descriptionp"><span className="highlightp">Professional </span>& background <span className="highlightp">verified cook </span>for a party for you to enjoy home-cooked food every day.</p>
        <div className="booknowparentp">
          <div className="booknowp">Book a Chef</div>
        </div>
      </div>
      <div className="hero-image-containerp">
        <img src={chefImage} alt="Chef" className="hero-image-chefp" />
      </div>
    </div>
  );
};

export default Home;
