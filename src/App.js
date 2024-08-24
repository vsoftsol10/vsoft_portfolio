import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Services from './Services'
import Creation from './creation'
function App() {
  return (
    <Router>
      <Helmet>
        <title>V Soft</title>
        <meta name="description" content="Welcome to my website" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/about" element={<About/>} />
           <Route path="/services" element={<Services/>} />
           <Route path="/creation" element={<Creation/>} />
      </Routes>
    </Router>
  );
}

export default App;
