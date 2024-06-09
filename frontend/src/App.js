import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/services';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import NewHero from './components/NewHero';

function App() {
  return (
    <Router>
      <div>
      <Navbar />
      <Hero />
      <Services/>
      <Testimonial/>
      <Contact />
      <NewHero />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
