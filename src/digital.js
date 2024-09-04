

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './website.css';
import { useNavigate } from 'react-router-dom';
import serviceImage1 from './images/posters.gif';
import serviceImage2 from './images/logoss.gif';
import serviceImage3 from './images/3dlogo.gif';
import serviceImage4 from './images/pr video.gif';
import serviceImage5 from './images/cards.gif';

const ServicePage = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const packageDetailsRef = useRef(null);
  const imageRef = useRef(null);
  const detailItemsRef = useRef([]);
  
  const packages = [
    {
      title: 'POSTERS',
      price: '₹ 150 /-Each',
      details: [
        'Looking to make a powerful impression? Ourcustom-designed promotional posters arethe perfect way to grab attention and convey your message with style and impact',
      ],
      image: serviceImage1,
    },
    {
        title: 'BRANDMARK LOGO',
        price: '₹ 299',
        details: [
          'A logo is a distinct symbol or design that represents a brand, company, organization, serving as its visual identity.',
        ],
        image: serviceImage2,
      },
      {
        title: '3D LOGO',
        price: '₹ 499',
        details: [
          'A 3D logo is a design that incorporates shading, and perspective to create a three-dimensional appearance,giving the logo a more dynamic and realisic look.',
        ],
        image:serviceImage3,
      },
    {
      title: 'PROMOTIONAL VIDEOS',
      price: '₹ 299/-per videos',
      details: [
        'In todays digital world  video is the most powerful tool to connect with your audience.Our custom promotional videos are designed to engage, inform, and inspire action.',
      ],
      image: serviceImage4,
    },
    {
      title: 'DIGITAL CARDS',
      price: '₹ 300 to 499',
      details: [
        'In a world where first impressions matter, our sleek and modern digital card designs are the perfect way to showcase your brand with style and sophistication. Whether it’s for business networking, eventinvitations, or personal greetings, our digital cards are designed toleave a lasting impact',
      ],
      image: serviceImage5,
    },
    
  ];
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1); // Navigate to the previous page
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
    <section className="service-sections">
      <aside className="sidebarss">
        <h2 className="hh">Marketing Packages</h2>
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

