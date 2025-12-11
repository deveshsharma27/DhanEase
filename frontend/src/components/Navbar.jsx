import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const nav = useNavigate();

  const onLogout = () => {
    logout();
    nav("/");
  };

  return (
    <header className="nav">
      <div className="nav-left">
        <Link to="/home" className="brand">FinGold</Link>
      </div>
      <div className="nav-right">
        {user ? (
          <>
            <span className="nav-user">Hi, {user.name}</span>
            <Link to="/dashboard" className="btn-link">Dashboard</Link>
            <Link to="/ai-advisor" className="btn-link">AI Advisor</Link>
            <Link to="/investments" className="btn-link">Investments</Link>
            <button onClick={onLogout} className="btn-ghost">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn-link">Login</Link>
            <Link to="/signup" className="btn-cta">Get Started</Link>
          </>
        )}
      </div>
    </header>
  );
}
