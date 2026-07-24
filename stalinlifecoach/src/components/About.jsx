import aboutImage from '../assets/stalin-life-coach.jpeg';

function About() {
  return (
    <section className="about" id="about">
      {/* Left Side - Image */}
      <div className="about-left">
        <div className="image-wrapper">
          <img
            src={aboutImage}
            alt="Stalin Life Coach - Professional Psychiatrist & Life Coach"
          />
          <div className="image-badge">
            <span>🧠</span> 10+ Years
          </div>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="about-right">
        <span className="section-tag">👨‍⚕️ About Me</span>
        <h2>
          <span>Stalin</span> — Your Guide to Mental Wellness
        </h2>

       <p>
  <strong>Stalin</strong> — Psychiatrist & Life Coach with <strong>10+ years</strong> 
  experience. Compassionate care for anxiety, depression, stress & relationships.
</p>
<p>
  Warm, non-judgmental, and tailored to you — because healing begins with being heard.
</p>
        {/* Statistics Grid */}
        <div className="about-grid">
          <div className="about-card">
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>
          <div className="about-card">
            <h3>500+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="about-card">
            <h3>100%</h3>
            <p>Confidential</p>
          </div>
          <div className="about-card">
            <h3>24/7</h3>
            <p>Online Support</p>
          </div>
        </div>

        <a href="#appointment" className="about-btn">
          Book a Session →
        </a>
      </div>
    </section>
  );
}

export default About;