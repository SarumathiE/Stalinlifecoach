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
};