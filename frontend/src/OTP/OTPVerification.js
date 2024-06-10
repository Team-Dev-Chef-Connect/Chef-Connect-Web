import React, { useState } from 'react';
import './OTPVerification.css';

const OTPVerification = ({ onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleGetOtp = () => {
    // Logic to handle OTP generation
    console.log('OTP requested for:', phoneNumber);
  };

  return (
    <div className="otp-modal">
      <div className="otp-modal-content">
        <button className="otp-modal-close" onClick={onClose}>×</button>
        <h2>OTP Verification</h2>
        <input
          type="text"
          placeholder="Your Phone Number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        <button className="otp-button" onClick={handleGetOtp}>Get OTP</button>
      </div>
    </div>
  );
};

export default OTPVerification;
