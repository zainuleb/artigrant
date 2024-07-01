import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="site-name">Site name</div>
        <div className="topics">
          <div className="topic">
            <h4>Topic</h4>
            <ul>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
            </ul>
          </div>
          <div className="topic">
            <h4>Topic</h4>
            <ul>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
            </ul>
          </div>
          <div className="topic">
            <h4>Topic</h4>
            <ul>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
            </ul>
          </div>
        </div>
        <div className="social-icons">
          <a href="/#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="/#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="/#">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="/#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
