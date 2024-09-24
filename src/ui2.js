import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Helmet } from 'react-helmet';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import logo from './images/vslogo.png';
import image from './images/uiback.webp';
import './ws.css';
import lg from './images/menu.gif';
import poste1  from './images/web32.jpg';
import poste2 from './images/pos.png';
import poste3 from './images/hrms.png';
import poste4 from './images/foods.jpg';
import poste5 from './images/aisur.png';
import poste6 from './images/web31.webp';
import post3 from './images/webss11.webp';
import post4  from './images/webss12.webp';

import clientimg1 from './images/logos1 (1).png';
import clientimg2 from './images/logos1 (3).png';
import clientimg3 from './images/logos1 (5).png';
import clientimg4 from './images/logos1 (2).png';
import clientimg5 from './images/vslogo.png';




const bannersData = [
    {
        headings: "UI/UX Design",
        secondaryHeading: "At V-Soft Solutions, we create intuitive and engaging user experiences through exceptional UI/UX design",
        image: image,  
        buttonText: "EXPLORE",
      }
      
      
      
 
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
    navigate("/ui");
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
          style={{ 
            backgroundImage: `url(${banner.image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            opacity: 1, // Adjust the opacity of the background image
          }}
          ref={(el) => (bannerRefs.current[index] = el)}
        >
          <div className="banners-contents" ref={bannercontentRef}
          style={{textAlign:'start'}}>
            <h1 style={{ 
           color:'white',
          }}  >{banner.headings}</h1>
            <h2    style={{ 
          opacity:44,}} >{banner.secondaryHeading}</h2>
            <button  onClick={handleButtonClick}>{banner.buttonText}</button>
          </div>
        </div>
      ))}
    </div>


    <div data-aos="fade" class="page-title service-page-title">
      
    <div class="container">
  <div class="row d-flex justify-content-center text-center">
  <div class="col-lg-8">
  <h2 class="service-page-heading" >UI/UX Design Services</h2>
  <p class="mb-0" >
    Since 2024, our Tirunelveli-based company has been transforming user experiences with exceptional UI/UX design. We focus on creating intuitive, engaging interfaces that enhance usability, boost user satisfaction, and drive success for your digital products.
  </p>
</div>

  </div>
</div>

    </div>

    <div class="services-details-page-parent" id="solutions">
  <h5 class="services-details-page-heading">-- UI/UX Design Solutions --</h5>
  <div class="container-fluid service-page-detail-con">
    <div class="service-page-detail-sub2">
      <div class="service-page-detail-item1" data-aos="fade-up" data-aos-delay="500">
        <img src={post3} alt="UI/UX Design Process" />
      </div>
      <div class="service-page-detail-item-bl" data-aos="fade-up" data-aos-delay="100">
        <h3>User Research</h3>
        <p>Understand your users' needs and behaviors through comprehensive research to design intuitive and effective user experiences.</p>
      </div>
      <div class="service-page-detail-item-wh" data-aos="fade-up" data-aos-delay="200">
        <h3>Wireframing</h3>
        <p>Create detailed wireframes to outline the structure and functionality of your digital product, ensuring a clear and organized design layout.</p>
      </div>
      <div class="service-page-detail-item-wh" data-aos="fade-up" data-aos-delay="300">
        <h3>Prototyping</h3>
        <p>Develop interactive prototypes to visualize and test your design concepts, allowing for user feedback and iterative improvements.</p>
      </div>
      <div class="service-page-detail-item-bu" data-aos="fade-up" data-aos-delay="400">
        <h3>UI Design</h3>
        <p>Design visually appealing and cohesive user interfaces that enhance usability and provide a seamless user experience across devices.</p>
      </div>
    </div>
    <div class="service-page-detail-sub3">
      <div class="service-page-detail-item-bu" data-aos="fade-up" data-aos-delay="100">
        <h3>UX Design</h3>
        <p>Focus on optimizing the user journey to ensure a positive and engaging experience with your digital products, from start to finish.</p>
      </div>
      <div class="service-page-detail-item-wh" data-aos="fade-up" data-aos-delay="200">
        <h3>Usability Testing</h3>
        <p>Conduct usability tests to evaluate the effectiveness of your design and identify areas for improvement based on real user interactions.</p>
      </div>
      <div class="service-page-detail-item-wh" data-aos="fade-up" data-aos-delay="300">
        <h3>Interaction Design</h3>
        <p>Create interactive elements and transitions that enhance user engagement and provide a smooth and enjoyable user experience.</p>
      </div>
      <div class="service-page-detail-item-bl" data-aos="fade-up" data-aos-delay="400">
        <h3>Visual Design</h3>
        <p>Develop a compelling visual identity for your product with attention to color schemes, typography, and overall aesthetics.</p>
      </div>
      <div class="service-page-detail-item1" data-aos="fade-up" data-aos-delay="500">
        <img src={post4} alt="UX Design Process" />
      </div>
    </div>
  </div>

  <div class="container-fluid service-page-detail-con-mobile">
    <div class="service-page-detail-sub1-item-wh" data-aos="fade-up" data-aos-delay="100">
      <h3>Design Strategy</h3>
      <p>Develop a strategic approach to design that aligns with your business goals and addresses user needs effectively.</p>
    </div>
    <div class="service-page-detail-sub1-item-bu" data-aos="fade-up" data-aos-delay="200">
      <h3>Design Systems</h3>
      <p>Create design systems that ensure consistency and efficiency across all user interfaces and interactions.</p>
    </div>
    <div class="service-page-detail-sub1-item-wh" data-aos="fade-up" data-aos-delay="300">
      <h3>Responsive Design</h3>
      <p>Ensure your design adapts seamlessly to various screen sizes and devices, providing a cohesive experience for all users.</p>
    </div>
    <div class="service-page-detail-sub1-item-bl" data-aos="fade-up" data-aos-delay="400">
      <h3>Accessibility</h3>
      <p>Design with accessibility in mind to make sure your product is usable by individuals with different abilities and disabilities.</p>
    </div>
    <div class="service-page-detail-item-wh" data-aos="fade-up" data-aos-delay="100">
      <h3>Information Architecture</h3>
      <p>Organize and structure information in a way that enhances user understanding and navigation within your digital product.</p>
    </div>
    <div class="service-page-detail-item-bu" data-aos="fade-up" data-aos-delay="200">
      <h3>Branding Integration</h3>
      <p>Integrate branding elements into your design to create a strong and memorable visual identity for your product.</p>
    </div>
    <div class="service-page-detail-item-wh" data-aos="fade-up" data-aos-delay="300">
      <h3>Content Strategy</h3>
      <p>Develop a content strategy that ensures your messaging is clear, relevant, and aligned with your users' needs and expectations.</p>
    </div>
    <div class="service-page-detail-item-bl" data-aos="fade-up" data-aos-delay="400">
      <h3>Performance Optimization</h3>
      <p>Optimize design elements to ensure fast loading times and smooth interactions, enhancing the overall user experience.</p>
    </div>
    <div class="service-page-detail-item-wh" data-aos="fade-up" data-aos-delay="100">
      <h3>Market Research</h3>
      <p>Conduct market research to understand industry trends and user preferences, guiding the design process for better results.</p>
    </div>
    <div class="service-page-detail-item-bu" data-aos="fade-up" data-aos-delay="200">
      <h3>Design Consultation</h3>
      <p>Receive expert advice and guidance on design challenges and opportunities to elevate your user experience.</p>
    </div>
    <div class="service-page-detail-item-wh" data-aos="fade-up" data-aos-delay="300">
      <h3>Post-Launch Support</h3>
      <p>Get ongoing support and updates to refine and improve your design based on user feedback and performance metrics.</p>
    </div>
    <div class="service-page-detail-item-bl" data-aos="fade-up" data-aos-delay="400">
      <h3>Client Workshops</h3>
      <p>Participate in workshops to align on design goals, review progress, and incorporate client feedback into the design process.</p>
    </div>
  </div>
</div>




   
<div class="testimonial-container-port" data-aos-delay="200" data-aos="fade-up">
    
      <h5 class="services-details-page-heading" > UI/UX Services</h5>
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
