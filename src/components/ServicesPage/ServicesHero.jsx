import React from 'react';
import { Search, Sparkles } from 'lucide-react';

export default function ServicesHero({ searchKeyword, setSearchKeyword }) {
  const stars = [
    { top: '18%', left: '10%', size: 2.5, opacity: 0.8, delay: '0.2s', dur: '3s' },
    { top: '28%', left: '25%', size: 1.5, opacity: 0.6, delay: '1.2s', dur: '4s' },
    { top: '15%', left: '75%', size: 3, opacity: 0.9, delay: '0.8s', dur: '2.5s' },
    { top: '35%', left: '88%', size: 2, opacity: 0.7, delay: '1.8s', dur: '3.5s' },
    { top: '75%', left: '15%', size: 2, opacity: 0.75, delay: '1.5s', dur: '2.8s' },
    { top: '80%', left: '82%', size: 2.5, opacity: 0.8, delay: '0.5s', dur: '4.2s' },
  ];

  return (
    <section className="services-hero-universe-section" style={{
      position: 'relative',
      padding: '4.5rem 0 3.5rem 0',
      background: 'linear-gradient(135deg, #070314 0%, #110726 35%, #1A0D38 65%, #080316 100%)',
      overflow: 'hidden',
      borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)'
    }}>
      {/* Cosmic Nebula Glow */}
      <div style={{
        position: 'absolute',
        top: '-40%',
        left: '25%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(184, 134, 11, 0.18) 0%, rgba(139, 92, 246, 0.12) 45%, transparent 70%)',
        filter: 'blur(50px)',
        pointerEvents: 'none'
      }} />

      {/* Stars */}
      {stars.map((s, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: s.top,
            left: s.left,
            width: `${s.size}px`,
            height: `${s.size}px`,
            borderRadius: '50%',
            backgroundColor: '#FFF8E7',
            boxShadow: `0 0 ${s.size * 3}px rgba(255, 235, 160, 0.9)`,
            animation: `celestialTwinkle ${s.dur} infinite ease-in-out alternate`,
            animationDelay: s.delay,
            opacity: s.opacity,
            pointerEvents: 'none'
          }}
        />
      ))}

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '850px' }}>
        <div className="badge-gold" style={{ 
          marginBottom: '1rem',
          background: 'rgba(212, 175, 55, 0.15)', 
          border: '1px solid rgba(212, 175, 55, 0.4)', 
          color: '#FCD34D',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          padding: '0.3rem 0.85rem',
          borderRadius: '9999px',
          fontSize: '0.8rem',
          fontWeight: 600
        }}>
          <Sparkles size={14} style={{ color: '#FCD34D' }} />
          <span>Consultation Categories &amp; Guidance</span>
          <Sparkles size={14} style={{ color: '#FCD34D' }} />
        </div>

        <h1 className="font-serif" style={{ 
          fontSize: '3.2rem', 
          color: '#FFFFFF', 
          marginBottom: '1rem',
          letterSpacing: '1px',
          textShadow: '0 4px 20px rgba(0,0,0,0.6)'
        }}>
          Spiritual &amp; <span style={{
            background: 'linear-gradient(135deg, #FCE7A1 0%, #D4AF37 50%, #F59E0B 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 2px 8px rgba(212,175,55,0.4))'
          }}>Psychic Services</span>
        </h1>

        {/* Prominent Bad/Black Energy & Witchcraft Clearing Highlight */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'linear-gradient(90deg, rgba(212, 175, 55, 0.25) 0%, rgba(245, 158, 11, 0.25) 100%)',
          border: '1.5px solid rgba(252, 211, 77, 0.6)',
          borderRadius: '9999px',
          padding: '0.45rem 1.15rem',
          marginBottom: '1.25rem',
          color: '#FEF3C7',
          fontSize: '0.92rem',
          fontWeight: 600,
          boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
          backdropFilter: 'blur(8px)'
        }}>
          <Sparkles size={15} style={{ color: '#FCD34D', flexShrink: 0 }} />
          <span>Pandit Shekar Guruji can clear Bad energy, Black energy, Any kind of Witchcraft by performing powerful prayers.</span>
        </div>

        <p style={{ 
          color: '#E5E7EB', 
          fontSize: '1.15rem', 
          marginBottom: '2rem',
          maxWidth: '680px',
          margin: '0 auto 2rem auto',
          textShadow: '0 2px 10px rgba(0,0,0,0.5)'
        }}>
          Explore all consultation categories. Pandit Shekar Guruji provides personalized psychic readings, spiritual remedies, and protective prayers.
        </p>

        {/* Real-time Search Input Bar */}
        <div style={{ position: 'relative', maxWidth: '580px', margin: '0 auto' }}>
          <Search size={20} style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: '#D4AF37' }} />
          <input 
            type="text"
            placeholder="Search services by title or concern keyword (e.g., love, marriage, job)..."
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            style={{
              width: '100%',
              padding: '0.95rem 1.25rem 0.95rem 3.2rem',
              background: 'rgba(255, 255, 255, 0.96)',
              border: '2px solid rgba(212, 175, 55, 0.6)',
              borderRadius: '9999px',
              color: '#1F2937',
              fontSize: '0.95rem',
              outline: 'none',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)'
            }}
          />
        </div>
      </div>
    </section>
  );
}
