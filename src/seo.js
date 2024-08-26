


import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './website.css';
import { useNavigate } from 'react-router-dom';
import serviceImage1 from './images/seos.gif';


const ServicePage = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const packageDetailsRef = useRef(null);
  const imageRef = useRef(null);
  const detailItemsRef = useRef([]);
 
  const packages = [
    {
      title: 'HOME PACKAGE',
      price: '2,000 to 50,000/-',
      details: [
        'Improves digital marketing ROI',
        'Drives high-quality traffic to your website',
        'Promotes your company all day, every day',
        'Generates more leads, sales, and market share',
        'Makes your digital marketing strategy stronger',
        'Reaches every member of your target audience',
        'Helps you outrank your toughest competitors'
     
      ],
      image: serviceImage1,
    },
   
  ];

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/services');
  };

  useEffect(() => {
    if (selectedPackage !== null && packageDetailsRef.current) {
      // Reset any previous animations
      gsap.set(packageDetailsRef.current, { autoAlpha: 0, x: -100 });
      gsap.set(imageRef.current, { autoAlpha: 0, x: 100 });
      gsap.set(detailItemsRef.current, { autoAlpha: 0, y: 50 });

      // Animate the package details container
      gsap.to(packageDetailsRef.current, {
        autoAlpha: 1,
        x: 0,
        duration: 1,
      });

      // Animate the image from the right
      gsap.to(imageRef.current, {
        autoAlpha: 1,
        x: 0,
        duration: 1,
        delay: 0.5, // slight delay for better timing with details
      });

      // Animate each detail item from the bottom with staggered timing
      gsap.to(detailItemsRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.3,
        delay: 1, // delay to ensure it starts after the image
      });
    }
  }, [selectedPackage]);

  return (
    <section className="service-section">
      <aside className="sidebarss">
        <h2 className="hh">SEO Packages</h2>
        <ul className="sideul">
          {packages.map((pkg, index) => (
            <li
              key={pkg.title}
              className={selectedPackage === index ? 'active' : ''}
              onClick={() => setSelectedPackage(index)}
            >
              {pkg.title}
            </li>
          ))}
        </ul>
      </aside>
      <div className="backBtn" onClick={handleBackClick}>
        <span className="line tLine"></span>
        <span className="line mLine"></span>
        <span className="label">Back</span>
        <span className="line bLine"></span>
      </div>
      <main className="main-content">
        {selectedPackage !== null && (
          <div className="package-details active" ref={packageDetailsRef}>
            <h3 className="package-title">{packages[selectedPackage].title}</h3>
            <img
              src={packages[selectedPackage].image}
              alt={packages[selectedPackage].title}
              className="service-image"
              ref={imageRef}
            />
            <p className="package-price">{packages[selectedPackage].price}</p>
            <ul className="details-list">
              {packages[selectedPackage].details.map((detail, i) => (
                <li
                  key={i}
                  className="detail-item"
                  ref={(el) => (detailItemsRef.current[i] = el)}
                >
                  <span className="icon">✓</span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </section>
  );
};

export default ServicePage;

