import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css";

export default function Navbar({ onMenuClick }) {
  const { user, logout } = useContext(AuthContext);
  const nav = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const onLogout = () => {
    logout();
    nav("/");
  };

  const userInitial = user?.name?.charAt(0).toUpperCase();

  return (
    <header className="nav">
      {/* LEFT */}
      <div className="nav-left">
        <button className="nav-hamburger" onClick={onMenuClick}>
          ☰
        </button>

        <Link to="/home" className="fingold-logo nav-brand">
          DhanEase
        </Link>
      </div>

      {/* CENTER (Desktop only) */}
      <div className="nav-center">
        <Link to="/dashboard" className="nav-link">
          Dashboard
        </Link>
        <Link to="/ai-advisor" className="nav-link">
          AI Advisor
        </Link>
        <Link to="/investments" className="nav-link">
          Investments
        </Link>
      </div>

      {/* RIGHT */}
      <div className="nav-right">
        <button onClick={onLogout} className="nav-logout">
          ⏻ Logout
        </button>

        {user && <div className="nav-avatar">{userInitial}</div>}
      </div>
    </header>
  );
}
