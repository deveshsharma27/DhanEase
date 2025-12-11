import React from "react";

export default function DashboardReports(){
  return (
    <div>
      <h3>Reports</h3>
      <p>Download monthly reports, export CSV/PDF, and view trends.</p>
      <div className="report-cards">
        <div className="report-card">
          <h4>Export CSV</h4>
          <p>Download your expenses as CSV.</p>
          <button className="btn-cta">Export</button>
        </div>
        <div className="report-card">
          <h4>Download PDF</h4>
          <p>Create a PDF summary of your finances.</p>
          <button className="btn-cta">Download</button>
        </div>
      </div>
    </div>
  );
}
