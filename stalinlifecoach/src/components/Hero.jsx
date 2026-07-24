import {
  FaPhoneAlt,
  FaEnvelope,
  FaCalendarCheck,
  FaShieldAlt,
  FaUserMd,
  FaVideo,
} from "react-icons/fa";
import backgroundImage from '../assets/background.png'; // ✅ Import your background image

function Hero() {
  return (
    <section 
      className="hero" 
      id="home"
      style={{
        backgroundImage: `url('./assets/background.png')`, // ✅ Use the imported image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
      }}
    >
      {/* Overlay for text readability */}
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <span className="hero-tag">
          🧠 Professional Psychiatrist & Life Coach
        </span>

        <h1>
          Healing Minds,
          <br />
          Transforming Lives.
        </h1>

         <p>
          <strong>Stalin Life Coach</strong> — Your trusted partner in mental wellness.
          Expert guidance for anxiety, depression, stress & relationships.
        </p>

        <div className="hero-buttons">
          <a href="#appointment" className="btn">
            <FaCalendarCheck />
            Book Appointment
          </a>

          <a href="tel:9943853567" className="btn2">
            <FaPhoneAlt />
            Call Now
          </a>
        </div>

        <div className="hero-contact">
          <div className="hero-card">
            <FaPhoneAlt />
            <div>
              <h4>Call Us</h4>
              <span>+91 9943853567</span>
            </div>
          </div>

          <div className="hero-card">
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <span>stalinlifecoach77@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="hero-features">
          <div>
            <FaShieldAlt />
            <span>100% Confidential</span>
          </div>

          <div>
            <FaVideo />
            <span>Online Consultation</span>
          </div>

          <div>
            <FaUserMd />
            <span>Expert Guidance</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;