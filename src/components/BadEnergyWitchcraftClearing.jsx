import React from 'react';
import { 
  Shield, 
  Sparkles, 
  Flame, 
  Eye, 
  Heart, 
  CheckCircle2, 
  MessageCircle, 
  Phone, 
  Calendar, 
  Lock, 
  Star,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './Animated/ScrollReveal';
import SplitTextReveal from './Animated/SplitTextReveal';
import { trackEvent } from '../utils/analytics';
import './BadEnergyWitchcraftClearing.css';

export default function BadEnergyWitchcraftClearing({ contactData, onOpenBooking }) {
  const contact = contactData || {};
  const whatsappUrl = contact.whatsappUrl || (contact.whatsapp ? `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Pandit%20Shekar%20Guruji%2C%20I%20would%20like%20to%20consult%20for%20Bad%20energy%2C%20Black%20energy%20and%20Witchcraft%20clearing.` : "https://wa.me/919845657808?text=Hello%20Pandit%20Shekar%20Guruji%2C%20I%20would%20like%20to%20consult%20for%20Bad%20energy%2C%20Black%20energy%20and%20Witchcraft%20clearing.");
  const callUrl = contact.callUrl || "tel:+919845657808";
  const phoneDisplay = contact.phoneDisplay || "+91 98456 57808";

  const clearingServices = [
    {
      id: "01",
      icon: Shield,
      title: "Bad Energy & Negative Vibe Cleansing",
      description: "Purifying heavy atmospheric energy, chronic exhaustion, unexplained domestic friction, and persistent bad luck through authentic Vedic morning prayers and sacred diya rituals.",
      points: ["Removes persistent household negativity", "Brings peaceful vibration to living spaces", "Relieves unexplained fatigue & stress"]
    },
    {
      id: "02",
      icon: Eye,
      title: "Black Energy & Evil-Eye (Drishti) Removal",
      description: "Powerful spiritual remedies to neutralize evil eye (Buri Nazar), envy, jealousy, and dark energetic blocks affecting your family, career, or business progress.",
      points: ["Neutralizes Buri Nazar / Evil Eye effects", "Protects business & personal earnings", "Restores positivity & good fortune"]
    },
    {
      id: "03",
      icon: Flame,
      title: "Any Kind of Witchcraft & Dark Force Clearing",
      description: "Performing sacred Vedic Havans, specialized protective prayers, and traditional mantra sadhana to completely eliminate malicious occult forces, black magic, or spiritual distress.",
      points: ["Clears any kind of dark spiritual obstacles", "Performs authentic Vedic protective havans", "Releases deep spiritual bondage"]
    },
    {
      id: "04",
      icon: Heart,
      title: "Relationship & Family Harmony Restoration",
      description: "Clearing third-party negative energy, sudden unexplained disputes between couples, and external bad energy disrupting marital and family peace.",
      points: ["Clears negative interference between couples", "Restores mutual warmth & understanding", "Protects marriage from external evil eye"]
    }
  ];

  return (
    <section className="energy-clearing-section" id="energy-clearing">
      {/* Ambient background glow orbs */}
      <div className="energy-clearing-orb-1" />
      <div className="energy-clearing-orb-2" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div className="energy-clearing-header-box" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <ScrollReveal direction="down">
            <div className="badge-gold" style={{ 
              marginBottom: '1rem', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.45rem',
              background: 'rgba(212, 175, 55, 0.2)',
              border: '1.5px solid rgba(252, 211, 77, 0.6)',
              color: '#FCD34D'
            }}>
              <Shield size={16} style={{ color: '#FCD34D' }} />
              <span>Sacred Vedic Protection &amp; Spiritual Cleansing</span>
              <Sparkles size={16} style={{ color: '#FCD34D' }} />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="font-serif energy-clearing-main-title" style={{
              fontSize: '2.85rem',
              color: '#FFFFFF',
              marginBottom: '1.25rem',
              lineHeight: '1.2',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.9), 0 0 25px rgba(252, 211, 77, 0.4)'
            }}>
              Bad Energy, Black Energy &amp; <span style={{
                background: 'linear-gradient(135deg, #FFF0BD 0%, #FCD34D 50%, #F59E0B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 2px 8px rgba(212, 175, 55, 0.6))'
              }}>Witchcraft Clearing</span>
            </h2>
          </ScrollReveal>

          {/* Core User Statement Banner */}
          <ScrollReveal direction="up" delay={0.15}>
            <div className="energy-clearing-spotlight-box">
              <Sparkles size={22} className="spotlight-sparkle" />
              <p className="energy-clearing-spotlight-text" style={{
                color: '#FFFFFF',
                fontWeight: '800',
                fontSize: '1.22rem',
                lineHeight: '1.4',
                margin: 0,
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.95)'
              }}>
                Pandit shekar guruji can clear Bad energy, Black energy Any kind of Witchcraft by performing powerful prayers
              </p>
              <Sparkles size={22} className="spotlight-sparkle" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="energy-clearing-subtitle" style={{
              color: '#F3F4F6',
              fontSize: '1.12rem',
              lineHeight: '1.7',
              maxWidth: '720px',
              margin: '0 auto',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.9)'
            }}>
              Authentic, ethical Vedic prayer guidance and traditional protective rituals performed with 100% confidentiality, deep spiritual empathy, and zero fear tactics.
            </p>
          </ScrollReveal>
        </div>

        {/* Main Grid: Left Feature Stage + Right Cards Displayed One After Another */}
        <div className="energy-clearing-grid">
          
          {/* Left Column: Visual Aura Stage & Direct Action */}
          <ScrollReveal direction="right" duration={0.8}>
            <div className="energy-clearing-stage-card">
              <div className="energy-clearing-image-wrapper">
                <img 
                  src="/service_protection.jpg" 
                  alt="Pandit Shekar Guruji Vedic Protective Prayer Ritual"
                  className="energy-clearing-img"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/hero_vedic_banner.jpg';
                  }}
                />
                <div className="energy-clearing-img-overlay" />
                <div className="energy-clearing-img-badge">
                  <Flame size={15} />
                  <span>Sacred Prayer Rituals</span>
                </div>
              </div>

              <div className="energy-clearing-stage-body">
                <h3 className="font-serif" style={{ color: '#FFFFFF', fontSize: '1.45rem', marginBottom: '0.65rem' }}>
                  Complete Spiritual Shielding (Kavach)
                </h3>
                <p style={{ color: '#F3E5AB', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                  Guruji invokes powerful Vedic mantras and sacred diya rituals to shield your mind, home, and family from harmful energies, evil eye, and dark influences.
                </p>

                {/* Trust Badges */}
                <div className="energy-clearing-trust-list">
                  <div className="energy-clearing-trust-item">
                    <CheckCircle2 size={16} style={{ color: '#10B981' }} />
                    <span>100% Confidential &amp; Safe</span>
                  </div>
                  <div className="energy-clearing-trust-item">
                    <CheckCircle2 size={16} style={{ color: '#10B981' }} />
                    <span>25+ Years Lineage Wisdom</span>
                  </div>
                  <div className="energy-clearing-trust-item">
                    <CheckCircle2 size={16} style={{ color: '#10B981' }} />
                    <span>Pure Vedic Mantras &amp; Diyas</span>
                  </div>
                  <div className="energy-clearing-trust-item">
                    <CheckCircle2 size={16} style={{ color: '#10B981' }} />
                    <span>Zero Fear-Based Pressure</span>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="energy-clearing-stage-actions">
                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn btn-whatsapp btn-sm animated-glow-btn"
                    onClick={() => trackEvent('whatsapp_click', { source: 'energy_clearing_section' })}
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp Guruji Privately</span>
                  </a>

                  <button 
                    type="button"
                    className="btn btn-gold btn-sm"
                    onClick={() => {
                      trackEvent('booking_request', { source: 'energy_clearing_section' });
                      if (onOpenBooking) onOpenBooking("Bad & Black Energy / Witchcraft Clearing");
                    }}
                  >
                    <Calendar size={16} />
                    <span>Book Private Prayer</span>
                  </button>
                </div>

              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Displayed One After Another */}
          <div className="energy-clearing-cards-list">
            {clearingServices.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <motion.div
                  key={service.id}
                  className="energy-clearing-item-card"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: idx * 0.14, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="clearing-card-header">
                    <div className="clearing-card-icon-box">
                      <IconComp size={20} />
                    </div>
                    <div>
                      <span className="clearing-card-number">STEP {service.id}</span>
                      <h4 className="clearing-card-title">{service.title}</h4>
                    </div>
                  </div>

                  <p className="clearing-card-description">
                    {service.description}
                  </p>

                  <div className="clearing-card-points">
                    {service.points.map((pt, pIdx) => (
                      <div key={pIdx} className="clearing-point-tag">
                        <CheckCircle2 size={13} style={{ color: '#D4AF37', flexShrink: 0 }} />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Bottom Notice Banner */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="energy-clearing-bottom-strip">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Lock size={18} style={{ color: '#FCD34D' }} />
              <span style={{ color: '#FEF3C7', fontSize: '0.95rem', fontWeight: 600 }}>
                Facing heavy obstacles or sudden negative influences? Speak directly with Pandit Shekar Guruji.
              </span>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a href={callUrl} className="btn btn-call btn-sm" onClick={() => trackEvent('call_click', { source: 'energy_clearing_strip' })}>
                <Phone size={15} />
                <span>Call {phoneDisplay}</span>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-whatsapp btn-sm" onClick={() => trackEvent('whatsapp_click', { source: 'energy_clearing_strip' })}>
                <MessageCircle size={15} />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
