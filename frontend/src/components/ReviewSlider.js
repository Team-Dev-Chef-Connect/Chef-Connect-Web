import React from 'react';
import './ReviewSlider.css';

import Group35 from '../assests/Group 35.png';
import Group36 from '../assests/Group 36.png';
import Group37 from '../assests/Group 37.png';
import Group38 from '../assests/Group 38.png';
import Group39 from '../assests/Group 39.png';
import Group40 from '../assests/Group 40.png';

const ReviewSlider = () => {

  const reviews = [
    Group35,
    Group36,
    Group37,
    Group38,
    Group39,
    Group40
  ];

  return (
    <div className="review-slider">

    {reviews.map((review, index) => (
      <div key={index} className='review-card'>
            <img src={review} alt={`Slide ${index + 1}`} style={{ width: "112%"}} />
      </div>
    ))}
      
    </div>
  );
};

export default ReviewSlider;