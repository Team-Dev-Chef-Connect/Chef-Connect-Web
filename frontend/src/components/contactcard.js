import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./contactcard.css"; // You can create this file for custom styling
import cityname from "../data/city";

const ContactCard = () => {

  const [searchCity, setSearchCity] = useState("");
  const [filteredChefs, setFilteredChefs] = useState([]);

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
      setShowContactCard(true); // show the contact card once search is successful
    } else {
      setFilteredChefs([]);
      setShowContactCard(false); // hide the contact card if no results
    }
  };

  return (
    <div className="contact-card-container">
      <div className="card">
        <img
          src="/path-to-image/kavita.png"
          alt="Kavita"
          className="profile-pic"
        />
        <h3>{chef.name}</h3>
        <button
          className="book-now"
          onClick={() => (window.location.href = "/your-link-here")}
        >
          Book Now
        </button>
      </div>
      <div className="card highlighted-card">
        {" "}
        {/*Highlighted card for Manoj*/}
        <img
          src="/path-to-image/manoj.png"
          alt="Manoj"
          className="profile-pic"
        />
        <h3>{chef.name}</h3>
        <button
          className="book-now"
          onClick={() => (window.location.href = "/your-link-here")}
        >
          Book Now
        </button>
      </div>
      <div className="card">
        <img
          src="/path-to-image/sulekha.png"
          alt="Sulekha"
          className="profile-pic"
        />
        <h3>{chef.name}</h3>
        <button
          className="book-now"
          onClick={() => (window.location.href = "/your-link-here")}
        >
          Book Now
        </button>
      </div>

      <div className="detail-cards">
        {filteredChefs.length > 0 ? (
          filteredChefs.map((chef, index) => (
            <div key={index} className="details-card">
              <div className="details-text">
                <h3 className="chef-name">{chef.name}</h3>
              </div>
            </div>
          ))
        ) : (
          <p>No chefs found for {searchCity}</p>
        )}
      </div>
      
      {/* extra code */}

      <div className="view-more-container">
        <button
          className="view-more"
          onClick={() =>
            (window.location.href =
              "https://wa.me/918107302002?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services")
          }
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default ContactCard;