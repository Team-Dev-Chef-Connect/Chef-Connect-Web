import React, { useState } from 'react';
import './OTPVerification.css';
import EnterOTP from './EnterOTP';

const OTPVerification = ({ onClose }) => {
  const [showEnterOTP, setShowEnterOTP] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleGetOtp = () => {
    if (phoneNumber.trim() === '') {
      setError('Please enter your contact number');
      return;
    }

    console.log("Get OTP button clicked");
    setShowEnterOTP(true);
  };

  const handleCloseOtp = () => {
    console.log("Close OTP button clicked");
    setShowEnterOTP(false);
    // Call onClose when closing the EnterOTP component
    onClose();
  };

  return (
    <div className="otp-modal">
      {!showEnterOTP ? (
        <div className="otp-modal-content">
          <button className="otp-modal-close" onClick={onClose}>×</button>
          <h2>OTP Verification</h2>
          <input
            type="text"
            placeholder="Your Phone Number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
          {error && <p className="error-message-2">{error}</p>}
          <button className="otp-button" onClick={handleGetOtp}>Get OTP</button>
        </div>
      ) : (
        <EnterOTP onClose={handleCloseOtp} />
      )}
    </div>
  );
};

export default OTPVerification;
