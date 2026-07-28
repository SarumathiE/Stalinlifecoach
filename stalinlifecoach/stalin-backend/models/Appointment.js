const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  name: {
      type: String,
      required: [true, 'Please select date'],
      trim: true
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide valid email']
  },
  phone: {
    type: String,
    required: [true, 'Please provide phone number'],
    match: [/^[0-9]{10}$/, 'Please provide valid 10-digit phone number']
  },
  date: {
    type: String,
    required: [true, 'Please select date']
  },
  time: {
    type: String,
    required: [true, 'Please select time']
  },
  message: {
    type: String,
    trim: true
  },
  mode: {
    type: String,
    enum: ['online', 'offline'],
    default: 'online'
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'confirmed'
  },
  bookingId: {
    type: String,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Generate booking ID before save
appointmentSchema.pre('save', function(next) {
  if (!this.bookingId) {
    this.bookingId = `STALIN-${Date.now().toString().slice(-8)}-${Math.floor(Math.random() * 1000)}`;
  }
  next();
});

module.exports = mongoose.model('Appointment', appointmentSchema);