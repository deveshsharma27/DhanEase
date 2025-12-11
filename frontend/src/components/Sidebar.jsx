import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <NavLink to="/dashboard" className={({isActive})=>isActive?"side-link active":"side-link"}>Overview</NavLink>
        <NavLink to="/dashboard?tab=expenses" className={({isActive})=>isActive?"side-link active":"side-link"}>Expenses</NavLink>
        <NavLink to="/dashboard?tab=goals" className={({isActive})=>isActive?"side-link active":"side-link"}>Goals</NavLink>
        <NavLink to="/dashboard?tab=reports" className={({isActive})=>isActive?"side-link active":"side-link"}>Reports</NavLink>
        <NavLink to="/ai-advisor" className="side-link">AI Advisor</NavLink>
        <NavLink to="/investments" className="side-link">Investments</NavLink>
        <NavLink to="/profile" className="side-link">Profile</NavLink>
      </nav>
    </aside>
  );
}
