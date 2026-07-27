const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const connectDB = require('./config/db');

// ============================================
// LOAD ENVIRONMENT VARIABLES
// ============================================

dotenv.config();

// ============================================
// DEBUG ENV VARIABLES
// ============================================

console.log('════════════ ENVIRONMENT VARIABLES ════════════');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('EMAIL_PROVIDER:', process.env.EMAIL_PROVIDER);
console.log('EMAIL_USER:', process.env.EMAIL_USER || '❌ Not Found');
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '✅ Configured' : '❌ Not Found');
console.log('ADMIN_EMAIL:', process.env.ADMIN_EMAIL || '❌ Not Found');
console.log('PORT:', process.env.PORT);
console.log('═══════════════════════════════════════════════');

// ============================================
// CONNECT DATABASE
// ============================================

connectDB();

const app = express();

// ============================================
// CORS
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

// ============================================
// MIDDLEWARE
// ============================================

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ============================================
// REQUEST LOGGER
// ============================================

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

app.use('/api/appointments', require('./routes/appointmentRoutes'));

// ============================================
// EMAIL LOGS
// ============================================

app.get('/api/email-logs', (req, res) => {
  try {
    const logPath = path.join(__dirname, 'email-logs.txt');

    if (fs.existsSync(logPath)) {
      const logs = fs.readFileSync(logPath, 'utf8');

      return res.send(`
<!DOCTYPE html>
<html>
<head>
<title>Email Logs</title>
<style>
body{
font-family:Arial,sans-serif;
background:#f5f5f5;
padding:20px;
}
.container{
max-width:1000px;
margin:auto;
background:white;
padding:20px;
border-radius:10px;
box-shadow:0 0 10px rgba(0,0,0,.1);
}
pre{
white-space:pre-wrap;
word-break:break-word;
background:#fafafa;
padding:15px;
border-radius:8px;
}
</style>
</head>
<body>
<div class="container">
<h2>Email Logs</h2>
<pre>${logs}</pre>
</div>
</body>
</html>
`);
    }

    res.send('<h2>No Email Logs Found</h2>');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// ============================================
// HEALTH CHECK
// ============================================

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    status: 'OK',
    message: '🚀 Stalin Life Coach API Running',
    timestamp: new Date().toISOString(),
    email: {
      provider: process.env.EMAIL_PROVIDER || 'Not Configured',
      configured: !!(
        process.env.EMAIL_USER &&
        process.env.EMAIL_PASS
      )
    },
    endpoints: {
      health: '/api/health',
      appointments: '/api/appointments',
      create: '/api/appointments/create',
      emailLogs: '/api/email-logs'
    }
  });
});

// ============================================
// HOME
// ============================================

app.get('/', (req, res) => {
  res.send(`
<h2>🚀 Stalin Life Coach Backend Running</h2>

<p>API Health:
<a href="/api/health">/api/health</a>
</p>

<p>Appointments:
<a href="/api/appointments">/api/appointments</a>
</p>

<p>Email Logs:
<a href="/api/email-logs">/api/email-logs</a>
</p>
`);
});

// ============================================
// 404
// ============================================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `${req.originalUrl} Not Found`
  });
});

// ============================================
// ERROR HANDLER
// ============================================

app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    success: false,
    message: err.message
  });
});

// ============================================
// START SERVER
// ============================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('═══════════════════════════════════════');
  console.log(`🚀 Server Started`);
  console.log(`🌐 Port : ${PORT}`);
  console.log(`📧 Email Provider : ${process.env.EMAIL_PROVIDER}`);
  console.log(`📧 Email User : ${process.env.EMAIL_USER || 'Not Configured'}`);
  console.log(`📧 Email Password : ${process.env.EMAIL_PASS ? 'Configured' : 'Not Configured'}`);
  console.log(`📧 Admin Email : ${process.env.ADMIN_EMAIL}`);
  console.log('═══════════════════════════════════════');
});