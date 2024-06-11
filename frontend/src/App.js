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
import Footer from './components/Footer';
import OTPVerification from './OTP/OTPVerification';
import EnterOTP from './OTP/EnterOTP';
import ResendOTP from './OTP/ResendOTP';
import OTPThanku from './OTP/OTPThanku';

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
        <Footer/>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path='/otpverify' element={<OTPVerification/>} />
          <Route path='/enterotp' element={<EnterOTP/>} />
          <Route path='resendotp' element={<ResendOTP/>} />
          <Route path='/thanks' element={<OTPThanku />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
