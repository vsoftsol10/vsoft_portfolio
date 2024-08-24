import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Helmet } from 'react-helmet';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import logo from './images/vslogo.png';
import image from './images/sample-image.gif';
import './card.css';
import images from './images/about.gif';
import imag from './images/service.gif';
import ima from  './images/creations.gif';

import service1Image from './images/service1.jpg';
import service2Image from './images/service2.jpg';
import service3Image from './images/service3.jpg';
import service4Image from './images/service4.jpg';
import service5Image from './images/service5.jpg';
import service6Image from './images/service6.jpg';

import vsProcess1 from './images/requirement.gif';
import vsProcess2 from './images/design.gif';
import vsProcess3 from './images/development.gif';
import vsProcess4 from './images/testing.gif';
import vsProcess5 from './images/easy_deployment_2.gif';
import vsProcess6 from './images/maintence.webp';

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

const cardsData = [
  { photo: service1Image, heading: 'Website Development', content: 'We Build Interactive and Dynamic Website.', price: ' Starts:₹5000' },
  { photo: service2Image, heading: 'Android App Development', content: 'We Build and Organized App', price: 'Starts:₹8000' },
  { photo: service3Image, heading: 'Digital Marketing', content: 'Promote your business through Social Medias.', price: 'Starts:₹6000' },
  { photo: service4Image, heading: 'SEO Service', content: 'Optimization services to improve a site.', price: 'Starts:₹7000' },
  { photo: service5Image, heading: 'UI/UX Design', content: 'Build interactive and Designs.', price: 'Starts:₹5500' },
  { photo: service6Image, heading: 'Data Entry Operator', content: 'We Transcribing data into computers and databases.', price: 'Starts:₹4000' },
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
  const priceTagRef = useRef(null);
  const cardsContainerRef = useRef(null);
 
  const handleMenuToggle = () => {
    if (window.innerWidth <= 768) { // Check if the screen width is 768px or less
      navRef.current.classList.toggle('show');
    }
  };


  useEffect(() => {
    const marker = markerRef.current;
    const banners = bannerRefs.current;
    const list = listRefs.current;
    const pageTransition = pageTransitionRef.current;
    const nav = navRef.current;
    const logo = logoRef.current;
    gsap.registerPlugin(ScrollTrigger);

    const priceTag = priceTagRef.current;
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
  
    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0 });
  
    banners.forEach((banner, index) => {
      timeline
        .fromTo(banner, 
          { opacity: 0, x: '100%' }, 
          { opacity: 1, x: '0%', duration: 2, ease: 'power2.out' }, 
          index * 10
        )
        .to(banner, 
          { opacity: 0, x: '-100%', duration: 1, ease: 'power2.out' }, 
          (index * 10) + 10
        );
    });
  
    gsap.fromTo('.service-card', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 10, duration: 1, ease: 'power2.out' }
    );
  // ScrollTrigger animations for cards
  gsap.utils.toArray('.service-card').forEach((card, index) => {
    gsap.fromTo(card, 
      { opacity: 0, y: index < 3 ? '100px' : '-100px' },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: 'power2.out', 
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: 'top center+=100',
          end: 'bottom center',
          scrub: true,
          markers: false,
          stagger: 0.2
        }
      }
    );
  });
     return () => {
      timeline.kill(); 
      list.forEach((item) => {
        if (item) {
          item.removeEventListener('mousemove', moveIndicator);
          item.removeEventListener('mouseover', activeLink);
        }
      });
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
  <div className="cards-container">
    {cardsData.map((card, index) => (
      <div key={index} className="service-card">
       <div className="card-inner">
          <div className="card-front" style={{ backgroundImage: `url(${card.photo})` }}>
         
        </div>

          
          <div className="card-back">
            <h3>{card.heading}</h3>
            <p>{card.content}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
<Footer />

</div>

    
  );
}

export default  Home; 