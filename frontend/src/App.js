import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/services';

function App() {
  return (
    <Router>
      <div>
      <Navbar />
      <Hero />
      <Services/>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
