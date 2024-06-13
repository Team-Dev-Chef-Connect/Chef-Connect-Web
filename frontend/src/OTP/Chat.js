import React from 'react';
import './Chat.css';
import ChefLogo from '../assests/newlogo.png';
import Whatsapp from '../assests/whatsapp.png';
import Call from '../assests/call.png';

const Chat = () => {
  return (
    <div className="contact-card">
      <div className="contact-card-content">
        <button className="contact-card-close">&times;</button>
        <img src={ChefLogo} alt="Chef Connect Logo" className="contact-card-logo" />
        <h2>Chef Connect India Private Limited.</h2>
        <div className="contact-card-buttons">
          <button className="contact-card-button">
            <div className="icon-circle">
              <img src={Whatsapp} alt="WhatsApp" className="contact-card-icon" />
            </div>
            <p>Whatsapp Us Now!</p>
            <span className="contact-card-arrow">&gt;</span>
          </button>
          <button className="contact-card-button">
            <div className="icon-circle">
              <img src={Call} alt="Call" className="contact-card-icon" />
            </div>
            <p>Call Us Now!</p>
            <span className="contact-card-arrow">&gt;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
