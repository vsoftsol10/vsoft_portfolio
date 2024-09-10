import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Helmet } from 'react-helmet';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import logo from './images/vslogo.png';
import image from './images/appdeveopbackground.webp';
import './ws.css';

import poste1  from './images/app1.webp';
import poste2 from './images/app2.webp';
import poste3 from './images/app3.webp';
import poste4 from './images/app4.webp';
import poste5 from './images/app5.webp';
import poste6 from './images/app1.webp';
import post3 from './images/webss1.webp';
import post4  from './images/webss4.webp';
import lg from './images/menu.gif';
import clientimg1 from './images/logos1 (1).png';
import clientimg2 from './images/logos1 (3).png';
import clientimg3 from './images/logos1 (5).png';
import clientimg4 from './images/logos1 (2).png';
import clientimg5 from './images/vslogo.png';
import { convertLength } from '@mui/material/styles/cssUtils';



const bannersData = [
  {
    headings: "Application Development",
    secondaryHeading: "At V-Soft Solutions,Our innovative approach streamlines the development process, enhancing efficiency and delivering high-quality applications that meet our client's needs and drive their success.",
    buttonText: "EXPLORE",
    image: image,

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
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/appdevelop");
  };
  

  const bannercontentRef=useRef(null);
 
  const handleMenuToggle = () => {
    if (window.innerWidth <= 568) { // Check if the screen width is 768px or less
      navRef.current.classList.toggle('show');
      
     
    }
  };
 

  const handleNavigation = (path) => {
    navigate(path);
  };

 

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

      <div className="banner-containers">
      {bannersData.map((banner, index) => (
        <div 
          key={index} 
          className="banners" 
          style={{ backgroundImage: `url(${banner.image})`,
        backgroundPosition:convertLength }}
          ref={(el) => (bannerRefs.current[index] = el)}
        >
          <div className="banners-contents" ref={bannercontentRef}>
            <h1>{banner.headings}</h1>
            <h2>{banner.secondaryHeading}</h2>
            <button  onClick={handleButtonClick}>{banner.buttonText}</button>
          </div>
        </div>
      ))}
    </div>


    <div data-aos="fade" class="page-title service-page-title">
      
      <div class="container">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h2 class="service-page-heading" > Application Development Company</h2>
            <p class="mb-0" >Since 2024, our Tirunelveli-basedandroid app development company has been crafting innovative solutions for Android and IOS. As a trusted offshore development partner, we specialize in creating custom android applications tailored to your unique business needs. Join us in shaping the future of mobile technology using React-Native and Swift</p>
          </div>
        </div>
      </div>
    </div>

    <div class="services-details-page-parent" id="solutions">
        <h5 class="services-details-page-heading" > --Solutions--</h5>
        <div class="container-fluid service-page-detail-con ">
          <div class="service-page-detail-sub2">
            <div class="service-page-detail-item1" data-aos="fade-up" data-aos-delay="500">
            <img src={post3}  />
            </div>
            <div class="service-page-detail-item-bl" data-aos="fade-up" data-aos-delay="100">
              <h3>HRMS</h3>
              <p> Tailored to automate HR processes and boost
                productivity</p>
            </div>
            <div class="service-page-detail-item-wh" data-aos="fade-up" data-aos-delay="200">
              <h3>IoT Applications</h3>
              <p> Connecting devices and enabling smart
                functionalities to drive efficiency and innovation in your business operations.</p>
            </div>
            <div class="service-page-detail-item-wh" data-aos="fade-up" data-aos-delay="300">
              <h3>Event management platform</h3>
              <p> Empowering
                event organizers with intuitive tools and features to deliver unforgettable experiences.</p>
            </div>
            <div class="service-page-detail-item-bu" data-aos="fade-up" data-aos-delay="400">
              <h3>Customer support application</h3>
              <p> Providing seamless communication
                channels and efficient ticket management systems to ensure customer satisfaction.</p>
            </div>
          </div>
          <div className="service-page-detail-sub3">
      <div className="service-page-detail-item-bu" data-aos="fade-up" data-aos-delay="100">
        <h3>Native Mobile App Development</h3>
        <button className="see-more-btn" onClick={() => handleNavigation('/native-app-development')}>See more</button>
      </div>
      <div className="service-page-detail-item-wh" data-aos="fade-up" data-aos-delay="200">
        <h3>Cross-Platform App Development</h3>
        <button className="btnsss" onClick={() => handleNavigation('/cross')}>See more</button>
      </div>
      <div className="service-page-detail-item-wh" data-aos="fade-up" data-aos-delay="300">
        <h3>Hybrid App Development</h3>
        <button className="btnsss" onClick={() => handleNavigation('/hybrid')}>See more</button>
      </div>
      <div className="service-page-detail-item-bl" data-aos="fade-up" data-aos-delay="400">
        <h3>Progressive Web App Development</h3>
        <button className="see-more-btn" onClick={() => handleNavigation('/progressive')}>See more</button>
      </div>
      <div className="service-page-detail-item1" data-aos="fade-up" data-aos-delay="500">
        <img src={post4} alt="Service Detail Image" />
      </div>
    </div>

        </div>




        <div class="container-fluid service-page-detail-con-mobile">
          <div class="service-page-detail-sub1-item-wh" data-aos="fade-up" data-aos-delay="100">
          <h3>Native Mobile App Development</h3>
        <button className="see-more-btn" onClick={() => handleNavigation('/native-app-development')}>See more</button>
      </div>
          <div class="service-page-detail-sub1-item-bu" data-aos="fade-up" data-aos-delay="200">
          <h3>Cross-Platform App Development</h3>
        <button className="btnsss" onClick={() => handleNavigation('/cross')}>See more</button>
      </div>
          <div class="service-page-detail-sub1-item-wh" data-aos="fade-up" data-aos-delay="300">
          <h3>Hybrid App Development</h3>
        <button className="btnsss" onClick={() => handleNavigation('/hybrid')}>See more</button>
      </div>
          <div class="service-page-detail-sub1-item-bl" data-aos="fade-up" data-aos-delay="400">
          <h3>Progressive Web App Development</h3>
        <button className="see-more-btn" onClick={() => handleNavigation('/progressive')}>See more</button>
      </div>
          <div class="service-page-detail-item-wh" data-aos="fade-up" data-aos-delay="100">
          <h3>HRMS</h3>
              <p> Tailored to automate HR processes and boost
                productivity</p>
          </div>
        
        </div>
        <div class="carousel-outer-port">
 

 <div class="carousel-inner-port" data-aos-delay="400" data-aos="fade-up">
   <div class="carousel-port carousel1">
     <div class="testimonial-carousel-top-port">
     <h6>Social Media App</h6>
       <img src={poste1}  class="testimonial-client-img-port" alt="loading"/>
   
     </div>
   
   </div>
   <div class="carousel-port carousel2">
     <div class=" testimonial-carousel-top-port">
     <h6>Job Searching App</h6>
     <img src={poste2}  class="testimonial-client-img-port" alt="loading"/>
     </div>
    
   </div>
   <div class="carousel-port carousel3">
     <div class=" testimonial-carousel-top-port">
     <h6>Employee App</h6>
     <img src={poste3}  class="testimonial-client-img-port" alt="loading"/>
     </div>
   </div>
   <div class="carousel-port carousel4">
     <div class=" testimonial-carousel-top-port">
     <h6>Food delivery App</h6>
     <img src={poste4}  class="testimonial-client-img-port" alt="loading"/>
     
     </div>
   
   </div>
   <div class="carousel-port carousel5">
     <div class=" testimonial-carousel-top-port">
     <h6>Logistic App</h6>
     <img src={poste5}  class="testimonial-client-img-port" alt="loading"/>
     
     </div>
    
   </div>
   <div class="carousel-port carousel5">
     <div class=" testimonial-carousel-top-port">
     <h6>Chat App</h6>
     <img src={poste6}  class="testimonial-client-img-port" alt="loading"/>
     
     </div>
    
   </div>



 </div>
</div>

      </div>

    <Footer />
</div>
  );
}

export default  Home;
