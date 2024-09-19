import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './job.css'; // Add your styles for the card layout

const JobList = () => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const jobs = [
    {
      id: 1,
      title: 'App Developer',
      description: 'Build and maintain App applications.',
      qualifications: "Bachelor's degree in Computer Science.",
      skills: 'Java, Kotlin, Android SDK, Swift.',
      education: "Bachelor's degree in Computer Science.",
      experience: '2+ years of Android development experience.',
      location: 'Tirunelveli, Tamil Nadu',
    },
    {
      id: 2,
      title: 'Java Developer',
      description: 'Develop robust Java applications.',
      qualifications: "Bachelor's degree in Computer Science.",
      skills: 'Java, Spring, Springboot, Jpa, Hibernate, RestApi, Mysql.',
      education: "Bachelor's degree in Computer Science.",
      experience: '1+ years of Java development experience.',
      location: 'Tirunelveli, Tamil Nadu',
    },
    {
      id: 3,
      title: 'Php Developer',
      description: 'Develop robust Php applications.',
      qualifications: "Bachelor's degree in Computer Science.",
      skills: 'Php, Laravel, Mysql.',
      education: "Bachelor's degree in Computer Science.",
      experience: '1+ years of Php development experience.',
      location: 'Tirunelveli, Tamil Nadu',
    },
    {
      id: 4,
      title: 'Business Development Executive',
      qualifications: "Bachelor's degree in Commerce.",
      skills: 'Communication Skills and Logical Thinking',
      education: "Bachelor's degree in Computer Science or Commerce.",
      experience: '2+ years of Related Service.',
      location: 'Tirunelveli, Tamil Nadu',
    },
  ];

  return (
    <div className="jobs">
      <div className="bannersss">
        <div className="banner-contents">
          <h1 className="jobsh1">Current Openings in VSOFT</h1>
        </div>
      </div>

      <div className="job-card-container">
        {jobs.map((job) => (
          <div className="job-card" key={job.id}>
            <h2 className="job-title" style={{color:'black'}}>{job.title}</h2>
            <p><strong>Description:</strong> {job.description || 'N/A'}</p>
            <p><strong>Qualifications:</strong> {job.qualifications || 'N/A'}</p>
            <p><strong>Skills:</strong> {job.skills || 'N/A'}</p>
            <p><strong>Education:</strong> {job.education || 'N/A'}</p>
            <p><strong>Experience:</strong> {job.experience || 'N/A'}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <button onClick={() => navigate('/Jobsapplication')} className="apply-button">Apply Now</button>
          </div>
        ))}
      </div>

      <div className="sticky-back">
        <button onClick={() => window.history.back()}>Back</button>
      </div>
    </div>
  );
};

export default JobList;
