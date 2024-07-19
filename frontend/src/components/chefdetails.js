import React from 'react';
import Dropdown from './Dropdown';
import './chefdetails.css';
import chefpic from '../assests/chefpic.jpeg';
import NewHero from './NewHero';
import Footer from './Footer';


const  Chefdetails = (onClose) => {
  return (
    <div>
        <h2 className='heading'>
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
      
       <div className='details-card details-card1'>
        <div className='details-text'>
         <h3 className='chef-name'>
            Priya Kapoor
         </h3>
         <p>
          Priya Kapoor is a dedicated and innovative chef known for her ability to blend traditional Indian flavors with contemporary culinary techniques. With over 7 years of experience in the culinary industry, Priya's journey began in her grandmother's kitchen, where she developed a profound appreciation for the art of cooking. She has mastered various cuisines, with a special focus on South Indian, Continental, and Fusion dishes.
         </p>
        </div>

        <div className='detail-image'>
        <img src={chefpic} alt='chef-image' className='chefpic'/>
        </div>
       </div>

       <div className='details-card details-card2'>
        <div className='details-text'>
         <h3 className='chef-name'>
          Rajesh Singh
         </h3>
         <p>
          Rajesh Singh is a culinary virtuoso known for his expertise in blending traditional Indian cooking techniques with modern gastronomic innovations. With a rich career spanning over a decade, Rajesh has a profound understanding of regional Indian cuisines and a knack for creating unique fusion dishes that delight the senses.
         </p>
        </div>

        <div className='detail-image'>
        <img src={chefpic} alt='chef-image' className='chefpic'/>
        </div>
       </div>
      <section id="gallery">
        <NewHero />
      </section>
      <Footer/>
    </div>
  )
};

export default Chefdetails;