const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// ============================================
// ✅ CORS - Allow Vercel Frontend
// ============================================
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',
    'http://localhost:5174',
    'https://stalinlifecoach.vercel.app',
    'https://stalinlifecoach-navy.vercel.app',
    'https://stalinlifecoach-git-main.sarumathie.vercel.app'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware
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
// ROUTES
// ============================================

// ✅ Appointment Routes
app.use('/api/appointments', require('./routes/appointmentRoutes'));

// ✅ Email Logs Route - View saved emails
app.get('/api/email-logs', (req, res) => {
  try {
    const logPath = path.join(__dirname, 'email-logs.txt');
    if (fs.existsSync(logPath)) {
      const logs = fs.readFileSync(logPath, 'utf8');
      res.send(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Email Logs - Stalin Life Coach</title>
          <style>
            body { font-family: monospace; padding: 20px; background: #f5f5f5; }
            .container { max-width: 900px; margin: 0 auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            h1 { color: #5E35B1; }
            pre { white-space: pre-wrap; word-wrap: break-word; background: #f8f5ff; padding: 15px; border-radius: 8px; border-left: 4px solid #7C4DFF; }
            .timestamp { color: #888; font-size: 12px; }
            hr { border: 1px solid #eee; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>📧 Email Logs</h1>
            <p class="timestamp">Last updated: ${new Date().toISOString()}</p>
            <hr>
            <pre>${logs}</pre>
          </div>
        </body>
        </html>
      `);
    } else {
      res.send(`
        <html>
        <head><title>Email Logs</title></head>
        <body style="font-family: monospace; padding: 20px;">
          <h1>📧 No Email Logs Found</h1>
          <p>Book an appointment first to generate email logs.</p>
        </body>
        </html>
      `);
    }
  } catch (error) {
    res.status(500).send(`Error reading logs: ${error.message}`);
  }
});

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
      getAll: '/api/appointments',
      emailLogs: '/api/email-logs'
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
  console.log(`📧 Email Logs: http://localhost:${PORT}/api/email-logs`);
  console.log('═══════════════════════════════════════════');
});