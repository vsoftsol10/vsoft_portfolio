import React from 'react';
import { useNavigate } from 'react-router-dom';
import './tyapps.css';
import imageSrc from './images/Native Image 1.webp';
import imageSrcs from './images/natives.webp';
import { FaArrowLeft } from 'react-icons/fa';

function NativeAppDevelopment() {
  const navigate = useNavigate();

  const handleNavigateToForm = () => {
    navigate('/your-form-route');
  };
  const handleGoBack = () => {
    navigate(-1); 
  };
  return (
    <div className="native-app-development-page">
      <div className="content-and-image">
        <div className="content">
          <h1 className="hr" >Native Mobile App Development</h1>
          <p className= "pr">
            Empower your support team with our help desk applications, facilitating streamlined issue resolution and customer inquiries.
          </p>
          <button className="natives" onClick={handleNavigateToForm}>Contact</button>
        </div>
        <div className="image">
          <img src={imageSrc} alt="Native App Development" />
        </div>
      </div>

      <div className="card-grid">
        <div className="cards">
          <h3>Advantages</h3>
          <ul>
            <li><i className="fas fa-check red-tick"></i> High app performance and speed</li>
            <li><i className="fas fa-check red-tick"></i> Convenient UI/UX</li>
            <li><i className="fas fa-check red-tick"></i> Top security</li>
          </ul>
        </div>
        <div className="cards">
          <h3>Limitations</h3>
          <ul>
            <li><i className="fas fa-check red-tick"></i> High upfront and maintenance costs</li>
            <li><i className="fas fa-check red-tick"></i> Slow time-to-market</li>
            <li><i className="fas fa-check red-tick"></i> No code reusability</li>
          </ul>
        </div>
        <div className="cards">
          <h3>Best for</h3>
          <ul>
            <li><i className="fas fa-check red-tick"></i> Complex mobile applications</li>
            <li><i className="fas fa-check red-tick"></i> High performance and a smooth UI</li>
            <li><i className="fas fa-check red-tick"></i> Apps with heavy data processing</li>
          </ul>
        </div>
      </div>

      <div className="content-and-images">
        <div className="content">
          <h2 className='hrs'>Professional Native Mobile App Development</h2>
          <p className='prs'>
            Knowledgeable and experienced IT experts possess all the necessary hands-on skills to carry out your Native Mobile Application Development initiatives in:
          </p>
          <ul >
            <li className= "lis"><i className="fas fa-check red-tick"></i> High-performance apps with native capabilities</li>
            <li  className= "lis"><i className="fas fa-check red-tick"></i> Seamless integration with device hardware</li>
            <li  className= "lis" ><i className="fas fa-check red-tick"></i> Optimized for speed and responsiveness</li>
            <li  className= "lis"><i className="fas fa-check red-tick"></i> Enhanced user experience with native UI components</li>
            <li  className= "lis"><i className="fas fa-check red-tick"></i> Reliable and scalable solutions</li>
          </ul>
         
        </div>
        <div className="image">
          <img src={imageSrcs} alt="Native App Development" />
        </div>
      </div>
      <button className="back-button" onClick={handleGoBack}>
        <FaArrowLeft /> Back
      </button>
    </div>
  );
}

export default NativeAppDevelopment;
