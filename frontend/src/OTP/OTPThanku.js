import React from 'react';
import './OTPThanku.css'; // Import your CSS file
import imageSrc from '../assests/thanks.svg'; // Import the image

const OTPThanku = ({ onClose }) => {
  const handleClose = () => {
    onClose(); // Call the onClose function passed from the parent component
  };

  return (
    <div className="otp-thanku-container">
      <div className="otp-thanku-card">
        <div className="close-button-12" onClick={handleClose}>
          &times;
        </div>
        <div className="image-container">
          <img src={imageSrc} alt="Image" />
        </div>
        <div className="message-container">
          <h3>Thank you</h3>
          <p>We will shortly get in touch with you</p>
        </div>
      </div>
    </div>
  );
};

export default OTPThanku;
