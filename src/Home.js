import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import './App.css';
import Footer from './Footer';
import logo from './images/vslogo.png';
import image from './images/sample-image.gif';
import './card.css';
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
import service1Image from './images/service1.jpg';
import service2Image from './images/service2.jpg';
import service3Image from './images/service3.jpg';
import service4Image from './images/service4.jpg';
import service5Image from './images/service5.jpg';
import service6Image from './images/service6.jpg';


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
  { photo: service1Image, heading: 'Website Development', content: 'We Build Interactive and Dynamic Website.' },
  { photo: service2Image, heading: 'Android App Development', content: 'We Build and Organized App ' },
  { photo: service3Image, heading: 'Digital Marketing', content: 'Promote your business through Social Medias.' },
  { photo: service4Image, heading: 'SEO Service', content: 'Optimization services to improve a site.' },
  { photo: service5Image, heading: 'UI/UX Design', content: 'Build interactive and Designs.' },
  { photo: service6Image, heading: 'Data Entry Operator', content: 'We Transcribing data into computers and databases. ' },
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
  
    // Move indicator animation
    function moveIndicator(e) {
      if (marker) {
        gsap.to(marker, { left: e.offsetLeft, width: e.offsetWidth, duration: 0.5 });
      }
    }
  
    function activeLink() {
      list.forEach((item) => {
        if (item) item.classList.remove('active');
      });
      this.classList.add('active');
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
      { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: 'power2.out' }
    );
  
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
      <div className="Servisess">
  <h2>Our Services</h2>
  <div className="cards-container">
    {cardsData.map((card, index) => (
      <div key={index} className="service-card">
        <div className="card-inner">
        <div
                className="card-front"
                style={{ backgroundImage: `url(${card.photo})` }}
              >
           
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