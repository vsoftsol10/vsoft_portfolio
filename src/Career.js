import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import lg from './images/menu.gif';
import image from './images/career.webp';

import logo from './images/vslogo.png';
import { storage, ref, uploadBytes, getDownloadURL } from "./firebase"; // Ensure this is correctly configured
import emailjs from "emailjs-com";
import './Career.css';

import { useNavigate } from 'react-router-dom'; 
import gsap from 'gsap';

const bannersData = [
  {
    headings: "Welcome",
    secondaryHeading: "At VSoft Solutions, we believe in the power of innovation and creativity.",
    buttonText: "EXPLORE",
    image: image,
  },
];

const JobApplicationForm = ({ visible, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    education: {
      degree: "",
      branch: "",
      marks: "",
    },
    skills: [],
    resume: null,
    position: "web developer", // Default position
    experience: {
      companyName: "",
      designation: "",
      years: "",
    },
  });
  const [isHovered, setIsHovered] = useState(false);

  const [showSkillsDropdown, setShowSkillsDropdown] = useState(false);
 
  const programmingSkills = [
    "JavaScript", "Python", "Java", "C++", "Ruby", "PHP", "C#", "Swift", "Go", "HTML", "CSS", "React", "Node.js", "Kotlin", "Figma", "Angular", "Not Applicable",
  ];

  const positions = [
    "Frontend", "Backend", "Full Stack", "UI/UX","Digital Marketing","App Development",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  
  const handleNestedChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      education: {
        ...prev.education,
        [name]: value,
      },
    }));
  };

  const handleExperienceChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      experience: {
        ...prev.experience,
        [name]: value,
      },
    }));
  };

  const handleSkillsChange = (e) => {
    const { value, checked } = e.target;
    const selectedSkills = formData.skills;

    if (checked && selectedSkills.length < 5) {
      // Add skill if not already selected and less than 5 selected
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, value],
      }));

      if (selectedSkills.length + 1 === 5) {
        // Close dropdown after 5 skills are selected
        setShowSkillsDropdown(false);
      }
    } else if (!checked) {
      // Remove skill if unchecked
      setFormData((prev) => ({
        ...prev,
        skills: prev.skills.filter((skill) => skill !== value),
      }));
    }
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      resume: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!formData.resume) {
        alert("Please upload a resume.");
        return;
      }

      // Upload resume to Firebase Storage
      const resumeRef = ref(storage, `resumes/${formData.resume.name}`);
      await uploadBytes(resumeRef, formData.resume);
      const resumeUrl = await getDownloadURL(resumeRef);

      // Send form details and resume URL to admin via email
      const templateParams = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        degree: formData.education.degree,
        branch: formData.education.branch,
        marks: formData.education.marks,
        skills: formData.skills.join(", "),
        resumeUrl: resumeUrl,
        position: formData.position,
        companyName: formData.experience.companyName,
        designation: formData.experience.designation,
        years: formData.experience.years,
      };

      await emailjs.send(
        "service_wt6r4yb",       // Your EmailJS service ID
        "template_k26ytka",      // Your EmailJS template ID
        templateParams,
        "B12h1HpEd_42HbUJy"      // Your EmailJS user ID
      );

      alert("Application submitted successfully!");

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        education: {
          degree: "",
          branch: "",
          marks: "",
        },
        skills: [],
        resume: null,
        position: "web developer",
        experience: {
          companyName: "",
          designation: "",
          years: "",
        },
      });
      onClose();
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit application. Please try again.");
    }
  };

  if (!visible) return null;

  return (
    <div className="form-popup">
      <div className="form-overlay" onClick={onClose}></div>
      <div className="form-content">
        <button className="close-button" onClick={onClose}>Close</button>
        <h2 style={{
          color:'black',
        }}>Course Training and Internship Form</h2>
        <form onSubmit={handleSubmit}>
          <label>
           Courses and InternShip:
            <select name="position" value={formData.position} onChange={handleChange} required>
              {positions.map((pos) => (
                <option key={pos} value={pos.toLowerCase()}>
                  {pos}
                </option>
              ))}
            </select>
          </label>

          <label>
            Full Name:
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </label>

          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>

          <label>
            Phone:
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </label>

          <label>
            Address:
            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
          </label>

          <label>
            Educational Details:
            <input type="text" name="degree" placeholder="Degree" value={formData.education.degree} onChange={handleNestedChange} required />
            Branch:
            <input type="text" name="branch" placeholder="Branch" value={formData.education.branch} onChange={handleNestedChange} required />
            Marks (Percentage):
            <input type="number" name="marks" value={formData.education.marks} onChange={handleNestedChange} required min="0" max="100" />
          </label>

          <label>
            Upload Resume:
            <input type="file" name="resume" onChange={handleFileChange} required />
          </label>

          <button type='submit'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} style={{

       backgroundColor: isHovered ? ' rgba(10, 60, 100, 0.979)' : 'white',
       color: isHovered ? 'white' : 'black',
       width: '8rem',
       height: '3rem',
       marginLeft:'6rem',
       borderRadius: '20px',
       border: '1px solid black',
       cursor: 'pointer',
       transition: 'all 0.3s ease',
       transform: isHovered ? 'scale(1.05)' : 'scale(1)',

      }}>Submit Application</button>
        </form>
      </div>
    </div>
  );
};

const Career = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handleShowForm = () => setFormVisible(true);
  const handleHideForm = () => setFormVisible(false);
  const listRefs = useRef([]);
  const logoRef = useRef(null);
  const pageTransitionRef = useRef(null);
  const headingRef = useRef(null);
  const solutionsRef = useRef(null);
  const navRef = useRef(null);
  const navigate = useNavigate();
  const bannerRefs = useRef([]);
  const handleMenuToggle = () => {
    if (window.innerWidth <= 568) { // Check if the screen width is 768px or less
      navRef.current.classList.toggle('show');
      
     
    }}

    const handleMenuToggles = () => {
      navigate('/jobs')
     }
     const handleMenuToggls = () => {
      navigate('/course')
     }
     const handleMenuTogglss = () => {
      navigate('/intern')
     }
  
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

    bannerRefs.current.forEach((banner, index) => {
      gsap.fromTo(banner,
        { opacity: 0, y: '50px' },
        { opacity: 1, y: '0', duration: 1.5, delay: 2 + (index * 0.5), ease: 'power2.out' }
      );
    });
  }, []);

  return (
    <div className="form-container">
      <header className="App-header">
        <div className="header-left">
          <img ref={logoRef} src={logo} className="App-logo" alt="logo" />
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
        <nav ref={navRef} className="App-nav">
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

      <div className="banner-containers">
        {bannersData.map((banner, index) => (
          <div
            key={index}
            ref={(el) => (bannerRefs.current[index] = el)}
            className="banners"
            style={{ backgroundImage: `url(${banner.image})`,
          backgroundPosition:'inherit',
        alignItems:'start',
      justifyItems:'start', }}
          >
            <div className="banners-contents">
              <h1 ref={headingRef}>{banner.headings}</h1>
              <h2 ref={solutionsRef}>{banner.secondaryHeading}</h2>
           
            </div>
          </div>
        ))}
      </div>

      <h3 style={{ textAlign: 'center' }}>Opportunities At VSoft</h3>
   
      <div className="card-grid" style={{
    marginTop:'3rem',
  }}>

    
<div className="cards">
    <h3>Course-Training</h3>
    <ul>
      <li><i className="fas fa-check red-tick"></i> Gain valuable technologies Training</li>
      <li><i className="fas fa-check red-tick"></i> Mentorship from experienced professionals</li>
      <li><i className="fas fa-check red-tick"></i> Opportunity to work on real-world projects</li>
      <li><i className="fas fa-check red-tick"></i> Flexible  Training hours</li>
     
    </ul>
    <button onClick={handleMenuToggls}
    style={{

       backgroundColor: isHovered ? ' rgba(10, 60, 100, 0.979)' : 'white',
       color: isHovered ? 'white' : 'black',
       width: '8rem',
       height: '3rem',
       marginLeft:'6rem',
       borderRadius: '20px',
       border: '1px solid black',
       cursor: 'pointer',
       transition: 'all 0.3s ease',
       transform: isHovered ? 'scale(1.05)' : 'scale(1)',

      }}>Apply Now</button>
  
  </div>
  <div className="cards">
    <h3>InternShip</h3>
    <ul>
      <li><i className="fas fa-check red-tick"></i> Competitive stipend</li>
      <li><i className="fas fa-check red-tick"></i> Access to advanced tools and technologies</li>
      <li><i className="fas fa-check red-tick"></i> Networking opportunities with industry leaders and Practical Tasks</li>
      <li><i className="fas fa-check red-tick"></i> Potential for full-time employment</li>
    </ul>
    <button onClick={handleMenuTogglss}
    style={{

       backgroundColor: isHovered ? ' rgba(10, 60, 100, 0.979)' : 'white',
       color: isHovered ? 'white' : 'black',
       width: '8rem',
       height: '3rem',
       marginLeft:'6rem',
       borderRadius: '20px',
       border: '1px solid black',
       cursor: 'pointer',
       transition: 'all 0.3s ease',
       transform: isHovered ? 'scale(1.05)' : 'scale(1)',

      }}>Apply Now</button>
  </div>
  <div className="cards">
    <h3>Jobs at VSoft</h3>
    <ul>
      <li><i className="fas fa-check red-tick"></i> Competitive salary and benefits</li>
      <li><i className="fas fa-check red-tick"></i> Career development and training programs</li>
      <li><i className="fas fa-check red-tick"></i> Positive and inclusive work environment</li>
      <li><i className="fas fa-check red-tick"></i> Opportunities for advancement and growth</li>
    </ul>
    <button onClick={handleMenuToggles}
    style={{

       backgroundColor: isHovered ? ' rgba(10, 60, 100, 0.979)' : 'white',
       color: isHovered ? 'white' : 'black',
       width: '8rem',
       height: '3rem',
       marginLeft:'6rem',
       borderRadius: '20px',
       border: '1px solid black',
       cursor: 'pointer',
       transition: 'all 0.3s ease',
       transform: isHovered ? 'scale(1.05)' : 'scale(1)',

      }}>Apply Now</button>
  </div>
     

    
    </div>
    <JobApplicationForm visible={formVisible} onClose={handleHideForm} />
    <Footer />
    </div>
  ); 
};

export default Career;
