import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './job.css';

const CourseApplication = () => {
  const [showPopup, setShowPopup] = useState(false); // State to show/hide popup
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here, like sending data to Firebase
    
    setShowPopup(true); // Show confirmation popup after submission
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    navigate(-1); // Redirect to the previous page
  };

  return (
    <div className="course-application">
      <h1>Course Application Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Add your form fields here */}
        <label>
          Full Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Mobile No:
          <input type="number" name="number" required />
        </label>
        <label>
         Address:
          <input type="text" name="text" required />
        </label>
        <label>

          Course:
          <select name="course" required>
            <option value="frontend">Frontend Development</option>
            <option value="backend">Backend Development</option>
            <option value="fullstack">Full Stack Development</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="ui-ux">UI/UX Design</option>
            <option value="app-development">App Development</option>
            <option value="paid-intern">Paid Intern</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>

      {/* Popup for showing confirmation */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Application Submitted!</h2>
            <p>Your application has been submitted successfully.</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseApplication;
