import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './tyapps.css';
import imageSrc from './images/progress.webp';
import imageSrcs from './images/pws.webp';
import { FaArrowLeft } from 'react-icons/fa';

function Cross() {
  const [selectedButton, setSelectedButton] = useState(null);
  const navigate = useNavigate();

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  const handleNavigateToForm = () => {
    navigate('/contact');
  };
  const handleNavigateToForms = () => {
    navigate('/cross2');
  };
  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="native-app-development-page">
      <div className="content-and-images">
        <div className="content">
          <h2 className='hrs'>Progressive Web App Development</h2>
          <p className='prs'>
          The pros of PWAs lie in their seamless UX, achieved through features like offline functionalities, push notifications, and home screen installation.
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
      <li><i className="fas fa-check red-tick"></i> Enhanced discoverability</li>
      <li><i className="fas fa-check red-tick"></i> Simplified installation</li>
      <li><i className="fas fa-check red-tick"></i> Offline functionality support</li>
    </ul>
  </div>
  <div className="cards">
    <h3>Limitations</h3>
    <ul>
      <li><i className="fas fa-check red-tick"></i> Limited app store exposure</li>
      <li><i className="fas fa-check red-tick"></i> Restricted access to hardware</li>
      <li><i className="fas fa-check red-tick"></i> Performance constraints</li>
    </ul>
  </div>
  <div className="cards">
    <h3>Best for</h3>
    <ul>
      <li><i className="fas fa-check red-tick"></i> Improved SEO</li>
      <li><i className="fas fa-check red-tick"></i> Lower data usage</li>
      <li><i className="fas fa-check red-tick"></i> Ease of maintenance</li>
    </ul>
  </div>
</div>



<div className="content-and-images">
  <div className="content">
    <h2 className='hrs'>Professional Progressive Web App Development</h2>
    <p className='prs'>
      Our skilled team delivers top-notch Progressive Web App (PWA) development services, ensuring:
    </p>
    <ul>
      <li className="lis"><i className="fas fa-check red-tick"></i> Enhanced discoverability</li>
      <li className="lis"><i className="fas fa-check red-tick"></i> Simplified installation</li>
      <li className="lis"><i className="fas fa-check red-tick"></i> Offline functionality support</li>
      <li className="lis"><i className="fas fa-check red-tick"></i> Improved SEO and performance</li>
      <li className="lis"><i className="fas fa-check red-tick"></i> Cross-platform accessibility</li>
    </ul>
    <button className="nativess" onClick={handleNavigateToForms}>Enquiry?</button>
  </div>
  <div className="image">
    <img src={imageSrcs} alt="Progressive Web App Development" />
  </div>
</div>
<button className="back-button" onClick={handleGoBack}>
        <FaArrowLeft /> Back
      </button>
    </div>
  );
}

export default Cross;
