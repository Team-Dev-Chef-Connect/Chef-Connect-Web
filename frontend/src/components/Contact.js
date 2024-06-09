import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-text">
        CONTACT US
      </div>
      <div className="contact-input-container">
        <div className="contact-form">
          <input type="email" placeholder="Your Email Address..." className="email-input" />
          <button className="submit-button">➤</button>
        </div>
        <div className="contact-phone">
          Telephone No.: +1 - 123456789
        </div>
      </div>
    </div>
  );
};

export default Contact;
