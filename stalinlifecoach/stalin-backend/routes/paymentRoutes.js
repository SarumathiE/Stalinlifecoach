const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const Appointment = require('../models/Appointment');
const Payment = require('../models/Payment');

// Initialize Razorpay
let razorpay;
try {
  const Razorpay = require('razorpay');
  razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY || 'rzp_test_xxxxxxxxxx',
    key_secret: process.env.RAZORPAY_SECRET || 'xxxxxxxxxxxxxxxxxxxx'
  });
} catch (error) {
  console.log('Razorpay not initialized (optional)');
}

// Create Razorpay order
router.post('/create-order', async (req, res) => {
  try {
    const { bookingId } = req.body;
    
    const appointment = await Appointment.findOne({ bookingId });
    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Appointment not found'
      });
    }

    if (!razorpay) {
      return res.status(400).json({
        success: false,
        message: 'Payment service not available. Please use WhatsApp payment option.'
      });
    }

    const options = {
      amount: appointment.amount * 100, // Amount in paise
      currency: 'INR',
      receipt: bookingId,
      notes: {
        bookingId: bookingId,
        name: appointment.name,
        email: appointment.email
      }
    };

    const order = await razorpay.orders.create(options);

    res.json({
      success: true,
      order: order,
      key: process.env.RAZORPAY_KEY || 'rzp_test_xxxxxxxxxx'
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to create payment order',
      error: error.message
    });
  }
});

// Verify payment
router.post('/verify', async (req, res) => {
  try {
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature,
      bookingId 
    } = req.body;

    if (!razorpay) {
      // Simulate verification for testing
      const appointment = await Appointment.findOne({ bookingId });
      if (appointment) {
        appointment.paymentStatus = 'paid';
        appointment.paymentId = razorpay_payment_id || 'test_payment_id';
        appointment.status = 'confirmed';
        await appointment.save();
        
        return res.json({
          success: true,
          message: 'Payment verified (test mode)',
          data: appointment
        });
      }
    }

    // Verify signature
    const body = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_SECRET)
      .update(body.toString())
      .digest('hex');

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      const appointment = await Appointment.findOne({ bookingId });
      if (appointment) {
        appointment.paymentStatus = 'paid';
        appointment.paymentId = razorpay_payment_id;
        appointment.status = 'confirmed';
        await appointment.save();

        const payment = new Payment({
          appointmentId: appointment._id,
          amount: appointment.amount,
          method: 'razorpay',
          transactionId: razorpay_payment_id,
          status: 'success',
          paymentData: req.body
        });
        await payment.save();

        res.json({
          success: true,
          message: 'Payment verified successfully',
          data: appointment
        });
      }
    } else {
      res.status(400).json({
        success: false,
        message: 'Invalid payment signature'
      });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Payment verification failed',
      error: error.message
    });
  }
});

module.exports = router;