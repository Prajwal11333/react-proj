import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Optional: Your CSS styles

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">

          <div className="footer-logo">
            <Link to="/">
              <img src="/assets/imgs/logo.jpg" alt="EduSign Logo" className="footer-logo-img" />
              <span className="footer-logo-text">EduSign</span>
            </Link>
            <p className="footer-tagline">
              Empowering communication through sign language education
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3>Learn</h3>
              <ul>
                <li><Link to="/tutorials">Tutorials</Link></li>
                <li><Link to="/dictionary">Sign Dictionary</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Community</h3>
              <ul>
                <li><Link to="/community">Forum</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/educators">Educators</Link></li>
                <li><Link to="/parents">Parents Corner</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Support</h3>
              <ul>
                <li><Link to="/help">Help Center</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/feedback">Feedback</Link></li>
                <li><Link to="/accessibility">Accessibility</Link></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
