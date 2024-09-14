import React from "react";
import qrcode from "../assests/qrcode.jpg";
import Whatsapp from '../assests/whatsapp.png';
import "./viewmore.css";

const viewmore = () => {
  const whatsappNumber = '918107302002';
  const whatsappMessage = 'Hello, I would like to know more about your services.';

  return (
    <div className="qr-container">
      <div className="qr-content">
        <img src={qrcode} alt="Qr-code" />
        <h3>
          Scan this QR code and pay only ₹ 200 to get the phone number of 10
          chefs of your searched city on your WhatsApp.
        </h3>
      </div>

      <div className="whatsapp-btn-container">
        <h2>
          To get a personalized experience you can connect us on Whatsapp.
        </h2>
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
      </div>
    </div>
  );
};

export default viewmore;
