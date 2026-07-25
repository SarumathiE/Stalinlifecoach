const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

// ============================================
// EMAIL PROVIDER SELECTION
// ============================================

// Choose your email provider:
// 'gmail' - Gmail SMTP (may be blocked on Render Free)
// 'ethereal' - Free test email (works everywhere)
// 'console' - Only console log (no real email)
const EMAIL_PROVIDER = process.env.EMAIL_PROVIDER || 'console';

// ============================================
// CREATE TRANSPORTER
// ============================================

const createTransporter = async () => {
  // Check if email credentials are set in .env
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log('⚠️ Email credentials not configured. Using console log only.');
    return null;
  }

  console.log('✅ Email configured for:', process.env.EMAIL_USER);

  // ✅ Gmail SMTP
  if (EMAIL_PROVIDER === 'gmail') {
    return nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: { rejectUnauthorized: false },
      connectionTimeout: 30000,
      greetingTimeout: 30000,
      socketTimeout: 30000
    });
  }

  // ✅ Ethereal (Free test email - no DNS needed!)
  if (EMAIL_PROVIDER === 'ethereal') {
    const testAccount = await nodemailer.createTestAccount();
    console.log('✅ Ethereal account created');
    return nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass
      }
    });
  }

  return null;
};

// ============================================
// SEND EMAIL
// ============================================

const sendEmail = async ({ to, subject, html }) => {
  // ✅ 1. Always log to console
  console.log('═══════════════════════════════════════');
  console.log('📧 EMAIL NOTIFICATION');
  console.log(`📧 To: ${to}`);
  console.log(`📧 Subject: ${subject}`);
  console.log(`📧 Body Preview: ${html ? html.substring(0, 300) : 'No content'}...`);
  console.log('═══════════════════════════════════════');

  // ✅ 2. Always save to file
  try {
    const emailLog = `\n[${new Date().toISOString()}]\nTo: ${to}\nSubject: ${subject}\nBody: ${html}\n---\n`;
    fs.appendFileSync(path.join(__dirname, '../email-logs.txt'), emailLog);
    console.log('💾 Email saved to email-logs.txt');
  } catch (fileError) {
    console.log('⚠️ Could not save to file:', fileError.message);
  }

  // ✅ 3. Try to send real email
  try {
    const transporter = await createTransporter();
    
    if (transporter) {
      const mailOptions = {
        from: process.env.EMAIL_USER || 'stalinlifecoach77@gmail.com',
        to: to,
        subject: subject,
        html: html
      };

      const info = await transporter.sendMail(mailOptions);
      console.log(`✅ Real email sent to ${to}`);
      
      // If using Ethereal, show preview URL
      if (EMAIL_PROVIDER === 'ethereal') {
        console.log(`📧 Preview: ${nodemailer.getTestMessageUrl(info)}`);
      } else {
        console.log(`📧 Message ID: ${info.messageId}`);
      }
      
      return { success: true, real: true, messageId: info.messageId };
    }
  } catch (emailError) {
    console.log('⚠️ Real email failed:', emailError.message);
    console.log('💡 Email saved to file. Check email-logs.txt');
  }

  // ✅ 4. Always return success (even if email fails)
  return { success: true, simulated: true, saved: true };
};

// ============================================
// SEND WHATSAPP
// ============================================

const sendWhatsApp = async ({ phone, message }) => {
  try {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone || '919943853567'}?text=${encodedMessage}`;
    
    console.log(`📱 WhatsApp Link: ${whatsappUrl}`);
    console.log(`💡 Open this link in browser to send WhatsApp message`);
    
    return { success: true, url: whatsappUrl };
  } catch (error) {
    console.error('❌ WhatsApp error:', error);
    return { success: false, error: error.message };
  }
};

// ============================================
// EXPORT
// ============================================

module.exports = { sendEmail, sendWhatsApp };