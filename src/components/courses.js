import React from 'react';
import './CoursesPage.css';

function CoursesPage() {
  return (
    <div className="courses-page">
      <h1>Available Courses</h1>
      <div className="course">
        <h2>Front End Development</h2>
        <p><strong>Description:</strong> Embark on a transformative journey to become a proficient Full Stack Developer with our comprehensive bootcamp. In this intensive course, you'll immerse yourself in both front-end and back-end development, equipping yourself with the skills and knowledge necessary to craft dynamic and responsive web applications.</p>
        <div className="details">
          <div className="detail">
          
            <p><strong> Educational Eligibility:</strong>BE/BTECH/MCA/MSC/BCA/BSC</p>
            
          </div>
          <div className="detail">
            <p><strong>Syllabus:</strong></p>
            <ul>
              <li>Introduction to HTML5 and CSS3</li>
              <li>JavaScript Fundamentals</li>
              <li>Responsive Web Design with Bootstrap</li>
              <li>Introduction to React.js</li>
              <li>State Management with Redux</li>
              <li>Working with APIs</li>
              <li>Project Workshops</li>
            </ul>
          </div>
          <div className="detail">
            <p><strong>Fees:</strong> Rs 5000/-</p>
          </div>
          <div className="detail">
            <p><strong>Duration:</strong> 8 weeks (classes [Mon-fri] times a week for [1.5] hours each session)</p>
          </div>
        </div>
        <a href="/register"><button>Register</button></a>
      </div>
      {/* Add more courses here */}
    </div>
  );
}

export default CoursesPage;
