import React, { useState } from "react";
import { storage, ref, uploadBytes, getDownloadURL } from "./firebase"; // Ensure this is correctly configured
import emailjs from "emailjs-com";
import './Career.css';

import { useNavigate } from 'react-router-dom'; 


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
    skills: [],
    resume: null,
    position: "web developer", // Default position
    experience: {
      companyName: "",
      designation: "",
      years: "",
    },
  });

  const [showSkillsDropdown, setShowSkillsDropdown] = useState(false);
  const navigate = useNavigate();
  const programmingSkills = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "Ruby",
    "PHP",
    "C#",
    "Swift",
    "Go",
    "HTML",
    "CSS",
    "React",
    "Node.js",
    "Kotlin",
    "Figma",
    "Angular",
    "Not Applicable",
  ];

  const positions = [
    "Web Developer",
    "App Developer",
    "Digital Marketer",
    "Data Entry",
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
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit application. Please try again.");
    }
  };
  const handleBackClick = () => {
    navigate('/'); // Redirect to the home page
  };

 
  return (
   
    
    <div className="form-container">
         <div class="backBt"  onClick={handleBackClick}>
    <span class="lines tLines"></span>
    <span class="lines mLines"></span>
    <span class="labels">Back</span>
    <span class="lines bLines"></span>
  </div>
      <form onSubmit={handleSubmit}>
        <h2>Job Application Form</h2>

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
         Branch : <input type="text" name="branch" placeholder="Branch" value={formData.education.branch} onChange={handleNestedChange} required />
          Marks (Percentage):
          <input type="number" name="marks" value={formData.education.marks} onChange={handleNestedChange} required min="0" max="100" />
        </label>

      

    

        <label>
          Upload Resume:
          <input type="file" name="resume" onChange={handleFileChange} required />
        </label>

        <button  className ="bttt"type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
