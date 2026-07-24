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
      description: "Health. Wealth. Prosperity. True success comes when your body is healthy, your mind is calm, and your soul is aligned with purpose and abundance.",
      color: "#4ECDC4",
      gradient: "linear-gradient(135deg, #4ECDC4, #44B39D)",
      details: {
        overview: "Health is the foundation of a fulfilling life. When your body and mind are in harmony, you can achieve anything.",
        topics: [
          { icon: <FaHeartbeat />, title: "Physical Vitality", desc: "Improve your physical health and energy levels" },
          { icon: <FaLeaf />, title: "Mental Wellness", desc: "Achieve mental clarity and emotional balance" },
          { icon: <FaSun />, title: "Holistic Health", desc: "Integrate body, mind, and spirit for overall wellness" },
          { icon: <FaMoon />, title: "Sleep Optimization", desc: "Improve sleep quality for better health" }
        ]
      }
    },
    {
      id: "wealth",
      icon: <FaWallet />,
      title: "Wealth",
      subtitle: "Financial Freedom & Prosperity",
      description: "Health. Wealth. Prosperity. Financial freedom and abundance in all areas of life.",
      color: "#FFA94D",
      gradient: "linear-gradient(135deg, #FFA94D, #FF8C00)",
      details: {
        overview: "Wealth is not just about money — it's about creating a life of abundance, security, and choices.",
        topics: [
          { icon: <FaChartLine />, title: "Financial Freedom", desc: "Achieve financial independence and security" },
          { icon: <FaStar />, title: "Abundance Mindset", desc: "Develop a mindset of growth and prosperity" },
          { icon: <FaWallet />, title: "Wealth Creation", desc: "Build wealth through smart strategies" },
          { icon: <FaRocket />, title: "Passive Income", desc: "Create multiple streams of passive income" }
        ]
      }
    },
    {
      id: "prosperity",
      icon: <FaRocket />,
      title: "Prosperity",
      subtitle: "Growth, Impact & Legacy",
      description: "Health. Wealth. Prosperity. Creating a life of purpose, balance and abundance.",
      color: "#7C4DFF",
      gradient: "linear-gradient(135deg, #7C4DFF, #5E35B1)",
      details: {
        overview: "Prosperity goes beyond wealth — it's about creating meaningful impact, building a legacy, and living a life of purpose.",
        topics: [
          { icon: <FaCompass />, title: "Life Purpose", desc: "Discover your true purpose and mission" },
          { icon: <FaUsers />, title: "Leadership & Impact", desc: "Build leadership skills and create lasting impact" },
          { icon: <FaStar />, title: "Legacy Building", desc: "Create a meaningful legacy that inspires others" },
          { icon: <FaBrain />, title: "Personal Growth", desc: "Achieve personal and professional growth" }
        ]
      }
    }
  ];

  // ============================================
  // FRAMEWORK - Surveil, Healing, Awakening, Integration
  // ============================================
  const frameworkServices = [
    {
      id: "surveil",
      icon: <FaCompass />,
      title: "SURVEIL",
      subtitle: "Gain Clarity",
      description: "Observe your life with awareness. Understand your current state and what truly matters.",
      color: "#4ECDC4",
      details: {
        overview: "Surveil is about gaining clarity on your life. You observe your current situation with awareness.",
        benefits: [
          "Self-awareness and observation",
          "Understanding your current state",
          "Identifying what truly matters",
          "Clarity on life direction"
        ]
      }
    },
    {
      id: "healing",
      icon: <FaLeaf />,
      title: "HEALING",
      subtitle: "Restore & Renew",
      description: "Heal your body, mind, and emotions. Release what holds you back and restore your balance.",
      color: "#74B9FF",
      details: {
        overview: "Healing is about restoring your body, mind, and emotions. You release what holds you back.",
        benefits: [
          "Emotional healing and release",
          "Physical and mental restoration",
          "Overcoming past trauma",
          "Inner peace and balance"
        ]
      }
    },
    {
      id: "awakening",
      icon: <FaSun />,
      title: "AWAKENING",
      subtitle: "Discover Your True Self",
      description: "Awaken your inner potential. Connect with your purpose and step into a higher awareness.",
      color: "#FFA94D",
      details: {
        overview: "Awakening is about discovering your true self. You awaken your inner potential.",
        benefits: [
          "Discovering your true self",
          "Connecting with life purpose",
          "Higher awareness and consciousness",
          "Personal transformation"
        ]
      }
    },
    {
      id: "integration",
      icon: <FaBalanceScale />,
      title: "INTEGRATION",
      subtitle: "Align & Live with Purpose",
      description: "Integrate all areas of life in harmony and create sustainable growth, impact, and abundance.",
      color: "#A29BFE",
      details: {
        overview: "Integration is about bringing everything together. You align all areas of your life.",
        benefits: [
          "Life integration and harmony",
          "Sustainable growth and success",
          "Creating impact and legacy",
          "Living with purpose and abundance"
        ]
      }
    }
  ];

  // ============================================
  // LMS - Awakening, Alignment, Transformation, Mastery, Cosmic Conscious
  // ============================================
  const lmsServices = [
    {
      id: "awakening-lms",
      icon: <FaStar />,
      title: "AWAKENING",
      description: "Awaken your inner awareness and discover your true potential.",
      color: "#FF6B6B",
      details: {
        overview: "Awaken your inner awareness and discover your true potential.",
        benefits: ["Self-discovery", "Inner awareness", "Potential identification"]
      }
    },
    {
      id: "alignment-lms",
      icon: <FaCompass />,
      title: "ALIGNMENT",
      description: "Align your thoughts, values, and actions with your life purpose.",
      color: "#4ECDC4",
      details: {
        overview: "Align your thoughts, values, and actions with your life purpose.",
        benefits: ["Value alignment", "Purpose-driven action", "Life harmony"]
      }
    },
    {
      id: "transformation-lms",
      icon: <FaRocket />,
      title: "TRANSFORMATION",
      description: "Transform your mindset, habits, and energy to create a better you.",
      color: "#FFA94D",
      details: {
        overview: "Transform your mindset, habits, and energy to create lasting positive change.",
        benefits: ["Mindset transformation", "Habit change", "Energy management"]
      }
    },
    {
      id: "mastery-lms",
      icon: <FaBrain />,
      title: "MASTERY",
      description: "Master your emotions, decisions, and destiny with confidence.",
      color: "#A29BFE",
      details: {
        overview: "Master your emotions, decisions, and destiny. Develop confidence.",
        benefits: ["Emotional mastery", "Decision-making", "Destiny control"]
      }
    },
    {
      id: "cosmic-lms",
      icon: <FaSun />,
      title: "COSMIC CONSCIOUS",
      description: "Experience a higher state of consciousness and live with impact.",
      color: "#7C4DFF",
      details: {
        overview: "Experience a higher state of consciousness and live with purpose.",
        benefits: ["Higher consciousness", "Purposeful living", "Global impact"]
      }
    }
  ];

  // ============================================
  // RESULT PROGRAMS
  // ============================================
  const resultPrograms = [
    {
      id: "sleep",
      icon: <FaMoon />,
      title: "Sleep",
      description: "Overcome sleep problems and achieve restful, rejuvenating sleep.",
      color: "#74B9FF",
      details: {
        overview: "This program helps you overcome sleep problems.",
        benefits: ["Better sleep quality", "Sleep routine", "Rest and recovery"]
      }
    },
    {
      id: "relationship",
      icon: <FaUserFriends />,
      title: "Relationship Problems",
      description: "Build healthier, more meaningful relationships through improved communication.",
      color: "#FD79A8",
      details: {
        overview: "This program helps you build healthier relationships.",
        benefits: ["Better communication", "Emotional intelligence", "Stronger connections"]
      }
    },
    {
      id: "worklife",
      icon: <FaBalanceScale />,
      title: "Work-Life Balance",
      description: "Achieve harmony between your professional ambitions and personal well-being.",
      color: "#FFA94D",
      details: {
        overview: "This program helps you achieve work-life harmony.",
        benefits: ["Reduced burnout", "Better time management", "Work-life harmony"]
      }
    },
    {
      id: "career",
      icon: <FaChartLine />,
      title: "Career Misalignment",
      description: "Discover your strengths and achieve professional success with clarity.",
      color: "#4ECDC4",
      details: {
        overview: "This program helps you discover your strengths.",
        benefits: ["Career clarity", "Strength discovery", "Professional success"]
      }
    },
    {
      id: "burnout",
      icon: <FaFire />,
      title: "Burnout Recovery",
      description: "Recover from burnout and build sustainable energy and resilience.",
      color: "#FF6B6B",
      details: {
        overview: "This program helps you recover from burnout.",
        benefits: ["Burnout recovery", "Energy management", "Resilience building"]
      }
    },
    {
      id: "emotional",
      icon: <FaHandHoldingHeart />,
      title: "Emotional Turmoil",
      description: "Develop emotional intelligence to navigate life's challenges with confidence.",
      color: "#A29BFE",
      details: {
        overview: "This program develops your emotional intelligence.",
        benefits: ["Emotional intelligence", "Confidence building", "Challenge navigation"]
      }
    }
  ];

  // ============================================
  // SERVICES LIST
  // ============================================
  const servicesList = [
    {
      id: "coaching-1on1",
      icon: <FaUsers />,
      title: "1:1 Coaching",
      description: "Personalized guidance to help you achieve your goals.",
      color: "#7C4DFF"
    },
    {
      id: "workshops",
      icon: <FaUsers />,
      title: "Workshops & Seminars",
      description: "Interactive sessions that inspire, educate and empower.",
      color: "#4ECDC4"
    },
    {
      id: "assessments",
      icon: <FaChartLine />,
      title: "Assessments",
      description: "In-depth assessments to understand yourself better.",
      color: "#FFA94D"
    },
    {
      id: "online-programs",
      icon: <FaRocket />,
      title: "Online Programs",
      description: "Structured programs designed for real life transformation.",
      color: "#A29BFE"
    },
    {
      id: "resource-library",
      icon: <FaLightbulb />,
      title: "Resource Library",
      description: "Access tools, guides and resources anytime, anywhere.",
      color: "#74B9FF"
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
          <span className="services-tag">🚀 My Framework</span>
          <h2>Health. Wealth. Prosperity.</h2>
          <p>
            True success comes when your body is healthy, your mind is calm, 
            and your soul is aligned with purpose and abundance.
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
          <h3>My Framework for a Fulfilling Life</h3>
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

        {/* LMS */}
        <div className="additional-programs">
          <h3>LMS - Your Transformation Journey</h3>
          <div className="service-grid">
            {lmsServices.map((item) => (
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

        {/* Result Programs */}
        <div className="additional-programs">
          <h3>Result Programs</h3>
          <div className="service-grid">
            {resultPrograms.map((item) => (
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

        {/* Services List */}
        <div className="additional-programs">
          <h3>My Services</h3>
          <div className="service-grid">
            {servicesList.map((item) => {
              // Create service with details for modal
              const serviceWithDetails = {
                ...item,
                details: {
                  overview: item.description,
                  benefits: ['Personalized approach', 'Expert guidance', 'Results-driven']
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

      {/* ===== MODAL ===== */}
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