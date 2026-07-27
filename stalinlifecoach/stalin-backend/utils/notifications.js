const { Resend } = require("resend");
const fs = require("fs");
const path = require("path");

// ============================================
// RESEND CLIENT
// ============================================

const resend = new Resend(process.env.RESEND_API_KEY);

// Change this once your domain is verified in Resend.
// Until then, this MUST stay as onboarding@resend.dev
const FROM_ADDRESS = "Stalin Life Coach <onboarding@resend.dev>";

// ============================================
// SEND EMAIL
// ============================================

const sendEmail = async ({ to, subject, html }) => {
  console.log("═══════════════════════════════════════");
  console.log("📧 EMAIL REQUEST");
  console.log("To:", to);
  console.log("Subject:", subject);
  console.log("═══════════════════════════════════════");

  // Log every email attempt to a local file for debugging/records
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

  if (!process.env.RESEND_API_KEY) {
    console.log("❌ RESEND_API_KEY is missing.");
    return {
      success: false,
      error: "RESEND_API_KEY not configured",
    };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to,
      subject,
      html,
    });

    if (error) {
      console.log("❌ Email Sending Failed");
      console.log(error.message || error);
      return {
        success: false,
        error: error.message || "Unknown Resend error",
      };
    }

    console.log("✅ Email Sent Successfully");
    console.log("Message ID:", data.id);

    return {
      success: true,
      messageId: data.id,
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
// WHATSAPP (unchanged - still works the same way)
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