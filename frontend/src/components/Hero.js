import React, { useState } from 'react';
import chefImage from '../assests/newchef.png'
import './Hero.css';
import ChatLogo from '../assests/chat.png'
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
        <h1>Prepare Meals According To Your Culinary or Dietary Preference</h1>
        <p className="hero-description">Bring a <span className="highlight">professional chef</span> to your kitchen. Find your <span className="highlight">Perfect Cook</span>.</p>
        <div className="booknowparent">
          <div className="booknow"> Book a Chef</div>
        </div>
      </div>
      <div className="hero-image-container">
        <img src={chefImage} alt="Chef" className="hero-image chef" />
      </div>
      <div className="chatwithuslogo" onClick={handleChatClick}>
        <img src={ChatLogo} alt="CHAT" className="chat-with-us" />
      </div>
      {isChatVisible && <Chat onClose={handleChatClose} />}
    </div>
  );
}

export default Hero;
