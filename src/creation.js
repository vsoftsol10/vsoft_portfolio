import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Creation.css';
import './App.css'
import lg from './images/menu.gif';
import logo from './images/vslogo.png';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import gsap from 'gsap';
import image from './images/website1.jpg';
import images from './images/website2.jpg';
import poster1 from './images/BANNER 1.png';
import poster2 from './images/BANNER 2.png';
import poster3 from './images/BANNER 3.png';
import posters1 from './images/poster1.png';
import posters2 from './images/poster2.png';
import posters3 from './images/poster3.png';
import poste1 from './images/logos1 (1).png';
import poste2 from './images/logos1 (5).png';
import poste3 from './images/logos1 (3).png';
import poste4 from './images/logos1 (4).png';
import Footer from './Footer';
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

const Creation = () => {
  
  const logoRef = useRef(null);
  const pageTransitionRef = useRef(null);
  const headingRef = useRef(null);
  const solutionsRef = useRef(null);
  const navRef = useRef(null);

  const listRefs = useRef([]);
  const ulRef = useRef(null);
  const sidebarRef = useRef(null);
  const detailsRef = useRef(null);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleMenuToggle = () => {
    if (window.innerWidth <= 768) {
      navRef.current.classList.toggle('show');
    }
  };



  const handleProductClick = (product) => {
    setSelectedProduct(product);
    sidebarRef.current.classList.add('show');
    detailsRef.current.classList.add('show');
  };

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

    gsap.fromTo('.products-content h1',
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 5, ease: 'power2.out' }
    );
   
    
    gsap.fromTo(ulRef.current, 
      { x: '-100%' }, // Starting position (offscreen to the left)
      { x: '0%', duration: 5, delay: 0.5 } // Ending position (onscreen), with a delay for the ul
    );
   
  }, []);

  return (
    <div>
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
        <nav className="App-nav" ref={navRef}>
        <ul>
            <li ref={(el) => (listRefs.current[0] = el)}>
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

      <div className="products">
        <div className="products-content">
          <h1 className="product-headings">Our Inventions</h1>
         
          <CustomButton   variant="contained" size="Large" onClick={() => handleProductClick('Digital Marketing')}>
            More Details
          </CustomButton></div>
      </div>

      <div className="sidebarsss" ref={sidebarRef}>
        <ul className="sideulss"ref={ulRef} >
          <li className="sideli" onClick={() => handleProductClick('Website')}>Websites</li>
          <li  className="sideli" onClick={() => handleProductClick('Logo')}>Applications</li>
          <li className="sideli"  onClick={() => handleProductClick('Digital Marketing')}>Digital Marketing</li>
          <li  className="sideli" onClick={() => handleProductClick('UI/UX Design')}>UI/UX Design</li>
          <li  className="sideli" onClick={() => handleProductClick('Logo')}>Logo</li>

        </ul>
      </div>

      <div className="details-grid" ref={detailsRef}>
        {selectedProduct === 'Website' && (
          <div className="details-content">
            <div className="details-images">
              
              <div className="details-image">
              <a href="https://bulletcrackers.in/" target="_blank" rel="noopener noreferrer">bulletcrackers</a>
                <img src={image} alt="Website 1" className="product-image" />
             
              </div>
              <div className="details-image">
              <a href="https://thevsoft.com/" target="_blank" rel="noopener noreferrer">vsoftsolutions</a>
                <img src={images }alt="Website 2" className="product-image" />
              
              </div>
            </div>
          </div>
        )}
      {selectedProduct === 'Digital Marketing' && (
         <div className="details-content">
         <div className="details-posters">
         <div className="details-poster">
<img src={poster1} alt="Digital Marketing Poster 1" className="product-image" />
</div>
<div className="details-poster">
<img src={poster2} alt="Digital Marketing Poster 2" className="product-image" />
</div>
<div className="details-poster">
<img src={poster3} alt="Digital Marketing Poster 3" className="product-image" />
</div>
         </div>
       </div> 
      )}
        {selectedProduct === 'UI/UX Design' && (
          <div className="details-content">
            <div className="details-posters">
           
              <div className="details-poster">
                <img src={posters1} alt="UI/UX Design Poster 1" className="product-image" />
              </div>
              <div className="details-poster">
                <img src={posters2}  alt="UI/UX Design Poster 2" className="product-image" />
              </div>
              <div className="details-poster">
                <img src={posters3}  alt="UI/UX Design Poster 2" className="product-image" />
              </div>
            </div>
          </div>
        )}
          {selectedProduct === 'Logo' && (
          <div className="details-content">
            <div className="details-posters">
           
              <div className="details-poster">
                <img src={poste1} alt="UI/UX Design Poster 1" className="product-image" />
         
              </div>
              <div className="details-poster">
                <img src={poste2}  alt="UI/UX Design Poster 2" className="product-image" />
              </div>
              <div className="details-poster">
                <img src={poste3}  alt="UI/UX Design Poster 2" className="product-image" />
              </div>
              <div className="details-poster">
                <img src={poste4}  alt="UI/UX Design Poster 2" className="product-image" />
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Creation;
