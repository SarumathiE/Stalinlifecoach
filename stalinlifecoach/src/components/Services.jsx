import {
  FaHeartbeat,
  FaWallet,
  FaRocket,
  FaCompass,
  FaBrain,
  FaBalanceScale,
  FaUsers,
  FaHandHoldingHeart,
  FaChartLine,
  FaLeaf,
  FaSun,
  FaMoon,
  FaStar,
  FaLightbulb,
  FaUserFriends,
  FaFire,
  FaDove,
  FaCrown,
  FaGem,
  FaUserTie,
  FaGraduationCap,
  FaBookOpen,
  FaMeditation,
  FaSpinner
} from "react-icons/fa";
import { useState } from "react";

function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // ============================================
  // MAIN SERVICES - Health, Wealth, Prosperity
  // ============================================
  const mainServices = [
    {
      id: "health",
      icon: <FaHeartbeat />,
      title: "Health",
      subtitle: "Vitality & Wellness",
      description: "Transform Your Life Through Science, Spirituality & Coaching. True success comes when your body is healthy, your mind is calm, and your soul is aligned with purpose and abundance.",
      color: "#4ECDC4",
      gradient: "linear-gradient(135deg, #4ECDC4, #44B39D)",
      details: {
        overview: "Health is the foundation of a fulfilling life. When your body and mind are in harmony, you can achieve anything. This program combines science-based wellness practices with spiritual wisdom to help you achieve optimal vitality.",
        topics: [
          { icon: <FaHeartbeat />, title: "Physical Vitality", desc: "Optimize your physical health, energy levels, and overall well-being" },
          { icon: <FaLeaf />, title: "Mental Wellness", desc: "Achieve mental clarity, emotional balance, and inner peace" },
          { icon: <FaSun />, title: "Holistic Health", desc: "Integrate body, mind, and spirit for complete wellness" },
          { icon: <FaMoon />, title: "Sleep & Energy Optimization", desc: "Improve sleep quality, restore energy, and enhance daily performance" }
        ]
      }
    },
    {
      id: "wealth",
      icon: <FaWallet />,
      title: "Wealth",
      subtitle: "Financial Freedom & Prosperity",
      description: "Health. Wealth. Prosperity. Financial freedom and abundance in all areas of life. Build a wealth mindset and create lasting prosperity.",
      color: "#FFA94D",
      gradient: "linear-gradient(135deg, #FFA94D, #FF8C00)",
      details: {
        overview: "Wealth is not just about money — it's about creating a life of abundance, security, and choices. This program helps you develop a prosperity mindset and build sustainable wealth.",
        topics: [
          { icon: <FaChartLine />, title: "Financial Freedom", desc: "Achieve financial independence and live life on your terms" },
          { icon: <FaStar />, title: "Abundance Mindset", desc: "Develop a mindset of growth, prosperity, and unlimited potential" },
          { icon: <FaWallet />, title: "Wealth Creation", desc: "Build sustainable wealth through smart strategies" },
          { icon: <FaRocket />, title: "Prosperity Mindset", desc: "Create multiple streams of income and financial abundance" }
        ]
      }
    },
    {
      id: "prosperity",
      icon: <FaRocket />,
      title: "Prosperity",
      subtitle: "Growth, Impact & Legacy",
      description: "Health. Wealth. Prosperity. Creating a life of purpose, balance and abundance. Live with impact and leave a lasting legacy.",
      color: "#7C4DFF",
      gradient: "linear-gradient(135deg, #7C4DFF, #5E35B1)",
      details: {
        overview: "Prosperity goes beyond wealth — it's about creating meaningful impact, building a legacy, and living a life of purpose. This program helps you discover your unique gifts and use them to make a difference.",
        topics: [
          { icon: <FaCompass />, title: "Life Purpose", desc: "Discover your true purpose and live a life of meaning" },
          { icon: <FaUsers />, title: "Leadership & Impact", desc: "Build leadership skills to inspire and empower others" },
          { icon: <FaStar />, title: "Legacy Building", desc: "Create a meaningful legacy that will inspire generations" },
          { icon: <FaCrown />, title: "Personal Excellence", desc: "Achieve excellence in every area of your life" }
        ]
      }
    }
  ];

  // ============================================
  // FRAMEWORK - Surveil, Heal, Awaken, Integrate
  // ============================================
  const frameworkServices = [
    {
      id: "surveil",
      icon: <FaCompass />,
      title: "SURVEIL",
      subtitle: "Gain Awareness",
      description: "Every transformation begins with awareness. Understand your current patterns, emotions, habits, beliefs, and opportunities for growth.",
      color: "#4ECDC4",
      details: {
        overview: "Surveil is about gaining clarity on your life. You observe your current situation with awareness and identify what truly matters.",
        benefits: [
          "Deep self-awareness and observation",
          "Understanding your current life state",
          "Identifying what truly matters to you",
          "Clarity on life direction and purpose"
        ]
      }
    },
    {
      id: "heal",
      icon: <FaLeaf />,
      title: "HEAL",
      subtitle: "Release & Renew",
      description: "Let go of limiting beliefs, emotional blocks, and unhealthy habits that prevent your growth. This stage focuses on inner renewal through coaching and transformational practices.",
      color: "#74B9FF",
      details: {
        overview: "Healing is about releasing what holds you back. Through coaching and transformational practices, you restore your balance and inner peace.",
        benefits: [
          "Emotional balance and inner peace",
          "Stress management and resilience",
          "Release of limiting beliefs",
          "Renewed energy and vitality"
        ]
      }
    },
    {
      id: "awaken",
      icon: <FaSun />,
      title: "AWAKEN",
      subtitle: "Unlock Your Potential",
      description: "Reconnect with your authentic self and awaken the potential that already exists within you. Develop confidence, purpose, creativity, and higher awareness.",
      color: "#FFA94D",
      details: {
        overview: "Awakening is about discovering your true self. You connect with your purpose and step into a higher state of awareness.",
        benefits: [
          "Discovering your authentic self",
          "Connecting with life purpose",
          "Higher awareness and consciousness",
          "Personal transformation and growth"
        ]
      }
    },
    {
      id: "integrate",
      icon: <FaBalanceScale />,
      title: "INTEGRATE",
      subtitle: "Live Your Transformation",
      description: "Apply your new mindset and habits into everyday life to create sustainable success, meaningful relationships, and long-term fulfillment.",
      color: "#A29BFE",
      details: {
        overview: "Integration is about bringing everything together. You align all areas of your life and create sustainable growth.",
        benefits: [
          "Work-life balance and harmony",
          "Healthy relationships and connections",
          "Sustainable growth and success",
          "Living with purpose and abundance"
        ]
      }
    }
  ];

  // ============================================
  // TRANSFORMATION JOURNEY (Instead of LMS)
  // ============================================
  const transformationJourney = [
    {
      id: "awakening-journey",
      icon: <FaStar />,
      title: "AWAKENING",
      description: "Discover your authentic self and awaken your inner potential.",
      color: "#FF6B6B",
      details: {
        overview: "Awaken your inner awareness and discover your true potential. This is the first step in your transformation journey.",
        benefits: ["Self-discovery", "Inner awareness", "Potential identification"]
      }
    },
    {
      id: "alignment-journey",
      icon: <FaCompass />,
      title: "ALIGNMENT",
      description: "Align your thoughts, emotions, beliefs, and actions with your life purpose.",
      color: "#4ECDC4",
      details: {
        overview: "Align your thoughts, values, and actions with your life purpose to create harmony and direction.",
        benefits: ["Value alignment", "Purpose-driven action", "Life harmony"]
      }
    },
    {
      id: "transformation-journey",
      icon: <FaRocket />,
      title: "TRANSFORMATION",
      description: "Create powerful and lasting change in your mindset, habits, and energy.",
      color: "#FFA94D",
      details: {
        overview: "Transform your mindset, habits, and energy to create lasting positive change in your life.",
        benefits: ["Mindset transformation", "Habit change", "Energy management"]
      }
    },
    {
      id: "mastery-journey",
      icon: <FaBrain />,
      title: "MASTERY",
      description: "Master your mindset, emotions, and decisions with confidence and clarity.",
      color: "#A29BFE",
      details: {
        overview: "Master your emotions, decisions, and destiny. Develop confidence and take control of your life.",
        benefits: ["Emotional mastery", "Decision-making", "Destiny control"]
      }
    },
    {
      id: "conscious-journey",
      icon: <FaSun />,
      title: "CONSCIOUS LIVING",
      description: "Live intentionally with purpose, impact, and fulfillment.",
      color: "#7C4DFF",
      details: {
        overview: "Experience a higher state of consciousness and live with purpose and impact.",
        benefits: ["Higher consciousness", "Purposeful living", "Global impact"]
      }
    }
  ];

  // ============================================
  // SIGNATURE COACHING PROGRAMS
  // ============================================
  const signaturePrograms = [
    {
      id: "sleep-energy",
      icon: <FaMoon />,
      title: "Sleep & Energy Optimization",
      description: "Improve sleep habits, restore energy, and enhance daily performance through healthy lifestyle practices and coaching.",
      color: "#74B9FF",
      details: {
        overview: "This program helps you optimize your sleep habits and energy levels for peak daily performance.",
        benefits: ["Better sleep quality", "Increased daily energy", "Improved focus and productivity"]
      }
    },
    {
      id: "relationship-communication",
      icon: <FaUserFriends />,
      title: "Relationship & Communication Coaching",
      description: "Strengthen personal and professional relationships through emotional intelligence, communication, and self-awareness.",
      color: "#FD79A8",
      details: {
        overview: "This program helps you build healthier, more meaningful relationships through improved communication.",
        benefits: ["Better communication skills", "Emotional intelligence", "Stronger connections"]
      }
    },
    {
      id: "worklife-balance",
      icon: <FaBalanceScale />,
      title: "Work-Life Balance Coaching",
      description: "Create harmony between your career, family, health, and personal growth.",
      color: "#FFA94D",
      details: {
        overview: "This program helps you achieve harmony between your professional ambitions and personal well-being.",
        benefits: ["Reduced burnout", "Better time management", "Work-life harmony"]
      }
    },
    {
      id: "career-purpose",
      icon: <FaChartLine />,
      title: "Career & Purpose Coaching",
      description: "Gain clarity about your strengths, career direction, and meaningful goals.",
      color: "#4ECDC4",
      details: {
        overview: "This program helps you discover your strengths and achieve professional success with clarity.",
        benefits: ["Career clarity", "Strength discovery", "Professional success"]
      }
    },
    {
      id: "stress-resilience",
      icon: <FaFire />,
      title: "Stress & Resilience Coaching",
      description: "Build resilience, manage stress effectively, and develop healthy coping strategies for everyday challenges.",
      color: "#FF6B6B",
      details: {
        overview: "This program helps you build resilience and manage stress effectively.",
        benefits: ["Stress management", "Resilience building", "Healthy coping strategies"]
      }
    },
    {
      id: "emotional-intelligence",
      icon: <FaHandHoldingHeart />,
      title: "Emotional Intelligence Coaching",
      description: "Understand and manage emotions, improve relationships, and respond to life with confidence and awareness.",
      color: "#A29BFE",
      details: {
        overview: "This program develops your emotional intelligence to navigate life's challenges with confidence.",
        benefits: ["Emotional intelligence", "Confidence building", "Challenge navigation"]
      }
    }
  ];

  // ============================================
  // PREMIUM SERVICES LIST
  // ============================================
  const premiumServices = [
    {
      id: "one-on-one-coaching",
      icon: <FaUsers />,
      title: "1:1 Life Coaching",
      description: "Personalized coaching designed around your goals, challenges, and transformation journey.",
      color: "#7C4DFF",
      details: {
        overview: "Personalized one-on-one coaching designed around your unique goals, challenges, and transformation journey.",
        benefits: ["Personalized approach", "Expert guidance", "Results-driven coaching"]
      }
    },
    {
      id: "executive-leadership",
      icon: <FaUserTie />,
      title: "Executive & Leadership Coaching",
      description: "Develop leadership presence, communication, decision-making, and high-performance habits.",
      color: "#4ECDC4",
      details: {
        overview: "Develop leadership presence, communication, decision-making, and high-performance habits.",
        benefits: ["Leadership presence", "Decision-making", "High-performance habits"]
      }
    },
    {
      id: "personal-transformation",
      icon: <FaCrown />,
      title: "Personal Transformation Programs",
      description: "Structured coaching journeys focused on sustainable growth and meaningful life change.",
      color: "#FFA94D",
      details: {
        overview: "Structured coaching journeys focused on sustainable growth and meaningful life change.",
        benefits: ["Sustainable growth", "Meaningful change", "Structured journey"]
      }
    },
    {
      id: "workshops-training",
      icon: <FaGraduationCap />,
      title: "Workshops & Corporate Training",
      description: "Interactive sessions on leadership, mindset, emotional intelligence, productivity, and personal excellence.",
      color: "#A29BFE",
      details: {
        overview: "Interactive sessions on leadership, mindset, emotional intelligence, productivity, and personal excellence.",
        benefits: ["Leadership development", "Mindset training", "Emotional intelligence"]
      }
    },
    {
      id: "assessments-blueprint",
      icon: <FaBookOpen />,
      title: "Assessments & Growth Blueprint",
      description: "Identify your strengths, values, personality, and growth opportunities with comprehensive assessments.",
      color: "#74B9FF",
      details: {
        overview: "Identify your strengths, values, personality, and growth opportunities with comprehensive assessments.",
        benefits: ["Strength identification", "Value discovery", "Actionable insights"]
      }
    },
    {
      id: "digital-learning",
      icon: <FaLightbulb />,
      title: "Digital Learning Academy",
      description: "Access online courses, masterclasses, guided exercises, and practical resources anytime.",
      color: "#00B894",
      details: {
        overview: "Access online courses, masterclasses, guided exercises, and practical resources anytime.",
        benefits: ["Flexible learning", "Expert content", "Self-paced growth"]
      }
    }
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section className="services" id="services">
        <div className="services-header">
          <span className="services-tag">🚀 Transform Your Life</span>
          <h2>Health. Wealth. Prosperity.</h2>
          <p>
            Transform your life through science, spirituality & coaching. 
            Discover clarity, confidence, purpose, and lasting transformation.
          </p>
        </div>

        {/* 3 Main Boxes */}
        <div className="service-grid-main">
          {mainServices.map((item) => (
            <div 
              className="service-card-main" 
              key={item.id}
              onClick={() => openModal(item)}
              style={{ background: item.gradient }}
            >
              <div className="service-icon-main">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p className="service-subtitle">{item.subtitle}</p>
              <p className="service-desc">{item.description}</p>
              <span className="service-cta">Explore All Topics →</span>
            </div>
          ))}
        </div>

        {/* Framework */}
        <div className="additional-programs">
          <h3>My Transformation Framework</h3>
          <div className="service-grid">
            {frameworkServices.map((item) => (
              <div className="service-card" key={item.id} onClick={() => openModal(item)}>
                <div className="icon-wrapper" style={{ background: `${item.color}20` }}>
                  <div className="icon" style={{ color: item.color }}>{item.icon}</div>
                </div>
                <h3>{item.title}</h3>
                <p className="framework-subtitle">{item.subtitle}</p>
                <p>{item.description}</p>
                <span className="service-link">Learn More <span className="arrow">→</span></span>
              </div>
            ))}
          </div>
        </div>

        {/* Transformation Journey */}
        <div className="additional-programs">
          <h3>Your Transformation Journey</h3>
          <div className="service-grid">
            {transformationJourney.map((item) => (
              <div className="service-card" key={item.id} onClick={() => openModal(item)}>
                <div className="icon-wrapper" style={{ background: `${item.color}20` }}>
                  <div className="icon" style={{ color: item.color }}>{item.icon}</div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="service-link">Learn More <span className="arrow">→</span></span>
              </div>
            ))}
          </div>
        </div>

        {/* Signature Programs */}
        <div className="additional-programs">
          <h3>Signature Coaching Programs</h3>
          <div className="service-grid">
            {signaturePrograms.map((item) => (
              <div className="service-card" key={item.id} onClick={() => openModal(item)}>
                <div className="icon-wrapper" style={{ background: `${item.color}20` }}>
                  <div className="icon" style={{ color: item.color }}>{item.icon}</div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="service-link">Learn More <span className="arrow">→</span></span>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Services */}
        <div className="additional-programs">
          <h3>My Premium Services</h3>
          <div className="service-grid">
            {premiumServices.map((item) => {
              const serviceWithDetails = {
                ...item,
                details: {
                  overview: item.description,
                  benefits: item.details?.benefits || ['Personalized approach', 'Expert guidance', 'Results-driven']
                }
              };
              return (
                <div className="service-card" key={item.id} onClick={() => openModal(serviceWithDetails)}>
                  <div className="icon-wrapper" style={{ background: `${item.color}20` }}>
                    <div className="icon" style={{ color: item.color }}>{item.icon}</div>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="service-link">Learn More <span className="arrow">→</span></span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && selectedService && (
        <div className="service-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>✕</button>
            
            <div className="modal-header">
              <div className="modal-icon" style={{ 
                background: selectedService.gradient || `${selectedService.color}20`,
                color: selectedService.color || '#7C4DFF'
              }}>
                {selectedService.icon}
              </div>
              <div>
                <h2>{selectedService.title}</h2>
                {selectedService.subtitle && <p className="modal-subtitle">{selectedService.subtitle}</p>}
              </div>
            </div>

            <div className="modal-body">
              <p className="modal-overview">{selectedService.details?.overview}</p>

              {/* Topics Grid */}
              {selectedService.details?.topics && (
                <>
                  <h4 className="topics-title">📌 All Topics</h4>
                  <div className="topics-grid">
                    {selectedService.details.topics.map((topic, idx) => (
                      <div className="topic-card" key={idx}>
                        <div className="topic-icon" style={{ color: selectedService.color || '#7C4DFF' }}>
                          {topic.icon}
                        </div>
                        <div>
                          <h5>{topic.title}</h5>
                          <p>{topic.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Benefits */}
              {selectedService.details?.benefits && (
                <>
                  <h4>✨ Key Benefits</h4>
                  <ul className="modal-benefits">
                    {selectedService.details.benefits.map((benefit, idx) => (
                      <li key={idx}>✅ {benefit}</li>
                    ))}
                  </ul>
                </>
              )}

              <a href="#appointment" className="modal-book-btn" onClick={closeModal}>
                Book a Discovery Call
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Services;