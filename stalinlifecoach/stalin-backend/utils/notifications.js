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

const createTransporter = async () => {
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

  try {
    let transporter;

    if (EMAIL_PROVIDER === "gmail") {
      transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
    } else if (EMAIL_PROVIDER === "ethereal") {
      const testAccount = await nodemailer.createTestAccount();

      transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    } else {
      console.log("❌ Unknown email provider:", EMAIL_PROVIDER);
      return null;
    }

    await transporter.verify();
    console.log("✅ SMTP Connection Successful");

    return transporter;
  } catch (error) {
    console.log("❌ SMTP Configuration Error");
    console.log(error.message);
    return null;
  }
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
    console.log("Email log error:", err.message);
  }

  const transporter = await createTransporter();

  if (!transporter) {
    return {
      success: false,
      message: "Email transporter not available",
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
    console.log(err);

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
    const url = `https://wa.me/${
      phone || process.env.WHATSAPP_NUMBER
    }?text=${encodeURIComponent(message)}`;

    console.log("📱 WhatsApp URL:");
    console.log(url);

    return {
      success: true,
      url,
    };
  } catch (err) {
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