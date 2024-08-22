import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Services from './Services'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/about" element={<About/>} />
           <Route path="/services" element={<Services/>} />
      </Routes>
    </Router>
  );
}

export default App;
