import React, { useState } from 'react';
import { storage, ref, uploadBytes, getDownloadURL } from "./firebase"; 
import emailjs from 'emailjs-com';

const JobApplicationForm = () => {
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
    skills: "",
    resume: null,
    position: "web developer", // Default position
    experience: {
      companyName: "",
      designation: "",
      years: "",
    },
  });

  const [isHovered, setIsHovered] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const positions = [
    "Web Developer","java Developer", "Php Developer","App Developer", "Digital Marketer", "Business Development Executive", "Intern", "Paid Intern",
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
        skills: formData.skills,
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
        skills: "",
        resume: null,
        position: "web developer",
        experience: {
          companyName: "",
          designation: "",
          years: "",
        },
      });
      window.history.back(); // Redirect to the previous page
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit application. Please try again.");
    }
  };

  if (!isVisible) return null; // Render nothing if the form is not visible

  return (
    <div className="form-popup">
      <div className="form-overlay" onClick={() => window.history.back()}></div>
      <div className="form-content">
        <button className="close-button" onClick={() => window.history.back()}>Close</button>
        <h2 style={{ color: 'black' }}>Job Application Form</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Position:
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
            Skills:
            <input
              type="text"
              placeholder="Enter skills separated by commas"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Upload Resume:
            <input type="file" name="resume" onChange={handleFileChange} required />
          </label>

          <button
            type="submit"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              backgroundColor: isHovered ? 'rgba(10, 60, 100, 0.979)' : 'white',
              color: isHovered ? 'white' : 'black',
              width: '8rem',
              height: '3rem',
              marginLeft: '6rem',
              borderRadius: '20px',
              border: '1px solid black',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            }}
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;
