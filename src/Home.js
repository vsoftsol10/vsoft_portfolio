import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Helmet } from 'react-helmet';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import logo from './images/vslogo.png';
import image from './images/homeback.webp';

import './card.css';

import service1Image from './images/service1.jpg';
import service2Image from './images/service2.jpg';
import service3Image from './images/service3.jpg';
import lg from './images/menu.gif';


import vsProcess1 from './images/requirement.png';
import vsProcess2 from './images/design.png';
import vsProcess3 from './images/development.png';
import vsProcess4 from './images/testing.png';
import vsProcess5 from './images/launch.png';
import vsProcess6 from './images/Maintance.png';

import poste1  from './images/BANNE1.png';
import poste2 from './images/BANNE2.png';
import poste3 from './images/BANNE3.png';
import poste4 from './images/BANNE4.png';


const bannersData = [
  {
    headings: "SOFTWARE DEVELOPMENT COMPANY",
    secondaryHeading: "We Develop Create Innovative Ideas With Passion For All Business Applications",
    buttonText: "EXPLORE",
    secondary:"THE NEXT GENERATION ",
    image: image
  },
 
];


const cardsData = [
  { photo: service1Image,  style: {
    position: 'absolute',
top:'0px',
    left: '40px',
    color: 'black',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    background: 'rgba(0, 0, 0, 0.0)'
  
  } ,name : 'Web Development',link: '/ws' },
  { photo: service2Image,  name : 'APP Development', link: '/appsdevelop' },
  { photo: service3Image,   style: {
    top:'0px',
    color:'black',
    background: 'rgba(0, 0, 0, 0.0)'
  
  },name : 'Digital Marketing', link: '/digi' },


];




function Home() {
  const markerRef = useRef(null);
  const listRefs = useRef([]);
  const bannerRefs = useRef([]);
  const pageTransitionRef = useRef(null);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const headingRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  

  const cardsRef=useRef(null)
  const bannercontentRef=useRef(null);
 
  const handleMenuToggle = () => {
    if (window.innerWidth <= 568) { // Check if the screen width is 768px or less
      navRef.current.classList.toggle('show');
      
     
    }
  };

 
   const handleCardClick = (link) => {
    window.location.href = link;
  };
  const handleButtonClicks = () => {
    if (cardsRef.current) {
      cardsRef.current.scrollIntoView({ behavior: 'smooth' });
    } };


    useEffect(() => {
      const marker = markerRef.current;
      const banners = bannerRefs.current;
      const list = listRefs.current;
      const pageTransition = pageTransitionRef.current;
      const nav = navRef.current;
      const logo = logoRef.current;
      const heading = headingRef.current;

   

      const bannercontentRef = document.querySelectorAll('.banner-content');
    
      gsap.registerPlugin(ScrollTrigger);
    
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



      // Banner animations

      // Page transition animation
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
    
      
    
      return () => {
  
        list.forEach((item) => {
          if (item) {
            item.removeEventListener('mousemove', moveIndicator);
            item.removeEventListener('mouseover', activeLink);
          }
        });
      };
    }, []);

   


    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
   
      const bannercontentRef = document.querySelectorAll('.banner-content');
      // Animate banner content
      gsap.fromTo('.banner-content h1',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 5, ease: 'power2.out' }
      );
    
      gsap.fromTo('.banner-content h2',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 3, delay: 5, ease: 'power2.out' }
      );
      
     
      const cards = document.querySelectorAll('.service-card');

      gsap.utils.toArray('.service-card').forEach((card, index) => {
        // Determine row
        const isFirstRow = index < 3;  // Cards with index 0, 1, 2 are in the first row
        const isSecondRow = index >= 3; // Cards with index 3, 4 are in the second row
      
        // Calculate starting X position
        const xStart = isFirstRow ? '-50px' : '0px'; 
        // Determine card animation properties
        gsap.fromTo(card,
          {
            opacity: 0,
            x: xStart
          },
          {
            opacity: 1,
            x: 0,
            duration: 1, // Adjust the duration as needed
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'bottom 20%',
              scrub: true,
              markers: false
            }
          }
        );
       
      });
      
      
      return () => {
        gsap.killTweensOf('.banner-content h1');
        gsap.killTweensOf('.banner-content h2');
        gsap.killTweensOf(cards);
      };
    }, []);
    
    

  return (
    <div className="App" ref={pageTransitionRef}>
<Helmet>
        <title>Home - VSOFT</title>
        <meta name="description" content="Home page of My Website" />
      </Helmet>


      <header className="App-header">
        <div className="header-left">
          <img src={logo} ref={logoRef} className="App-logo" alt="logo" />
         
          <div>
  <p style={{ color: 'white', margin: 0 }}>
    <a href="tel:+919095422237" style={{ textDecoration: 'none', color: 'inherit' }}>
      <i className="fa fa-phone" style={{ height: '4rem', width: '4rem' }}></i>
    </a>
    <a href="mailto:vsoftsolutions8813@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
      <i className="fa fa-envelope" style={{ height: '4rem', width: '4rem' }}></i>
    </a>
  </p>

</div>
        </div>
        <button className="menu-button" onClick={handleMenuToggle}>
  <img src={lg} alt="Menu" className="menu-gif" />
</button>


        <nav className="App-nav"ref={navRef}>
          <ul>
            <li ref={(el) => (listRefs.current[0] = el)} >
            <Link to="/home">
                <ion-icon name="home-outline"></ion-icon>
                <h6 className="custom-heading1">Vsflows</h6>
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

            <li ref={(el) => (listRefs.current[2] = el)}>
            <Link to="/creation">
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
<li ref={(el) => (listRefs.current[0] = el)}>
            <Link to="/career">
                <ion-icon name="home-outline"></ion-icon>
                <h6 className="custom-heading1">Career</h6>
                </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="banner-container">
        {bannersData.map((banner, index) => (
          <div
            key={index}
            className="banner"
            style={{ backgroundImage: `url(${banner.image})` }}
            ref={(el) => (bannerRefs.current[index] = el)}
          >
            <div className="banner-content" ref={bannercontentRef}>
            <h3 style={{
              textAlign:'start',
              color:'white',
            }}>{banner.secondary}</h3>
              <h1>{banner.headings}</h1>
              <h2>{banner.secondaryHeading}</h2>
          
              <button onClick={handleButtonClicks}>{banner.buttonText}</button>
            </div>
          </div>
        ))}
      </div>






<div className="vs-process-container">
    <h2 className="vs-process-heading">VS Process</h2>
    <div className="vs-process-row">
      <div className="vs-process-item">
        <div className="vs-process-circle">
          <img src={vsProcess1} alt="Discovery" className="vs-process-image" />
        </div>
        <div className="vs-process-name">
          <p>Discovery</p>
        </div>
        <i className="fas fa-arrow-right vs-process-arrow"></i>
      </div>
      <div className="vs-process-item">
        <div className="vs-process-circle">
          <img src={vsProcess2} alt="Design" className="vs-process-image" />
        </div>
        <div className="vs-process-name">
          <p>Design</p>
        </div>
        <i className="fas fa-arrow-right vs-process-arrow"></i>
      </div>
      <div className="vs-process-item">
        <div className="vs-process-circle">
          <img src={vsProcess3} alt="Deployment" className="vs-process-image" />
        </div>
        <div className="vs-process-name">
          <p>Deployment</p>
        </div>
        <i className="fas fa-arrow-right vs-process-arrow"></i>
      </div>
      <div className="vs-process-item">
        <div className="vs-process-circle">
          <img src={vsProcess4} alt="Testing" className="vs-process-image" />
        </div>
        <div className="vs-process-name">
          <p>Testing</p>
        </div>
        <i className="fas fa-arrow-right vs-process-arrow"></i>
      </div>
      <div className="vs-process-item">
        <div className="vs-process-circle">
          <img src={vsProcess5} alt="Launch" className="vs-process-image" />
        </div>
        <div className="vs-process-name">
          <p>Launch</p>
        </div>
        <i className="fas fa-arrow-right vs-process-arrow"></i>
      </div>
      <div className="vs-process-item">
        <div className="vs-process-circle">
          <img src={vsProcess6} alt="Maintenance" className="vs-process-image" />
        </div>
        <div className="vs-process-name">
          <p>Maintenance</p>
        </div>
      </div>
    </div>
  </div>


  <div className="Servisess">
  <h2>Our Services</h2>
  <div className="cards-container" ref={cardsRef}>
    {cardsData.map((card, index) => (
      <div
        key={index}
        className="service-card"
        onClick={() => handleCardClick(card.link)}
        style={{ gridArea: `card${index + 1}` }} // Assign grid area for each card
      >
        <div className="card-inner">
          <div className="card-front" style={{ backgroundImage: `url(${card.photo})` }}  styles={card.style}>
            <div className="card-name" style={card.style} >
              {card.name}
            </div>
          </div>
        
        </div>
      </div>
    ))}
  </div>

 
</div>

<div class="card-containers">
  <div class="card card1">
    <div class="card-text">SEO Services</div>
  </div>
  <div class="card card2">
    <div class="card-text">UI/UX Design</div>
  </div>
</div>


    




 
<Footer />

</div>

    
  );
}

export default  Home;
