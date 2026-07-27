const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

// ============================================
// EMAIL PROVIDER
// ============================================

const EMAIL_PROVIDER = process.env.EMAIL_PROVIDER || "gmail";

// ============================================
// CREATE TRANSPORTER
// ============================================

const createTransporter = () => {
  console.log("═══════════════════════════════════════");
  console.log("📧 EMAIL CONFIGURATION");
  console.log("Provider:", process.env.EMAIL_PROVIDER);
  console.log("User:", process.env.EMAIL_USER);
  console.log("Password Exists:", !!process.env.EMAIL_PASS);
  console.log("═══════════════════════════════════════");

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log("❌ EMAIL_USER or EMAIL_PASS is missing.");
    return null;
  }

  if (EMAIL_PROVIDER === "gmail") {
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  if (EMAIL_PROVIDER === "ethereal") {
    return nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  console.log("❌ Unknown Email Provider");
  return null;
};

// ============================================
// SEND EMAIL
// ============================================

const sendEmail = async ({ to, subject, html }) => {
  console.log("═══════════════════════════════════════");
  console.log("📧 EMAIL REQUEST");
  console.log("To:", to);
  console.log("Subject:", subject);
  console.log("═══════════════════════════════════════");

  try {
    const logData = `
====================================
Date : ${new Date().toLocaleString()}
To : ${to}
Subject : ${subject}

${html}

====================================
`;

    fs.appendFileSync(
      path.join(__dirname, "../email-logs.txt"),
      logData
    );
  } catch (err) {
    console.log("Email Log Error:", err.message);
  }

  const transporter = createTransporter();

  if (!transporter) {
    return {
      success: false,
      error: "Transporter not created",
    };
  }

  try {
    const info = await transporter.sendMail({
      from: `"Stalin Life Coach" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    });

    console.log("✅ Email Sent Successfully");
    console.log("Message ID:", info.messageId);

    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (err) {
    console.log("❌ Email Sending Failed");
    console.log(err.message);

    return {
      success: false,
      error: err.message,
    };
  }
};

// ============================================
// WHATSAPP
// ============================================

const sendWhatsApp = async ({ phone, message }) => {
  try {
    const number = phone || process.env.WHATSAPP_NUMBER;

    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

    console.log("📱 WhatsApp URL:");
    console.log(url);

    return {
      success: true,
      url,
    };
  } catch (err) {
    console.log("❌ WhatsApp Error:", err.message);

    return {
      success: false,
      error: err.message,
    };
  }
};

module.exports = {
  sendEmail,
  sendWhatsApp,
};const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

// ============================================
// EMAIL PROVIDER
// ============================================

const EMAIL_PROVIDER = process.env.EMAIL_PROVIDER || "gmail";

// ============================================
// CREATE TRANSPORTER (created ONCE, reused for every email)
// ============================================
// ⚠️ IMPORTANT: This is created once at module load, NOT inside sendEmail().
// Creating a fresh transporter for every email causes Gmail to throttle/timeout
// the 2nd rapid connection - this was the root cause of "Connection timeout".

let cachedTransporter = null;

const getTransporter = () => {
  if (cachedTransporter) {
    return cachedTransporter;
  }

  console.log("═══════════════════════════════════════");
  console.log("📧 EMAIL CONFIGURATION");
  console.log("Provider:", EMAIL_PROVIDER);
  console.log("User:", process.env.EMAIL_USER);
  console.log("Password Exists:", !!process.env.EMAIL_PASS);
  console.log("═══════════════════════════════════════");

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log("❌ EMAIL_USER or EMAIL_PASS is missing.");
    return null;
  }

  if (EMAIL_PROVIDER === "gmail") {
    cachedTransporter = nodemailer.createTransport({
      service: "gmail",
      pool: true,           // ✅ reuse a pool of connections instead of opening a new one each time
      maxConnections: 1,    // Gmail is picky about concurrent connections on free/shared IPs (Render)
      maxMessages: 100,     // reuse the same connection for many emails before recycling it
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      connectionTimeout: 20000, // fail fast instead of hanging
      greetingTimeout: 20000,
      socketTimeout: 20000,
    });
    console.log("✅ Gmail transporter created (pooled)");
    return cachedTransporter;
  }

  if (EMAIL_PROVIDER === "ethereal") {
    cachedTransporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      pool: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    return cachedTransporter;
  }

  console.log("❌ Unknown Email Provider:", EMAIL_PROVIDER);
  return null;
};

// ============================================
// SEND EMAIL
// ============================================

const sendEmail = async ({ to, subject, html }) => {
  console.log("═══════════════════════════════════════");
  console.log("📧 EMAIL REQUEST");
  console.log("To:", to);
  console.log("Subject:", subject);
  console.log("═══════════════════════════════════════");

  try {
    const logData = `
====================================
Date : ${new Date().toLocaleString()}
To : ${to}
Subject : ${subject}

${html}

====================================
`;
    fs.appendFileSync(path.join(__dirname, "../email-logs.txt"), logData);
  } catch (err) {
    console.log("Email Log Error:", err.message);
  }

  const transporter = getTransporter();

  if (!transporter) {
    return {
      success: false,
      error: "Transporter not created - check EMAIL_USER / EMAIL_PASS",
    };
  }

  try {
    const info = await transporter.sendMail({
      from: `"Stalin Life Coach" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    });

    console.log("✅ Email Sent Successfully");
    console.log("Message ID:", info.messageId);

    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (err) {
    console.log("❌ Email Sending Failed");
    console.log(err.message);

    return {
      success: false,
      error: err.message,
    };
  }
};

// ============================================
// WHATSAPP
// ============================================

const sendWhatsApp = async ({ phone, message }) => {
  try {
    const number = phone || process.env.WHATSAPP_NUMBER;
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

    console.log("📱 WhatsApp URL:");
    console.log(url);

    return {
      success: true,
      url,
    };
  } catch (err) {
    console.log("❌ WhatsApp Error:", err.message);

    return {
      success: false,
      error: err.message,
    };
  }
};

module.exports = {
  sendEmail,
  sendWhatsApp,
};