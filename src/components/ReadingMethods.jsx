import React, { useState } from 'react';
import { Hand, Calendar, UserCheck, Image as ImageIcon, MessageSquare, Sparkles, ArrowRight, Star, Lock, Eye, Shield, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './Animated/ScrollReveal';
import SplitTextReveal from './Animated/SplitTextReveal';
import './ReadingMethods.css';

const iconMap = {
  Hand: Hand,
  Calendar: Calendar,
  UserCheck: UserCheck,
  Image: ImageIcon,
  Shield: Shield,
  Flame: Flame,
  clearing: Shield
};

const METHOD_DETAILS = {
  palm: {
    color: '#D4AF37',
    emoji: '🖐️',
    benefits: ['Life path clarity', 'Health cycle insights', 'Relationship timing'],
    duration: '45-60 min',
    remote: true
  },
  dob: {
    color: '#B8860B',
    emoji: '📅',
    benefits: ['Vedic birth chart', 'Planetary period analysis', 'Lucky cycles'],
    duration: '30-45 min',
    remote: true
  },
  face: {
    color: '#996515',
    emoji: '👁️',
    benefits: ['Character analysis', 'Energy reading', 'Karmic patterns'],
    duration: '20-30 min',
    remote: false
  },
  photo: {
    color: '#C8960C',
    emoji: '🖼️',
    benefits: ['Remote consultation', 'Aura assessment', 'Global availability'],
    duration: '30-45 min',
    remote: true
  },
  clearing: {
    color: '#D4AF37',
    emoji: '🛡️',
    benefits: ['Clears Bad & Black Energy', 'Removes Any kind of Witchcraft', 'Powerful Protective Prayers'],
    duration: '45-60 min',
    remote: true
  }
};

function FlipCard({ method, onOpenBooking }) {
  const [flipped, setFlipped] = useState(false);
  const IconComponent = iconMap[method.icon] || iconMap[method.id] || Shield;
  const details = METHOD_DETAILS[method.id] || METHOD_DETAILS.clearing || METHOD_DETAILS.palm;

  return (
    <div
      className="flip-card-container"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      style={{ perspective: '1000px', height: '440px', cursor: 'pointer' }}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* FRONT FACE */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          borderRadius: '16px',
          overflow: 'hidden',
          background: '#FFFFFF',
          border: '1.5px solid rgba(184, 134, 11, 0.3)',
          boxShadow: '0 8px 30px rgba(184, 134, 11, 0.12)',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* Image Area */}
          {method.imageUrl && (
            <div style={{ position: 'relative', height: '175px', overflow: 'hidden', flexShrink: 0 }}>
              <img
                src={method.imageUrl}
                alt={method.imageAlt || method.title}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/dob_guidance.png';
                }}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)`
              }} />
              {/* Remote badge */}
              {details.remote && (
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '12px',
                  background: 'rgba(5, 150, 105, 0.95)',
                  color: '#fff',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '0.25rem 0.65rem',
                  borderRadius: '999px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#6EE7B7', animation: 'pulse 1.5s infinite' }} />
                  Remote Available
                </div>
              )}
            </div>
          )}

          {/* Body */}
          <div style={{ padding: '1.15rem 1.15rem 1rem 1.15rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.65rem' }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '8px',
                background: 'rgba(184, 134, 11, 0.12)', border: '1px solid rgba(184,134,11,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B8860B', flexShrink: 0
              }}>
                <IconComponent size={16} />
              </div>
              <h3 className="font-serif" style={{ fontSize: '1.05rem', color: '#111827', margin: 0, fontWeight: 700, lineHeight: 1.3 }}>
                {method.title}
              </h3>
            </div>
            
            <p style={{ 
              color: '#1F2937', 
              fontSize: '0.92rem', 
              lineHeight: 1.55, 
              margin: '0', 
              fontWeight: 500,
              flex: 1
            }}>
              {method.description}
            </p>

            <div style={{ marginTop: '0.85rem', paddingTop: '0.65rem', borderTop: '1px solid rgba(184, 134, 11, 0.12)', display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#B8860B', fontSize: '0.82rem', fontWeight: 700 }}>
              <Sparkles size={14} />
              <span>Hover to see benefits →</span>
            </div>
          </div>
        </div>

        {/* BACK FACE */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          borderRadius: '20px',
          background: 'linear-gradient(135deg, #FFF8E7 0%, #FFFDF5 50%, #FAF4E8 100%)',
          border: '1.5px solid rgba(184, 134, 11, 0.4)',
          boxShadow: '0 12px 40px rgba(184, 134, 11, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          padding: '1.75rem'
        }}>
          {/* Back header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div style={{
              width: '50px', height: '50px', borderRadius: '14px',
              background: 'var(--gold-gradient)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontSize: '1.5rem',
              boxShadow: '0 6px 20px rgba(184,134,11,0.3)'
            }}>
              {details.emoji}
            </div>
            <div>
              <h3 className="font-serif" style={{ color: '#1F2937', fontSize: '1.05rem', margin: 0 }}>{method.title}</h3>
              <span style={{ color: '#715104', fontSize: '0.78rem', fontWeight: 600 }}>⏱ {details.duration}</span>
            </div>
          </div>

          {/* Benefits */}
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '0.78rem', color: '#715104', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '0.65rem' }}>
              What You'll Receive:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {details.benefits.map((b, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1F2937', fontSize: '0.9rem' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(184,134,11,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Star size={11} fill="#B8860B" stroke="#B8860B" />
                  </div>
                  {b}
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: '#059669', fontWeight: 600, marginBottom: '1rem' }}>
              <Lock size={12} /> 100% Private &amp; Confidential
            </div>
          </div>

          {/* CTA */}
          <button
            className="btn btn-gold btn-sm"
            style={{ width: '100%' }}
            onClick={(e) => { e.stopPropagation(); onOpenBooking && onOpenBooking(method.title); }}
          >
            <MessageSquare size={14} />
            <span>Request Private Reading</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default function ReadingMethods({ methods, readings, onOpenBooking }) {
  const list = readings || methods || [];

  return (
    <section className="readings-section" id="readings" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Live Animated Glowing Background Orbs */}
      <div className="readings-live-orb-1" />
      <div className="readings-live-orb-2" />

      {/* Live Twinkling Stars */}
      <div className="readings-live-star star-1" />
      <div className="readings-live-star star-2" />
      <div className="readings-live-star star-3" />
      <div className="readings-live-star star-4" />
      <div className="readings-live-star star-5" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Header */}
        <div className="readings-header-container">
          <ScrollReveal direction="down">
            <div className="readings-live-badge">
              <Eye size={15} style={{ color: '#FCD34D' }} />
              <span>Observation Modalities</span>
              <Sparkles size={15} style={{ color: '#FCD34D' }} />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="font-serif readings-single-line-title">
              Seek Clarity About Your <span className="readings-gold-text">Past, Present &amp; Future</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="readings-subtitle-text">
              Traditional psychic and spiritual reading methods conducted privately to evaluate your life's influences and potential choices.
              <strong className="readings-hover-highlight"> Hover each card to reveal benefits.</strong>
            </p>
          </ScrollReveal>
        </div>

        {/* Flip Cards Grid */}
        <div className="readings-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
          {list.map((method, idx) => (
            <ScrollReveal key={method.id} direction="up" delay={0.08 * idx}>
              <FlipCard method={method} onOpenBooking={onOpenBooking} />
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Trust Bar */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="readings-bottom-trust-bar">
            {['100% Confidential', '25+ Years Experience', 'Remote Sessions Available', 'No Fear-Based Advice'].map((point, i) => (
              <div key={i} className="readings-trust-pill">
                <Star size={14} fill="#FCD34D" stroke="#FCD34D" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
