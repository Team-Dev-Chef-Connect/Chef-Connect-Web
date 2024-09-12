import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cityname from "../data/city";
import "./chefdetails.css";
import chefpic from "../assests/chefpic.jpeg";
import NewHero from "./NewHero";
import Footer from "./Footer";

const Chefdetails = () => {
  const [searchCity, setSearchCity] = useState("");
  const [filteredChefs, setFilteredChefs] = useState([]);

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
    } else {
      setFilteredChefs([]);
    }
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

      <div className="detail-cards">
      {filteredChefs.length > 0 ? (
        filteredChefs.map((chef, index) => (
          <div key={index} className="details-card">
            <div className="details-text">
              <h3 className="chef-name">{chef.name}</h3>
              <a className=""> View More {'>'} {chef.phone_number}</a>
            </div>
          </div>
        ))
      ) : (
        <p>No chefs found for {searchCity}</p>
      )}
      </div>

      

      <section id="gallery">
        <NewHero />
      </section>
      <Footer />
    </div>
  );
};

export default Chefdetails;