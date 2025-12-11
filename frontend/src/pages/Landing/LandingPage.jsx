import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage(){
  return (
    <div className="landing">
      <div className="hero">
        <h1>FinGold — Personal AI Financial Advisor</h1>
        <p>Smart budgeting, goal planning and AI-driven advice — tailored for you.</p>
        <div className="hero-actions">
          <Link to="/signup" className="btn-cta">Get Started</Link>
          <Link to="/login" className="btn-link">Login</Link>
        </div>
      </div>

      <section className="features">
        <div className="feature-card">
          <h3>Track Expenses</h3>
          <p>Log spending and track where your money goes.</p>
        </div>
        <div className="feature-card">
          <h3>Set Goals</h3>
          <p>Create saving goals and track progress visually.</p>
        </div>
        <div className="feature-card">
          <h3>AI Advice</h3>
          <p>Get personalized financial advice (coming soon).</p>
        </div>
      </section>
    </div>
  );
}
