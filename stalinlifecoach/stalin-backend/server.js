const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:5174'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware
app.use((req, res, next) => {
  console.log(`📨 ${req.method} ${req.url}`);
  if (req.body && Object.keys(req.body).length > 0) {
    console.log('📦 Body:', req.body);
  }
  next();
});

// ============================================
// ROUTES - Payment Routes Removed
// ============================================

// ✅ Only Appointment Routes (No Payment)
app.use('/api/appointments', require('./routes/appointmentRoutes'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: '🚀 Stalin Life Coach API is running',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    endpoints: {
      health: '/api/health',
      appointments: '/api/appointments',
      create: '/api/appointments/create',
      getAll: '/api/appointments'
    }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('❌ Error:', err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal Server Error'
  });
});

// ============================================
// START SERVER
// ============================================

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('═══════════════════════════════════════════');
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log('═══════════════════════════════════════════');
  console.log(`📋 Health check: http://localhost:${PORT}/api/health`);
  console.log(`📝 Appointments API: http://localhost:${PORT}/api/appointments`);
  console.log(`📝 Create Appointment: POST http://localhost:${PORT}/api/appointments/create`);
  console.log('═══════════════════════════════════════════');
  console.log('🔧 Available Routes:');
  console.log(`  GET  /api/health`);
  console.log(`  GET  /api/appointments`);
  console.log(`  POST /api/appointments/create`);
  console.log(`  GET  /api/appointments/:bookingId`);
  console.log('═══════════════════════════════════════════');
});