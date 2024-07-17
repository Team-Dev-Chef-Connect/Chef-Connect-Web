import React, { useState } from 'react';
import servicesCard1 from '../assests/servicesCard1.jpg';
import servicesCard2 from '../assests/servicesCard2.jpg';
import servicesCard3 from '../assests/servicesCard3.jpg';
import servicesCard4 from '../assests/servicesCard4.png';
import './PermanentChef.css';
import NewHero from './NewHero';
import Footer from './Footer';

const PermanentChef = ({ onClose }) => {
  return (
  <div className='PermanetChef'>
      <div className='servicesCardContent'>
        <h2>
          Find your perfect hospitality Chef/Staff
        </h2>
      </div>

      <div className='servicesCards'>
        
      <div className='servicesCard1'>
        <img src= {servicesCard2} alt='Chefs'/>
        <div>
        <button>
          Chefs & Cooks
        </button>
        </div>
        <p>
        The chefs have experience of cooking in a busy hotel kitchen. Our chef is famous for their delicious cooking.
        </p>
    </div>

    <div className='servicesCard2'>
        <img src= {servicesCard1} alt='Bartenders'/>
        <div>
        <button>
          Bartenders
        </button>
        </div>
        <p>
        If it requires a blender, then we're out of that drink.Full-time bartender, part-time therapist, part-time philosopher.
        </p>
    </div>

    <div className='servicesCard3'>
        <img src= {servicesCard3} alt='Waiters'/>
        <div>
        <button>
          Waiters
        </button>
        </div>
        <p>
        A skilled waiter is like a ninja, always on alert and tuned into the needs of diners. They make sure your glass is never empty.
        </p>
    </div>

    <div className='servicesCard4'>
        <img src= {servicesCard4} alt='Stewerd'/>
        <div>
        <button>
          Stewerd
        </button>
        </div>
        <p>
        The chefs have experience of cooking in a busy hotel kitchen. Our chef is famous for her delicious cooking.
        </p>
    </div>

      </div>
      <section id="gallery">
        <NewHero />
      </section>
      <Footer/>
  </div>
  )
};

export default PermanentChef;