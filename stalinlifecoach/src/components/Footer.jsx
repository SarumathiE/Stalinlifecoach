import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Stalin Life Coach</h2>
        <p className="footer-description">
          Empowering Lives Through Purpose, Clarity & Confidence.
        </p>
        <div className="footer-details">
          <div className="footer-item">
            <FaPhoneAlt />
            <span>+91 9943853567</span>
          </div>
          <div className="footer-item">
            <FaEnvelope />
            <span>stalinlifecoach77@gmail.com</span>
          </div>
          <div className="footer-item">
            <FaMapMarkerAlt />
            <span>
              1, Subagraha Apartment, Ground Floor,
              <br />
              Balram Street, Adyar,
              <br />
              Chennai - 600020.
            </span>
          </div>
        </div>
        <div className="social-icons">
          
            href="https://www.facebook.com/profile.php?id=61591562655904"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          
            href="https://www.instagram.com/stalin_life_coach/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          
            href="https://x.com/Stalinlifecoach"
            target="_blank"
            rel="noreferrer"
            aria-label="X (Twitter)"
          >
            <FaXTwitter />
          </a>
          
            href="https://wa.me/919943853567"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
        <hr />
        <p className="copyright">
          © 2026 Stalin Life Coach. All Rights Reserved. <br />
          Copyright belongs to Chez IT Solutions Pvt Ltd
        </p>
      </div>
    </footer>
  );
}

export default Footer;