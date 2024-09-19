import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';

import About from './About';
import Services from './Services'
import Creation from './creation'
import Website from './website'
import Appdevelop from './appdevelop'
import Digital from './digital'
import Seo from './seo'
import Ui from './ui'
import Career from './Career'
import Ws from './ws'
import Appsdevelop from './appsdevelop'
import Digi from './digi'
import Seo2 from './seo2'
import Ui2 from './ui2'
import Native from './native-app-development';
import Cross from './cross';
import Contactform from './cross2';
import Hybrid from './hybrid';
import Progressive from './progressive';
import Jobs from './jobs';
import Jobss from './Jobsapplication';
import Job from './course';
import Jo from './intern';
import Jobsss from './courses';
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
           <Route path="/cross2" element={<Contactform />} />
           <Route path="/about" element={<About/>} />
           <Route path="/services" element={<Services/>} />
           <Route path="/creation" element={<Creation/>} />
           <Route path="/appdevelop" element={<Appdevelop/>} />
           <Route path="/digital" element={<Digital/>} />
           <Route path="/seo" element={<Seo/>} />
           <Route path="/ui" element={<Ui/>} />
           <Route path="/career" element={<Career />} />
           <Route path="/website" element={<Website/>} />
           <Route path="/ws" element={<Ws/>} />
           <Route path="/appsdevelop" element={<Appsdevelop/>} />
           <Route path="/digi" element={<Digi/>} />
           <Route path="/" element={<Seo2/>} />
           <Route path="/seo2" element={<Seo2/>} />
           <Route path="/ui2" element={<Ui2/>} />
           <Route path="/native-app-development" element={<Native/>} />
           <Route path="/cross" element={<Cross/>} />
           <Route path="/hybrid" element={<Hybrid/>} />
           <Route path="/progressive" element={<Progressive/>} />
           <Route path="/jobs" element={<Jobs/>} />
           <Route path="/course" element={<Job/>} />
           <Route path="/courses" element={<Jobsss/>} />
           <Route path="/jobsapplication" element={<Jobss/>} />
           <Route path="/intern" element={<Jo/>} />
      </Routes>
    </Router>
  );
}

export default App;
