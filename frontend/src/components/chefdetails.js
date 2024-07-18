import React, { useState } from 'react';
import Dropdown from './Dropdown';
import './chefdetails.css'

export const chefdetails = (onClose) => {
  return (
    <div>
        <h2>
          Find your perfect hospitality Chef/Staff
        </h2>

       <div className="search-bar">
        <div className="location">
          <span className="icon">📍</span>
          <span className="location-text">Mumbai</span>
        </div>
       <input type="text" placeholder="Add more..." className="search-input" />
       <button className="search-button">Search</button>
       </div>
      
       <div className='details-card-1'>
        <div className='details-text'>
         <h3>
            Priya Kapoor
         </h3>
         <p>
          Priya Kapoor is a dedicated and innovative chef known for her ability to blend traditional Indian flavors with contemporary culinary techniques. With over 7 years of experience in the culinary industry, Priya's journey began in her grandmother's kitchen, where she developed a profound appreciation for the art of cooking. She has mastered various cuisines, with a special focus on South Indian, Continental, and Fusion dishes.
         </p>
        </div>

        <div className='detail-image'>
        <img src='' alt='chef-image'/>
        </div>
       </div>
    </div>
  )
};