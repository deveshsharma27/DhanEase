import React from "react";
import InvestmentCard from "../../components/InvestmentCard";

const sample = [
  { title: "Public Provident Fund (PPF)", risk: "Low", duration: "15 years", returns: "6.5% (approx)" },
  { title: "SIP - Large Cap Funds", risk: "Medium", duration: "5+ years", returns: "10-12% (avg)" },
  { title: "Fixed Deposit", risk: "Low", duration: "1-5 years", returns: "5-7%" },
  { title: "Gold ETF", risk: "Medium", duration: "3+ years", returns: "Depends on market" },
];

export default function InvestmentExplorer(){
  return (
    <div>
      <h2>Investment Explorer</h2>
      <div className="invest-grid">
        {sample.map((it, i) => <InvestmentCard key={i} data={it} />)}
      </div>
    </div>
  );
}
