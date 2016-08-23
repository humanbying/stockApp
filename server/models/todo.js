const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  task: { type: String, required: true },
  isComplete: { type: Boolean, required: true, default: false },
  createdAt: { type: Date, required: true, default: Date.now }
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
