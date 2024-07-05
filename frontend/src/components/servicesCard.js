import React from 'react';
import servicesCard1 from '../assests/servicesCard1.jpg';
import servicesCard2 from '../assests/servicesCard2.jpg';
import servicesCard3 from '../assests/servicesCard3.jpg';
import servicesCard4 from '../assests/servicesCard4.png';

const servicesCard = ({ onClose }) => {
  return (
  <div>
      <div className='servicesCardContent'>
        <h2>
          Permanent Chef
        </h2>
      </div>

      <div className='servicesCardContent1'>
        <h4>
          What are yoy Looking for?
        </h4>
      </div>

    <div className='servicesCard1'>
        <img src= {servicesCard1} alt='Chefs'/>
        <div>
        <p>
            Chefs
        </p>
        </div>
        <p>
        The chefs have experience of cooking in a busy hotel kitchen. Our chef is famous for her delicious cooking.
        </p>
    </div>

    <div className='servicesCard2'>
        <img src= {servicesCard2} alt='Bartenders'/>
        <div>
        <p>
          Bartenders
        </p>
        </div>
        <p>
        If it requires a blender, then we're out of that drink.Full-time bartender, part-time therapist, part-time philosopher.
        </p>
    </div>

    <div className='servicesCard3'>
        <img src= {servicesCard3} alt='Waiters'/>
        <div>
        <p>
          Waiters
        </p>
        </div>
        <p>
        A skilled waiter is like a ninja, always on alert and tuned into the needs of diners. They make sure your glass is never empty.
        </p>
    </div>

    <div className='servicesCard4'>
        <img src= {servicesCard4} alt='Stewerd'/>
        <div>
        <p>
          Stewerd
        </p>
        </div>
        <p>
         
        </p>
    </div>

  </div>
  )
};

export default servicesCard;