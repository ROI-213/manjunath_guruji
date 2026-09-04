import React, { useState, useEffect } from 'react';
import { ShieldCheck, ArrowRight, MessageCircle, Phone, Hand, Calendar, UserCheck, Image as ImageIcon, MessageSquare, Flame, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from './Animated/ScrollReveal';
import SplitTextReveal from './Animated/SplitTextReveal';
import AnimatedCounter from './Animated/AnimatedCounter';
import { trackEvent } from '../utils/analytics';

const defaultSlides = [
  {
    url: '/about_guruji_hd_1.jpg',
    alt: 'ಶ್ರೀ ಶ್ರೀ ಶ್ರೀ ಹಠಯೋಗಿ ವೀರಾನಂದ ಸ್ವಾಮೀಜಿ',
    objectPosition: 'center 75%'
  },
  {
    url: '/about_guruji_hd_2.jpg',
    alt: 'Pandit Shekar Guruji with Devotee',
    objectPosition: 'center center'
  }
];

const iconMap = {
  Hand: Hand,
  Calendar: Calendar,
  UserCheck: UserCheck,
  Image: ImageIcon,
  MessageSquare: MessageSquare,
  Flame: Flame
};

export default function AboutGuruji({ aboutData = {}, contactData = {}, onOpenBooking }) {
  const slides = (aboutData.images && aboutData.images.length > 0) ? aboutData.images : defaultSlides;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const trustPoints = aboutData.trustPoints || [
    "100% Private & Confidential",
    "No Fear-Based Claims",
    "Direct WhatsApp & Phone Access",
    "Global Remote Consultations"
  ];

  const stats = aboutData.stats || [
    { value: "25", suffix: "+", label: "Years of Practice" },
    { value: "1000", suffix: "+", label: "Consultations" },
    { value: "5", suffix: "", label: "Languages" },
    { value: "100", suffix: "%", label: "Confidentiality" }
  ];

  const bio = aboutData.bio || [
    "A trusted spiritual consultant and psychic reader dedicated to helping individuals find clarity amidst uncertainty.",
    "Every session combines traditional observation methods with strict confidentiality, deep respect for personal values, and sincere prayer-based spiritual support."
  ];

  const modalities = aboutData.modalities || [
    { title: "Palm Observation", desc: "Hand line & mount analysis for life trajectory insights", icon: "Hand" },
    { title: "Date of Birth Analysis", desc: "Birth timing evaluation for strengths and personal cycles", icon: "Calendar" },
    { title: "Face Reading", desc: "Intuitive facial observation for personal disposition", icon: "UserCheck" },
    { title: "Photograph Reading", desc: "Remote image-based consultation from anywhere", icon: "Image" },
    { title: "Personal Discussion", desc: "Empathetic one-on-one dialogue in a safe space", icon: "MessageSquare" },
    { title: "Spiritual Prayer Guidance", desc: "Tailored prayer practices for personal well-being", icon: "Flame" }
  ];

  return (
    <section className="about-section" style={{ position: 'relative' }}>
      <div className="container">
        <div className="about-grid">

          {/* Left Column: Guruji Image Slideshow + Supporting Content Below */}
          <ScrollReveal direction="right" duration={0.8}>
            <div className="about-image-col">

              {/* Guruji Image Carousel Area */}
              <div
                className="about-img-box"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
                style={{
                  position: 'relative',
                  height: '475px',
                  borderRadius: 'var(--radius-lg)',
                  background: '#0c0717',
                  border: '1.5px solid var(--border-gold)',
                  boxShadow: 'var(--shadow-gold)',
                  overflow: 'hidden',
                  userSelect: 'none'
                }}
              >
                {/* Rotating subtle zodiac / aura border */}
                <div className="glow-aura-ring" style={{ pointerEvents: 'none' }} />

                {/* Image Slides */}
                {slides.map((slide, idx) => {
                  const isActive = idx === currentSlide;
                  return (
                    <div
                      key={idx}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? 'scale(1)' : 'scale(1.03)',
                        transition: 'opacity 0.7s ease-in-out, transform 0.8s ease-in-out',
                        zIndex: isActive ? 2 : 1,
                        pointerEvents: isActive ? 'auto' : 'none',
                        overflow: 'hidden'
                      }}
                    >
                      <img
                        src={slide.url}
                        alt={slide.alt || "Spiritual Consultation"}
                        loading="eager"
                        decoding="async"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: slide.objectPosition || 'center center',
                          imageRendering: '-webkit-optimize-contrast',
                          cursor: 'pointer',
                          display: 'block'
                        }}
                        onClick={handleNext}
                        title="Click to view next image"
                      />
                    </div>
                  );
                })}

                {/* Left Arrow Button */}
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous image"
                  style={{
                    position: 'absolute',
                    top: '46%',
                    left: '10px',
                    transform: 'translateY(-50%)',
                    zIndex: 6,
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'rgba(15, 8, 28, 0.8)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    border: '1px solid rgba(212, 175, 55, 0.5)',
                    color: '#FDE68A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.45)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(212, 175, 55, 0.35)';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(15, 8, 28, 0.8)';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                  }}
                >
                  <ChevronLeft size={22} />
                </button>

                {/* Right Arrow Button */}
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next image"
                  style={{
                    position: 'absolute',
                    top: '46%',
                    right: '10px',
                    transform: 'translateY(-50%)',
                    zIndex: 6,
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'rgba(15, 8, 28, 0.8)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    border: '1px solid rgba(212, 175, 55, 0.5)',
                    color: '#FDE68A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.45)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(212, 175, 55, 0.35)';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(15, 8, 28, 0.8)';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                  }}
                >
                  <ChevronRight size={22} />
                </button>

                {/* Dot Pagination Indicators */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 6,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'rgba(15, 8, 28, 0.75)',
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    backdropFilter: 'blur(6px)',
                    WebkitBackdropFilter: 'blur(6px)',
                    border: '1px solid rgba(212, 175, 55, 0.25)'
                  }}
                >
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentSlide(idx);
                      }}
                      aria-label={`Slide ${idx + 1}`}
                      style={{
                        border: 'none',
                        outline: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        height: '7px',
                        width: idx === currentSlide ? '22px' : '7px',
                        borderRadius: '9999px',
                        background: idx === currentSlide ? 'linear-gradient(90deg, #FDE68A 0%, #D4AF37 100%)' : 'rgba(255, 255, 255, 0.4)',
                        boxShadow: idx === currentSlide ? '0 0 8px rgba(212, 175, 55, 0.8)' : 'none',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Trust Points */}
              <div className="about-trust-row">
                {trustPoints.map((point, idx) => (
                  <span key={idx} className="trust-pill">
                    <ShieldCheck size={13} />
                    {point}
                  </span>
                ))}
              </div>

              {/* Stats Counter Row */}
              <div className="about-stats-row">
                {stats.map((stat, idx) => (
                  <div key={idx} className="about-stat">
                    <h3 className="font-serif">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </h3>
                    <p>{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="about-cta-row">
                <button
                  className="btn btn-gold"
                  onClick={() => {
                    trackEvent('booking_request', { source: 'about_section' });
                    onOpenBooking("About Section");
                  }}
                >
                  <span>Book Private Consultation</span>
                  <ArrowRight size={16} />
                </button>

                <a className="btn btn-whatsapp" href={contactData.whatsappUrl} target="_blank" rel="noreferrer">
                  <MessageCircle size={16} />
                  <span>WhatsApp Guruji</span>
                </a>

                <a className="btn btn-call" href={contactData.callUrl}>
                  <Phone size={16} />
                  <span>Call {contactData.phoneDisplay}</span>
                </a>
              </div>

            </div>
          </ScrollReveal>

          {/* Right Column: Text Content */}
          <div>
            <ScrollReveal direction="down">
              <div className="badge-gold" style={{ marginBottom: '1rem' }}>
                <ShieldCheck size={14} />
                <span>Private & Trustworthy Guidance</span>
              </div>
            </ScrollReveal>

            <SplitTextReveal
              text={aboutData.heading || "About Pandit Shekar Guruji"}
              className="font-serif"
              style={{ fontSize: '2.5rem', color: '#1F2937', marginBottom: '1rem', lineHeight: '1.2' }}
            />

            {/* Special Bad/Black Energy & Witchcraft Clearing Highlight Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              background: 'linear-gradient(90deg, rgba(212, 175, 55, 0.14) 0%, rgba(245, 158, 11, 0.14) 100%)',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              borderRadius: '8px',
              padding: '0.5rem 0.95rem',
              marginBottom: '1rem',
              color: '#715104',
              fontSize: '0.92rem',
              fontWeight: 700
            }}>
              <Sparkles size={15} style={{ color: '#B8860B', flexShrink: 0 }} />
              <span>Pandit Shekar Guruji can clear Bad energy, Black energy, Any kind of Witchcraft by performing powerful prayers.</span>
            </div>

            <ScrollReveal direction="up" delay={0.15}>
              <p style={{ color: '#4B5563', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '0.9rem' }}>
                {aboutData.subheading}
              </p>
            </ScrollReveal>

            {/* Bio Paragraphs */}
            <ScrollReveal direction="up" delay={0.2}>
              {bio.map((paragraph, idx) => (
                <p key={idx} className="about-bio">
                  {paragraph}
                </p>
              ))}
            </ScrollReveal>

            {/* 6 Modalities Grid */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="about-methods-grid">
                {modalities.map((item, idx) => {
                  const Icon = iconMap[item.icon] || Sparkles;
                  return (
                    <div key={idx} className="method-item">
                      <div className="method-icon">
                        <Icon size={18} />
                      </div>
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>

          </div>

        </div>
      </div>
    </section>
  );
}
