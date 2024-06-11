import React, { useState } from 'react';
import OTPVerification from '../OTP/OTPVerification';
import './Contact.css';

const Contact = () => {
  const [showOtpVerification, setShowOtpVerification] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    if (error) setError('');  // Clear error message if any
  };

  const handleGetOtp = () => {
    if (phoneNumber.trim() === '') {
      setError('Please enter your contact number');
      return;
    }

    console.log("Get OTP button clicked");
    setShowOtpVerification(true);
  };

  const handleCloseOtp = () => {
    console.log("Close OTP button clicked");
    setShowOtpVerification(false);
  };

  return (
    <div className="contact-container">
      <div className="contact-text">
        CONTACT US
      </div>
      <div className="contact-input-container">
        <div className="contact-form">
          <input 
            type="text" 
            placeholder="Your Contact Number...." 
            className="email-input" 
            value={phoneNumber} 
            onChange={handlePhoneNumberChange} 
          />
          <button className="submit-button" onClick={handleGetOtp}>➤</button>
        </div>
        {error && <div className="error-message">{error}</div>}
        <div className="contact-phone">
          Telephone No.: +91-8107302002
        </div>
      </div>
      {showOtpVerification && <OTPVerification onClose={handleCloseOtp} />}
    </div>
  );
};

export default Contact;
