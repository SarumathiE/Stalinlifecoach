import { FaPhoneAlt } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <span className="logo-icon">🧠</span>
        <div>
          <h2>Stalin Life Coach</h2>
      
        </div>
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#appointment">Appointment</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="nav-right">

        <div className="phone">
          <FaPhoneAlt />
          <span>+91 9943853567</span>
        </div>

        <a href="#appointment" className="book-btn">
          Book Now
        </a>

      </div>

    </nav>
  );
}

export default Navbar;