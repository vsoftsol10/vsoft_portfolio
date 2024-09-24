import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Helmet } from 'react-helmet';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './App.css';

import logo from './images/vslogo.png';
import image from './images/digiback.webp';
import './ws.css';

import poste1  from './images/BANNER 1.webp';
import poste2 from './images/BANNER 2.webp';
import poste3 from './images/BANNER 3.webp';
import poste4 from './images/poster1.webp';
import poste5 from './images/poster2.webp';
import poste6 from './images/poster3.webp';
import post3 from './images/webss5.webp';
import post4  from './images/webss6.webp';
import lg from './images/menu.gif';
import clientimg1 from './images/logos1 (1).png';
import clientimg2 from './images/logos1 (3).png';
import clientimg3 from './images/logos1 (5).png';
import clientimg4 from './images/logo6.png';
import clientimg5 from './images/logo5.png';
import clientimg6 from './images/logos1 (1).png';

import Footer from './Footer';



const bannersData = [
    {
        headings: "Digital Marketing Service  Company",
        secondaryHeading: "At V-Soft Solutions, we specialize in crafting strategic digital marketing campaigns that boost your online presence, engage your target audience, and drive measurable results to grow your business.",
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
    navigate("/digital");
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
          <div>
            <p style={{ color: "white", margin: 0 }}>
              <a
                href="tel:+919095422237"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <i
                  className="fa fa-phone"
                  style={{ height: "4rem", width: "4rem" }}
                ></i>
              </a>
              <a
                href="mailto:vsoftsolutions8813@gmail.com"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <i
                  className="fa fa-envelope"
                  style={{ height: "4rem", width: "4rem" }}
                ></i>
              </a>
            </p>
            <button className="menu-button" onClick={handleMenuToggle}>
          <img src={lg} alt="Menu" className="menu-gif" />
        </button>
          </div>
      
        </div>
      
    

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
        <Link to="/seo2">Seo Services</Link>
        <Link to="/ui2">UI/UX Designs</Link>
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
          style={{ 
            backgroundImage: `url(${banner.image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          
          }}
          ref={(el) => (bannerRefs.current[index] = el)}
        >
          <div className="banners-contents" ref={bannercontentRef}>
            <h1  style={{ 
           opacity:'300',
          }}  >{banner.headings}</h1>
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
  <h2 class="service-page-heading"   >Digital Marketing Services </h2>
  <p class="mb-0">Since 2024, our Tirunelveli-based digital marketing company has been delivering results-driven strategies. As a trusted partner, we specialize in SEO, social media marketing, content marketing. </p>
</div>

        </div>
      </div>
    </div>


    <div class="services-details-page-parent" id="solutions">
  <h5 class="services-details-page-heading">-- Digital Marketing Solutions --</h5>
  <div class="container-fluid service-page-detail-con">
    <div class="service-page-detail-sub2">
      <div class="service-page-detail-item1" data-aos="fade-up" data-aos-delay="500">
        <img src={post3} />
      </div>
      <div class="service-page-detail-item-bl" data-aos="fade-up" data-aos-delay="100">
        <h3>SEO Optimization</h3>
        <p>Boost your website's visibility and ranking on search engines with our expert SEO strategies, tailored to drive organic traffic and enhance your online presence.</p>
      </div>
      <div class="service-page-detail-item-wh" data-aos="fade-up" data-aos-delay="200">
        <h3>Social Media Marketing</h3>
        <p>Engage your audience on social platforms with targeted social media campaigns that build brand awareness and drive customer interaction.</p>
      </div>
      <div class="service-page-detail-item-wh" data-aos="fade-up" data-aos-delay="300">
        <h3>Content Marketing</h3>
        <p>Deliver valuable content that resonates with your audience, establishing your brand as a thought leader and driving conversions through strategic content marketing.</p>
      </div>
      <div class="service-page-detail-item-bu" data-aos="fade-up" data-aos-delay="400">
        <h3>Pay-Per-Click Advertising</h3>
        <p>Maximize your ROI with our PPC advertising services, creating targeted ad campaigns that generate high-quality leads and increase your sales.</p>
      </div>
    </div>
    <div class="service-page-detail-sub3">
      <div class="service-page-detail-item-bu" data-aos="fade-up" data-aos-delay="100">
        <h3>Email Marketing</h3>
        <p>Nurture your customer relationships and drive engagement with personalized email marketing campaigns designed to convert leads into loyal customers.</p>
      </div>
      <div class="service-page-detail-item-wh" data-aos="fade-up" data-aos-delay="200">
        <h3>Influencer Marketing</h3>
        <p>Leverage the power of influencers to reach a broader audience and build trust with potential customers through authentic endorsements.</p>
      </div>
      <div class="service-page-detail-item-wh" data-aos="fade-up" data-aos-delay="300">
        <h3>Conversion Rate Optimization (CRO)</h3>
        <p>Enhance your website's performance by optimizing the user experience, ensuring that more visitors turn into paying customers.</p>
      </div>
      <div class="service-page-detail-item-bl" data-aos="fade-up" data-aos-delay="400">
        <h3>Web Analytics</h3>
        <p>Gain deep insights into your digital performance with our comprehensive web analytics services, enabling data-driven decisions for business growth.</p>
      </div>
      <div class="service-page-detail-item1" data-aos="fade-up" data-aos-delay="500">
        <img src={post4} />
      </div>
    </div>
  </div>

  <div class="container-fluid service-page-detail-con-mobile">
    <div class="service-page-detail-sub1-item-wh" data-aos="fade-up" data-aos-delay="100">
      <h3>Local SEO</h3>
      <p>Increase your visibility in local searches and attract nearby customers with our tailored local SEO strategies.</p>
    </div>
    <div class="service-page-detail-sub1-item-bu" data-aos="fade-up" data-aos-delay="200">
      <h3>Online Reputation Management</h3>
      <p>Protect and enhance your brand's online reputation with our comprehensive reputation management services.</p>
    </div>
    <div class="service-page-detail-sub1-item-wh" data-aos="fade-up" data-aos-delay="300">
      <h3>Video Marketing</h3>
      <p>Engage your audience with compelling video content that tells your brand's story and drives action.</p>
    </div>
    <div class="service-page-detail-sub1-item-bl" data-aos="fade-up" data-aos-delay="400">
      <h3>Affiliate Marketing</h3>
      <p>Expand your reach and drive sales through a network of affiliate partners with our strategic affiliate marketing programs.</p>
    </div>
    <div class="service-page-detail-item-wh" data-aos="fade-up" data-aos-delay="100">
      <h3>Mobile Marketing</h3>
      <p>Reach your audience on the go with our mobile marketing strategies, optimizing campaigns for mobile devices.</p>
    </div>
    <div class="service-page-detail-item-bu" data-aos="fade-up" data-aos-delay="200">
      <h3>Marketing Automation</h3>
      <p>Streamline your marketing efforts with automation tools that increase efficiency and deliver personalized experiences at scale.</p>
    </div>
    <div class="service-page-detail-item-wh" data-aos="fade-up" data-aos-delay="300">
      <h3>Landing Page Optimization</h3>
      <p>Convert more visitors into customers with optimized landing pages designed to drive action and maximize conversions.</p>
    </div>
    <div class="service-page-detail-item-bl" data-aos="fade-up" data-aos-delay="400">
      <h3>Brand Strategy</h3>
      <p>Define and execute a powerful brand strategy that aligns with your business goals and resonates with your target audience.</p>
    </div>
    <div class="service-page-detail-item-wh" data-aos="fade-up" data-aos-delay="100">
      <h3>Market Research</h3>
      <p>Gain valuable insights into your market and competitors with our in-depth research services, helping you make informed business decisions.</p>
    </div>
    <div class="service-page-detail-item-bu" data-aos="fade-up" data-aos-delay="200">
      <h3>Customer Journey Mapping</h3>
      <p>Understand and optimize the entire customer journey with our comprehensive mapping services, ensuring a seamless experience from awareness to conversion.</p>
    </div>
    <div class="service-page-detail-item-wh" data-aos="fade-up" data-aos-delay="300">
      <h3>Content Strategy</h3>
      <p>Create and execute a content strategy that drives engagement and supports your business objectives.</p>
    </div>
    <div class="service-page-detail-item-bl" data-aos="fade-up" data-aos-delay="400">
      <h3>Campaign Management</h3>
      <p>From planning to execution, our campaign management services ensure your marketing initiatives are successful and impactful.</p>
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
        <img src={clientimg6} alt class="client-img5" />
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
