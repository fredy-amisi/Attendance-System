import React from 'react';

const Footer = () => {
  return (
    <>
    <footer>
      <div className="dylan">
        <h1>E-Attendance System</h1>
    <p>2024 E-Attendance System. <br/>Simplifying attendance tracking with technology.<br/> Stay connected, <br/>stay punctual.</p>

      </div>
      <div className="Copyright">
      <p className="Copyright">© {new Date().getFullYear()} - All Rights Reserved. Designed by Dylan<br/> 0113918190</p>
      </div>
      <div className="follow">
        <h1>Follow us</h1>
        <div className="follow-h3">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><h3>Facebook</h3></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><h3>LinkedIn</h3></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><h3>Twitter</h3></a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><h3>GitHub</h3></a>
        </div>
      </div>
      <div className="links">
        <h1>Quick Links</h1>
        <div className="links-div">
          <a href="/Signup"><h3>Get Started</h3></a>
          <a href="/Login"><h3>Log In</h3></a>
          <a href="/Attendance"><h3>Mark Attendance</h3></a>
          <a href="/Reports"><h3>View Reports</h3></a>
          <a href="/Contact"><h3>Contact Us</h3></a>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
