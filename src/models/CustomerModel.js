const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
    },
    billing: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Customer', CustomerSchema);
