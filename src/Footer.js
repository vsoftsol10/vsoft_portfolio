import React from 'react';
import './Footer.scss'; // Make sure to create and import your SCSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-column about">
            <h3>Vsoft Solutions</h3>
            <p>Leading Tech company in India<br />
               Vannarpettai, Tirunelveli,<br />
               Tamilnadu - 627002</p>
          </div>
          <div className="footer-column links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Support</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="footer-column contact">
            <h3>Contact Us</h3>
            <p>
              <i className="fa fa-phone"></i> 
              Phone: <a href="tel:+919095422237">+91 9095422237</a>
            </p>
            <p>
              <i className="fa fa-globe"></i> 
              Website: <a href="http://www.vsoftsolutions.in.net" target="_blank" rel="noopener noreferrer">www.vsoftsolutions.in.net</a>
            </p>
            <p>
              <i className="fa fa-envelope"></i> 
              Email: <a href="mailto:vsoftsolutions8813@gmail.com">vsoftsolutions8813@gmail.com</a>
            </p>
          </div>
          <div className="footer-column social-icons">

            <h3>Social Medias</h3>
            <div className="social-row first-row">
              <a href="https://www.instagram.com/YourProfile" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
            </div>
       
              <div className="social-row2">
             
             
             
              <a href="https://twitter.com/YourProfile" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i> </a>
              </div> <div className="social-row3">
          
              <a href="https://www.linkedin.com/in/YourProfile" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Vsoft Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
