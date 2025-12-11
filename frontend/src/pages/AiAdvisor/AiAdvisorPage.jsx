import React, { useState } from "react";
import { requestAdvice } from "../../api/aiApi";

export default function AiAdvisorPage(){
  const [question, setQuestion] = useState("");
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const ask = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await requestAdvice({ context: {}, question });
      const advice = res.data.advice || res.data;
      const entry = { q: question, a: advice, time: new Date().toISOString() };
      setHistory(prev => [entry, ...prev].slice(0, 10));
      setQuestion("");
    } catch (err) {
      setError(err?.response?.data?.message || (err?.response?.data?.detail || err.message) || "AI error");
    } finally { setLoading(false); }
  };

  return (
    <div className="ai-page">
      <h2>AI Financial Advisor</h2>
      <form onSubmit={ask} className="ai-form">
        <textarea value={question} onChange={e=>setQuestion(e.target.value)} placeholder="Ask a financial question..." rows={4} />
        <button className="btn-cta" type="submit">{loading? "Thinking..." : "Ask AI"}</button>
      </form>
      {error && <div className="error">{error}</div>}

      <div className="history">
        <h3>Recent chats</h3>
        {history.length === 0 && <div className="empty">No chats yet</div>}
        {history.map((h, idx) => (
          <div className="chat" key={idx}>
            <div className="chat-q">Q: {h.q}</div>
            <div className="chat-a">A: {h.a}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
