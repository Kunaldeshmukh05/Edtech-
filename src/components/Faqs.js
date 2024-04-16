import React from 'react';
import './FaqsPage.css';

class FaqsPage extends React.Component {
  render() {
    return (
      <div>
        <h2>Frequently Asked Questions</h2>
        <div>
          <h3>What is full-stack development?</h3>
          <p>Full-stack development involves working on both the frontend (client-side) and backend (server-side) parts of web applications. It includes skills in programming languages, databases, frameworks, and deployment.</p>
        </div>
        <div>
          <h3>What are some popular frontend development frameworks?</h3>
          <p>Some popular frontend development frameworks include React.js, Angular, and Vue.js. These frameworks help in building interactive user interfaces efficiently.</p>
        </div>
        <div>
          <h3>What are some basic programming languages for beginners?</h3>
          <p>Some basic programming languages suitable for beginners include Python, JavaScript, and Ruby. These languages are beginner-friendly and widely used in various domains.</p>
        </div>
        <div>
          <h3>What is responsive web design?</h3>
          <p>Responsive web design is an approach to design and development that ensures web pages render well on a variety of devices and window or screen sizes. It involves using flexible layouts, images, and CSS media queries.</p>
        </div>
        <div>
          <h3>What is version control?</h3>
          <p>Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later. It's commonly used in software development to track and manage code changes.</p>
        </div>
        <div>
          <h3>What are some key features of ES6 (ECMAScript 2015)?</h3>
          <p>ES6 introduced many new features to JavaScript, including arrow functions, template literals, let and const keywords for variable declaration, classes, and modules.</p>
        </div>
        <div>
          <h3>What is the Document Object Model (DOM)?</h3>
          <p>The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of HTML and XML documents as a tree-like structure, allowing programs to manipulate the content, structure, and style of web pages.</p>
        </div>
        <div>
          <h3>What is the difference between synchronous and asynchronous programming?</h3>
          <p>In synchronous programming, tasks are executed sequentially, blocking the execution of subsequent tasks until the current one is completed. In asynchronous programming, tasks can be executed concurrently, allowing the program to continue executing other tasks while waiting for asynchronous tasks to complete.</p>
        </div>
        <div>
          <h3>What is a RESTful API?</h3>
          <p>A RESTful API (Representational State Transfer) is an architectural style for designing networked applications. It uses standard HTTP methods (GET, POST, PUT, DELETE) and URIs to perform operations on resources, following the principles of statelessness, client-server architecture, and uniform interface.</p>
        </div>
        <div>
          <h3>What is the difference between state and props in React?</h3>
          <p>In React, state is mutable and managed within a component, whereas props (short for properties) are immutable and passed from parent components to child components. State is used for managing component-specific data, while props are used for passing data from parent to child components.</p>
        </div>
        <div>
          <h3>What are some advantages of using React.js?</h3>
          <p>Some advantages of using React.js include its component-based architecture, virtual DOM for efficient rendering, reusability of components, and strong community support. It also provides tools like React Router and Redux for managing application state and routing.</p>
        </div>
        <div>
          <h3>What are some popular databases used in web development?</h3>
          <p>Some popular databases used in web development include MySQL, PostgreSQL, MongoDB, and Firebase. These databases serve different purposes and have different strengths, such as relational databases for structured data and NoSQL databases for unstructured or semi-structured data.</p>
        </div>
        <div>
          <h3>What is the difference between localStorage and sessionStorage in HTML5?</h3>
          <p>localStorage and sessionStorage are both web storage APIs provided by HTML5 for storing data locally in the browser. The main difference between them is that localStorage persists data across browser sessions, while sessionStorage only persists data for the duration of the session.</p>
        </div>
        <div>
          <h3>What is the purpose of CSS preprocessors like Sass and Less?</h3>
          <p>CSS preprocessors like Sass (Syntactically Awesome Stylesheets) and Less are tools that extend the functionality of CSS by adding features like variables, nesting, mixins, and functions. They help developers write cleaner, more maintainable CSS code and improve productivity.</p>
        </div>
        <div>
          <h3>What are some common HTTP status codes?</h3>
          <p>Some common HTTP status codes include 200 OK (successful request), 404 Not Found (resource not found), 500 Internal Server Error (server error), 302 Found (temporary redirect), and 401 Unauthorized (authentication required).</p>
        </div>
        {/* Add more questions and answers as needed */}
      </div>
    );
  }
}

export default FaqsPage;
