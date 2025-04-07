import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'; // Assuming you have a separate CSS file for styling

const Header = () => {
  const location = useLocation();

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/" id="logo-link">
              <img src="/assets/imgs/logo.jpg" alt="EduSign" className="logo-img" />
              <span className="logo-text">EduSign</span>
            </Link>
          </div>

          <nav className="main-nav" id="main-navigation">
            <ul className="nav-list">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                  id="nav-home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/tutorials"
                  className={`nav-link ${location.pathname.startsWith('/tutorials') ? 'active' : ''}`}
                  id="nav-tutorials"
                >
                  Tutorials
                </Link>
              </li>
              {/* Uncomment this when Community page is ready */}
              {/* <li className="nav-item">
                <Link to="/community" className="nav-link" id="nav-translator">
                  Community
                </Link>
              </li> */}
              <li className="nav-item">
                <Link
                  to="/about-us"
                  className={`nav-link ${location.pathname === '/about-us' ? 'active' : ''}`}
                  id="nav-resources"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </nav>

          <div className="user-menu" id="user-menu">
            <Link
              to="/login"
              className="btn login-btn"
              id="login-btn"
              style={{ color: 'rgb(112, 157, 215)', fontSize: '19px' }}
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
