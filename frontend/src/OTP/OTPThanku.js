import React from 'react';
import './OTPThanku.css'; // Import your CSS file
import imageSrc from '../assests/thanks.svg'; // Import the image

const OTPThanku = () => {
  return (
    <div className="otp-thanku-container">
      <div className="otp-thanku-card">
        <div className="image-container">
          <img src={imageSrc} alt="Image" />
        </div>
        <div className="message-container">
          <p>Thank you</p>
          <p>Code successfully verified</p>
        </div>
      </div>
    </div>
  );
};

export default OTPThanku;
