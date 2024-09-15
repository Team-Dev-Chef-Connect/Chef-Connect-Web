import React from "react";
import qrcode from "../assests/qrcode.jpg";
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
    </div>
  );
};

export default viewmore;
