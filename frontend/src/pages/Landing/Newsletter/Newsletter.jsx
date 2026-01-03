import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      {/* BACKGROUND */}
      <div className="newsletter-bg"></div>
      <div className="newsletter-overlay"></div>

      {/* CONTENT */}
      <div className="newsletter-box">
        <h2>
          Stay Ahead with <span>DhanEase</span>
        </h2>

        <p>
          Get AI-powered financial insights, smart money tips, and early feature
          updates delivered straight to your inbox.
        </p>

        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email address"
            required
          />
          <button type="submit">Subscribe</button>
        </form>

        <span className="newsletter-note">
          No spam. Only valuable insights.
        </span>
      </div>
    </section>
  );
};

export default Newsletter;
