import React from "react";

export default function InvestmentCard({ data }){
  return (
    <div className="investment-card">
      <h4>{data.title}</h4>
      <p><strong>Risk:</strong> {data.risk}</p>
      <p><strong>Duration:</strong> {data.duration}</p>
      <p><strong>Returns:</strong> {data.returns}</p>
      <button className="btn-link">Explore</button>
    </div>
  );
}
