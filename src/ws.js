import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Helmet } from 'react-helmet';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import logo from './images/vslogo.png';
import image from './images/ws1.avif';
import './ws.css';

import poste1  from './images/web32.jpg';
import poste2 from './images/pos.png';
import poste3 from './images/hrms.png';
import poste4 from './images/foods.jpg';
import poste5 from './images/aisur.png';
import poste6 from './images/web31.webp';
import post3 from './images/webss.webp';
import post4  from './images/webss2.webp';
import lg from './images/menu.gif';
import clientimg1 from './images/logos1 (1).png';
import clientimg2 from './images/logos1 (3).png';
import clientimg3 from './images/logos1 (5).png';
import clientimg4 from './images/logos1 (2).png';
import clientimg5 from './images/vslogo.png';



const bannersData = [
  {
    headings: "Web Application Development",
    secondaryHeading: "At V-Soft Solutions, Our innovative approach streamlines the development process, enhancing efficiency and delivering robust web applications that meet our client's needs and drive their success.",
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
    navigate("/website");
  };
  

  const bannercontentRef=useRef(null);
 
  const handleMenuToggle = () => {
    if (window.innerWidth <= 568) { // Check if the screen width is 768px or less
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
          style={{ backgroundImage: `url(${banner.image})` }}
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
            <h2 class="service-page-heading" >Web Application Development Company</h2>
            <p class="mb-0" >Since 2024, our Tirunelveli-based web application development company
              has been crafting innovative solutions for Enterprises. As a trusted offshore development partner, we
              specialize in creating custom web applications tailored to your unique business needs. Join us in
              shaping the future of web technology.</p>
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
          <div class="service-page-detail-sub3">
            <div class="service-page-detail-item-bu" data-aos="fade-up" data-aos-delay="100">
              <h3>Help desk application</h3>
              <p>Empower your support team with our help desk applications, facilitating streamlined issue resolution
                and customer inquiries</p>
            </div>
            <div class="service-page-detail-item-wh" data-aos="fade-up" data-aos-delay="200">
              <h3>Analytics and reporting application</h3>
              <p> Gain valuable insights into your business performance with our analytics and reporting applications
              </p>
            </div>
            <div class="service-page-detail-item-wh" data-aos="fade-up" data-aos-delay="300">
              <h3>Booking & Reservation application</h3>
              <p>Simplify booking processes with our intuitive booking and reservation applications</p>
            </div>
            <div class="service-page-detail-item-bl" data-aos="fade-up" data-aos-delay="400">
              <h3>AI Integrated web app</h3>
              <p>Embrace the future of technology with our AI-integrated web applications</p>
            </div>
            <div class="service-page-detail-item1" data-aos="fade-up" data-aos-delay="500">
            <img src={post4} />
            </div>
          </div>
        </div>




        <div class="container-fluid service-page-detail-con-mobile">
          <div class="service-page-detail-sub1-item-wh" data-aos="fade-up" data-aos-delay="100">
            <h3>Custom web App</h3>
            <p>Our expert team specializes in crafting tailored web applications that meet your unique business needs,
              ensuring seamless user experiences and maximum efficiency at an affordable cost.</p>
          </div>
          <div class="service-page-detail-sub1-item-bu" data-aos="fade-up" data-aos-delay="200">
            <h3>Ecommerce platform</h3>
            <p>As a leading web app development company, we excel in building robust ecommerce platforms powered by MERN
              stack, delivering feature-rich solutions that drive sales and elevate your online presence.</p>
          </div>
          <div class="service-page-detail-sub1-item-wh" data-aos="fade-up" data-aos-delay="300">
            <h3>Learning management system</h3>
            <p>As a leading web app development company, we excel in building robust ecommerce platforms powered by MERN
              stack, delivering feature-rich solutions that drive sales and elevate your online presence.</p>
          </div>
          <div class="service-page-detail-sub1-item-bl" data-aos="fade-up" data-aos-delay="400">
            <h3>CRMS</h3>
            <p>Our CRMS solutions are meticulously crafted to streamline customer relationship management processes,
              offering intuitive interfaces and comprehensive functionalities, making us the preferred choice for
              startups and enterprises alike.</p>
          </div>
          <div class="service-page-detail-item-wh" data-aos="fade-up" data-aos-delay="100">
            <h3>HRMS</h3>
            <p>Enhance workforce management with our HRMS solutions, tailored to automate HR processes and boost
              productivity, ensuring seamless operations for your organization.</p>
          </div>
          <div class="service-page-detail-item-bu" data-aos="fade-up" data-aos-delay="200">
            <h3>IoT Applications</h3>
            <p> Leverage the power of IoT with our innovative applications, connecting devices and enabling smart
              functionalities to drive efficiency and innovation in your business operations.</p>
          </div>
          <div class="service-page-detail-item-wh" data-aos="fade-up" data-aos-delay="300">
            <h3>Event management platform</h3>
            <p>Simplify event planning and execution with our customizable event management platforms, empowering event
              organizers with intuitive tools and features to deliver unforgettable experiences.</p>
          </div>
          <div class="service-page-detail-item-bl" data-aos="fade-up" data-aos-delay="400">
            <h3>Customer support application</h3>
            <p>Elevate customer service with our customer support applications, providing seamless communication
              channels and efficient ticket management systems to ensure customer satisfaction.</p>
          </div>
          <div class="service-page-detail-item-wh" data-aos="fade-up" data-aos-delay="100">
            <h3>Help desk application</h3>
            <p>Empower your support team with our help desk applications, facilitating streamlined issue resolution and
              customer inquiries, all while maintaining cost-effectiveness and scalability.</p>
          </div>
          <div class="service-page-detail-item-bu" data-aos="fade-up" data-aos-delay="200">
            <h3>Analytics and reporting application</h3>
            <p> Gain valuable insights into your business performance with our analytics and reporting applications,
              offering comprehensive data analysis and visualization tools to drive informed decision-making.</p>
          </div>
          <div class="service-page-detail-item-wh" data-aos="fade-up" data-aos-delay="300">
            <h3>Booking & Reservation application</h3>
            <p>Simplify booking processes with our intuitive booking and reservation applications, offering seamless
              online scheduling and reservation management for various industries.</p>
          </div>
          <div class="service-page-detail-item-bl" data-aos="fade-up" data-aos-delay="400">
            <h3>AI Integrated web app</h3>
            <p>Embrace the future of technology with our AI-integrated web applications, leveraging artificial
              intelligence to deliver personalized user experiences and optimize business operations.</p>
          </div>
        </div>


      </div>


   
<div class="testimonial-container-port" data-aos-delay="200" data-aos="fade-up">
    
      <h5 class="services-details-page-heading" >  Web App Development</h5>
    </div>


    <div class="carousel-outer-port">
 

      <div class="carousel-inner-port" data-aos-delay="400" data-aos="fade-up">
        <div class="carousel-port carousel1">
          <div class="testimonial-carousel-top-port">
            <img src={poste1}  class="testimonial-client-img-port" alt="loading"/>
        
          </div>
        
        </div>
        <div class="carousel-port carousel2">
          <div class=" testimonial-carousel-top-port">
           
          <img src={poste2}  class="testimonial-client-img-port" alt="loading"/>
          </div>
         
        </div>
        <div class="carousel-port carousel3">
          <div class=" testimonial-carousel-top-port">
          <img src={poste3}  class="testimonial-client-img-port" alt="loading"/>
          </div>
        </div>
        <div class="carousel-port carousel4">
          <div class=" testimonial-carousel-top-port">
          <img src={poste4}  class="testimonial-client-img-port" alt="loading"/>
        
          </div>
        
        </div>
        <div class="carousel-port carousel5">
          <div class=" testimonial-carousel-top-port">
          <img src={poste5}  class="testimonial-client-img-port" alt="loading"/>
          
          </div>
         
        </div>
        <div class="carousel-port carousel5">
          <div class=" testimonial-carousel-top-port">
          <img src={poste6}  class="testimonial-client-img-port" alt="loading"/>
          
          </div>
         
        </div>



      </div>
    </div>
   <h5 class="services-details-page-heading" >  Our Clients</h5>
    <div class="client-container" data-aos-delay="200">
  <div class="d-flex align-items-center justify-content-around w-100 h-100">
 
    
    <div class="d-flex client-img-con justify-content-evenly align-items-center font-medium text-lg text-black">
      <div class="client-img-wrapper" id="marquee">
        <img src={clientimg1} alt class="client-img1" />
        <img src={clientimg2} alt class="client-img2" />
        <img src={clientimg3} alt class="client-img3" />
        <img src={clientimg4} alt class="client-img4" />
        <img src={clientimg5} alt class="client-img5" />
      </div>
    </div>
  </div>
  <div class="client-sub-con bg-green-400 absolute z-0">
   
  </div>
</div>




    <Footer />
</div>
  );
}

export default  Home;
