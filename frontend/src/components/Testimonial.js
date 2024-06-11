import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <div className="quote-symbol quote-left">“</div>
      <div className="testimonial-content">
        <h3>TESTIMONIAL</h3>
        <h2>What Client Say</h2>
        <p>
          "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor."
        </p>
        <div className="testimonial-footer">
          <div className="stars">
            ⭐⭐⭐⭐⭐
          </div>
          <div className="author">
            Vishal - Director at ChefConnect
          </div>
        </div>
      </div>
      <div className="quote-symbol quote-right">”</div>
    </div>
  );
};

export default Testimonial;
