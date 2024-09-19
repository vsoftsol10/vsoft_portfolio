import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './website.css';
import { useNavigate } from 'react-router-dom';
import serviceImage1 from './images/web1.gif';
import serviceImage2 from './images/web2.gif';
import serviceImage3 from './images/web3.gif';
import serviceImage4 from './images/web4.gif';
import  image from './images/web111.webp'; 

const ServicePage = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const packageDetailsRef = useRef(null);
  const imageRef = useRef(null);
  const detailItemsRef = useRef([]);
  const  bannercontentRef= useRef(null);

  const bannerRefs = useRef([]);

  const bannersData = [
    {
      headings: "Welcome to VSoft Solutions",
      secondaryHeading: "Tailored Web Solutions for Every Need",
      buttonText: "EXPLORE",
      image: image,
  
    },
   
  ];
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
      title: 'Pro Package',
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
  ];

  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact'); 
  };
 
  const handleBackClick = () => {
    navigate(-1); 
  };

  useEffect(() => {
    if (selectedPackage !== null && packageDetailsRef.current) {
      gsap.set(packageDetailsRef.current, { autoAlpha: 0, x: -100 });
      gsap.set(imageRef.current, { autoAlpha: 0, x: 100 });
      gsap.set(detailItemsRef.current, { autoAlpha: 0, y: 50 });

      gsap.to(packageDetailsRef.current, {
        autoAlpha: 1,
        x: 0,
        duration: 1,
      });

      gsap.to(imageRef.current, {
        autoAlpha: 1,
        x: 0,
        duration: 1,
        delay: 0.5,
      });

      gsap.to(detailItemsRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.3,
        delay: 1,
      });
    }
  }, [selectedPackage]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const bannercontentRef = document.querySelectorAll('.banners-contents');
    // Animate banner content
    gsap.fromTo('.banners-contents h1',
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 5, ease: 'power2.out' }
    );
  
    gsap.fromTo('.banners-contents h2',
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 3, delay: 5, ease: 'power2.out' }
    );

    
    return () => {
      gsap.killTweensOf('.banners-contents h1');
      gsap.killTweensOf('.banners-contents h2');
   
    };
  }, []);

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
        {selectedPackage === null ? (
              <div className="banner-containers"  style={{ 
                backgroundImage: `url(${image})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '200%',
                width: '110%',
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'start'

              }}>
              {bannersData.map((banner, index) => (
                <div 
                  key={index} 
                  className="banners" 
                 
                  ref={(el) => (bannerRefs.current[index] = el)}
                >
                  <div className="banners-contents" style={{
                   
                   borderRadius:'30px',
                  }} ref={bannercontentRef}>
                    <h1 style={{color:'white',}}>{banner.headings}</h1>
                    <h2  style={{color:'black',backgroundColor: 'rgba(255, 255, 255, 1)',}}>{banner.secondaryHeading}</h2>
                    <button onClick={() => setSelectedPackage(0)}>
          {banner.buttonText}
        </button>
                  </div>
                </div>
              ))}
            </div>
        ) : (
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
            <button className="contact-button" onClick={handleContactClick}>Contact Us</button>
          </div>
        )}
      </main>
    </section>
  );
};

export default ServicePage;
