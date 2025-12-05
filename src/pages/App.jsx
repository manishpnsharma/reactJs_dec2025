import { useState } from 'react'
 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './HomePage'; // Import the Home component
import About from './About'; // Example of another page


 
import MainLayout from './MainLayout';
import HomePage from './HomePage';
import AboutPage from './About';



function App() {
  return (
    <Router>
      <div className="App">
        {/* You can add a Navbar or Header component here, outside of Routes, if desired */}
        <Routes>
          {/* This route maps the path "/" to the Home component */}
          <Route path="/" element={<Home />} /> 
          
          {/* Example of another route */}
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

