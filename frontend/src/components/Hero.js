import React, { useState } from 'react';
import chefImage from '../assests/newchef1.png';
import './Hero.css';
import ChatLogo from '../assests/msg.png';
import Chat from '../OTP/Chat';

const Hero = () => {
  const [isChatVisible, setIsChatVisible] = useState(false);

  const handleChatClick = () => {
    setIsChatVisible(!isChatVisible);
  };

  const handleChatClose = () => {
    setIsChatVisible(false);
  };

  return (
    <div className="hero">
      <div className="herohead">
        <h1>HIRE A CHEF</h1>
        <h4>Prepare Meals According To Your Culinary or Dietary Preference</h4>
        <p className="hero-description">We provide <span className="highlight"> all types of Chef</span>.</p>
        <div className="booknowparent">
          <div className="booknow" onClick={handleChatClick}>Book a Chef</div>
        </div>
      </div>
      <div className="hero-image-container">
        <img src={chefImage} alt="Chef" className="hero-image-chef" />
      </div>
      <div className="chatwithuslogo" onClick={handleChatClick}>
        <img src={ChatLogo} alt="CHAT" className="chat-with-us" />
      </div>
      {isChatVisible && <Chat onClose={handleChatClose} />}
    </div>
  );
};

export default Hero;
