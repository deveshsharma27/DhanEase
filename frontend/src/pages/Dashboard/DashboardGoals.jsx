import React, { useEffect, useState } from "react";
import { getGoals, addGoal, updateGoal, deleteGoal } from "../../api/goalApi";
import Loader from "../../components/Loader";

export default function DashboardGoals(){
  const [loading, setLoading] = useState(true);
  const [goals, setGoals] = useState([]);
  const [form, setForm] = useState({ name: "", targetAmount: "", currentAmount: "", deadline: "", description: "" });
  const [editing, setEditing] = useState(null);

  const load = async () => {
    setLoading(true);
    try {
      const res = await getGoals();
      setGoals(res.data || []);
    } catch (err) { console.error(err); }
    setLoading(false);
  };

  useEffect(()=>{ load(); }, []);

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (editing) {
        await updateGoal(editing, form);
        setEditing(null);
      } else {
        await addGoal(form);
      }
      setForm({ name: "", targetAmount: "", currentAmount: "", deadline: "", description: "" });
      load();
    } catch (err) { console.error(err); }
  };

  const onEdit = (g) => {
    setEditing(g._id);
    setForm({ name: g.name, targetAmount: g.targetAmount, currentAmount: g.currentAmount, deadline: g.deadline?.split("T")[0], description: g.description });
  };

  const onDelete = async (id) => {
    if (!confirm("Delete this goal?")) return;
    await deleteGoal(id);
    load();
  };

  if (loading) return <Loader />;

  return (
    <div>
      <form className="small-form" onSubmit={submit}>
        <input placeholder="Goal name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
        <input placeholder="Target Amount" value={form.targetAmount} onChange={e=>setForm({...form, targetAmount:e.target.value})} required />
        <input placeholder="Current Amount" value={form.currentAmount} onChange={e=>setForm({...form, currentAmount:e.target.value})} />
        <input type="date" value={form.deadline} onChange={e=>setForm({...form, deadline:e.target.value})} />
        <input placeholder="Description" value={form.description} onChange={e=>setForm({...form, description:e.target.value})} />
        <button className="btn-cta" type="submit">{editing ? "Update" : "Add Goal"}</button>
      </form>

      <div className="goals-list">
        {goals.length === 0 && <div className="empty">No goals yet</div>}
        {goals.map(g => {
          const progress = Math.min(100, Math.round((g.currentAmount / g.targetAmount) * 100 || 0));
          return (
            <div className="goal-row" key={g._id}>
              <div className="goal-info">
                <h4>{g.name}</h4>
                <p>Target: ₹{g.targetAmount} • Current: ₹{g.currentAmount}</p>
                <div className="progress-bar"><div style={{width: `${progress}%`}} className="progress-fill" /></div>
              </div>
              <div className="row-actions">
                <button className="btn-link" onClick={()=>onEdit(g)}>Edit</button>
                <button className="btn-ghost" onClick={()=>onDelete(g._id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
