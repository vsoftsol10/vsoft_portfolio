import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import logo from './images/vslogo.png';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import image from './images/about2.png';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Footer from './Footer';

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
  const headingRef = useRef(null);
  const solutionsRef = useRef(null);
  const navRef = useRef(null);
  const markerRef = useRef(null);
  const listRefs = useRef([]);
  const imageRef = useRef(null);
  const [activeSection, setActiveSection] = useState('mission');

  const handleMenuToggle = () => {
    navRef.current.classList.toggle('show');
  };

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  useEffect(() => {
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
          <div className="header-text">
            <h1 className="App-heading" ref={headingRef}>
              <span className="heading-part heading-part-v">V</span>
              <span className="heading-part heading-part-s">S</span>
              <span className="heading-part heading-part-o">o</span>
              <span className="heading-part heading-part-f">f</span>
              <span className="heading-part heading-part-t">t</span>
            </h1>
            <h2 className="heading-part-solutions" ref={solutionsRef}>
              Solutions
            </h2>
          </div>
        </div>
        <button className="menu-button" onClick={handleMenuToggle}>
          <ion-icon name="menu-outline"></ion-icon>
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
            <li ref={(el) => (listRefs.current[2] = el)}>
            <Link to="/services">
                <ion-icon name="settings-outline"></ion-icon>
                <h6 className="custom-heading1">Creations</h6>
                </Link>
            </li>

            <li ref={(el) => (listRefs.current[3] = el)}>
            <Link to="/about">
                <ion-icon name="chatbubble-outline"></ion-icon>
                <h6 className="custom-heading2">About</h6>
                </Link>            </li>
                
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

      <section className="banners">
        <div className="banner-contents">
          <h1 className="banner-headings">About Company</h1>
          <CustomButton variant="contained" size="Large">
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
            <h3>About Company</h3>
            <p>
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

      <section className="values">
        <div className="values-container">
          <div className="values-content">
            {activeSection === 'mission' && (
              <div className="content-mission">
                <h3>Our Mission</h3>
                <p>
                  To empower businesses to succeed in a rapidly evolving technological landscape by delivering innovative, high-quality IT products and solutions that transform industries. We are committed to excellence in production, ensuring that our products meet the highest standards and bring value to all our stakeholders.
                </p>
              </div>
            )}
            {activeSection === 'values' && (
              <div className="content-values">
                <div className="icon-container">
                  <h3>Our Values</h3>
                  <div className="icon-item">
                    <span className="icon">1</span>
                    <p>Customer Value Creation</p>
                  </div>
                  <div className="icon-item">
                    <span className="icon">2</span>
                    <p>Innovation is Our DNA</p>
                  </div>
                  <div className="icon-item">
                    <span className="icon">3</span>
                    <p>Passionate About Product Excellence</p>
                  </div>
                  <div className="icon-item">
                    <span className="icon">4</span>
                    <p>Uncompromising Integrity</p>
                  </div>
                  <div className="icon-item">
                    <span className="icon">5</span>
                    <p>Respect in Every Interaction</p>
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
