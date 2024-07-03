import Chat from '../OTP/Chat';
import React, { useState } from 'react';
import './services.css';
import { useNavigate} from 'react-router-dom';
import Left from '../assests/left.png';
import Right from '../assests/right.png';

const Services = () => {

  const [isChatVisible, setIsChatVisible] = useState(false);

  const handleChatClick = () => {
    setIsChatVisible(!isChatVisible);
  };

  const handleChatClose = () => {
    setIsChatVisible(false);
  };
  const navigate = useNavigate(); 


  return (
    <div className="services">
      <div className="heading-container">
        <img src={Left} alt="line" className="line-image" />
        <h2>OUR SERVICES</h2>
        <img src={Right} alt="line" className="line-image" />
      </div>
      <div className="service-cards">
        <div className="service-card">
          <h3>Chef for Party</h3>
          <p>Professional chef to elevate your party experience</p>
          <hr />
          <ul>
            <li>One Day for Home & Corporate function</li>
            <li>Customisable Menu</li>
            <li>Starting from ₹ 1999</li>
            <li>Multicuisine Menu</li>
          </ul>
          <button className="book-now" onClick={handleChatClick}>BOOK NOW</button>
        </div>

        <div className="service-card highlighted">
          <h3>Chef for Permanent</h3>
          <p>Perfect chef to fulfill your hotel staff</p>
          <hr />
          <ul>
            <li>Staff for Hotel, Restaurant & Cafe</li>
            <li>3-Month Replacement</li>
            <li>Verified Chef</li>
            <li>Chef Assistant</li>
          </ul>
          <button className="book-now" onClick={handleChatClick}>BOOK NOW</button>
        </div>

        <div className="service-card">
          <h3>Chef for Home</h3>
          <p>Professional chef / cook for your Home & kitchen needs.</p>
          <hr />
          <ul>
            <li>Policy Verified Chef</li>
            <li>Multicuisine Chef</li>
            <li>3-Month Replacement</li>
            <li>Chef on Demand</li>
          </ul>
          <button className="book-now" onClick={handleChatClick}>BOOK NOW</button>
        </div>
      </div>
      {isChatVisible && <Chat onClose={handleChatClose} />}
    </div>
  );
};

export default Services;
