import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import logo from './images/vslogo.png';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import image from './images/about2.png';
import gsap from 'gsap';
import lg from './images/menu.gif';
import Footer from './Footer';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CustomButton = styled(Button)({
  backgroundColor: 'rgba(80, 0, 80, 0.979)',
  marginTop: '10px',
  marginRight: '10px',
  color: 'white',
  borderRadius: '20px',
  width: '180px',
  '&:hover': {
    backgroundColor: 'rgba(60, 0, 60, 0.979)',
  },
});

const About = () => {
  const logoRef = useRef(null);
  const pageTransitionRef = useRef(null);
  const headingRef = useRef(null);
  const solutionsRef = useRef(null);
  const navRef = useRef(null);
  const markerRef = useRef(null);
  const listRefs = useRef([]);
  const valuesRef = useRef(null);
  const imageRef = useRef(null);
  const [activeSection, setActiveSection] = useState('mission');

  const handleMenuToggle = () => {
    navRef.current.classList.toggle('show');
  };

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };
  const handleButtonClicks = () => {
    if (valuesRef.current) {
      valuesRef.current.scrollIntoView({ behavior: 'smooth' });
    } };
  useEffect(() => {
    const pageTransition = pageTransitionRef.current;
    const nav = navRef.current;
    const logo = logoRef.current;


        
gsap.fromTo(pageTransition, 
{ opacity: 0, scale: 0.8 }, 
{ opacity: 1, scale: 1, duration: 1.5, ease: 'power2.out' }
);

gsap.fromTo(headingRef.current, 
{ opacity: 0, x: '-100%' },
{ opacity: 1, x: '0%', duration: 1.5, delay: 1, ease: 'power2.out' }
);

gsap.fromTo(solutionsRef.current, 
{ opacity: 0, y: '50px' },
{ opacity: 1, y: '0', duration: 1.5, delay: 1.5, ease: 'power2.out' }
);

gsap.fromTo(nav, 
{ opacity: 0, x: '100%' },
{ opacity: 1, x: '0%', duration: 1.5, delay: 2, ease: 'power2.out' }
);

gsap.fromTo(logo, 
{ rotate: 0 }, 
{ rotate: 360, duration: 2, ease: 'power2.inOut' }
);
    gsap.from(imageRef.current, {
      x: '-130%', // Start offscreen to the left
      opacity: 0, // Start with no opacity
      duration: 9, // Duration of the animation
      ease: 'power4.out', // Easing function
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top 80%', // Trigger animation when the image is 80% from the top
        toggleActions: 'play none none none',
      },
    });

    gsap.to(imageRef.current, {
      y: '-16%', // Move the image up by 10%
      duration: 4,
      ease: 'none',
      repeat: -1, // Infinite repeat for floating effect
      yoyo: true, // Reverse the animation after each iteration
    });

    gsap.fromTo('.banner-contents h1',
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 5, ease: 'power2.out' }
    );
   
    gsap.registerPlugin(ScrollTrigger);

    // Animate .hhss element
    gsap.to(".hhss", {
      scrollTrigger: {
        trigger: ".hhss",
        start: "top 80%",
        end: "bottom 60%",
        scrub: 1, // Smooth transition
      },
      opacity: 1, // Fade in effect
      x: 0, // Move to original position
      duration: 4,
    });
    
   
    gsap.to(".sdss", {
      scrollTrigger: {
        trigger: ".sdss", // Ensure the trigger is correct
        start: "top 80%",
        end: "bottom 60%",
        scrub: 1, // Smooth transition
      },
      opacity: 3, // Fade in effect
      y: 0, // Move to original position
      duration: 4,
    });
    
    gsap.to(".hh", {
      scrollTrigger: {
        trigger: ".hh",
        start: "top 80%",
        end: "bottom 60%",
        scrub: 1,
      },
      opacity: 1, // Fade in effect
      x: 0, 
      duration: 4,
    });
    
    // Animate .sd element
    gsap.to(".sd", {
      scrollTrigger: {
        trigger: ".sd",
        start: "top 80%",
        end: "bottom 60%",
        scrub: 1,
      },
      opacity: 1,
      x: 0,
      duration: 1,
    });
    
    if (activeSection === 'values') {
      const iconItems = document.querySelectorAll('.icon-item');
      iconItems.forEach((item, index) => {
        gsap.fromTo(item,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, delay: index * 0.5, duration: 0.5 }
        );
      });
    }
  }, [activeSection]);

  return (
    <div>
      <header className="App-header">
        <div className="header-left">
          <img src={logo} ref={logoRef} className="App-logo" alt="logo" />

        </div>
        <button className="menu-button" onClick={handleMenuToggle}>
  <img src={lg} alt="Menu" className="menu-gif" />
</button>
        <nav className="App-nav" ref={navRef}>
        <ul>
            <li ref={(el) => (listRefs.current[0] = el)}>
            <Link to="/home">
                <ion-icon name="home-outline"></ion-icon>
                <h6 className="custom-heading1">Vsflows</h6>
                </Link>
            </li>
            <li ref={(el) => (listRefs.current[1] = el)}>
            <Link to="/services">
                <ion-icon name="add-circle-outline"></ion-icon>
                <h6 className="custom-heading2">Services</h6>
                </Link>
            </li>
            <li ref={(el) => (listRefs.current[1] = el)} className="dropdown">
    <Link to="/services">
        <ion-icon name="add-circle-outline"></ion-icon>
        <h6 className="custom-heading2">Services</h6>
    </Link>
    <div className="dropdown-content">
        <Link to="/ws">Website  Development</Link>
        <Link to="/appsdevelop">App Development</Link>
        <Link to="/digi">Digital Marketing</Link>
        <Link to="/seo">Seo Services</Link>
        <Link to="/ui">UI/UX Designs</Link>
    </div>
</li>

            <li ref={(el) => (listRefs.current[3] = el)}>
            <Link to="/about">
                <ion-icon name="chatbubble-outline"></ion-icon>
                <h6 className="custom-heading2">About</h6>
                </Link>            </li>

                <li ref={(el) => (listRefs.current[0] = el)}>
            <Link to="/career">
                <ion-icon name="home-outline"></ion-icon>
                <h6 className="custom-heading1">Career</h6>
                </Link>
            </li>
                
            <li ref={(el) => (listRefs.current[4] = el)}>
  <Link to="/contact">
    <ion-icon name="person-outline"></ion-icon>
    <h6 className="custom-heading1">Contact</h6>
  </Link>
</li>
            <div id="marker" ref={markerRef}></div>
          </ul>
        </nav>
      </header>

      <section className="bannerss">
        <div className="bannerss-contents">
          <h1 className="bannerss-headings">About Company</h1>
          <CustomButton variant="contained" size="Large" onClick={handleButtonClicks}>
            More Details
          </CustomButton>
        </div>
      </section>

      <section className="about">
        <div className="about-container">
          <div className="about-image" ref={imageRef}>
            <img src={image} alt="About Us" />
          </div>
          <div className="about-content">

            <h3 className="hhss">About Company</h3>
            <p className="sdss">
              Vsoft is a leading global information technology, Production and
              business process services company. As the world transitions to a
              new normal, Vsoft is empowering a more resilient future for
              businesses and communities, through our comprehensive integrated
              portfolio of solutions that encompass the entire Enterprise value
              chain.
            </p>
          </div>
        </div>
      </section>

      <section className="values"  ref={valuesRef} >
        <div className="values-container">
          <div className="values-content">
            {activeSection === 'mission' && (
              <div className="content-mission">
                <h3 className="hs">Our Mission</h3>
                <p className="sd">
                  To empower businesses to succeed in a rapidly evolving technological landscape by delivering innovative, high-quality IT products and solutions that transform industries. We are committed to excellence in production, ensuring that our products meet the highest standards and bring value to all our stakeholders.
                </p>
              </div>
            )}
            {activeSection === 'values' && (
              <div className="content-values">
               <div className="icon-container">
                  <h3  className="hs">Our Values</h3>
                  <div className="icon-item">
                    <span className="icon">1</span>
                    <p>Customer Value Creation</p>
                  </div>
                  <div className="icon-item">
                    <span className="icon">2</span>
                    <p>Commitment to Excellence</p>
                  </div>
                  <div className="icon-item">
                    <span className="icon">3</span>
                    <p>Innovation</p>
                  </div>
                  <div className="icon-item">
                    <span className="icon">4</span>
                    <p>Integrity</p>
                  </div>
                  <div className="icon-item">
                    <span className="icon">5</span>
                    <p> Interaction</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="values-image">
            <div className="values-change">
              <button onClick={() => handleButtonClick('mission')}>Our Mission</button>
              <button onClick={() => handleButtonClick('values')}>Our Values</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
