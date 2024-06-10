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
          <input type="email" placeholder="Your Contact Number..." className="email-input" />
          <button className="submit-button">➤</button>
        </div>
        <div className="contact-phone">
          Telephone No.: +91-8107302002
        </div>
      </div>
    </div>
  );
};

export default Contact;
