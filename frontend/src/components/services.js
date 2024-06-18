
import './services.css';
import Left from '../assests/left.png';
import Right from '../assests/right.png';


const Services = () => {

  return (
    <div className="services">
      <div className="heading-container">
        <img src={Left} alt="line" className="line-image" />
        <h2>OUR SERVICES</h2>
        <img src={Right} alt="line" className="line-image" />
      </div>
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
          <button className="book-now" >BOOK NOW</button>
          <button className="know-more">KNOW MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
