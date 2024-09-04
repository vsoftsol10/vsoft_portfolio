import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

import './website.css';
import { useNavigate } from 'react-router-dom';
import serviceImage1 from './images/web1.gif';
import serviceImage2 from './images/web2.gif';
import serviceImage3 from './images/web3.gif';
import serviceImage4 from './images/web4.gif';
import logo from './images/vslogo.png';

const ServicePage = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const packageDetailsRef = useRef(null);
  const imageRef = useRef(null);
  const detailItemsRef = useRef([]);
  const markerRef = useRef(null);
  const listRefs = useRef([]);
  const bannerRefs = useRef([]);
  const pageTransitionRef = useRef(null);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const headingRef = useRef(null);
  const packages = [
    {
      title: 'Home Package',
      price: '₹ 15,000',
      details: [
        'Up to 10 Pages',
        'Image Optimization',
        'Responsive/Mobile Friendly',
        'Website Security/SSL',
        'Free Basic Hosting',
        'Performance Tracking',
        '1 Month FREE Website Maintenance Package',
      ],
      image: serviceImage1,
    },
    {
      title: 'Pro  Package',
      price: '₹ 20,000',
      details: [
        'Up to 20 Pages',
        'Image Optimization',
        'Structure Optimization',
        '3 Website Security',
        'Responsive / Mobile Friendly',
        'Website Security/SSL',
        'FREE Basic Hosting',
        'Performance Tracking',
        '1 Month FREE Website Maintenance Package',
      ],
      image: serviceImage2,
    },
    {
      title: 'E-Commerce Package',
      price: '₹ 30,000',
      details: [
        'Up to 100 Products/Variations & 20 Pages',
        'Image Optimization',
        'Structure Optimizations',
        'SEO Optimizations',
        'E-Commerce Integration',
        'Banners for Core Pages (5 max)',
        'FREE Basic Hosting',
        'Performance Tracking',
        '1 Month FREE Website Maintenance Package',
      ],
      image: serviceImage3,
    },
    {
      title: 'Tailored Package',
      price: 'Depends On Requirements',
      details: [
        'Unlimited Pages',
        'Image Optimization',
        'Structure Optimization',
        'SEO Optimization',
        'E-Commerce Integration',
        'Third Party Integration',
        'Banners for Core Pages (10 max)',
        'Responsive / Mobile Friendly',
        'Website Security/SSL',
        'FREE Basic Hosting',
        'Performance Tracking',
        '1 Month FREE Website Maintenance Package',
      ],
      image: serviceImage4,
    },
  ];

  const navigate = useNavigate();
  const handleMenuToggle = () => {
    if (window.innerWidth <= 568) { // Check if the screen width is 768px or less
      navRef.current.classList.toggle('show');
      
     
    }
  };
  const handleBackClick = () => {
    navigate(-1); 
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
  const marker = markerRef.current;
  const banners = bannerRefs.current;
  const list = listRefs.current;
  const pageTransition = pageTransitionRef.current;
  const nav = navRef.current;
  const logo = logoRef.current;
  const heading = headingRef.current;



  const bannercontentRef = document.querySelectorAll('.banner-content');



  // Move indicator animation
  function moveIndicator(e) {
    if (marker) {
      gsap.to(marker, { left: e.target.offsetLeft, width: e.target.offsetWidth, duration: 0.5 });
    }
  }

  function activeLink(e) {
    list.forEach((item) => {
      if (item) item.classList.remove('active');
    });
    e.target.closest('li').classList.add('active');
  }

  list.forEach((item) => {
    if (item) {
      item.addEventListener('mousemove', moveIndicator);
      item.addEventListener('mouseover', activeLink);
    }
  });



  gsap.fromTo(pageTransition, 
    { opacity: 0, scale: 0.8 }, 
    { opacity: 1, scale: 1, duration: 1.5, ease: 'power2.out' }
  );

  // Logo rotation animation
  gsap.fromTo(logo, 
    { rotate: 0 }, 
    { rotate: 360, duration: 2, ease: 'power2.inOut' }
  );

  // Heading animations
  gsap.fromTo(heading, 
    { opacity: 0, y: '100%' },
    { opacity: 1, y: '0%', duration: 1.5, delay: 1, ease: 'power2.out' }
  );



  // Navigation animation
  gsap.fromTo(nav, 
    { opacity: 0, x: '100%' },
    { opacity: 1, x: '0%', duration: 1.5, delay: 2, ease: 'power2.out' }
  );
  return (

        
    <section className="service-sections">
      <aside className="sidebarss">
        <h2 className="hh">Website Packages</h2>
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
            <div className="image-container">
              <img
                src={packages[selectedPackage].image}
                alt={packages[selectedPackage].title}
                className="service-image"
                ref={imageRef}
              />
            </div>
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
