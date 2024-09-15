// paypopup.js
import React from 'react';
import './paypopup.css';
import qrcode from '../assests/qrcode.png';

const PayPopup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <span className="close-button" onClick={onClose}>&times;</span>
        <div className="qr-section">
          <img src={qrcode} alt="QR Code" className="qr-image" />
        </div>
        <p className="scan-text">Scan this QR code and pay only ₹ 200 to get the phone number of 10 chefs of your searched city on your WhatsApp.</p>
      </div>
    </div>
  );
};

export default PayPopup;
