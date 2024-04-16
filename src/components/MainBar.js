import React, { useState } from 'react';
import './MainBar.css';
import { FaPhone,FaInstagram,FaEnvelope } from 'react-icons/fa';

function MainBar() {
  const [showContactInfo, setShowContactInfo] = useState(false);

  const handlePhoneClick = () => {
    // Toggle the display of contact info
    setShowContactInfo(!showContactInfo);
  };

  const handleInstagramClick = () => {
    // Toggle the display of Instagram contact info
    setShowContactInfo(!showContactInfo);
  };

  const handleEmailClick = () => {
    // Toggle the display of Email contact info
    setShowContactInfo(!showContactInfo);
  };

  return (
    <div className="main-container">
      <div className="content-left">
        <h3 className="h3-color">Welcome to Our Web Development Courses</h3>
        <h1 className="h1-color">Learn to Build Stunning Websites</h1>
        <p className="p-color">
          Dive into the exciting world of frontend development with our comprehensive courses. Whether you're a beginner taking your first steps in web development or an experienced developer looking to enhance your skills and stay updated with the latest technologies, we have something for everyone. Our courses cover a wide range of topics including HTML, CSS, JavaScript, responsive design, front-end frameworks like React and Angular, UI/UX design principles, and more. With hands-on projects, real-world examples, and expert instructors, you'll gain the knowledge and practical skills needed to build stunning websites and web applications. Join us on this journey to unlock your full potential as a frontend developer!
        </p>
        {/* Contact logo */}
       
        
        
        {/* Close indicator */}
        <div className="close-indicator" onClick={handlePhoneClick}></div>
        {/* Horizontal boxes */}
     



        <div className="main-contain">
           <div>
             <h2>SAY NO TO DISTANCE BARRIER!!!</h2>
           </div>
        </div>
    
 <div className='main-cont'>
  <div className="content-heading">
    <h3>100% Live Distance Learning!!!<br></br>India’s Only Live Tech-Learning Course <br></br>With Tier 1 Instructors.<br></br> Get Real-Time Feedback, Interactive Sessions <br></br>& A Personalised Learning Experience.</h3>
  </div>
    <span className='live'></span>
</div>





        <div className="underline"></div>
        <div className="flex-boxes">
          {/* Flex Box 1 */}
          <div className="flex-one">
            <h3>Frontend Development</h3>
            <h4>HTML (Hypertext Markup Language)</h4>
      <ul>
        <li>Structure</li>
        <li>Semantic HTML</li>
        <li>Forms</li>
        <li>Multimedia</li>
      </ul>

      <h4>CSS (Cascading Style Sheets)</h4>
      <ul>
        <li>Styling</li>
        <li>Selectors</li>
        <li>Layouts</li>
        <li>Responsive Design</li>
        <li>CSS Preprocessors</li>
      </ul>

      <h4>JavaScript</h4>
      <ul>
        <li>Basics</li>
        <li>DOM Manipulation</li>
        <li>Events</li>
        <li>Asynchronous Programming</li>
        <li>ES6+ Features</li>
      </ul>
          </div>
          {/* Flex Box 2 */}
          <div className="flex-two">
            <h3>Backend development (SPAs)</h3>
            <h3>Backend Development Syllabus</h3>

<h4>Programming Languages</h4>
<ul>
  <li>Node.js</li>
  <li>Python</li>
</ul>

<h4>Web Servers</h4>
<ul>
  <li>Express.js</li>
  <li>Flask</li>
</ul>

<h4>API Development</h4>
<ul>
  <li>RESTful APIs</li>
  <li>GraphQL</li>
  <li>Testing APIs</li>
</ul>

<h4>Authentication and Security</h4>
<ul>
  <li>Encryption</li>
  <li>Hashing</li>
  <li>OAuth</li>
</ul>

          </div>
          {/* Flex Box 3 */}
          <div className="flex-three">
            <h3>Database</h3>
            <h3>Database Syllabus</h3>

<h4>Relational Databases</h4>
<ul>
  <li>Introduction to Relational Databases</li>
  <li>SQL (Structured Query Language)</li>
</ul>

<h4>NoSQL Databases</h4>
<ul>
  <li>Introduction to NoSQL Databases</li>
  <li>Types of NoSQL Databases: Document-based, Key-value, Column-family, Graph databases</li>
</ul>

<h4>Database Administration</h4>
<ul>
  <li>Database Installation and Configuration</li>
  <li>User and Access Management</li>
  <li>Backup and Recovery</li>
</ul>

<h4>Database Development Tools</h4>
<ul>
  <li>SQL IDEs (Integrated Development Environments)</li>
  <li>ORMs (Object-Relational Mapping) tools</li>
  <li>Database Migration and Version Control</li>
</ul>
          </div>
        </div>
        {/* Underline */}
        <div className="underline"></div>
        {/* Additional content */}
        <div className="additional-content">
          <h1>New Batch</h1>
          <h2>Learn Web Development</h2>
          <p> Start your development journey</p>
          <button>Register</button>
          <div className="image-container"></div>
          <div className="underline"></div>
          <div><h1>Our Mentors</h1></div>
          <div className='flex-box'>
         <div className="mentor-box">
            <h3>R&D Engineer</h3></div> 
            <div className="circle aniket"></div>
            <div className="additional-box">
           <ul>
   <div>Name: Aniket Gahiware</div>
   <div>Branch: Computer Science</div>
   <div>Degree: Btech</div>
   <div>Company: Samsung</div>
  </ul>
            </div></div>   
            <div className='flex-box'>
         <div className="mentor-box">
            <h3>Software Engineer</h3></div>
            <div className="circle yashodeep"></div>
             <div className="additional-box">
           <ul>
   <div>Name: Yashodeep Dhas</div>
   <div>Branch: Computer Science</div>
   <div>Degree: Btech</div>
   <div>Company: Sygnus AI</div>
  </ul>
            </div></div>
            <div className='flex-box'>
         <div className="mentor-box">
            <h3>Frontend Developer</h3></div>
            <div className="circle shubham"></div>
             <div className="additional-box">
           <ul>
   <div>Name: Shubham Bhosale</div>
   <div>Branch: Computer Science</div>
   <div>Degree: Btech</div>
   <div>Company: TCS</div>
  </ul>
            </div></div>
            <div className='flex-box'>
         <div className="mentor-box">
            <h3>UI Developer</h3></div>
            <div className="circle vaibhav"></div>
             <div className="additional-box">
           <ul>
   <div>Name: Vaibhav Abhale</div>
   <div>Branch: EE</div>
   <div>Degree: Btech</div>
   <div>Company: AB Technologies</div>
  </ul>
            </div></div>
            <div className='flex-box'>
         <div className="mentor-box">
            <h3>UX Developer</h3></div>
            <div className="circle rajiv"></div>
             <div className="additional-box">
           <ul>
   <div>Name: Rajiv singh</div>
   <div>Branch: Computer Science</div>
   <div>Degree: Btech</div>
   <div>Company: Naresh Technologies</div>
  </ul>
            </div></div>
            <div className='flex-box'>
         <div className="mentor-box">
            <h3>Frontend Architect</h3></div> 
            <div className="circle narendra"></div>
            <div className="additional-box">
           <ul>
   <div>Name: Narendra Wakhare</div>
   <div>Branch: IT</div>
   <div>Degree: Btech</div>
   <div>Company: cognizant Technologies</div>
  </ul>
            </div></div>
            <div className='flex-box'>
         <div className="mentor-box">
            <h3>full stack developer</h3></div>
             <div className="circle vishal"></div>
             <div className="additional-box">
           <ul>
   <div>Name: Vishal Mahale</div>
   <div>Branch: Computer Science</div>
   <div>Degree: Btech</div>
   <div>Company: TCS</div>
  </ul>
            </div></div>
            <div className='flex-box'>
         <div className="mentor-box">
            <h3>Software Developer</h3></div>
            <div className="circle soham"></div>
            <div className="additional-box">
           <ul>
   <div>Name: Soham kadtan</div>
   <div>Branch: Computer Science</div>
   <div>Degree: Btech</div>
   <div>Company: Bits pilani</div>
  </ul>
  
            </div>
            </div><div className="underline"></div>
            <div className="AEgroup"></div>
            <div className="contact-logo">
          <div className="icon-container" onClick={handlePhoneClick}>
            <FaPhone />
            {showContactInfo && (
            
              <p>mobile no:8208871371</p>
            
            )}
          </div>
          <div className="icon-container" onClick={handleInstagramClick}>
            <FaInstagram />
            {showContactInfo && (
            
              <p>Email: instagram@example.com</p>
            
            )}
          </div>
          <div className="icon-container" onClick={handleEmailClick}>
            <FaEnvelope />
            {showContactInfo && (
            
              <p>Email: info@example.com</p>
            
          )}
          </div>
         
        </div>

        </div>
      </div>
    </div>
  );
}

export default MainBar;
