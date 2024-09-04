import React, { useState } from 'react';
import emailjs from 'emailjs-com';


function Cross2() {
  const [formData, setFormData] = useState({
    projectType: '',
    developmentStage: '',
    consultationNeeded: [],
    duration: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        consultationNeeded: checked
          ? [...prevData.consultationNeeded, value]
          : prevData.consultationNeeded.filter((item) => item !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sending form data to email
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((result) => {
          console.log('Email sent successfully:', result.text);
      }, (error) => {
          console.log('Failed to send email:', error.text);
      });

    // Reset form fields after submission
    setFormData({
      projectType: '',
      developmentStage: '',
      consultationNeeded: [],
      duration: '',
    });
  };

  return (
    <div className="contact-form-container">
      <h1 style={{
        textAlign :'center',
        fontSize :'1.5rem',
      }}>Request a Project Price</h1>
      <form onSubmit={handleSubmit}>
        <label>
          What type of software solution would you like to develop with us?
          <select name="projectType" value={formData.projectType} onChange={handleChange}>
            <option value="">Select</option>
            <option value="web">Web</option>
            <option value="mobile">Mobile</option>
            <option value="consultancy">Consultancy needed</option>
          </select>
        </label>

        <label>
          What is the current stage of your software development process?
          <select name="developmentStage" value={formData.developmentStage} onChange={handleChange}>
            <option value="">Select</option>
            <option value="idea">Idea</option>
            <option value="prototype">Prototype/Specification</option>
            <option value="designed">Designed solution</option>
            <option value="mvp">MVP</option>
          </select>
        </label>

        <label>
          Do you need a professional consultation from any of the specialists below?
          <div>
            <label><input type="checkbox" value="Project Manager" name="consultationNeeded" onChange={handleChange} /> Project Manager</label>
            <label><input type="checkbox" value="Business Analyst" name="consultationNeeded" onChange={handleChange} /> Business Analyst</label>
            <label><input type="checkbox" value="UI/UX Designer" name="consultationNeeded" onChange={handleChange} /> UI/UX Designer</label>
            <label><input type="checkbox" value="Architect" name="consultationNeeded" onChange={handleChange} /> Architect</label>
          </div>
        </label>

        <label>
          What is the expected duration of your project?
          <select name="duration" value={formData.duration} onChange={handleChange}>
            <option value="">Select</option>
            <option value="1 month">1 month</option>
            <option value="6 months">6 months</option>
            <option value="1 year">1 year</option>
            <option value="1.5 years">1.5 years</option>
            <option value="2+ years">2+ years</option>
          </select>
        </label>

        <button className='bttn' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Cross2;
