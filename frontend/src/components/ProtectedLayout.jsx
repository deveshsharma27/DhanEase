import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function ProtectedLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app-root">
      <Navbar onMenuClick={() => setSidebarOpen(true)} />

      <div className="main-area">
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="content" onClick={() => setSidebarOpen(false)}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
