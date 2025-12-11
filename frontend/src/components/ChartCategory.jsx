import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function ChartCategory({ expenses = [] }){
  const map = {};
  expenses.forEach(e => map[e.category] = (map[e.category] || 0) + Number(e.amount || 0));
  const labels = Object.keys(map).slice(0, 8);
  const data = { labels, datasets: [{ data: labels.map(l => map[l]), label: "Category", backgroundColor: labels.map((_,i)=>`hsl(${i*40},80%,50%)`) }] };
  return <div className="chart-card"><Pie data={data} /></div>;
}
