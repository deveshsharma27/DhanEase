import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import "./Hero.css";

const Hero = () => {
 const [user, setUser] = useState(null);
const [authLoading, setAuthLoading] = useState(true);

  
  const navigate = useNavigate();

  const lastScrollY = useRef(0);
  const [hideHeader, setHideHeader] = useState(false);

  // 🔥 PROPAGATION MODEL (ANCHORS)
  const menuItems = [
    { text: "Home", url: "#home" },
    { text: "About", url: "#about" },
    { text: "Services", url: "#services" },
    { text: "Contact us", url: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > lastScrollY.current && scrollY > 120) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
      lastScrollY.current = scrollY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero-wrapper" id="home">
      {/* ================= HEADER ================= */}
      <header className={`landing-header ${hideHeader ? "hide" : ""}`}>
        <div className="landing-header-inner">
          <div className="brand-name" onClick={() => window.scrollTo(0, 0)}>
            DhanEase
          </div>

          <nav className="desktop-menu">
            <ul>
              {menuItems.map((item, i) => (
                <li key={i}>
                  {/* 🔥 USE <a> NOT NavLink */}
                  <a href={item.url}>{item.text}</a>
                </li>
              ))}
            </ul>
          </nav>

          {!user && (
            <div className="auth-buttons">
              <button className="btn-login" onClick={() => navigate("/login")}>
               ➜] Login
              </button>
              <button className="btn-signup" onClick={() => navigate("/signup")}>
              👤 Sign Up
              </button>
            </div>
          )}
        </div>
      </header>

      {/* ================= HERO ================= */}
      <div className="hero">
        {/* BACKGROUND */}
        <div className="hero-bg-image"></div>
        <div className="hero-overlay"></div>

        {/* CONTENT */}
        <div className="hero-container">
          <div className="hero-glass-card hero-enter">
            <span className="hero-tag">AI-POWERED FINANCE</span>

            <h1 className="hero-title">
              Smarter Financial
              <br />
              <span>Decisions with AI</span>
            </h1>

            <p className="hero-desc">
              Track expenses, analyse spending patterns, and receive intelligent
              insights that help you grow wealth — clearly, securely, and
              confidently.
            </p>

            <div className="hero-actions">
              <button className="btn-primary" onClick={() => navigate("/signup")}>
               ▶︎ Get Started
              </button>
              <button
                className="btn-secondary"
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
               ⚙️ How It Works
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
