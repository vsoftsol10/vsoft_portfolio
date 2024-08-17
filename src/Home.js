import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './App.css';
import logo from './images/vslogo.png';
import image from './images/sample-image.gif';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import images from './images/about.gif';
import imag from './images/service.gif';
import ima from  './images/creations.gif';
import imagesss from  './images/why us.gif';
import logo1 from './images/experience.gif'; 
import logo2 from './images/processing.gif';
import logo3 from './images/delivery.gif';
import logo4 from './images/team.gif';
import logo5 from './images/price.gif';
import logo6 from './images/support.gif';


const bannersData = [
  {
    heading: "VSOFT",
    secondaryHeading: "At V-Soft Solutions,we believe in harnessing the power of technology to drive positive change. Our web services provide women with flexible employment opportunities",
    buttonText: "EXPLORE",
    image: image
  },
  {
    heading: "INSIGHTS",
    secondaryHeading: `  V-Soft is a leading global information technology, consulting and Product based company`,
    buttonText: "READ IT",
    image: images
  },
  {
    heading: "PRODUCTS",
    secondaryHeading: 
 `Web development is the bridge that connects ideas and users, transforming concepts into tangible online experiences. `,
    buttonText: "FIND OUT",
    image: imag
  },
  
  {
    heading: "CREATION",
    secondaryHeading: 
 `We are developing "Crafting user-friendly, fast, and visually
stunning websites that drive results and elevate your brand." `,

  
    buttonText: "GALLERY",
    image: ima
  },

];


function Home() {
  const markerRef = useRef(null);
  const listRefs = useRef([]);
  const bannerRefs = useRef([]);
  const pageTransitionRef = useRef(null);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const headingRef = useRef(null);
  const solutionsRef = useRef(null);
  const workEthicsRef = useRef(null);
  
  

  useEffect(() => {
    const marker = markerRef.current;
    const banners = bannerRefs.current;
    const list = listRefs.current;
    const pageTransition = pageTransitionRef.current;
    const nav = navRef.current;
    const logo = logoRef.current;
    
   
    function moveIndicator(e) {
      if (marker) {
        gsap.to(marker, { left: e.offsetLeft, width: e.offsetWidth, duration: 1 });
      }
    }

    function activeLink() {
      list.forEach((item) => {
        if (item) item.classList.remove('active');
      });
      this.classList.add('active');
    }

    if (list.length > 0) {
      list.forEach((item) => {
        if (item) {
          item.addEventListener('mousemove', (e) => moveIndicator(e.target));
          item.addEventListener('mouseover', activeLink);
        }
      });
    }

    gsap.fromTo(pageTransition, 
      { opacity: 0, scale: 0.8, rotate: '45deg' }, 
      { opacity: 1, scale: 1, rotate: '0deg', duration: 1.5, ease: 'power2.out' }
    );

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, x: '-100%' },
      { opacity: 1, x: '0%', duration: 2.5, delay: 1, ease: 'power2.out' }
    );
    

    gsap.fromTo(
      solutionsRef.current,
      { opacity: 0, y: '50px' },
      { opacity: 1, y: '0', duration: 2, delay: 2, ease: 'power2.out' }
    );

    // Navigation animation
    gsap.fromTo(
      nav,
      { opacity: 0, x: '100%' },
      { opacity: 1, x: '0%', duration: 2, delay: 2.5, ease: 'power2.out' }
    );

    gsap.fromTo(
      nav.querySelectorAll('ul li a'),
      { fontSize: '2.5rem' },
      { fontSize: '1.5rem', duration: 2, delay: 2.5, ease: 'power2.out' }
    );

    // Logo spin animation
    gsap.fromTo(logo, 
      { rotate: 0 }, 
      { rotate: 360, duration: 2, ease: 'power2.inOut' }
    );

    // Heading 3D Effect
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, x: '-100%' },
        { opacity: 1, x: '0%', duration: 2.5, delay: 1, ease: 'power2.out' }
      );
    }
  

    // Article and aside animations
    gsap.fromTo(
      '.article span',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
    );

    gsap.fromTo(
      '.aside img',
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2, ease: 'power2.out' }
    );

    // Initialize banner animation
    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0 });

    banners.forEach((banner, index) => {
      timeline
        .fromTo(banner, 
          { opacity: 0, x: '100%' }, 
          { opacity: 1, x: '0%', duration: 3, ease: 'power2.out' }, 
          index * 15 // Each banner shows for 10 seconds before transitioning
        )
        .to(banner, 
          { opacity: 0, x: '-100%', duration: 1, ease: 'power2.out' }, 
          (index * 15) + 15 // Transition to the next banner after 10 seconds of display
        );
    });



    return () => timeline.kill(); 
    
    // Cleanup GSAP timeline on component unmount

  }, []);




  return (
    <div className="App" ref={pageTransitionRef}>
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
        <nav className="App-nav" ref={navRef}>
          <ul>
            <li ref={(el) => (listRefs.current[0] = el)}>
              <a href="#vsflows">
                <ion-icon name="home-outline"></ion-icon>
                <h6 className="custom-heading1">Vsflows</h6>
              </a>
            </li>
            <li ref={(el) => (listRefs.current[1] = el)}>
              <a href="#services">
                <ion-icon name="add-circle-outline"></ion-icon>
                <h6 className="custom-heading2">Services</h6>
              </a>
            </li>
            <li ref={(el) => (listRefs.current[2] = el)}>
              <a href="#creations">
                <ion-icon name="settings-outline"></ion-icon>
                <h6 className="custom-heading1">Creations</h6>
              </a>
            </li>
            <li ref={(el) => (listRefs.current[3] = el)}>
              <a href="#about">
                <ion-icon name="chatbubble-outline"></ion-icon>
                <h6 className="custom-heading2">About</h6>
              </a>
            </li>
            <li ref={(el) => (listRefs.current[4] = el)}>
              <a href="#contact">
                <ion-icon name="person-outline"></ion-icon>
                <h6 className="custom-heading1">Contact</h6>
              </a>
            </li>
            <div id="marker" ref={markerRef}></div>
          </ul>
        </nav>
      </header>

      <div className="banner-container">
  {bannersData.map((banner, index) => (
    <div
      key={index}
      className="banner"
      ref={(el) => (bannerRefs.current[index] = el)}
    >
      <div className="banner-grid">
        <div className="banner-content">
          <h3 className="heads">
          {banner.heading}
          </h3>
          <h4 className="secondary-heading">
            {banner.secondaryHeading}
          </h4>
      
  <button>
  {banner.buttonText}
   
</button>

        </div>
        <div className="banner-image">
          <img src={banner.image} alt={banner.heading} />
        </div>
      </div>
    </div>
  ))}
</div>
<div className="work-ethics" ref={workEthicsRef}>
        <p>WHY WE ARE?..</p>
        <div className="work-ethics-container">
          <div className="work-ethics-column">
            <h5><img src={logo1} alt="Logo 1" /> WELL-ORGANIZED</h5>
            <h5><img src={logo2} alt="Logo 2" /> TRANSPARENT PROCESS</h5>
            <h5><img src={logo3} alt="Logo 3" /> ON-TIME DELIVERY</h5>
          </div>
          <div className="work-ethics-column">
            <h5><img src={logo4} alt="Logo 4" /> WORKED TOGETHER</h5>
            <h5><img src={logo5} alt="Logo 5" /> AFFORDABLE PRICE</h5>
            <h5><img src={logo6} alt="Logo 6" /> FRIENDLY SUPPORT</h5>
          </div>

          <div className="work-ethics-column">
            <img src={imagesss} alt="Work Ethic Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default  Home;