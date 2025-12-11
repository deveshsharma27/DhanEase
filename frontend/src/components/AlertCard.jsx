import React from "react";

export default function AlertCard({ stats = {} }){
  const alerts = [];
  if (stats.savingsPercent < 10) alerts.push("Savings are under 10% of income — try to cut expenses.");
  if (stats.monthOverMonthIncrease > 20) alerts.push("This month's spend increased >20% compared to last month.");
  return (
    <div className="alerts">
      <h4>Smart Alerts</h4>
      {alerts.length === 0 ? <div className="empty">No alerts — good job!</div> :
        alerts.map((a,i) => <div className="alert-card" key={i}>{a}</div>)}
    </div>
  );
}
