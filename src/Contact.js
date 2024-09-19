import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom'; 
import './ContactForm.css'; 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    package: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate(); // Use navigate for redirection

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation check
    const { name, email, phone, service, package: selectedPackage, message } = formData;
    if (!name || !email || !phone || !service || !message || (service !== "SEO Services" && !selectedPackage)) {
      alert('Please fill out all fields.');
      return;
    }

    emailjs.send(
      'service_wt6r4yb', 'template_mzs9yvj',
      formData,
      'B12h1HpEd_42HbUJy' 
    )
    .then((result) => {
      alert('Form submitted successfully!'); // Popup success message
      setTimeout(() => {
        navigate('/'); // Redirect to the home page after 2 seconds
      }, 2000);
    }, (error) => {
      console.error('Failed to send email:', error.text);
      alert('Failed to submit the form. Please try again.'); // Popup error message
    });
  };

  const handleBackClick = () => {
    navigate(-1); // Redirect to the home page
  };

  // Packages for services
  const renderPackages = () => {
    const { service } = formData;
    if (service === 'Website Creation') {
      return (
        <div className="input-container">
          <h4>Choose Package:</h4>
          <select
            name="package"
            className="inputs"
            value={formData.package}
            onChange={handleChange}
          >
            <option value="">Select a package</option>
            <option value="Basic Website">Home Package </option>
            <option value="Standard Website">Pro Package </option>
            <option value="Advanced Website">E-Commerce</option>
            <option value="Premium Website">Tailored Package</option>
            <option value="All Packages">All Packages</option>
          </select>
        </div>
      );
    }
    if (service === 'App Development') {
      return (
        <div className="input-container">
          <h4>Choose Package:</h4>
          <select
            name="package"
            className="inputs"
            value={formData.package}
            onChange={handleChange}
          >
            <option value="">Select a package</option>
            <option value="Basic App">Home Package</option>
            <option value="Advanced App">Advanced Package</option>
            <option value="All Packages">All Packages</option>
          </select>
        </div>
      );
    }
    if (service === 'Digital Marketing') {
      return (
        <div className="input-container">
          <h4>Choose Package:</h4>
          <select
            name="package"
            className="inputs"
            value={formData.package}
            onChange={handleChange}
          >
            <option value="">Select a package</option>
            <option value="Logos and 3D Logo">Logos and 3D Logo</option>
            <option value="Poster and Promotional Video">Poster and Promotional Video</option>
            <option value="Cards and UI Design">Cards and UI Design</option>
            <option value="All Packages">All Packages</option>
          </select>
        </div>
      );
    }
    if (service === 'UI/UX Design') {
      return (
        <div className="input-container">
          <h4>Choose Package:</h4>
          <select
            name="package"
            className="inputs"
            value={formData.package}
            onChange={handleChange}
          >
            <option value="">Select a package</option>
            <option value="UI Package">UI Package</option>
            <option value="UX Package">UX Package</option>
            <option value="All Packages">All Packages</option>
          </select>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="containers">
      <div class="backBt" onClick={handleBackClick}>
        <span class="lines tLines"></span>
        <span class="lines mLines"></span>
        <span class="labels">Back</span>
        <span class="lines bLines"></span>
      </div>
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">VSOFT SOLUTIONS</p>
          <div className="info">
            <div className="information">
              <i className="fas fa-envelope"></i> &nbsp; &nbsp;
              <p><a href="mailto:info@thevsoft.com">info@thevsoft.com</a></p>
            </div>
            <div className="information">
              <i className="fas fa-phone"></i>&nbsp; &nbsp;
              <p><a href="tel:+919095422237">+91 9095422237</a></p>
            </div>
          </div>
          <div className="social-media">
            <p>Connect with us:</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <h3 className="title">Contact us</h3>
            {successMessage && <p className="success-message">{successMessage}</p>}
            <div className="input-container">
              <h4>Name:</h4>
              <input
                type="text"
                name="name"
                className="input"
                value={formData.name}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className="input-container">
              <h4>Email:</h4>
              <input
                type="email"
                name="email"
                className="input"
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className="input-container">
              <h4>Phone:</h4>
              <input
                type="tel"
                name="phone"
                className="input"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className="input-container">
              <h4>Services:</h4>
              <select
                name="service"
                className="inputs"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select a service</option>
                <option value="Website Creation">Website Creation</option>
                <option value="App Development">App Development</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="SEO Services">SEO Services</option>
              </select>
            </div>
            
            {renderPackages()}

            <div className="input-container textarea">
              <h4>Message:</h4>
              <textarea
                name="message"
                className="input"
                value={formData.message}
                onChange={handleChange}
                autoComplete="off"
              ></textarea>
            </div>
            <div className="button-container">
              <input type="Submit" value="Send" className="btn" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
