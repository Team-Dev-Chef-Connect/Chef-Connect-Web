import React from 'react';
import './Popup.css'; // Ensure this path is correct

function Popup({ onClose }) {  // Accept onClose prop to close the popup
  const redirectToHotelOwner = () => {
    window.location.href = '/signup'; // Replace with actual URL
  };

  const redirectToChef = () => {
    window.location.href = '/login'; // Replace with actual URL
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Select Your Option</h2>

        {/* Button to redirect to Hotel Owner page */}
        <button className="popup-button hotel-button" onClick={redirectToHotelOwner}>
          क्या आप एक शेफ ढूंढ रहे हैं?
        </button>

        {/* Button to redirect to Chef page */}
        <button className="popup-button chef-button" onClick={redirectToChef}>
          क्या आप खुद एक शेफ हैं?
        </button>

        {/* Button to close the popup */}
        <button className="close-popup-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Popup;
