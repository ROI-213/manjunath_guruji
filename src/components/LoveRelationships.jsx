import React, { useRef, useState, useEffect } from 'react';
import { 
  Heart, 
  Sparkles, 
  Calendar, 
  MessageCircle, 
  Info, 
  ShieldCheck, 
  Shield,
  Users, 
  Flower2, 
  HeartHandshake,
  Quote,
  Star,
  ArrowRight,
  Phone,
  CircleDot
} from 'lucide-react';
import { motion, useTransform, useSpring } from 'framer-motion';
import { trackEvent } from '../utils/analytics';
import './LoveRelationships.css';

export default function LoveRelationships({ data, loveData, contactData, onOpenBooking }) {
  const info = loveData || data || {};
  const contact = contactData || {};
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const cardsData = [
    {
      number: "01",
      icon: HeartHandshake,
      title: "Partner Emotions",
      desc: "Understanding deep emotional dynamics and Vedic planetary compatibility between partners.",
      detail: "DOB analysis reveals emotional alignment patterns"
    },
    {
      number: "02",
      icon: ShieldCheck,
      title: "Marriage Harmony",
      desc: "Restoring mutual trust, emotional security, and sincere communication in marriage.",
      detail: "Palm lines indicate relationship strength markers"
    },
    {
      number: "03",
      icon: Users,
      title: "Family Expectations",
      desc: "Navigating complex family expectations and life-stage relationship decisions.",
      detail: "Face reading reveals interpersonal compatibility"
    },
    {
      number: "04",
      icon: Flower2,
      title: "Peace & Respect",
      desc: "Remedies for enduring domestic peace, emotional healing, and mutual respect.",
      detail: "Spiritual prayer guidance for relationship harmony"
    }
  ];

  const processSteps = [
    { icon: Phone, label: "Connect", desc: "Reach out privately via WhatsApp" },
    { icon: Heart, label: "Share", desc: "Express your concern with full privacy" },
    { icon: Sparkles, label: "Observe", desc: "Guruji evaluates through traditional methods" },
    { icon: Star, label: "Guidance", desc: "Receive personalized remedies & clarity" }
  ];

  const testimonialQuotes = [
    {
      name: "Ananya R.",
      location: "Bengaluru",
      text: "Guruji helped me understand the deeper patterns in my relationship. The DOB compatibility reading was remarkably insightful.",
      rating: 5,
      service: "DOB Compatibility"
    },
    {
      name: "Vikram & Priya S.",
      location: "Hyderabad",
      text: "Our marriage was going through a difficult phase. Guruji's palm observation identified the root concerns and guided us toward harmony.",
      rating: 5,
      service: "Marriage Harmony"
    },
    {
      name: "Deepa M.",
      location: "Chennai",
      text: "I was confused about a family opposition to my relationship. Guruji provided clear, respectful guidance without any fear-based messaging.",
      rating: 5,
      service: "Family Guidance"
    }
  ];

  const mouseX = useSpring(0, { stiffness: 60, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 60, damping: 20 });

  const bgShiftX = useTransform(mouseX, (x) => (isMobile ? 0 : x * 0.008));
  const bgShiftY = useTransform(mouseY, (y) => (isMobile ? 0 : y * 0.008));
  const orbitShiftX = useTransform(mouseX, (x) => (isMobile ? 0 : x * 0.018));
  const orbitShiftY = useTransform(mouseY, (y) => (isMobile ? 0 : y * 0.018));
  const portalShiftX = useTransform(mouseX, (x) => (isMobile ? 0 : x * 0.026));
  const portalShiftY = useTransform(mouseY, (y) => (isMobile ? 0 : y * 0.026));

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024 || window.matchMedia('(pointer: coarse)').matches);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonialQuotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isMobile, testimonialQuotes.length]);

  const handleMouseMove = (e) => {
    if (isMobile) return;
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHoveredCardIndex(null);
  };

  const whatsappUrl = contact.whatsappUrl || "https://wa.me/919845657808?text=Hello%20Pandit%20Shekar%20Guruji,%20I%20seek%20relationship%20guidance";

  return (
    <section 
      ref={sectionRef}
      className="rel-experience-section" 
      id="love"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label="Relationship Astrological Guidance Experience"
    >
      
      {/* ATMOSPHERIC BACKDROP */}
      <motion.div 
        className="rel-ambient-backdrop" 
        style={{ x: bgShiftX, y: bgShiftY }}
      >
        <div className="rel-glow-sun-core" />
        <Sparkles size={18} className="rel-constellation-star" style={{ top: '12%', left: '15%' }} />
        <Sparkles size={14} className="rel-constellation-star" style={{ top: '25%', right: '12%' }} />
        <Sparkles size={16} className="rel-constellation-star" style={{ bottom: '20%', left: '8%' }} />
        <Sparkles size={20} className="rel-constellation-star" style={{ bottom: '15%', right: '18%' }} />
        <Sparkles size={12} className="rel-constellation-star" style={{ top: '40%', left: '5%' }} />
        <Sparkles size={15} className="rel-constellation-star" style={{ top: '60%', right: '6%' }} />
      </motion.div>

      <div className="rel-main-container">
        
        {/* HEADER */}
        <motion.div 
          className="rel-header-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="rel-editorial-badge-row">
            <span className="rel-hairline" />
            <div className="rel-badge-text">
              <Sparkles size={13} style={{ color: '#B8860B' }} />
              <span>Relationship Astrology &bull; Empathic & Private Guidance</span>
              <Sparkles size={13} style={{ color: '#B8860B' }} />
            </div>
            <span className="rel-hairline rel-hairline-right" />
          </div>

          <div className="rel-pretitle">Love &amp; Emotional Alignment</div>

          <h2 className="rel-main-title">
            Understanding the Sacred Path <span className="rel-gold-gradient-text">Between Two Hearts</span>
          </h2>

          <div className="rel-clearing-compact-badge">
            <Sparkles size={14} style={{ color: '#B8860B', flexShrink: 0 }} />
            <span>Pandit Shekar Guruji can clear Bad energy, Black energy, Any kind of Witchcraft by performing powerful prayers.</span>
          </div>

          <p className="rel-lead-description">
            Private consultations for relationship concerns, family harmony, and partner understanding.
          </p>
        </motion.div>

        {/* STATS ROW */}
        <motion.div 
          className="rel-stats-row"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {[
            { value: "25+", label: "Years Experience" },
            { value: "500+", label: "Relationship Consultations" },
            { value: "100%", label: "Confidential" },
            { value: "5", label: "Languages Supported" }
          ].map((stat, i) => (
            <div key={i} className="rel-stat-item">
              <span className="rel-stat-value">{stat.value}</span>
              <span className="rel-stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* MAIN CONTENT: IMAGE LEFT + CARDS RIGHT */}
        <motion.div 
          className="rel-content-split"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          
          {/* LEFT: PORTAL IMAGE */}
          <div className="rel-portal-side">
            <div className="rel-portal-stage">
              
              {/* Orbit rings */}
              <motion.div className="rel-orbit-outer" style={{ x: orbitShiftX, y: orbitShiftY }}>
                <div className="rel-planet-node" />
                <div className="rel-planet-node-pink" />
                <span className="rel-zodiac-symbol-tag" style={{ top: '25%', left: '-8px' }}>&#9800;</span>
                <span className="rel-zodiac-symbol-tag" style={{ bottom: '25%', right: '-8px' }}>&#9807;</span>
              </motion.div>

              <motion.div className="rel-orbit-middle" style={{ x: orbitShiftX, y: orbitShiftY }}>
                <div className="rel-planet-node" style={{ right: '-5px', top: '50%', transform: 'translateY(-50%)' }} />
                <span className="rel-zodiac-symbol-tag" style={{ top: '-10px', right: '35%' }}>&#9801;</span>
                <span className="rel-zodiac-symbol-tag" style={{ bottom: '-10px', left: '35%' }}>&#9808;</span>
              </motion.div>

              <div className="rel-orbit-inner" />

              {/* Floating Hearts */}
              <Heart size={18} className="rel-floating-heart rel-heart-1" />
              <Heart size={14} className="rel-floating-heart rel-heart-2" />
              <Heart size={12} className="rel-floating-heart rel-heart-3" />

              {/* Portal Image */}
              <motion.div className="rel-portal-frame" style={{ x: portalShiftX, y: portalShiftY }}>
                <div className="rel-portal-image-mask">
                  <img 
                    src="/vedic_relationship_portal.jpg" 
                    alt="Sacred Vedic Astrology Relationship & Marriage Guidance Portal" 
                    className="rel-portal-image"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/service_love.png';
                    }}
                  />
                </div>
                <div className="rel-portal-glow-ring" />
              </motion.div>

            </div>

            {/* Mini info under image */}
            <div className="rel-portal-caption">
              <Heart size={13} />
              <span>Guided by traditional Vedic astrology &bull; 100% Private</span>
            </div>
          </div>

          {/* RIGHT: 4 GUIDANCE CARDS */}
          <div className="rel-cards-side">
            <div className="rel-cards-side-header">
              <Sparkles size={14} style={{ color: '#B8860B' }} />
              <span>Areas of Relationship Guidance</span>
            </div>

            <div className="rel-cards-vertical">
              {cardsData.map((card, cIdx) => {
                const IconComponent = card.icon;
                const isHovered = hoveredCardIndex === cIdx;

                return (
                  <motion.div
                    key={card.number}
                    className={`rel-card ${card.number === '05' ? 'rel-card-featured' : ''} ${isHovered ? 'active-hover' : ''}`}
                    onMouseEnter={() => setHoveredCardIndex(cIdx)}
                    onMouseLeave={() => setHoveredCardIndex(null)}
                    initial={{ opacity: 0, y: 18, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.5, delay: cIdx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="rel-card-top-row">
                      <div className="rel-card-icon-box">
                        <IconComponent size={18} />
                      </div>
                      <span className="rel-card-number">{card.number}</span>
                    </div>
                    <h3 className="rel-card-title">{card.title}</h3>
                    <p className="rel-card-desc">{card.desc}</p>
                    <div className="rel-card-detail-tag">
                      <CircleDot size={10} />
                      <span>{card.detail}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </motion.div>

        {/* PROCESS + TESTIMONIALS ROW */}
        <motion.div 
          className="rel-bottom-split"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          
          {/* HOW IT WORKS */}
          <div className="rel-process-block">
            <div className="rel-process-header">
              <Sparkles size={13} style={{ color: '#B8860B' }} />
              <span>How It Works</span>
            </div>
            <div className="rel-process-steps">
              {processSteps.map((step, idx) => {
                const StepIcon = step.icon;
                return (
                  <React.Fragment key={idx}>
                    <motion.div 
                      className="rel-process-step"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="rel-process-icon">
                        <StepIcon size={18} />
                      </div>
                      <span className="rel-process-label">{step.label}</span>
                      <span className="rel-process-desc">{step.desc}</span>
                    </motion.div>
                    {idx < processSteps.length - 1 && (
                      <div className="rel-process-connector"><ArrowRight size={14} /></div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* TESTIMONIALS */}
          <div className="rel-testimonial-block">
            <div className="rel-testimonial-header">
              <Quote size={14} style={{ color: '#B8860B' }} />
              <span>What Visitors Say</span>
            </div>
            <div className="rel-testimonial-cards">
              {testimonialQuotes.map((t, idx) => (
                <motion.div 
                  key={idx}
                  className={`rel-testimonial-card ${activeTestimonial === idx ? 'active' : ''}`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setActiveTestimonial(idx)}
                >
                  <div className="rel-testimonial-stars">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={12} fill="#D4AF37" color="#D4AF37" />
                    ))}
                  </div>
                  <p className="rel-testimonial-text">"{t.text}"</p>
                  <div className="rel-testimonial-author">
                    <div className="rel-testimonial-avatar">{t.name.charAt(0)}</div>
                    <div>
                      <span className="rel-testimonial-name">{t.name}</span>
                      <span className="rel-testimonial-meta">{t.location} &bull; {t.service}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="rel-testimonial-dots">
              {testimonialQuotes.map((_, idx) => (
                <button key={idx} className={`rel-dot ${activeTestimonial === idx ? 'active' : ''}`} onClick={() => setActiveTestimonial(idx)} aria-label={`Testimonial ${idx + 1}`} />
              ))}
            </div>
          </div>

        </motion.div>

        {/* INFO PANEL + CTA */}
        <motion.div 
          className="rel-footer-row"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="rel-info-panel">
            <div className="rel-info-icon-badge"><Info size={16} /></div>
            <div>
              <div className="rel-info-heading">A Thoughtful Approach</div>
              <p className="rel-info-text">
                {info.mandatoryNotice || "Spiritual guidance for personal reflection. Mutual consent and respectful communication are essential. Results may vary."}
              </p>
            </div>
          </div>

          <div className="rel-cta-cluster">
            <button 
              type="button"
              className="rel-btn-primary-gold"
              onClick={() => {
                trackEvent('booking_request', { source: 'rel_redesigned_section' });
                if (onOpenBooking) onOpenBooking("Love & Relationship Guidance");
              }}
            >
              <Calendar size={16} />
              <span>Discuss Your Concern</span>
            </button>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="rel-btn-secondary-outline"
              onClick={() => trackEvent('whatsapp_click', { source: 'rel_redesigned_section' })}
            >
              <MessageCircle size={16} />
              <span>WhatsApp Privately</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
