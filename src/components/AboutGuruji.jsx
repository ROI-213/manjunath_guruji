import React from 'react';
import { ShieldCheck, ArrowRight, MessageCircle, Phone, Hand, Calendar, UserCheck, Image as ImageIcon, MessageSquare, Flame, Sparkles } from 'lucide-react';
import ScrollReveal from './Animated/ScrollReveal';
import SplitTextReveal from './Animated/SplitTextReveal';
import AnimatedCounter from './Animated/AnimatedCounter';
import { trackEvent } from '../utils/analytics';

const iconMap = {
  Hand: Hand,
  Calendar: Calendar,
  UserCheck: UserCheck,
  Image: ImageIcon,
  MessageSquare: MessageSquare,
  Flame: Flame
};

export default function AboutGuruji({ aboutData, contactData, onOpenBooking }) {
  return (
    <section className="about-section" style={{ position: 'relative' }}>
      <div className="container">
        <div className="about-grid">

          {/* Left Column: Guruji Image + Supporting Content Below */}
          <ScrollReveal direction="right" duration={0.8}>
            <div className="about-image-col">

              {/* Guruji Image Area */}
              <div className="about-img-box" style={{
                position: 'relative',
                minHeight: '460px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 'var(--radius-lg)',
                background: 'radial-gradient(circle at 50% 40%, rgba(184, 134, 11, 0.12) 0%, rgba(252, 251, 247, 0.8) 70%)',
                border: '1.5px solid var(--border-gold)',
                boxShadow: 'var(--shadow-gold)',
                overflow: 'hidden'
              }}>
                <div className="glow-aura-ring" />
                <div style={{ textAlign: 'center', padding: '2rem', position: 'relative', zIndex: 2 }}>
                  <div style={{
                    width: '100px',
                    height: '100px',
                    margin: '0 auto 1.25rem auto',
                    borderRadius: '50%',
                    background: 'var(--gold-gradient)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    boxShadow: '0 8px 30px rgba(184, 134, 11, 0.4)'
                  }}>
                    <Sparkles size={48} />
                  </div>
                  <h3 className="font-serif" style={{ fontSize: '1.6rem', color: '#1F2937', marginBottom: '0.35rem' }}>
                    Pandit Shekar Guruji
                  </h3>
                  <p style={{ color: '#715104', fontWeight: 600, fontSize: '0.95rem' }}>
                    Sacred Vedic Astrologer & Psychic Guidance
                  </p>
                  <span style={{ display: 'inline-block', marginTop: '0.85rem', fontSize: '0.78rem', background: 'rgba(184, 134, 11, 0.12)', color: '#8B6508', padding: '0.3rem 0.8rem', borderRadius: 'var(--radius-full)', fontWeight: 700 }}>
                    ★ Verified 25+ Years Lineage
                  </span>
                </div>
              </div>

              {/* Trust Points */}
              <div className="about-trust-row">
                {aboutData.trustPoints.map((point, idx) => (
                  <span key={idx} className="trust-pill">
                    <ShieldCheck size={13} />
                    {point}
                  </span>
                ))}
              </div>

              {/* Stats Counter Row */}
              <div className="about-stats-row">
                {aboutData.stats.map((stat, idx) => (
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
              text={aboutData.heading}
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
              {aboutData.bio.map((paragraph, idx) => (
                <p key={idx} className="about-bio">
                  {paragraph}
                </p>
              ))}
            </ScrollReveal>

            {/* 6 Modalities Grid */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="about-methods-grid">
                {aboutData.modalities.map((item, idx) => {
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
