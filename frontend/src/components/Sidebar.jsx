import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

import {
  LayoutDashboard,
  Wallet,
  Target,
  BarChart3,
  Sparkles,
  TrendingUp,
  User
} from "lucide-react";

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation();
  const tab = new URLSearchParams(location.search).get("tab");

  const isDashboard = location.pathname === "/dashboard";

  return (
    <>
      {/* Overlay */}
      <div
        className={`sidebar-overlay ${isOpen ? "show" : ""}`}
        onClick={onClose}
      />

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <nav className="sidebar-nav">

          {/* OVERVIEW */}
          <Link
            to="/dashboard"
            className={`side-link ${isDashboard && !tab ? "active" : ""}`}
          >
            <LayoutDashboard size={18} />
            <span>Overview</span>
          </Link>

          {/* EXPENSES */}
          <Link
            to="/dashboard?tab=expenses"
            className={`side-link ${tab === "expenses" ? "active" : ""}`}
          >
            <Wallet size={18} />
            <span>Expenses</span>
          </Link>

          {/* GOALS */}
          <Link
            to="/dashboard?tab=goals"
            className={`side-link ${tab === "goals" ? "active" : ""}`}
          >
            <Target size={18} />
            <span>Goals</span>
          </Link>

          {/* REPORTS */}
          <Link
            to="/dashboard?tab=reports"
            className={`side-link ${tab === "reports" ? "active" : ""}`}
          >
            <BarChart3 size={18} />
            <span>Reports</span>
          </Link>

          {/* REAL ROUTES BELOW — NavLink IS CORRECT HERE */}

          <NavLink
            to="/ai-advisor"
            className={({ isActive }) =>
              `side-link ${isActive ? "active" : ""}`
            }
          >
            <Sparkles size={18} />
            <span>AI Advisor</span>
          </NavLink>

          <NavLink
            to="/investments"
            className={({ isActive }) =>
              `side-link ${isActive ? "active" : ""}`
            }
          >
            <TrendingUp size={18} />
            <span>Investments</span>
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `side-link ${isActive ? "active" : ""}`
            }
          >
            <User size={18} />
            <span>Profile</span>
          </NavLink>

        </nav>
      </aside>
    </>
  );
}
