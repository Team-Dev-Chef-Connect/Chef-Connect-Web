// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Signup from './Signup';
// import Login from './Login';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Services from './components/services'; 
// import Contact from './components/Contact';
// import NewHero from './components/NewHero';
// import Footer from './components/Footer';
// import OTPVerification from './OTP/OTPVerification';
// import EnterOTP from './OTP/EnterOTP';
// import ResendOTP from './OTP/ResendOTP';
// import OTPThanku from './OTP/OTPThanku';
// import Permanentchef from './pages/Permanentchef';

// function App() {
//   return (
//     <Router>
//       <div>
//             <>
//               <Navbar />
//               <section id="home">
//                 <Hero />
//               </section>
//               <section id="services">
//                 <Services />
//               </section>
//               <section id="contact">
//                 <Contact />
//               </section>
//               <section id="gallery">
//                 <NewHero />
//               </section>
//               <Footer />
//             </>
//         <Routes>
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login />} />
//           <Route path='/otpverify' element={<OTPVerification />} />
//           <Route path='/enterotp' element={<EnterOTP />} />
//           <Route path='/resendotp' element={<ResendOTP />} />
//           <Route path='/thanks' element={<OTPThanku />} />
//           <Route path="/permanentchef" element={<Permanentchef />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/services'; 
import Contact from './components/Contact';
import NewHero from './components/NewHero';
import Footer from './components/Footer';
import OTPVerification from './OTP/OTPVerification';
import EnterOTP from './OTP/EnterOTP';
import ResendOTP from './OTP/ResendOTP';
import OTPThanku from './OTP/OTPThanku';
import PrivacyPolicy from './Footerpages/PrivacyPolicy';
import Terms from './Footerpages/Terms';
import PermanentChef from './components/PermanentChef';
import ReviewSlider from './components/ReviewSlider';
import Chefdetails  from './components/chefdetails';
import ForChef from './components/forChef';
import Forhotels from './components/forhotels';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <section id="home">
                <Hero />
              </section>
              <section id="services">
                <Services />
              </section>
              <section>
                <ReviewSlider/>
              </section>
              <section id="contact">
                <Contact />
              </section>
              <section id="gallery">
                <NewHero />
              </section>
              <Footer />
            </>
          } />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forchef" element={<ForChef />} />
          <Route path="/forhotels" element={<Forhotels />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otpverify" element={<OTPVerification />} />
          <Route path="/enterotp" element={<EnterOTP />} />
          <Route path="/resendotp" element={<ResendOTP />} />
          <Route path="/thanks" element={<OTPThanku />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />}/>
          <Route path='/terms-of-service' element={<Terms />} />
          <Route path='/permanent-chef' element={<PermanentChef />}/>
          <Route path='/details-click' element={<Chefdetails/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
