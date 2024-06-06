import React from 'react';
import './services.css';

const Services = () => (
  <div className="services">
    <h2>OUR SERVICES</h2>
    <div className="service-cards">
      <div className="service-card">
        <h3>Chef for Party</h3>
        <p>Professional party chefs to elevate your party experience</p>
        <hr />
        <ul>
          <li>Multi-Cuisine Professionals</li>
          <li>Customisable Menu</li>
          <li>Prompt Service</li>
          <li>Bartenders, Waiters, etc.</li>
        </ul>
        <button className="book-now">BOOK NOW</button>
        <button className="know-more">KNOW MORE</button>
      </div>

      <div className="service-card highlighted">
        <h3>Chef for Party</h3>
        <p>Professional party chefs to elevate your party experience</p>
        <hr />
        <ul>
          <li>Multi-Cuisine Professionals</li>
          <li>Customisable Menu</li>
          <li>Prompt Service</li>
          <li>Bartenders, Waiters, etc.</li>
        </ul>
        <button className="book-now">BOOK NOW</button>
        <button className="know-more">KNOW MORE</button>
      </div>

      <div className="service-card">
        <h3>Chef for Party</h3>
        <p>Professional party chefs to elevate your party experience</p>
        <hr />
        <ul>
          <li>Multi-Cuisine Professionals</li>
          <li>Customisable Menu</li>
          <li>Prompt Service</li>
          <li>Bartenders, Waiters, etc.</li>
        </ul>
        <button className="book-now">BOOK NOW</button>
        <button className="know-more">KNOW MORE</button>
      </div>
    </div>
  </div>
);

export default Services;
