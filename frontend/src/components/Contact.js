import React, { useState } from 'react';
import OTPThanku from '../OTP/OTPThanku';
import './Contact.css';

const Contact = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [showOTPThanku, setShowOTPThanku] = useState(false);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
    if (error) setError('');  // Clear error message if any
  };

  const handleQuerySubmit = () => {
    if (query.trim() === '') {
      setError('Please enter your query');
      return;
    }

    console.log("Query submitted");
    setShowOTPThanku(true);  // Show OTPThanku component
  };

  const handleCloseOtpThanku = () => {
    setShowOTPThanku(false);
  };

  return (
    <div className="contact-container">
      {!showOTPThanku ? (
        <>
          <div className="contact-left">
            <div className="contact-text">CONTACT US</div>
            <div className="contact-phone">Telephone No.: +91 9799962369</div>
          </div>
          <div className="contact-right">
            <div className="contact-form">
              <input 
                type="text" 
                placeholder="Any queries" 
                className="query-input" 
                value={query} 
                onChange={handleQueryChange} 
              />
              <button className="submit-button" onClick={handleQuerySubmit}>➤</button>
            </div>
            {error && <div className="error-message">{error}</div>}
          </div>
        </>
      ) : (
        <OTPThanku onClose={handleCloseOtpThanku} />
      )}
    </div>
  );
};

export default Contact;
