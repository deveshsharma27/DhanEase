import React from "react";

export default function HealthScoreCard({ score = 0, stats = {} }){
  const color = score > 75 ? "good" : score > 50 ? "warn" : "bad";
  return (
    <div className={`health-card ${color}`}>
      <h3>Financial Health</h3>
      <div className="score">{score}</div>
      <div className="health-meta">
        <div>Income: ₹{stats.income}</div>
        <div>Expenses: ₹{stats.totalExpenses}</div>
        <div>Savings: ₹{stats.savings}</div>
      </div>
    </div>
  );
}
