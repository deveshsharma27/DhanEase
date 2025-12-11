import React from "react";
import { useLocation } from "react-router-dom";
import DashboardOverview from "./DashboardOverview";
import DashboardExpenses from "./DashboardExpenses";
import DashboardGoals from "./DashboardGoals";
import DashboardReports from "./DashboardReports";

export default function DashboardPage(){
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const tab = params.get("tab") || "overview";

  return (
    <div className="dashboard-grid">
      {tab === "overview" && <DashboardOverview />}
      {tab === "expenses" && <DashboardExpenses />}
      {tab === "goals" && <DashboardGoals />}
      {tab === "reports" && <DashboardReports />}
    </div>
  );
}
