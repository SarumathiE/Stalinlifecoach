const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
const { sendEmail, sendWhatsApp } = require('../utils/notifications');

// Create appointment
router.post('/create', async (req, res) => {
  try {
    console.log('📝 Received appointment request:', req.body);

    const { name, email, phone, date, time, message, mode } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !date || !time) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: name, email, phone, date, time are required'
      });
    }

    // Validate phone number (10 digits)
    if (!/^[0-9]{10}$/.test(phone)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid 10-digit phone number'
      });
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Check if appointment already exists for this time
    const existingAppointment = await Appointment.findOne({ date, time });
    if (existingAppointment) {
      return res.status(400).json({
        success: false,
        message: 'This time slot is already booked. Please choose another time.'
      });
    }

    // Create appointment
    const appointment = new Appointment({
      name,
      email,
      phone,
      date,
      time,
      message: message || '',
      mode: mode || 'online',
      status: 'confirmed'
    });

    await appointment.save();
    console.log('✅ Appointment saved:', appointment.bookingId);

    // ============================================
    // 1. SEND EMAIL TO CLIENT
    // ============================================
    try {
      await sendEmail({
        to: email,
        subject: '✅ Appointment Confirmation - Stalin Life Coach',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #7C4DFF, #5E35B1); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f8f5ff; padding: 30px; border-radius: 0 0 10px 10px; }
              .details { background: white; padding: 20px; border-radius: 10px; margin: 20px 0; }
              .row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
              .row:last-child { border-bottom: none; }
              .label { font-weight: 600; color: #5E35B1; }
              .footer { text-align: center; margin-top: 20px; color: #888; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🧠 Stalin Life Coach</h1>
                <p>Appointment Confirmation</p>
              </div>
              <div class="content">
                <h2>Hello ${name}! 👋</h2>
                <p>Your appointment has been successfully booked. Here are the details:</p>
                
                <div class="details">
                  <div class="row">
                    <span class="label">📋 Booking ID</span>
                    <span><strong>${appointment.bookingId}</strong></span>
                  </div>
                  <div class="row">
                    <span class="label">📅 Date</span>
                    <span><strong>${date}</strong></span>
                  </div>
                  <div class="row">
                    <span class="label">⏰ Time</span>
                    <span><strong>${time}</strong></span>
                  </div>
                  <div class="row">
                    <span class="label">📋 Mode</span>
                    <span><strong>${mode || 'Online Consultation'}</strong></span>
                  </div>
                </div>

                <p><strong>📞 Contact:</strong> +91 9943853567</p>
                <p><strong>📧 Email:</strong> stalinlifecoach77@gmail.com</p>

                <p style="margin-top: 20px;"><strong>⚠️ Please Note:</strong></p>
                <ul style="color: #666;">
                  <li>Please be ready 5 minutes before the scheduled time.</li>
                  <li>Keep a quiet, private space ready for the session.</li>
                  <li>Have a notebook and pen ready if needed.</li>
                </ul>

                <p style="margin-top: 20px;">We look forward to helping you on your journey to better mental wellness! 🌟</p>
                <p>Warm regards,<br><strong>Stalin Life Coach Team</strong></p>
              </div>
              <div class="footer">
                <p>© ${new Date().getFullYear()} Stalin Life Coach. All rights reserved.</p>
              </div>
            </div>
          </body>
          </html>
        `
      });
      if (clientEmail.success) {
  console.log(`✅ Client email sent to ${email}`);
} else {
  console.log(`❌ Client email failed: ${clientEmail.error}`);
}
    // ============================================
    // 2. SEND EMAIL TO ADMIN
    // ============================================
    try {
      await sendEmail({
        to: 'stalinlifecoach77@gmail.com',
        subject: '🔔 New Appointment Booking - Stalin Life Coach',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #FF6B6B, #FF4444); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #fff5f5; padding: 30px; border-radius: 0 0 10px 10px; }
              .details { background: white; padding: 20px; border-radius: 10px; margin: 20px 0; }
              .row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
              .row:last-child { border-bottom: none; }
              .label { font-weight: 600; color: #FF4444; }
              .highlight { background: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #ffc107; margin: 15px 0; }
              .footer { text-align: center; margin-top: 20px; color: #888; font-size: 14px; }
              .btn { display: inline-block; background: #25D366; color: white; padding: 12px 24px; border-radius: 30px; text-decoration: none; margin-top: 10px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🔔 New Appointment Booking</h1>
                <p>Stalin Life Coach - Admin Notification</p>
              </div>
              <div class="content">
                <div class="highlight">
                  <strong>📌 New booking received!</strong>
                </div>

                <h2>Client Details</h2>
                <div class="details">
                  <div class="row">
                    <span class="label">👤 Name</span>
                    <span><strong>${name}</strong></span>
                  </div>
                  <div class="row">
                    <span class="label">📧 Email</span>
                    <span><strong>${email}</strong></span>
                  </div>
                  <div class="row">
                    <span class="label">📱 Phone</span>
                    <span><strong>${phone}</strong></span>
                  </div>
                  <div class="row">
                    <span class="label">📅 Date</span>
                    <span><strong>${date}</strong></span>
                  </div>
                  <div class="row">
                    <span class="label">⏰ Time</span>
                    <span><strong>${time}</strong></span>
                  </div>
                  <div class="row">
                    <span class="label">📋 Booking ID</span>
                    <span><strong>${appointment.bookingId}</strong></span>
                  </div>
                  <div class="row">
                    <span class="label">📋 Mode</span>
                    <span><strong>${mode || 'Online Consultation'}</strong></span>
                  </div>
                  ${message ? `
                  <div class="row">
                    <span class="label">📝 Message</span>
                    <span>${message}</span>
                  </div>
                  ` : ''}
                </div>

                <div style="text-align: center;">
                  <a href="https://wa.me/91${phone}?text=Hi%20${name}%2C%20Your%20appointment%20on%20${date}%20at%20${time}%20is%20confirmed.%20%28Booking%20ID%3A%20${appointment.bookingId}%29" class="btn">📱 Contact Client on WhatsApp</a>
                </div>

                <p style="margin-top: 20px; color: #888; font-size: 14px;">
                  Please confirm the appointment and send the meeting link to the client.
                </p>
              </div>
              <div class="footer">
                <p>© ${new Date().getFullYear()} Stalin Life Coach. All rights reserved.</p>
              </div>
            </div>
          </body>
          </html>
        `
      });
      if (adminEmail.success) {
  console.log("✅ Admin email sent");
} else {
  console.log(`❌ Admin email failed: ${adminEmail.error}`);
}

    // ============================================
    // 3. SEND WHATSAPP TO ADMIN
    // ============================================
    try {
      await sendWhatsApp({
        phone: '919943853567',
        message: `🔔 *New Appointment Booking - Stalin Life Coach*

👤 *Client Details:*
Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone}

📋 *Booking Details:*
Booking ID: ${appointment.bookingId}
📅 Date: ${date}
⏰ Time: ${time}
📋 Mode: ${mode || 'Online Consultation'}

📝 Message: ${message || 'No message'}

📱 *Contact Client:* https://wa.me/91${phone}

Please confirm the appointment and send the meeting link.`
      });
      console.log('✅ Admin WhatsApp notification sent');
    } catch (whatsappError) {
      console.log('⚠️ WhatsApp error:', whatsappError.message);
    }

    res.status(201).json({
      success: true,
      message: 'Appointment booked successfully! Check your email for confirmation.',
      data: {
        bookingId: appointment.bookingId,
        appointment: {
          name: appointment.name,
          email: appointment.email,
          phone: appointment.phone,
          date: appointment.date,
          time: appointment.time,
          mode: appointment.mode
        }
      }
    });

  } catch (error) {
    console.error('❌ Appointment creation error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while creating appointment',
      error: error.message
    });
  }
});

// Get appointment by booking ID
router.get('/:bookingId', async (req, res) => {
  try {
    const appointment = await Appointment.findOne({ bookingId: req.params.bookingId });
    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Appointment not found'
      });
    }
    res.json({
      success: true,
      data: appointment
    });
  } catch (error) {
    console.error('❌ Error fetching appointment:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// Get all appointments (admin)
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: appointments.length,
      data: appointments
    });
  } catch (error) {
    console.error('❌ Error fetching appointments:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// Delete appointment (admin)
router.delete('/:id', async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);
    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Appointment not found'
      });
    }
    res.json({
      success: true,
      message: 'Appointment deleted successfully'
    });
  } catch (error) {
    console.error('❌ Error deleting appointment:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

module.exports = router;