import React from 'react';
import './footer.css'; // Import CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
      <div className="footer-logo">
        </div>
        <div className="footer-info">
          <p>Tapaswiji Info Park, Tech Zone, 184/185, EPIP Zone, Whitefield, Bengaluru, Karnataka 560066</p>
          <p>Email: amplifyeducation@gmail.com</p>
          <p>Follow us on instagram: @edtech</p>
        </div>
      </div>
      <div className="footer-links">
        <a href="#">Privacy Policy</a>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 Amplify Education. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
