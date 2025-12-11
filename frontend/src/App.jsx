import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import HomePage from "./pages/Home/HomePage";
import DashboardPage from "./pages/DashBoard/DashBoardPage";
import AiAdvisorPage from "./pages/AiAdvisor/AiAdvisorPage";
import InvestmentExplorer from "./pages/Investments/InvestmentExplorer";
import ProfilePage from "./pages/Profile/ProfilePage";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedLayout from "./components/ProtectedLayout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<ProtectedLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/ai-advisor" element={<AiAdvisorPage />} />
          <Route path="/investments" element={<InvestmentExplorer />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
