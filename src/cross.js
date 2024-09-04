import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './tyapps.css';
import imageSrc from './images/Native Image 2.webp';
import imageSrcs from './images/cross2.webp';
import { FaArrowLeft } from 'react-icons/fa';

function Cross() {
  const [selectedButton, setSelectedButton] = useState(null);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };

  const handleNavigateToForm = () => {
    navigate('/contact');
  };
  const handleNavigateToForms = () => {
    navigate('/cross2');
  };

  return (
    <div className="native-app-development-page">
      <div className="content-and-images">
        <div className="content">
          <h2 className='hrs'>Cross-Platform App Development</h2>
          <p className='prs'>
            Cross-platform engineering is the way to advanced and protected yet lightweight apps. Andersen will adapt deliverables to multiple OSs and meet your expectations.
          </p>
          <button className="nativess" onClick={handleNavigateToForm}>Contact</button>
        </div>
        <div className="image">
          <img src={imageSrc} alt="Cross-Platform App Development" />
        </div>
      </div>

      <div className="card-grid">
        <div className="cards">
          <h3>Advantages</h3>
         <ul>
            <li><i className="fas fa-check red-tick"></i> Cost-effective app development</li>
            <li><i className="fas fa-check red-tick"></i> Quick time-to-market</li>
            <li><i className="fas fa-check red-tick"></i> Sharable and reusable code</li>
          </ul>
        </div>
        <div className="cards">
          <h3>Limitations</h3>
           <ul>
            <li><i className="fas fa-check red-tick"></i> Lower performance</li>
            <li><i className="fas fa-check red-tick"></i> Limited access to features</li>
            <li><i className="fas fa-check red-tick"></i> Design consistency challenges</li>
          </ul>
        </div>
        <div className="cards">
          <h3>Best for</h3>
          <ul>
            <li><i className="fas fa-check red-tick"></i> Straightforward functionalities</li>
            <li><i className="fas fa-check red-tick"></i> MVP prototypes</li>
            <li><i className="fas fa-check red-tick"></i> Budget-conscious app projects</li>
          </ul>
        </div>
      </div>


      <div className="content-and-images">
        <div className="content">
          <h2 className='hrs'>Professional Cross-Platform Development</h2>
          <p className='prs'>
            Knowledgeable and experienced IT experts possess all the necessary hands-on skills to carry out your Cross-Platform Application Development initiatives in:
          </p>
          <ul>
            <li className= "lis"><i className="fas fa-check red-tick"></i> mCommerce app development</li>
            <li className= "lis"><i className="fas fa-check red-tick"></i> Wearables and IoT development</li>
            <li className= "lis"><i className="fas fa-check red-tick"></i> Logistics app development</li>
            <li className= "lis"><i className="fas fa-check red-tick"></i> Consumer app development</li>
            <li className= "lis"><i className="fas fa-check red-tick"></i> Industrial app development</li>
          </ul>
          <button className="nativess" onClick={handleNavigateToForms}>Enquiry?</button>
        </div>
        <div className="image">
          <img src={imageSrcs} alt="Cross-Platform App Development" />
        </div>
      </div>
      <button className="back-button" onClick={handleGoBack}>
        <FaArrowLeft /> Back
      </button>
    </div>
  );
}

export default Cross;
