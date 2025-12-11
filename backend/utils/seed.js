require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const connectDB = require('../config/db');
const User = require('../models/User');
const Expense = require('../models/Expense');
const Goal = require('../models/Goal');

const seed = async () => {
  try {
    await connectDB();

    // Clear collections
    await User.deleteMany({});
    await Expense.deleteMany({});
    await Goal.deleteMany({});

    // Create demo user
    const password = await bcrypt.hash('password123', 10);
    const user = await User.create({
      name: 'Demo User',
      email: 'demo@example.com',
      password,
      age: 25,
      income: 30000
    });

    // Add sample expenses
    const sampleExpenses = [
      { user: user._id, amount: 400, category: 'Food', date: new Date(), note: 'Lunch' },
      { user: user._id, amount: 1200, category: 'Rent', date: new Date(), note: 'Monthly rent' },
      { user: user._id, amount: 200, category: 'Transport', date: new Date(), note: 'Metro card' }
    ];
    await Expense.insertMany(sampleExpenses);

    // Add sample goal
    await Goal.create({
      user: user._id,
      name: 'Emergency Fund',
      targetAmount: 100000,
      currentAmount: 5000,
      deadline: new Date(new Date().setMonth(new Date().getMonth() + 12)),
      description: '6 months emergency savings'
    });

    console.log('Seeded demo user. Email: demo@example.com Password: password123');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();
