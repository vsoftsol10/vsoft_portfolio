
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './website.css';
import { useNavigate } from 'react-router-dom';
import serviceImage1 from './images/uiss.gif';
import serviceImage2 from './images/ux.gif';
import image from './images/ui.webp';
const ServicePage = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const packageDetailsRef = useRef(null);
  const imageRef = useRef(null);
  const detailItemsRef = useRef([]);
  const packages = [
    {
        "title": "UI Package",
        "price": "Start From ₹ 5,000",
        "details": [
          "Initial Consultation: Discussion of project goals, target audience, and design preferences.",
          "Wireframes: Basic wireframes for key pages or screens.",
          "UI Design: Simple design for a small website or app, including basic layout and visual style.",
          "Interactive Elements: Design of key UI components (e.g., buttons, forms).",
          "Feedback and Revisions: One or two rounds of revisions based on client feedback.",
          "Delivery: Final design files in formats such as Sketch, Figma, or Adobe XD."
        ],
        "image":serviceImage1
      },
      {
        "title": " UX Package",
        "price": "Start From ₹ 4,000",
        "details": [
          "Initial Consultation: Understanding project goals, user needs, and pain points.",
          "User Research: Basic research methods such as user surveys or interviews.",
          "Wireframes: Low-fidelity wireframes for key screens or pages.",
          "User Flow: Simple user flow diagrams showing the path users take to complete key tasks.",
          "Feedback and Revisions: One round of revisions based on initial feedback.",
          "Delivery: Final wireframes and user flow diagrams in digital format."
        ],
        "image":serviceImage2
      }
  ];

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); 
  };

  const  bannercontentRef= useRef(null);


  const handleContactClick = () => {
    navigate('/contact'); 
  };
  const bannerRefs = useRef([]);
 const bannersData = [
  {
    headings: "UI/UX Design",
    secondaryHeading: "Beautiful and User-Friendly Designs",
    buttonText: "SEE DESIGNS",
    image: image,
    description: "Our team designs seamless and intuitive experiences to engage your customers.",
    bannerStyle: {
      backgroundColor: "#8e24aa",
      color: "#fff",
    }
  },
   

   
  ];
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
      <h2 className="hh">App Package</h2>
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
                style={{
                 
              justifyContent: 'start',
              marginLeft:'10rem',
                }}
              >
                <div className="banners-contents" style={{
                  textAlign:'start',
                 
                 borderRadius:'30px',
                }} ref={bannercontentRef}>
                  <h1 style={{color:'white',}}>{banner.headings}</h1>
                  <h2  style={{color:'white',}}>{banner.secondaryHeading}</h2>
                  <button onClick={() => setSelectedPackage(0)} style={{
margin:'0'                 
                  }}>
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
