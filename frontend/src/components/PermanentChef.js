import React from 'react';
import servicesCard1 from '../assests/servicesCard1.jpg';
import servicesCard2 from '../assests/servicesCard2.jpg';
import servicesCard3 from '../assests/servicesCard3.jpg';
import servicesCard4 from '../assests/servicesCard4.png';
import { CiLocationOn } from "react-icons/ci";
import './PermanentChef.css';

const PermanentChef = ({ onClose }) => {
  return (
  <div className='PermannetChef'>
      <div className='servicesCardContent'>
        <h2>
          Find your perfect hospitality Chef/Staff
        </h2>
      </div>

      <div className="search-bar">
        <div className="location">
          <span className="icon">📍</span>
          <span className="location-text">Mumbai</span>
        </div>
       <input type="text" placeholder="Add more..." className="search-input" />
       <button className="search-button">Search</button>
      </div>

      <div className='servicesCards'>
        
      <div className='servicesCard1'>
        <img src= {servicesCard2} alt='Chefs'/>
        <div>
        <h4>
            Chefs & Cooks
        </h4>
        </div>
        <p>
        The chefs have experience of cooking in a busy hotel kitchen. Our chef is famous for her delicious cooking.
        </p>
    </div>

    <div className='servicesCard2'>
        <img src= {servicesCard1} alt='Bartenders'/>
        <div>
        <h4>
          Bartenders
        </h4>
        </div>
        <p>
        If it requires a blender, then we're out of that drink.Full-time bartender, part-time therapist, part-time philosopher.
        </p>
    </div>

    <div className='servicesCard3'>
        <img src= {servicesCard3} alt='Waiters'/>
        <div>
        <h4>
          Waiters
        </h4>
        </div>
        <p>
        A skilled waiter is like a ninja, always on alert and tuned into the needs of diners. They make sure your glass is never empty.
        </p>
    </div>

    <div className='servicesCard4'>
        <img src= {servicesCard4} alt='Stewerd'/>
        <div>
        <h4>
          Stewerd
        </h4>
        </div>
        <p>
        The chefs have experience of cooking in a busy hotel kitchen. Our chef is famous for her delicious cooking.
        </p>
    </div>

      </div>
    

  </div>
  )
};

export default PermanentChef;