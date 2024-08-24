import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import logo from './images/vslogo.png';
import serviceImage1 from './images/web-development.gif';
import serviceImage2 from './images/mobile-development2-2.gif';
import serviceImage3 from './images/ui.gif';
import serviceImage4 from './images/seo 2.gif';
import serviceImage5 from './images/giphy.gif';
import serviceImage6 from './images/data-entry.gif';
import './ServicePage.scss'; 
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Services = () => {
    const navigate = useNavigate();
    const pageTransitionRef = useRef(null);
    const logoRef = useRef(null);
    const headingRef = useRef(null);
    const solutionsRef = useRef(null);
    const navRef = useRef(null);
    const markerRef = useRef(null);
    const listRefs = useRef([]);

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
    }, []);

    const handleCardClick = (url) => {
        navigate(url);
    };

    const handleMenuToggle = () => {
        navRef.current.classList.toggle('show');
    };

    return (
        <div className="services-page" ref={pageTransitionRef}>
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
            <section className="servicesss">
            <h3 className='h0'> Our Services</h3>
    <div className="servicesss-containers">

        <div className="servicesss-card" onClick={() => handleCardClick('/service1')}>
            <div className="cardsss-content">
                <h3  className='ss' >Website Development</h3>
                <img src={serviceImage1}  className="floating-image" />
                <p className="pp">Starts From ₹8000</p>
            </div>
        </div>
        <div className="servicesss-card" onClick={() => handleCardClick('/service2')}>
            <div className="cardsss-content">
                <h3  className='ss'>Android App Development</h3>
                <img src={serviceImage2} className="floating-image" />
                <p className="pp">Starts From ₹13000</p>
            </div>
        </div>
        <div className="servicesss-card" onClick={() => handleCardClick('/service3')}>
            <div className="cardsss-content">
                <h3  className='ss'>UI/UX Design</h3>
                <img src={serviceImage3} className="floating-image" />
                <p className="pp">Starts From ₹3000</p>
            </div>
        </div>
        <div className="servicesss-card" onClick={() => handleCardClick('/service4')}>
            <div className="cardsss-content">
                <h3  className='ss'> SEO Service </h3>
                <img src={serviceImage4}className="floating-image" />
                <p className="pp">Starts From ₹4000</p>
            </div>
        </div>
        <div className="servicesss-card" onClick={() => handleCardClick('/service5')}>
            <div className="cardsss-content">
                <h3  className='ss'>Digital Marketing</h3>
                <img src={serviceImage5}  className="floating-image" />
                <p className="pp">Starts From ₹1000</p>
            </div>
        </div>
        <div className="servicesss-card" onClick={() => handleCardClick('/service6')}>
            <div className="cardsss-content">
                <h3 className='ss'>Data Entry</h3>
                <img src={serviceImage6}  className="floating-image" />
            </div>
        </div>
    </div>
</section>

<Footer />
        </div>
    );
};

export default Services;
