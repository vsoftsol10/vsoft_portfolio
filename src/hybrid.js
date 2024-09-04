import React from 'react';
import { useNavigate } from 'react-router-dom';
import './tyapps.css';
import imageSrc from './images/hybrid.webp';
import imageSrcs from './images/hybrid2.webp';
import { FaArrowLeft } from 'react-icons/fa';
function NativeAppDevelopment() {
  const navigate = useNavigate();

  const handleNavigateToForm = () => {
    navigate('/contact');
  };
  const handleGoBack = () => {
    navigate(-1); 
  };
  return (
    <div className="native-app-development-page">
      <div className="content-and-image">
        <div className="content">
          <h1 className="hr" >Hybrid App Development</h1>
          <p className= "pr">
          Hybrid app development solutions promise a single and easily maintainable code base, a broad reach, cost-effective access to native features, and increased compatibility.
          </p>
          <button className="natives" onClick={handleNavigateToForm}>Contact</button>
        </div>
        <div className="image">
          <img src={imageSrc} alt="hybrid App Development" />
        </div>
      </div>

      <div className="card-grid">
        <div className="cards">
          <h3>Advantages</h3>
          <ul>
            <li><i className="fas fa-check red-tick"></i>Accelerated updates</li>
            <li><i className="fas fa-check red-tick"></i> Consistent UX;</li>
            <li><i className="fas fa-check red-tick"></i>Analytics and scalability.</li>
          </ul>
        </div>
        <div className="cards">
          <h3>Limitations</h3>
          <ul>
            <li><i className="fas fa-check red-tick"></i>Platform-pertinent limitations</li>
            <li><i className="fas fa-check red-tick"></i> Some security concerns;</li>
            <li><i className="fas fa-check red-tick"></i>Dependency on plugins.</li>
          </ul>
        </div>

        <div className="cards">
          <h3>Best for</h3>
          <ul>
            <li><i className="fas fa-check red-tick"></i> Basic functionality requirements</li>
            <li><i className="fas fa-check red-tick"></i> Rapid app development timelines</li>
            <li><i className="fas fa-check red-tick"></i> Integration needs.</li>
          </ul>
        </div>
      </div>

      <div className="content-and-images">
  <div className="content">
    <h2 className='hrs'>Professional Hybrid Mobile App Development</h2>
    <p className='prs'>
      Our team of experts is skilled in delivering cutting-edge Hybrid Mobile Application Development solutions that offer:
    </p>
    <ul>
      <li className="lis"><i className="fas fa-check red-tick"></i> Cross-platform compatibility with a single codebase</li>
      <li className="lis"><i className="fas fa-check red-tick"></i> Cost-effective development with reusable code</li>
      <li className="lis"><i className="fas fa-check red-tick"></i> Faster time-to-market with streamlined development</li>
      <li className="lis"><i className="fas fa-check red-tick"></i> Access to native features with hybrid frameworks</li>
      <li className="lis"><i className="fas fa-check red-tick"></i> Simplified maintenance and updates across platforms</li>
    </ul>
  </div>
  <div className="image">
    <img src={imageSrcs} alt="Hybrid App Development" />
  </div>
</div>
<button className="back-button" onClick={handleGoBack}>
        <FaArrowLeft /> Back
      </button>
    </div>
  );
}

export default NativeAppDevelopment;
