import React, { useEffect, useState } from "react";
import { getExpenses, addExpense, updateExpense, deleteExpense } from "../../api/expenseApi";
import Loader from "../../components/Loader";

export default function DashboardExpenses(){
  const [loading, setLoading] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({ amount: "", category: "", note: "", date: "" });
  const [editing, setEditing] = useState(null);

  const load = async () => {
    setLoading(true);
    try {
      const res = await getExpenses({ limit: 500 });
      setExpenses(res.data.data || res.data);
    } catch (err) { console.error(err); }
    setLoading(false);
  };

  useEffect(()=>{ load(); }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editing) {
        await updateExpense(editing, form);
        setEditing(null);
      } else {
        await addExpense(form);
      }
      setForm({ amount: "", category: "", note: "", date: "" });
      load();
    } catch (err) { console.error(err); }
  };

  const onEdit = (exp) => {
    setEditing(exp._id);
    setForm({ amount: exp.amount, category: exp.category, note: exp.note, date: exp.date?.split("T")[0] });
  };

  const onDelete = async (id) => {
    if (!confirm("Delete this expense?")) return;
    await deleteExpense(id);
    load();
  };

  if (loading) return <Loader />;

  return (
    <div>
      <form className="small-form" onSubmit={onSubmit}>
        <input placeholder="Amount" value={form.amount} onChange={e=>setForm({...form, amount:e.target.value})} required />
        <input placeholder="Category" value={form.category} onChange={e=>setForm({...form, category:e.target.value})} required />
        <input placeholder="Note" value={form.note} onChange={e=>setForm({...form, note:e.target.value})} />
        <input type="date" value={form.date} onChange={e=>setForm({...form, date:e.target.value})} />
        <button className="btn-cta" type="submit">{editing ? "Update" : "Add"}</button>
      </form>

      <div className="list">
        {expenses.length === 0 && <div className="empty">No expenses yet</div>}
        {expenses.map(exp => (
          <div className="expense-row" key={exp._id}>
            <div>{new Date(exp.date).toLocaleDateString()}</div>
            <div>{exp.category}</div>
            <div>₹{exp.amount}</div>
            <div>{exp.note}</div>
            <div className="row-actions">
              <button className="btn-link" onClick={()=>onEdit(exp)}>Edit</button>
              <button className="btn-ghost" onClick={()=>onDelete(exp._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
