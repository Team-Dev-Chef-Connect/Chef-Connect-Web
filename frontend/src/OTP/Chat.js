import React from 'react';
import './Chat.css';
import ChefLogo from '../assests/newlogo.png';
import Whatsapp from '../assests/whatsapp.png';
import Call from '../assests/call.png';

const Chat = ({ onClose }) => {
  const whatsappNumber = '919604983552';
  const whatsappMessage = 'Hello, I would like to know more about your services.';
  const callNumber = '919604983552';

  return (
    <div className="contact-card">
      <div className="contact-card-content">
        <button className="contact-card-close" onClick={onClose}>&times;</button>
        <img src={ChefLogo} alt="Chef Connect Logo" className="contact-card-logo" />
        <h2>Chef Connect India Private Limited.</h2>
        <div className="contact-card-buttons">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card-button"
          >
            <div className="icon-circle">
              <img src={Whatsapp} alt="WhatsApp" className="contact-card-icon" />
            </div>
            <p>Whatsapp Us Now!</p>
            <span className="contact-card-arrow">&gt;</span>
          </a>
          <a
            href={`tel:${callNumber}`}
            className="contact-card-button"
          >
            <div className="icon-circle">
              <img src={Call} alt="Call" className="contact-card-icon" />
            </div>
            <p>Call Us Now!</p>
            <span className="contact-card-arrow">&gt;</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Chat;
