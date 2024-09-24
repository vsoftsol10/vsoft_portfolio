
import React, { useState } from 'react';
import './job.css';
import Courses from './courses'; // Import the application form component

const CourseList = () => {
  const [showFormPopup, setShowFormPopup] = useState(false); // State to show/hide course application form
  const [selectedCourse, setSelectedCourse] = useState(null); // State to track selected course

  const courses = [
    {
      id: 1,
      title: 'Frontend Development',
      description: 'Learn to build and design responsive and interactive user interfaces.',
      skills: 'HTML, CSS, JavaScript, React, Angular',
      duration: '3 months',
      location: 'Online/Offline',
    },
    {
        id: 2,
        title: 'Backend Development',
        description: 'Master server-side development and database management.',
        skills: 'Node.js, Express, MongoDB, SQL, Python',
        duration: '3 months',
        location: 'Online/Offline',
      },
      {
        id: 3,
        title: 'Full Stack Development',
        description: 'Become proficient in both frontend and backend technologies.',
        skills: 'HTML, CSS, JavaScript, React, Node.js, Express, MongoDB',
        duration: '6 months',
        location: 'Online/Offline',
      },
      {
        id: 4,
        title: 'Digital Marketing',
        description: 'Understand SEO, SEM, content marketing, and social media strategies.',
        skills: 'SEO, SEM, Google Analytics, Social Media Management',
        duration: '2 months',
        location: 'Online & Offline',
      },
      {
        id: 5,
        title: 'UI/UX Design',
        description: 'Learn how to design user interfaces and experiences that are both functional and aesthetically pleasing.',
        skills: 'Wireframing, Prototyping, User Research, Design Tools',
        duration: '3 months',
        location: 'Online & Offline',
      },
      {
        id: 6,
        title: 'App Development',
        description: 'Develop mobile and web applications using modern technologies and frameworks.',
        skills: 'Flutter, React Native, Java, Swift',
        duration: '4 months',
        location: 'Online & Offline',
      },
      {
        id: 7,
        title: 'Paid Intern',
        description: 'Gain hands-on experience with real projects while earning a stipend.',
        skills: 'Project Management, Professional Development, Industry-Specific Skills',
        duration: '6 months',
        location: 'Tirunelveli, Tamil Nadu',
      },
  ];

  const handleEnrollClick = (course) => {
    setSelectedCourse(course); // Set the selected course to pass into the form
    setShowFormPopup(true); // Show the application form popup
  };

  const handleCloseFormPopup = () => {
    setShowFormPopup(false); // Close the form popup
  };

  return (
    <div className="courses">
      <div className="bannersss">
        <div className="banner-contents">
          <h1 className="course-h1">IT Training Courses</h1>
        </div>
      </div>

      <div className="course-cards-container">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <h2 className="course-title">{course.title}</h2>
            <p className="course-description">{course.description}</p>
            <p className="course-skills"><strong>Skills:</strong> {course.skills}</p>
            <p className="course-duration"><strong>Duration:</strong> {course.duration}</p>
            <p className="course-location"><strong>Location:</strong> {course.location}</p>
            <button onClick={() => handleEnrollClick(course)} className="apply-button">
              Enroll Now
            </button>
          </div>
          
        ))}
      </div>
      <div className="sticky-back">
        <button onClick={() => window.history.back()}>Back</button>
      </div>

      {/* Popup for the course application form */}
      {showFormPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-popup" onClick={handleCloseFormPopup}>X</button> {/* Close button */}
            <h2>Enroll in {selectedCourse?.title}</h2>
            <Courses course={selectedCourse} onClose={handleCloseFormPopup} /> {/* Pass selected course */}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseList;
