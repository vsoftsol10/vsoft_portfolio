import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Helmet } from "react-helmet";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import logo from "./images/vslogo.png";
import image from "./images/seoback.webp";
import "./ws.css";
import lg from "./images/menu.gif";
import poste1 from "./images/seo1.webp";
import poste2 from "./images/seo2.webp";
import poste3 from "./images/seo3.webp";
import poste4 from "./images/seo4.webp";
import poste5 from "./images/seo5.webp";
import poste6 from "./images/seo1.webp";
import post3 from "./images/webss8.webp";
import post4 from "./images/webss10.webp";

import clientimg1 from "./images/logos1 (1).png";
import clientimg2 from "./images/logos1 (3).png";
import clientimg3 from "./images/logos1 (5).png";
import clientimg4 from "./images/logos1 (2).png";
import clientimg5 from "./images/vslogo.png";

const bannersData = [
  {
    headings: "Search Engine Optimatization",
    secondaryHeading:
      "Our expert SEO strategies at V-Soft Solutions are designed to enhance your website’s visibility on search engines, attract organic traffic, and improve your overall search engine rankings.",
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
    navigate("/seo");
  };

  const bannercontentRef = useRef(null);

  const handleMenuToggle = () => {
    if (window.innerWidth <= 568) {
      // Check if the screen width is 768px or less
      navRef.current.classList.toggle("show");
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

    const bannercontentRef = document.querySelectorAll(".banner-content");

    gsap.registerPlugin(ScrollTrigger);

    // Move indicator animation
    function moveIndicator(e) {
      if (marker) {
        gsap.to(marker, {
          left: e.target.offsetLeft,
          width: e.target.offsetWidth,
          duration: 0.5,
        });
      }
    }

    function activeLink(e) {
      list.forEach((item) => {
        if (item) item.classList.remove("active");
      });
      e.target.closest("li").classList.add("active");
    }

    list.forEach((item) => {
      if (item) {
        item.addEventListener("mousemove", moveIndicator);
        item.addEventListener("mouseover", activeLink);
      }
    });

    // Banner animations

    // Page transition animation
    gsap.fromTo(
      pageTransition,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
    );

    // Logo rotation animation
    gsap.fromTo(
      logo,
      { rotate: 0 },
      { rotate: 360, duration: 2, ease: "power2.inOut" }
    );

    // Heading animations
    gsap.fromTo(
      heading,
      { opacity: 0, y: "100%" },
      { opacity: 1, y: "0%", duration: 1.5, delay: 1, ease: "power2.out" }
    );

    // Navigation animation
    gsap.fromTo(
      nav,
      { opacity: 0, x: "100%" },
      { opacity: 1, x: "0%", duration: 1.5, delay: 2, ease: "power2.out" }
    );

    return () => {
      list.forEach((item) => {
        if (item) {
          item.removeEventListener("mousemove", moveIndicator);
          item.removeEventListener("mouseover", activeLink);
        }
      });
    };
  }, []);

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
                  style={{ height: "2rem", width: "2rem" }}
                ></i>
              </a>
              <a
                href="mailto:vsoftsolutions8813@gmail.com"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <i
                  className="fa fa-envelope"
                  style={{ height: "2rem", width: "2rem" }}
                ></i>
              </a>
            </p>
            <button className="menu-button" onClick={handleMenuToggle}>
              <img src={lg} alt="Menu" className="menu-gif" />
            </button>
          </div>
        </div>

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
                <h6 className="custom-heading1"> IT Training & Career</h6>
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
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              opacity: 1, // Adjust the opacity of the background image
            }}
            ref={(el) => (bannerRefs.current[index] = el)}
          >
            <div className="banners-contents" ref={bannercontentRef}>
              <h1
                style={{
                  color: "black",
                }}
              >
                {banner.headings}
              </h1>
              <h2
                style={{
                  opacity: "170",
                }}
              >
                {banner.secondaryHeading}
              </h2>
              <button onClick={handleButtonClick}>{banner.buttonText}</button>
            </div>
          </div>
        ))}
      </div>

      <div data-aos="fade" class="page-title service-page-title">
        <div class="container">
          <div class="row d-flex justify-content-center text-center">
            <div class="col-lg-8">
              <h2 class="service-page-heading">
                Search Engine Optimatization Services
              </h2>
              <p
                class="mb-0"
                style={{
                  marginTop: "2rem",
                }}
              >
                Since 2024, our Tirunelveli-based company has been enhancing
                website visibility with expert SEO strategies. We specialize in
                improving search engine rankings, driving organic traffic, and
                delivering measurable results.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="services-details-page-parent" id="solutions">
        <h5 class="services-details-page-heading">-- SEO Solutions --</h5>
        <div class="container-fluid service-page-detail-con">
          <div class="service-page-detail-sub2">
            <div
              class="service-page-detail-item1"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <img src={post3} alt="SEO Strategies" />
            </div>
            <div
              class="service-page-detail-item-bl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3>On-Page SEO</h3>
              <p>
                Optimize your website's content and structure to improve its
                visibility on search engines and ensure it meets the latest SEO
                standards.
              </p>
            </div>
            <div
              class="service-page-detail-item-wh"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3>Off-Page SEO</h3>
              <p>
                Enhance your website's authority through strategic backlink
                building, social signals, and brand mentions across the web.
              </p>
            </div>
            <div
              class="service-page-detail-item-wh"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3>Technical SEO</h3>
              <p>
                Ensure your website is crawlable, indexable, and fast-loading
                with our comprehensive technical SEO services.
              </p>
            </div>
            <div
              class="service-page-detail-item-bu"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3>Keyword Research</h3>
              <p>
                Identify the most valuable keywords for your business and target
                them effectively to drive high-quality traffic to your website.
              </p>
            </div>
          </div>
          <div class="service-page-detail-sub3">
            <div
              class="service-page-detail-item-bu"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3>Local SEO</h3>
              <p>
                Boost your presence in local search results and attract nearby
                customers with our focused local SEO strategies.
              </p>
            </div>
            <div
              class="service-page-detail-item-wh"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3>Mobile SEO</h3>
              <p>
                Optimize your website for mobile devices to ensure a seamless
                experience and improved search rankings on mobile searches.
              </p>
            </div>
            <div
              class="service-page-detail-item-wh"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3>E-commerce SEO</h3>
              <p>
                Enhance the visibility of your online store, driving more
                traffic and sales through targeted e-commerce SEO strategies.
              </p>
            </div>
            <div
              class="service-page-detail-item-bl"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3>SEO Audits</h3>
              <p>
                Get a comprehensive analysis of your website's SEO performance
                with our detailed SEO audits, identifying areas for improvement.
              </p>
            </div>
            <div
              class="service-page-detail-item1"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <img src={post4} alt="SEO Analysis" />
            </div>
          </div>
        </div>

        <div class="container-fluid service-page-detail-con-mobile">
          <div
            class="service-page-detail-sub1-item-wh"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3>Content Optimization</h3>
            <p>
              Enhance your content with targeted keywords, meta descriptions,
              and proper formatting to improve its search visibility.
            </p>
          </div>
          <div
            class="service-page-detail-sub1-item-bu"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3>Link Building</h3>
            <p>
              Build high-quality backlinks that drive traffic and improve your
              website's domain authority.
            </p>
          </div>
          <div
            class="service-page-detail-sub1-item-wh"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3>SEO Reporting</h3>
            <p>
              Track your SEO performance with detailed reports that highlight
              progress, insights, and areas for further improvement.
            </p>
          </div>
          <div
            class="service-page-detail-sub1-item-bl"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3>Competitor Analysis</h3>
            <p>
              Gain insights into your competitors' SEO strategies and discover
              opportunities to outperform them in search rankings.
            </p>
          </div>
          <div
            class="service-page-detail-item-wh"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3>Image SEO</h3>
            <p>
              Optimize images on your website to improve loading times, user
              experience, and search engine rankings.
            </p>
          </div>
          <div
            class="service-page-detail-item-bu"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3>Voice Search Optimization</h3>
            <p>
              Prepare your website for the future by optimizing it for voice
              search, capturing a growing segment of search traffic.
            </p>
          </div>
          <div
            class="service-page-detail-item-wh"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3>Schema Markup</h3>
            <p>
              Implement structured data on your website to help search engines
              understand your content and improve how it's displayed in search
              results.
            </p>
          </div>
          <div
            class="service-page-detail-item-bl"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3>Website Speed Optimization</h3>
            <p>
              Improve your website's loading speed, enhancing user experience
              and boosting search engine rankings.
            </p>
          </div>
          <div
            class="service-page-detail-item-wh"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3>International SEO</h3>
            <p>
              Expand your reach across global markets with tailored SEO
              strategies that target international audiences.
            </p>
          </div>
          <div
            class="service-page-detail-item-bu"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3>SEO for Startups</h3>
            <p>
              Get your startup noticed with SEO strategies that are tailored to
              your business needs and growth goals.
            </p>
          </div>
          <div
            class="service-page-detail-item-wh"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3>Analytics and Reporting</h3>
            <p>
              Monitor and measure the success of your SEO efforts with our
              comprehensive analytics and reporting services.
            </p>
          </div>
          <div
            class="service-page-detail-item-bl"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3>SEO Consultation</h3>
            <p>
              Get expert advice and guidance on how to improve your website's
              SEO performance and achieve your online goals.
            </p>
          </div>
        </div>
      </div>

      <div
        class="testimonial-container-port"
        data-aos-delay="200"
        data-aos="fade-up"
      >
        <h5 class="services-details-page-heading"> SEO SERVICES</h5>
      </div>

      <div class="carousel-outer-port">
        <div
          class="carousel-inner-port"
          data-aos-delay="400"
          data-aos="fade-up"
        >
          <div class="carousel-port carousel1">
            <div class="testimonial-carousel-top-port">
              <img
                src={poste1}
                class="testimonial-client-img-port"
                alt="loading"
              />
            </div>
          </div>
          <div class="carousel-port carousel2">
            <div class=" testimonial-carousel-top-port">
              <img
                src={poste2}
                class="testimonial-client-img-port"
                alt="loading"
              />
            </div>
          </div>
          <div class="carousel-port carousel3">
            <div class=" testimonial-carousel-top-port">
              <img
                src={poste3}
                class="testimonial-client-img-port"
                alt="loading"
              />
            </div>
          </div>
          <div class="carousel-port carousel4">
            <div class=" testimonial-carousel-top-port">
              <img
                src={poste4}
                class="testimonial-client-img-port"
                alt="loading"
              />
            </div>
          </div>
          <div class="carousel-port carousel5">
            <div class=" testimonial-carousel-top-port">
              <img
                src={poste5}
                class="testimonial-client-img-port"
                alt="loading"
              />
            </div>
          </div>
          <div class="carousel-port carousel5">
            <div class=" testimonial-carousel-top-port">
              <img
                src={poste6}
                class="testimonial-client-img-port"
                alt="loading"
              />
            </div>
          </div>
        </div>
      </div>
      <h5 class="services-details-page-heading"> Our Clients</h5>
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
        <div class="client-sub-con bg-green-400 absolute z-0"></div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
