import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cityname from "../data/city";
import "./chefdetails.css";
import NewHero from "./NewHero";
import Footer from "./Footer";
import PayPopup from "./paypopup";  // Import the PayPopup component

const Chefdetails = () => {
  const [searchCity, setSearchCity] = useState("");
  const [filteredChefs, setFilteredChefs] = useState([]);
  const [showContactCard, setShowContactCard] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // State for showing the popup

  const navigate = useNavigate();

  const chefnumberclick = () => {
    if (!cityname || cityname.length === 0) {
      console.error("cityname array is undefined or empty.");
      setFilteredChefs([]);
      return;
    }
    const city = cityname.find(
      (city) => city.tag.toLowerCase() === searchCity.toLowerCase()
    );
    if (city) {
      setFilteredChefs(city.chefs);
      setShowContactCard(true);
    } else {
      setFilteredChefs([]);
      setShowContactCard(false);
    }
  };

  const handleBookNowClick = () => {
    setShowPopup(true); // Show the popup when 'Book Now' is clicked
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup when the close button is clicked
  };

  // Redirect to WhatsApp on View More click
  const handleViewMoreClick = () => {
    const whatsappLink = "https://wa.me/918107302002?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.";
    window.open(whatsappLink, "_blank"); // Open WhatsApp link in a new tab
  };

  return (
    <div>
      <h2 className="heading">Find your perfect hospitality Chef/Staff</h2>

      <div className="search-bar">
        <div className="location">
          <span className="icon">📍</span>
          <span className="location-text">Search City</span>
        </div>
        <input
          type="text"
          placeholder="Enter city name..."
          className="search-input"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
        />
        <button className="search-button" onClick={chefnumberclick}>
          Search
        </button>
      </div>

      {/* Render dynamic contact cards */}
      <div className="detail-cards">
        {filteredChefs.length > 0 ? (
          filteredChefs.map((chef, index) => (
            <div key={index} className={`details-card ${index === 1 ? 'highlighted-card' : ''}`}>
              <div className="details-text">
                <h3 className="chef-name">{chef.name}</h3>
                
                {/* "Book Now" Button */}
                <button
                  className="book-now"
                  onClick={handleBookNowClick}  // Trigger the popup
                >
                  Book Now
                </button>
                
                {/* "View More" Button (Now redirects to WhatsApp) */}
                <button className="view-more" onClick={handleViewMoreClick}>
                  View More
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No chefs found for {searchCity}</p>
        )}
      </div>

      {showPopup && <PayPopup onClose={handleClosePopup} />} {/* Render the popup */}

      <section id="gallery">
        <NewHero />
      </section>
      <Footer />
    </div>
  );
};

export default Chefdetails;
