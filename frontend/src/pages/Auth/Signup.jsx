import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Signup(){
  const [form, setForm] = useState({ name: "", email: "", password: "", age: "", income: ""});
  const { signup } = useContext(AuthContext);
  const nav = useNavigate();
  const [error, setError] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    try {
      await signup(form);
      nav("/home");
    } catch (err) {
      setError(err?.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={submit}>
        <h2>Create Account</h2>
        {error && <div className="error">{error}</div>}
        <label>Name</label>
        <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
        <label>Email</label>
        <input value={form.email} onChange={e=>setForm({...form, email:e.target.value})} type="email" required />
        <label>Password</label>
        <input value={form.password} onChange={e=>setForm({...form, password:e.target.value})} type="password" required />
        <label>Age</label>
        <input value={form.age} onChange={e=>setForm({...form, age:e.target.value})} type="number" />
        <label>Monthly Income</label>
        <input value={form.income} onChange={e=>setForm({...form, income:e.target.value})} type="number" />
        <button className="btn-cta" type="submit">Sign Up</button>
      </form>
    </div>
  );
}
