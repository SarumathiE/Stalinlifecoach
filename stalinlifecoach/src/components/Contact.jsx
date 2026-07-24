import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <h2>Contact Us</h2>

      <p>
        We're here to support your mental wellness journey.
      </p>

      <div className="contact-container">

        <div className="contact-info">

          <div className="contact-card">
            <FaPhoneAlt />
            <h3>Call Us</h3>
            <p>+91 9943853567</p>
          </div>

          <div className="contact-card">
            <FaEnvelope />
            <h3>Email</h3>
            <p>stalinlifecoach77@gmail.com</p>
          </div>

        <div className="contact-card">
  <FaMapMarkerAlt />
  <h3>Clinic Address</h3>
  <p>
    1, Subagraha Apartment,<br />
    Ground Floor,<br />
    Balram Street,<br />
    Adyar,<br />
    Chennai - 600020
  </p>
</div>
        </div>

        <div className="map">

          <iframe
  title="Google Map"
  src="https://www.google.com/maps?q=1+Subagraha+Apartment+Ground+Floor+Balram+Street+Adyar+Chennai+600020&output=embed"
  loading="lazy"
></iframe>

        </div>

      </div>

    </section>
  );
}

export default Contact;