export function calculateStats(expenses = [], income = 0){
  const totalExpenses = expenses.reduce((s,e)=>s + Number(e.amount || 0), 0);
  const savings = Math.max(0, (income || 0) - totalExpenses);
  // month over month simple example (compare last month to previous)
  const byMonth = {};
  expenses.forEach(e=>{
    const d = new Date(e.date);
    const key = `${d.getFullYear()}-${d.getMonth()+1}`;
    byMonth[key] = (byMonth[key] || 0) + Number(e.amount || 0);
  });
  const months = Object.keys(byMonth).sort();
  const last = months.length ? byMonth[months[months.length-1]] : 0;
  const prev = months.length>1 ? byMonth[months[months.length-2]] : 0;
  const monthOverMonthIncrease = prev ? Math.round(((last - prev) / prev) * 100) : 0;
  const savingsPercent = income ? Math.round((savings / income) * 100) : 0;
  return { totalExpenses, savings, income, byMonth, monthOverMonthIncrease, savingsPercent };
}

export function calculateHealthScore(stats = {}){
  const { savingsPercent=0, monthOverMonthIncrease=0 } = stats;
  let score = 50 + Math.min(30, savingsPercent);
  if (monthOverMonthIncrease > 20) score -= 15;
  return Math.max(0, Math.min(100, Math.round(score)));
}
