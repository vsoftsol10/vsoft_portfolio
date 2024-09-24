import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import logo from "./images/vslogo.png";
import serviceImage1 from "./images/web-development.gif";
import serviceImage2 from "./images/mobile-development2-2.gif";
import serviceImage3 from "./images/ui.gif";
import serviceImage4 from "./images/seo 2.gif";
import serviceImage5 from "./images/giphy.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image from "./images/services.webp";
import lg from "./images/menu.gif";
import "./ServicePage.scss";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Services = () => {
  const pageTransitionRef = useRef(null);
  const logoRef = useRef(null);
  const headingRef = useRef(null);
  const solutionsRef = useRef(null);
  const navRef = useRef(null);
  const markerRef = useRef(null);
  const listRefs = useRef([]);
  const bannercontentRef = useRef(null);
  const cardss = useRef(null);

  const bannerRefs = useRef([]);
  const bannersData = [
    {
      headings: "Welcome to VSoft Solutions",
      secondaryHeading:
        "We offer a range of customized digital solutions to help your business grow.",
      buttonText: "EXPLORE SERVICES",
    },
  ];
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const bannercontentRef = document.querySelectorAll(".banners-contents");
    // Animate banner content
    gsap.fromTo(
      ".banners-contents h1",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 5, ease: "power2.out" }
    );

    gsap.fromTo(
      ".banners-contents h2",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 3, delay: 5, ease: "power2.out" }
    );

    return () => {
      gsap.killTweensOf(".banners-contents h1");
      gsap.killTweensOf(".banners-contents h2");
    };
  }, []);

  useEffect(() => {
    const pageTransition = pageTransitionRef.current;
    const nav = navRef.current;
    const logo = logoRef.current;

    gsap.fromTo(
      pageTransition,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
    );

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, x: "-100%" },
      { opacity: 1, x: "0%", duration: 1.5, delay: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      solutionsRef.current,
      { opacity: 0, y: "50px" },
      { opacity: 1, y: "0", duration: 1.5, delay: 1.5, ease: "power2.out" }
    );

    gsap.fromTo(
      nav,
      { opacity: 0, x: "100%" },
      { opacity: 1, x: "0%", duration: 1.5, delay: 2, ease: "power2.out" }
    );

    gsap.fromTo(
      logo,
      { rotate: 0 },
      { rotate: 360, duration: 2, ease: "power2.inOut" }
    );
  }, []);

  const handleCardClick = (link) => {
    window.location.href = link;
  };

  const handleMenuToggle = () => {
    navRef.current.classList.toggle("show");
  };

  return (
    <div className="services-page" ref={pageTransitionRef}>
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
                <Link to="/ws">Website Development</Link>
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
              </Link>{" "}
            </li>

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
            ref={(el) => (bannerRefs.current[index] = el)}
            style={{
              backgroundImage: `url(${image})`,

              backgroundPosition: "contain",
              backgroundRepeat: "no-repeat",
              height: "110%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <div
              className="banners-contents"
              style={{
                justifyContent: "start",
                borderRadius: "30px",
                // textAlign: "start",
              }}
              ref={bannercontentRef}
            >
              <h1 className="hsss" style={{ color: "white", margin: "0" }}>
                {banner.headings}
              </h1>
              <h2 className="hsss">
                {banner.secondaryHeading}
              </h2>
              <button
                onClick={() =>
                  cardss.current.scrollIntoView({ behavior: "smooth" })
                }
              >
                {banner.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="servicesss">
        <h3 className="h0"> Our Services</h3>
        <div className="servicesss-containers" ref={cardss}>
          <div
            className="servicesss-card"
            onClick={() => handleCardClick("./ws")}
          >
            <div className="cardsss-content">
              <h3 className="ss">Website Development</h3>
              <img src={serviceImage1} className="floating-image" />
              <p className="pp">Starts From ₹8000</p>
            </div>
          </div>
          <div
            className="servicesss-card"
            onClick={() => handleCardClick("./appsdevelop")}
          >
            <div className="cardsss-content">
              <h3 className="ss">App Development</h3>
              <img src={serviceImage2} className="floating-image" />
              <p className="pp">Starts From ₹13000</p>
            </div>
          </div>
          <div
            className="servicesss-card"
            onClick={() => handleCardClick("./ui2")}
          >
            <div className="cardsss-content">
              <h3 className="ss">UI/UX Design</h3>
              <img src={serviceImage3} className="floating-image" />
              <p className="pp">Starts From ₹3000</p>
            </div>
          </div>
          <div
            className="servicesss-card"
            onClick={() => handleCardClick("./seo2")}
          >
            <div className="cardsss-content">
              <h3 className="ss"> SEO Service </h3>
              <img src={serviceImage4} className="floating-image" />
              <p className="pp">Starts From ₹4000</p>
            </div>
          </div>
          <div
            className="servicesss-card"
            onClick={() => handleCardClick("./digi")}
          >
            <div className="cardsss-content">
              <h3 className="ss">Digital Marketing</h3>
              <img src={serviceImage5} className="floating-image" />
              <p className="pp">Starts From ₹1000</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
