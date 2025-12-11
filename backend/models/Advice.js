const mongoose = require('mongoose');

const AdviceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  prompt: { type: String, required: true },
  response: { type: String, required: true },
  metadata: { type: Object }
}, { timestamps: true });

module.exports = mongoose.model('Advice', AdviceSchema);
