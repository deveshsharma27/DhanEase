import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function ChartMonthly({ expenses = [] }){
  // group by month
  const map = {};
  expenses.forEach(e=>{
    const d = new Date(e.date);
    const m = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
    map[m] = (map[m] || 0) + Number(e.amount || 0);
  });
  const labels = Object.keys(map).slice(-6);
  const data = { labels, datasets: [{ label: "Monthly Spend", data: labels.map(l=>map[l]||0) }] };
  return <div className="chart-card"><Bar data={data} /></div>;
}
