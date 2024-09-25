import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Creation.css";
import "./App.css";
import lg from "./images/menu.gif";
import logo from "./images/vslogo.png";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import gsap from "gsap";
import image from "./images/website1.jpg";
import images from "./images/website2.jpg";
import imagess from "./images/web33.jpg";
import imagesss from "./images/website5.jpg";
import poster1 from "./images/BANNER 1.webp";
import poster2 from "./images/BANNER 2.webp";
import poster3 from "./images/BANNER 3.webp";
import posters1 from "./images/poster1.webp";
import posters2 from "./images/poster2.webp";
import posters3 from "./images/poster3.webp";
import posters4 from "./images/poster4.webp";
import poste1 from "./images/logos1 (1).png";
import poste2 from "./images/logos1 (5).png";
import poste3 from "./images/logos1 (3).png";
import poste4 from "./images/logos1 (4).png";
import postee1 from "./images/app1.webp";
import postee2 from "./images/app2.webp";
import postee3 from "./images/app3.webp";
import postee4 from "./images/app4.webp";
import postee5 from "./images/app5.webp";
import postee6 from "./images/app1.webp";
import Footer from "./Footer";
const CustomButton = styled(Button)({
  backgroundColor: "rgba(80, 0, 80, 0.979)",
  marginTop: "10px",
  marginRight: "10px",
  color: "white",
  borderRadius: "20px",
  width: "180px",
  "&:hover": {
    backgroundColor: "rgba(60, 0, 60, 0.979)",
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
      navRef.current.classList.toggle("show");
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    sidebarRef.current.classList.add("show");
    detailsRef.current.classList.add("show");
  };

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

    gsap.fromTo(
      ".products-content h1",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 5, ease: "power2.out" }
    );

    gsap.fromTo(
      ulRef.current,
      { x: "-100%" }, // Starting position (offscreen to the left)
      { x: "0%", duration: 5, delay: 0.5 } // Ending position (onscreen), with a delay for the ul
    );
  }, []);

  return (
    <div>
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

      <div className="products">
        <div className="products-content">
          <h1 className="product-headings">Our Inventions</h1>

          <CustomButton
            variant="contained"
            size="Large"
            onClick={() => handleProductClick("Digital Marketing")}
          >
            More Details
          </CustomButton>
        </div>
      </div>

      <div className="sidebarsss" ref={sidebarRef}>
        <ul className="sideulss" ref={ulRef}>
          <li className="sideli" onClick={() => handleProductClick("Website")}>
            Websites
          </li>
          <li className="sideli" onClick={() => handleProductClick("Apps")}>
            Applications
          </li>
          <li
            className="sideli"
            onClick={() => handleProductClick("Digital Marketing")}
          >
            Digital Marketing
          </li>
          <li
            className="sideli"
            onClick={() => handleProductClick("UI/UX Design")}
          >
            UI/UX Design
          </li>
          <li className="sideli" onClick={() => handleProductClick("Logo")}>
            Logo
          </li>
        </ul>
      </div>

      <div className="details-grid" ref={detailsRef}>
        {selectedProduct === "Website" && (
          <div className="details-content">
            <div className="details-images">
              <div className="details-image">
                <a
                  href="https://bulletcrackers.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bulletcrackers
                </a>
                <img src={image} alt="Website 1" className="product-image" />
              </div>
              <div className="details-image">
                <a
                  href="https://thevsoft.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  vsoftsolutions
                </a>
                <img src={images} alt="Website 2" className="product-image" />
              </div>
              <div className="details-image">
                <a
                  href="https://anichadigitalinfra.com//"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AnichaDigitals
                </a>
                <img src={imagess} alt="Website 3" className="product-image" />
              </div>
              <div className="details-image">
                <a
                  href="https://campuzone.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  campuzone
                </a>
                <img src={imagesss} alt="Website 3" className="product-image" />
              </div>
            </div>
          </div>
        )}
        {selectedProduct === "Digital Marketing" && (
          <div className="details-content">
            <div className="details-posters">
              <div className="details-poster">
                <img
                  src={poster1}
                  alt="Digital Marketing Poster 1"
                  className="product-image"
                />
              </div>
              <div className="details-poster">
                <img
                  src={poster2}
                  alt="Digital Marketing Poster 2"
                  className="product-image"
                />
              </div>
              <div className="details-poster">
                <img
                  src={poster3}
                  alt="Digital Marketing Poster 3"
                  className="product-image"
                />
              </div>
            </div>
          </div>
        )}
        {selectedProduct === "UI/UX Design" && (
          <div className="details-content">
            <div className="details-posters">
              <div className="details-poster">
                <img
                  src={posters1}
                  alt="UI/UX Design Poster 1"
                  className="product-image"
                />
              </div>
              <div className="details-poster">
                <img
                  src={posters2}
                  alt="UI/UX Design Poster 2"
                  className="product-image"
                />
              </div>
              <div className="details-poster">
                <img
                  src={posters3}
                  alt="UI/UX Design Poster 2"
                  className="product-image"
                />
              </div>
              <div className="details-poster">
                <img
                  src={posters4}
                  alt="UI/UX Design Poster 2"
                  className="product-image"
                />
              </div>
            </div>
          </div>
        )}
        {selectedProduct === "Logo" && (
          <div className="details-content">
            <div className="details-posters">
              <div className="details-poster">
                <img
                  src={poste1}
                  alt="UI/UX Design Poster 1"
                  className="product-image"
                />
              </div>
              <div className="details-poster">
                <img
                  src={poste2}
                  alt="UI/UX Design Poster 2"
                  className="product-image"
                />
              </div>
              <div className="details-poster">
                <img
                  src={poste3}
                  alt="UI/UX Design Poster 2"
                  className="product-image"
                />
              </div>
              <div className="details-poster">
                <img
                  src={poste4}
                  alt="UI/UX Design Poster 2"
                  className="product-image"
                />
              </div>
            </div>
          </div>
        )}
        {selectedProduct === "Apps" && (
          <div className="details-content">
            <div className="details-posters">
              <div className="details-poster">
                <img
                  src={postee1}
                  alt="UI/UX Design Poster 1"
                  className="product-image"
                />
                <h1 style={{ color: "black", textAlign: "center" }}>
                  {" "}
                  Chat App
                </h1>
              </div>
              <div className="details-poster">
                <img
                  src={postee2}
                  alt="UI/UX Design Poster 2"
                  className="product-image"
                />
                <h1 style={{ color: "black", textAlign: "center" }}>
                  {" "}
                  Job App
                </h1>
              </div>
              <div className="details-poster">
                <img
                  src={postee3}
                  alt="UI/UX Design Poster 2"
                  className="product-image"
                />
                <h1 style={{ color: "black", textAlign: "center" }}>
                  {" "}
                  HRMS App{" "}
                </h1>
              </div>
              <div className="details-poster">
                <img
                  src={postee4}
                  alt="UI/UX Design Poster 2"
                  className="product-image"
                />
                <h1 style={{ color: "black", textAlign: "center" }}>
                  Food Delivery App{" "}
                </h1>
              </div>
              <div className="details-poster">
                <img
                  src={postee5}
                  alt="UI/UX Design Poster 2"
                  className="product-image"
                />
                <h1 style={{ color: "black", textAlign: "center" }}> </h1>
              </div>
              <div className="details-poster">
                <img
                  src={postee6}
                  alt="UI/UX Design Poster 2"
                  className="product-image"
                />
                <h1 style={{ color: "black", textAlign: "center" }}>
                  {" "}
                  Chat App
                </h1>
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
