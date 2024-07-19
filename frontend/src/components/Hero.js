import React, { useState } from 'react';
import chefImage from '../assests/newchef1.png';
import './Hero.css';
import whatsappgreen from '../assests/whatsapp-green.png';
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
      <div>
      <svg width="335" height="335" viewBox="0 0 335 335" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="157" y="22" width="22" height="290" rx="10" fill="white"/> <path d="M167 42V22L312 22L334.5 18L324 31L312 42L167 42Z" fill="white"/> <path d="M42 167.5H22L22 22.5L18 0L31 10.5L42 22.5L42 167.5Z" fill="white"/> <path d="M292 167H312V312L316 334.5L303 324L292 312V167Z" fill="white"/> <path d="M167.5 292V312H22.5L0 316L10.5 303L22.5 292H167.5Z" fill="white"/> <rect x="22" y="177" width="22" height="290" rx="10" transform="rotate(-90 22 177)" fill="white"/> <ellipse cx="99.5" cy="107.5" rx="15.5" ry="16.5" fill="white"/> <ellipse cx="99.5" cy="220.5" rx="15.5" ry="16.5" fill="white"/> <ellipse cx="235.5" cy="220.5" rx="15.5" ry="16.5" fill="white"/> <ellipse cx="235.5" cy="107.5" rx="15.5" ry="16.5" fill="white"/> </svg>
      </div>
        <h1>HIRE A CHEF</h1>
        <h4>Prepare Meals According To Your Culinary or Dietary Preference</h4>
        <p className="hero-description">We provide <span className="highlight"> all types of Hospitality</span>.</p>
        <div className="booknowparent">
          <div className="booknow" onClick={handleChatClick}>Book a Chef</div>
        </div>
      </div>
      <div className="hero-image-container">
        <img src={chefImage} alt="Chef" className="hero-image-chef" />
      </div>
      <div className="chatwithuslogo" onClick={handleChatClick}>
        <img src={whatsappgreen} alt="CHAT" className="chat-with-us" />
      </div>
      {isChatVisible && <Chat onClose={handleChatClose} />}
    </div>
  );
};

export default Hero;
