import { useState } from "react";
import axios from "axios";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const API_URL = "https://stalinlifecoach-api.onrender.com/api";

function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingStep, setBookingStep] = useState(1); // 1: Form, 2: Confirm
  const [bookingId, setBookingId] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const todayDate = new Date().toISOString().split('T')[0];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError("");
  };

  // Submit Form → Create Appointment
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      console.log('📤 Sending data:', formData);
      
      // Validate phone number
      if (!/^[0-9]{10}$/.test(formData.phone)) {
        throw new Error('Please enter a valid 10-digit phone number');
      }

      // Validate email
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      // Validate date
      if (formData.date < todayDate) {
        throw new Error('Please select a future date');
      }

      // Validate time
      if (!formData.time) {
        throw new Error('Please select a time');
      }

      const response = await axios.post(`${API_URL}/appointments/create`, formData);
      console.log('✅ Response:', response.data);
      
      if (response.data.success) {
        setBookingId(response.data.data.bookingId);
        setBookingStep(2);
        setSuccessMessage("✅ Appointment booked successfully! Check your email for confirmation.");
      }
    } catch (error) {
      console.error('❌ Error:', error);
      
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else if (error.message) {
        setError(error.message);
      } else {
        setError("Failed to book appointment. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Book Another Appointment
  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      message: ""
    });
    setBookingStep(1);
    setBookingId("");
    setSuccessMessage("");
    setError("");
  };

  return (
    <section className="appointment" id="appointment">
      <div className="appointment-header">
        <span className="section-tag">📋 Book Now</span>
        <h2>Schedule Your Consultation</h2>
        <p>
          Take the first step towards better mental wellness.
          <br />
          <span className="fee-text" style={{ background: 'transparent', color: '#6a6a8a' }}>
            <FaPhoneAlt style={{ marginRight: '6px' }} /> +91 9943853567 &nbsp;|&nbsp; 
            <FaEnvelope style={{ marginLeft: '6px', marginRight: '6px' }} /> stalinlifecoach77@gmail.com
          </span>
        </p>
      </div>

      {/* Error/Success Messages */}
      {error && <div className="error-message">❌ {error}</div>}
      {successMessage && <div className="success-message">✅ {successMessage}</div>}

      {/* Progress Steps */}
      <div className="booking-steps">
        <div className={`step ${bookingStep >= 1 ? "active" : ""}`}>
          <span className="step-number">1</span>
          <span className="step-label">Details</span>
        </div>
        <div className={`step-line ${bookingStep >= 2 ? "active" : ""}`}></div>
        <div className={`step ${bookingStep >= 2 ? "active" : ""}`}>
          <span className="step-number">2</span>
          <span className="step-label">Confirm</span>
        </div>
      </div>

      <div className="appointment-container">
        {/* ============================================ */}
        {/* STEP 1: BOOKING FORM */}
        {/* ============================================ */}
        {bookingStep === 1 && (
          <form onSubmit={handleSubmit} className="booking-form">
            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Preferred Date *</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={todayDate}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Preferred Time *</label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Time</option>
                  <option>09:00 AM</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>12:00 PM</option>
                  <option>02:00 PM</option>
                  <option>03:00 PM</option>
                  <option>04:00 PM</option>
                  <option>05:00 PM</option>
                </select>
              </div>
             
            </div>

            <div className="form-group full-width">
              <label>Reason for Appointment (Optional)</label>
              <textarea
                rows="3"
                name="message"
                placeholder="Tell us what you'd like to work on..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Contact Info */}
            <div className="contact-info-box">
              <p>
                <FaPhoneAlt /> <strong>Contact:</strong> +91 9943853567
              </p>
              <p>
                <FaEnvelope /> <strong>Email:</strong> stalinlifecoach77@gmail.com
              </p>
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? "⏳ Booking..." : "📅 Book Appointment"}
            </button>
          </form>
        )}

        {/* ============================================ */}
        {/* STEP 2: CONFIRMATION */}
        {/* ============================================ */}
        {bookingStep === 2 && (
          <div className="confirmation-section">
            <div className="confirmation-icon">✅</div>
            <h3>Appointment Booked!</h3>
            <p>Your appointment has been successfully booked.</p>
            <div className="booking-details">
              <div className="detail-item">
                <span>Booking ID</span>
                <span>{bookingId}</span>
              </div>
              <div className="detail-item">
                <span>Name</span>
                <span>{formData.name}</span>
              </div>
              <div className="detail-item">
                <span>Email</span>
                <span>{formData.email}</span>
              </div>
              <div className="detail-item">
                <span>Phone</span>
                <span>{formData.phone}</span>
              </div>
              <div className="detail-item">
                <span>Date</span>
                <span>{formData.date}</span>
              </div>
              <div className="detail-item">
                <span>Time</span>
                <span>{formData.time}</span>
              </div>
              {formData.message && (
                <div className="detail-item">
                  <span>Message</span>
                  <span>{formData.message}</span>
                </div>
              )}
            </div>
            <p className="confirmation-msg">
              📧 We've sent the booking details to your email.
              <br />
              📱 You will receive a confirmation message on WhatsApp shortly.
            </p>
            <button onClick={handleReset} className="reset-btn">
              📅 Book Another Appointment
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Appointment;