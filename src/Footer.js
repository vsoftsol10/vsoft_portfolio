import React from 'react';
import './Footer.scss'; 
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-column abouts">
         
            <p>
              VSOFT Solutions<br /><br />
               10J/2, 2nd block, Trivandrum Rd,<br /> Vanarapettai, Tirunelveli.<br />Tamil Nadu-627002, India.     <div className="map-container">
               <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.0625184396577!2d77.761351!3d8.6581184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858c2b030ffaf%3A0x42860b7f14b34f1!2sVsoft%20Solutions!5e0!3m2!1sen!2sin!4v1605671234513!5m2!1sen!2sin"
    width="80%"
    height="100" // Adjust the height as needed
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
  ></iframe>
            </div></p>
           </div>

          <div className="footer-column links">
            <h3>Quick Links</h3>
           
          
            <p><a href="#">Privacy Policy</a></p>
             <p><a href="#">Terms & Conditions</a></p>
    
          </div>
          <div className="footer-column contact">
            <h3>Contact Us</h3>
            <p>
              <i className="fa fa-phone"></i> 
           <a href="tel:+919095422237">+91 9095422237</a>
            </p>
            <p>
              <i className="fa fa-globe"></i> 
           <a href="http://www.vsoftsolutions.in.net" target="_blank" rel="noopener noreferrer">www.thevsoft.com</a>
            </p>
            <p>
              <i className="fa fa-envelope"></i> 
           <a href="mailto:vsoftsolutions8813@gmail.com">info@thevsoft.com</a>
            </p>
          </div>
          <div className="footer-column social-icons">

            <h3>Social Medias</h3>
            <div className="social-row first-row"><p> instagram   : <a href="https://www.instagram.com/thevsoft/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></p>
            
            </div>
       
              <div className="social-row2">
             
              <div className="social-row2">
              <p>YouTube: <a href="https://youtube.com/@vsoftsolutions?feature=shared" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a></p>
            </div>
             
              
              </div> <div className="social-row3">
          <p>  linkedin   :  <a href="https://www.linkedin.com/in/YourProfile" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a></p>
          
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
