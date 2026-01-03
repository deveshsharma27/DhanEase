import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section" id="contact">
      {/* BACKGROUND */}
      <div className="footer-bg"></div>
      <div className="footer-overlay"></div>

      <div className="footer-container">
        {/* BRAND */}
        <div className="footer-brand">
          <h3 className="footer-logo">DhanEase</h3>
          <p>
            Smart, secure, and AI-powered financial guidance designed for
            students and early professionals.
          </p>
        
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <div>
            <h4>Product</h4>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Security</a>
            {/* <a href="#">Roadmap</a> */}
          </div>

          <div>
            <h4>Company</h4>
            <a href="#">About</a>
            {/* <a href="#">Blog</a> */}
            <a href="#">Services</a>
            <a href="#">FAQs</a>
          </div>

          <div>
            <h4>Contact Us</h4>
            <a href="#">📩devesh200300@gmail.com</a>
            <a href="#">📞 +91 8173946717</a>
            <a href="#">📍U.P India</a>
            {/* <a href="#">FAQs</a> */}
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} DhanEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
