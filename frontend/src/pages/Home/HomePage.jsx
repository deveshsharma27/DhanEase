import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { getExpenses } from "../../api/expenseApi";
import { getGoals } from "../../api/goalApi";
import HealthScoreCard from "../../components/HealthScoreCard";
import { calculateHealthScore, calculateStats } from "../../utils/calculateStats";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";

export default function HomePage(){
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [goals, setGoals] = useState([]);

  useEffect(()=> {
    (async ()=> {
      try {
        const res = await getExpenses({ limit: 20 });
        setExpenses(res.data.data || res.data);
        const g = await getGoals();
        setGoals(g.data || []);
      } catch (err) { console.error(err); }
      setLoading(false);
    })();
  }, []);

  if (loading) return <Loader />;

  const stats = calculateStats(expenses, user?.income);
  const score = calculateHealthScore(stats);

  return (
    <div className="home-grid">
      <div className="welcome-card">
        <h2>Welcome back, {user?.name}</h2>
        <p>Here is a quick look at your finances.</p>
        <div className="quick-links">
          <Link to="/dashboard" className="btn-link">Open Dashboard</Link>
          <Link to="/ai-advisor" className="btn-cta">Ask AI</Link>
        </div>
      </div>

      <HealthScoreCard score={score} stats={stats} />

      <div className="summary-cards">
        <div className="stat-card">
          <h4>Total Income</h4>
          <div className="stat-value">₹{user?.income ?? 0}</div>
        </div>
        <div className="stat-card">
          <h4>Total Expenses</h4>
          <div className="stat-value">₹{stats.totalExpenses}</div>
        </div>
        <div className="stat-card">
          <h4>Savings</h4>
          <div className="stat-value">₹{stats.savings}</div>
        </div>
      </div>
    </div>
  );
}
