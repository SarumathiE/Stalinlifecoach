import aboutImage from '../assets/stalin-life-coach.jpeg';
import { useState, useEffect, useRef } from 'react';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const focusList = [
    'Personal Transformation',
    'Confidence Building',
    'Mindset Development',
    'Emotion Management',
    'Stress & Burnout Management',
    'Career & Leadership Growth',
    'Relationship Improvement',
    'Goal Setting & Achievement',
    'Work-Life Balance',
    'Self-Discovery & Purpose',
  ];

  const stats = [
    { number: '10+', label: 'Years Experience', icon: '🌟' },
    { number: '1:1', label: 'Personalized Coaching', icon: '🤝' },
    { number: '100%', label: 'Confidential', icon: '🔒' },
    { number: 'Result', label: 'Oriented Strategies', icon: '📈' },
  ];

  return (
    <section className="abt-section" id="about" ref={sectionRef}>
      <div className="abt-container">
        {/* ===== LEFT - IMAGE ===== */}
        <div className={`abt-left ${isVisible ? 'abt-animate-in' : ''}`}>
          <div className="abt-image-wrapper">
            <img
              src={aboutImage}
              alt="Stalin - Professional Life Coach"
              className="abt-image"
            />
            <div className="abt-image-badge">
              <span>🌟</span> 10+ Years
            </div>
          </div>
        </div>

        {/* ===== RIGHT - CONTENT ===== */}
        <div className={`abt-right ${isVisible ? 'abt-animate-in' : ''}`}>
          <span className="abt-section-tag">ABOUT ME</span>

          <h2 className="abt-title">
            <span className="abt-highlight">Stalin</span> — Transforming Lives with Purpose, Clarity & Confidence
          </h2>

          <p className="abt-text">
            I am <strong>Stalin</strong>, a professional <strong>Life Coach</strong> with{' '}
            <strong>10+ years</strong> of experience helping individuals discover their
            true potential, overcome challenges, and create meaningful, successful lives.
          </p>

          <p className="abt-text">
            My mission is to empower people to break limiting beliefs, develop a winning
            mindset, and achieve lasting personal and professional success — because
            every person already possesses the strength to create the life they desire.
          </p>
        </div>
      </div>

      {/* ===== BOTTOM SECTION - FOCUS & STATS ===== */}
      <div className="abt-bottom">
        {/* Focus Areas */}
        <div className="abt-focus-wrapper">
          <div className="abt-focus-scroll">
            {focusList.map((item, index) => (
              <span key={index} className="abt-focus-item">
                <span className="abt-focus-dot">✦</span> {item}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="abt-stats-wrapper">
          {stats.map((stat, index) => (
            <div key={index} className="abt-stat-card">
              <div className="abt-stat-icon">{stat.icon}</div>
              <h3 className="abt-stat-number">{stat.number}</h3>
              <p className="abt-stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a href="#appointment" className="abt-btn">
          Start Your Transformation →
        </a>
      </div>

      <style>{`
        /* ===== ABOUT SECTION - UNIQUE CLASS NAMES ===== */
        .abt-section {
          padding: 100px 8%;
          background: linear-gradient(135deg, #f8f6ff 0%, #ffffff 50%, #f5f0ff 100%);
          position: relative;
          overflow: hidden;
        }

        /* ===== CONTAINER ===== */
        .abt-container {
          display: flex;
          align-items: center;
          gap: 80px;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* ===== LEFT - IMAGE ===== */
        .abt-left {
          flex: 0 0 45%;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .abt-left.abt-animate-in {
          opacity: 1;
          transform: translateX(0);
        }

        .abt-image-wrapper {
          position: relative;
          display: inline-block;
          padding: 10px;
          background: linear-gradient(135deg, #7C4DFF, #b388ff);
          border-radius: 30px;
          box-shadow: 0 30px 60px rgba(124, 77, 255, 0.15);
        }

        .abt-image {
          width: 100%;
          max-width: 420px;
          height: auto;
          border-radius: 22px;
          display: block;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .abt-image:hover {
          transform: scale(1.02);
        }

        /* Image Badge */
        .abt-image-badge {
          position: absolute;
          bottom: 24px;
          right: -8px;
          background: linear-gradient(135deg, #7C4DFF, #5E35B1);
          color: white;
          padding: 12px 24px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 15px;
          box-shadow: 0 8px 25px rgba(124, 77, 255, 0.4);
          display: flex;
          align-items: center;
          gap: 10px;
          border: 2px solid rgba(255, 255, 255, 0.2);
          animation: abtBadgeFloat 3s ease-in-out infinite;
        }

        @keyframes abtBadgeFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .abt-image-badge span {
          font-size: 18px;
        }

        /* ===== RIGHT - CONTENT ===== */
        .abt-right {
          flex: 1;
          opacity: 0;
          transform: translateX(50px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
        }

        .abt-right.abt-animate-in {
          opacity: 1;
          transform: translateX(0);
        }

        .abt-section-tag {
          display: inline-block;
          background: rgba(124, 77, 255, 0.1);
          color: #7C4DFF;
          padding: 6px 24px;
          border-radius: 40px;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 2px;
          margin-bottom: 20px;
          border: 1px solid rgba(124, 77, 255, 0.15);
        }

        .abt-title {
          font-size: 38px;
          color: #1e1e2f;
          margin-bottom: 24px;
          line-height: 1.2;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .abt-highlight {
          color: #5E35B1;
          position: relative;
        }

        .abt-highlight::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 0;
          width: 100%;
          height: 6px;
          background: rgba(124, 77, 255, 0.15);
          border-radius: 10px;
        }

        .abt-text {
          font-size: 17px;
          line-height: 1.9;
          color: #4a4a6a;
          margin-bottom: 16px;
          max-width: 580px;
        }

        .abt-text strong {
          color: #5E35B1;
          font-weight: 700;
        }

        .abt-text:last-of-type {
          margin-bottom: 0;
        }

        /* ===== BOTTOM SECTION ===== */
        .abt-bottom {
          max-width: 1400px;
          margin: 50px auto 0;
          padding-top: 40px;
          border-top: 2px solid rgba(124, 77, 255, 0.06);
        }

        /* ===== FOCUS AREAS ===== */
        .abt-focus-wrapper {
          width: 100%;
          overflow: hidden;
          margin-bottom: 35px;
          position: relative;
        }

        .abt-focus-wrapper::before,
        .abt-focus-wrapper::after {
          content: '';
          position: absolute;
          top: 0;
          width: 50px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }

        .abt-focus-wrapper::before {
          left: 0;
          background: linear-gradient(to right, #f8f6ff, transparent);
        }

        .abt-focus-wrapper::after {
          right: 0;
          background: linear-gradient(to left, #f8f6ff, transparent);
        }

        .abt-focus-scroll {
          display: flex;
          gap: 12px 24px;
          overflow-x: auto;
          padding: 8px 0 16px;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          flex-wrap: nowrap;
        }

        .abt-focus-scroll::-webkit-scrollbar {
          height: 4px;
        }

        .abt-focus-scroll::-webkit-scrollbar-track {
          background: rgba(124, 77, 255, 0.05);
          border-radius: 10px;
        }

        .abt-focus-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, #7C4DFF, #b388ff);
          border-radius: 10px;
        }

        .abt-focus-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #2d2d3f;
          font-weight: 500;
          white-space: nowrap;
          padding: 8px 18px;
          border-radius: 30px;
          transition: all 0.3s ease;
          cursor: default;
          flex-shrink: 0;
          background: white;
          border: 1px solid rgba(124, 77, 255, 0.08);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
        }

        .abt-focus-item:hover {
          background: rgba(124, 77, 255, 0.08);
          transform: translateY(-3px);
          color: #5E35B1;
          border-color: rgba(124, 77, 255, 0.2);
          box-shadow: 0 6px 20px rgba(124, 77, 255, 0.08);
        }

        .abt-focus-dot {
          color: #7C4DFF;
          font-size: 11px;
          opacity: 0.6;
          transition: all 0.3s ease;
        }

        .abt-focus-item:hover .abt-focus-dot {
          opacity: 1;
          transform: scale(1.2);
        }

        /* ===== STATS ===== */
        .abt-stats-wrapper {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 35px;
        }

        .abt-stat-card {
          background: white;
          padding: 22px 16px;
          border-radius: 20px;
          text-align: center;
          transition: all 0.4s ease;
          border: 1px solid rgba(124, 77, 255, 0.06);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
          position: relative;
          overflow: hidden;
        }

        .abt-stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #7C4DFF, #b388ff);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .abt-stat-card:hover::before {
          opacity: 1;
        }

        .abt-stat-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(124, 77, 255, 0.08);
        }

        .abt-stat-icon {
          font-size: 30px;
          margin-bottom: 6px;
          display: inline-block;
          background: rgba(124, 77, 255, 0.08);
          padding: 10px;
          border-radius: 50%;
          line-height: 1;
        }

        .abt-stat-number {
          font-size: 28px;
          font-weight: 800;
          color: #1e1e2f;
          margin-bottom: 2px;
          letter-spacing: -0.5px;
        }

        .abt-stat-label {
          font-size: 13px;
          color: #6a6a8a;
          font-weight: 500;
          margin: 0;
        }

        /* ===== CTA BUTTON ===== */
        .abt-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(135deg, #7C4DFF, #5E35B1);
          color: white;
          padding: 16px 40px;
          border-radius: 60px;
          font-weight: 700;
          font-size: 16px;
          transition: all 0.4s ease;
          text-decoration: none;
          box-shadow: 0 8px 25px rgba(124, 77, 255, 0.3);
          border: none;
          cursor: pointer;
          letter-spacing: 0.3px;
        }

        .abt-btn:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 14px 40px rgba(124, 77, 255, 0.4);
        }

        /* ============================================
           RESPONSIVE
           ============================================ */

        @media (max-width: 1024px) {
          .abt-section {
            padding: 80px 6%;
          }

          .abt-container {
            gap: 50px;
          }

          .abt-left {
            flex: 0 0 42%;
          }

          .abt-image {
            max-width: 350px;
          }

          .abt-title {
            font-size: 32px;
          }

          .abt-stats-wrapper {
            gap: 15px;
          }

          .abt-stat-card {
            padding: 18px 12px;
          }

          .abt-stat-number {
            font-size: 24px;
          }
        }

        @media (max-width: 900px) {
          .abt-section {
            padding: 60px 5%;
          }

          .abt-container {
            flex-direction: column;
            gap: 35px;
          }

          .abt-left {
            flex: 1;
            width: 100%;
            transform: translateY(-30px);
          }

          .abt-left.abt-animate-in {
            transform: translateY(0);
          }

          .abt-right {
            transform: translateY(30px);
            text-align: center;
          }

          .abt-right.abt-animate-in {
            transform: translateY(0);
          }

          .abt-image {
            max-width: 300px;
          }

          .abt-image-badge {
            bottom: 18px;
            right: -5px;
            padding: 10px 20px;
            font-size: 14px;
          }

          .abt-image-badge span {
            font-size: 16px;
          }

          .abt-title {
            font-size: 28px;
          }

          .abt-text {
            max-width: 100%;
            margin-left: auto;
            margin-right: auto;
            font-size: 16px;
          }

          .abt-bottom {
            margin-top: 35px;
            padding-top: 30px;
          }

          .abt-focus-wrapper::before,
          .abt-focus-wrapper::after {
            width: 30px;
          }

          .abt-focus-item {
            font-size: 13px;
            padding: 6px 14px;
          }

          .abt-stats-wrapper {
            grid-template-columns: repeat(4, 1fr);
            gap: 12px;
          }

          .abt-stat-card {
            padding: 14px 10px;
          }

          .abt-stat-number {
            font-size: 20px;
          }

          .abt-stat-icon {
            font-size: 24px;
            padding: 8px;
          }

          .abt-btn {
            justify-content: center;
            width: 100%;
            max-width: 380px;
            margin: 0 auto;
            display: flex;
            padding: 14px 32px;
            font-size: 15px;
          }
        }

        @media (max-width: 600px) {
          .abt-section {
            padding: 50px 4%;
          }

          .abt-container {
            gap: 28px;
          }

          .abt-image {
            max-width: 240px;
          }

          .abt-image-wrapper {
            padding: 6px;
            border-radius: 24px;
          }

          .abt-image-badge {
            bottom: 12px;
            right: -2px;
            padding: 8px 16px;
            font-size: 12px;
            gap: 6px;
          }

          .abt-image-badge span {
            font-size: 14px;
          }

          .abt-title {
            font-size: 24px;
          }

          .abt-text {
            font-size: 15px;
            line-height: 1.8;
          }

          .abt-section-tag {
            font-size: 11px;
            padding: 5px 16px;
          }

          .abt-bottom {
            margin-top: 28px;
            padding-top: 24px;
          }

          .abt-focus-wrapper::before,
          .abt-focus-wrapper::after {
            width: 20px;
          }

          .abt-focus-item {
            font-size: 12px;
            padding: 5px 12px;
            gap: 4px;
          }

          .abt-focus-dot {
            font-size: 10px;
          }

          .abt-stats-wrapper {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }

          .abt-stat-card {
            padding: 14px 10px;
            border-radius: 16px;
          }

          .abt-stat-number {
            font-size: 20px;
          }

          .abt-stat-label {
            font-size: 11px;
          }

          .abt-stat-icon {
            font-size: 22px;
            padding: 8px;
          }

          .abt-btn {
            font-size: 14px;
            padding: 12px 28px;
          }
        }

        @media (max-width: 380px) {
          .abt-section {
            padding: 40px 3%;
          }

          .abt-image {
            max-width: 200px;
          }

          .abt-image-badge {
            bottom: 8px;
            right: 0px;
            padding: 6px 14px;
            font-size: 10px;
          }

          .abt-image-badge span {
            font-size: 12px;
          }

          .abt-title {
            font-size: 20px;
          }

          .abt-text {
            font-size: 14px;
          }

          .abt-stats-wrapper {
            gap: 8px;
          }

          .abt-stat-card {
            padding: 12px 8px;
          }

          .abt-stat-number {
            font-size: 18px;
          }

          .abt-stat-label {
            font-size: 10px;
          }

          .abt-stat-icon {
            font-size: 18px;
            padding: 6px;
          }

          .abt-btn {
            font-size: 13px;
            padding: 10px 20px;
          }
        }
      `}</style>
    </section>
  );
}

export default About;