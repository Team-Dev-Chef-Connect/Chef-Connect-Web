// src/ReviewSlider.js
import React from 'react';
import './ReviewSlider.css';

const reviews = [
  {
    name: 'Priya Sharma',
    text: `Booking a chef through Chef Connect India was one of the best decisions I've made. The chef arrived on time, was very professional, and cooked an incredible meal. The website made it easy to find and book the right chef for our event. Highly recommend!`,
    stars: '★★★★★'
  },
  {
    name: 'Arjun Verma',
    text: `Chef Connect India is a wonderful service for anyone looking to hire a chef. We used their service for a family dinner, and the chef was exceptional. The food was delicious, and the entire experience was seamless from start to finish. Great value for money!`,
    stars: '★★★★'
  },
  {
    name: 'Anita Singh',
    text: `I recently used Chef Connect India for a dinner party, and I couldn't be more impressed. The chef was punctual, courteous, and prepared a mouth-watering meal that all my guests loved. The whole process was smooth and hassle-free. Will definitely use their service again.`,
    stars: '★★★★★'
  },
  {
    name: 'Rohit Mehra',
    text: `Chef Connect India has been a game-changer for our family gatherings. We hired a chef for our last reunion, and the experience was phenomenal. The chef was professional, skilled, and the food was absolutely delicious. Highly recommend their services!`,
    stars: '★★★★'
  }
];

const ReviewSlider = () => {
  return (
    <div className="review-slider">
      {reviews.map((review, index) => (
        <div className="review-card" key={index}>
          <h3>{review.name}</h3>
          <p>{review.text}</p>
          <div className="stars">{review.stars}</div>
        </div>
      ))}
    </div>
  );
};

export default ReviewSlider;