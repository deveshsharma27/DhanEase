const axios = require('axios');
const Advice = require('../models/Advice');

exports.getAdvice = async (req, res, next) => {
  try {
    // Expected body: { context: { income, expensesSummary, goal }, question }
    const { context = {}, question = '' } = req.body;
    const userId = req.user.id;

    // Build a concise, safe prompt - server must control phrasing
    const prompt = `You are a helpful financial advisor. \
User details: ${JSON.stringify(context)}. \
User's question: ${question}. \
Provide clear, practical advice with a short step-by-step plan, risk notes, and one recommended action.`;

    const payload = {
      model: "gpt-4o-mini", // change if your account uses different model name
      messages: [{ role: "user", content: prompt }],
      max_tokens: 500,
      temperature: 0.3
    };

    const response = await axios.post('https://api.openai.com/v1/chat/completions', payload, {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    const aiText = response?.data?.choices?.[0]?.message?.content || 'No advice returned';

    // Save to DB
    const advice = new Advice({ user: userId, prompt, response: aiText, metadata: { model: payload.model } });
    await advice.save();

    res.json({ advice: aiText });
  } catch (err) {
    // If OpenAI error, surface friendly message
    if (err.response && err.response.data) {
      return res.status(502).json({ message: 'AI provider error', detail: err.response.data });
    }
    next(err);
  }
};
