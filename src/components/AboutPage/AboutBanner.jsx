import React from 'react';
import { Home, Sparkles } from 'lucide-react';

export default function AboutBanner({ bannerData = {}, onNavigateHome = () => {} }) {
  const rawBreadcrumb = bannerData?.breadcrumb || "About Us";
  const breadcrumb = rawBreadcrumb.replace(/^Home\s*\/\s*/i, '');
  const heading = bannerData?.heading || "About Pandit Shekar Guruji";
  const subheading = bannerData?.subheading || "A compassionate, traditional approach to spiritual guidance and psychic observation.";

  // Pre-calculated star positions for cosmic universe
  const stars = [
    { top: '15%', left: '8%', size: 2.5, opacity: 0.8, delay: '0.2s', dur: '3s' },
    { top: '25%', left: '22%', size: 1.5, opacity: 0.6, delay: '1.2s', dur: '4s' },
    { top: '12%', left: '45%', size: 3, opacity: 0.9, delay: '0.8s', dur: '2.5s' },
    { top: '35%', left: '60%', size: 2, opacity: 0.7, delay: '1.8s', dur: '3.5s' },
    { top: '18%', left: '78%', size: 2.5, opacity: 0.85, delay: '0.5s', dur: '4.2s' },
    { top: '30%', left: '92%', size: 1.5, opacity: 0.5, delay: '2.1s', dur: '3.2s' },
    { top: '65%', left: '12%', size: 2, opacity: 0.75, delay: '1.5s', dur: '2.8s' },
    { top: '80%', left: '28%', size: 1.8, opacity: 0.6, delay: '0.4s', dur: '3.8s' },
    { top: '70%', left: '52%', size: 2.5, opacity: 0.8, delay: '2.4s', dur: '4.5s' },
    { top: '85%', left: '72%', size: 2, opacity: 0.7, delay: '1.1s', dur: '3.1s' },
    { top: '60%', left: '88%', size: 3, opacity: 0.9, delay: '0.7s', dur: '2.7s' },
    { top: '48%', left: '5%', size: 1.5, opacity: 0.5, delay: '1.9s', dur: '3.6s' },
    { top: '42%', left: '95%', size: 2, opacity: 0.65, delay: '0.3s', dur: '4s' },
  ];

  return (
    <section className="about-hero-universe-section" style={{
      position: 'relative',
      padding: '4.5rem 0 4rem 0',
      background: 'linear-gradient(135deg, #070314 0%, #110726 35%, #1A0D38 65%, #080316 100%)',
      overflow: 'hidden',
      borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)'
    }}>
      {/* 1. Deep Space Cosmic Nebula Overlays */}
      <div style={{
        position: 'absolute',
        top: '-40%',
        left: '20%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(184, 134, 11, 0.18) 0%, rgba(139, 92, 246, 0.12) 45%, transparent 70%)',
        filter: 'blur(50px)',
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '-30%',
        right: '10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.14) 0%, rgba(79, 70, 229, 0.12) 40%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      {/* 2. Celestial Orbit Rings */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '850px',
        height: '420px',
        borderRadius: '50%',
        border: '1px dashed rgba(212, 175, 55, 0.18)',
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(15deg)',
        width: '1050px',
        height: '520px',
        borderRadius: '50%',
        border: '1px solid rgba(139, 92, 246, 0.12)',
        pointerEvents: 'none'
      }} />

      {/* 3. Twinkling Universe Stars */}
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

      {/* 4. Banner Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '850px' }}>
        
        {/* Breadcrumb Navigation */}
        <div style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '0.5rem', 
          fontSize: '0.85rem', 
          color: '#E5E7EB', 
          marginBottom: '1.25rem',
          background: 'rgba(255, 255, 255, 0.08)',
          padding: '0.35rem 1rem',
          borderRadius: '9999px',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          backdropFilter: 'blur(8px)'
        }}>
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); onNavigateHome(); }}
            style={{ color: '#F3BA2F', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600 }}
          >
            <Home size={14} />
            <span>Home</span>
          </a>
          <span style={{ color: 'rgba(212, 175, 55, 0.6)' }}>/</span>
          <span style={{ color: '#FFFFFF', fontWeight: 600 }}>{breadcrumb}</span>
        </div>

        {/* Small Celestial Badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.85rem' }}>
          <div className="badge-gold" style={{ 
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
            <Sparkles size={13} style={{ color: '#FCD34D' }} />
            <span>Vedic Astrological Heritage &amp; Wisdom</span>
            <Sparkles size={13} style={{ color: '#FCD34D' }} />
          </div>
        </div>

        {/* Main Title with Glowing Gold Accent */}
        <h1 className="font-serif" style={{ 
          fontSize: '3.2rem', 
          color: '#FFFFFF', 
          marginBottom: '1rem', 
          letterSpacing: '1px',
          textShadow: '0 4px 20px rgba(0,0,0,0.6)'
        }}>
          {heading.includes("Pandit Shekar Guruji") ? (
            <>
              About <span style={{ 
                background: 'linear-gradient(135deg, #FCE7A1 0%, #D4AF37 50%, #F59E0B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 2px 8px rgba(212,175,55,0.4))'
              }}>Pandit Shekar Guruji</span>
            </>
          ) : heading}
        </h1>

        {/* Subheading */}
        <p style={{ 
          color: '#E5E7EB', 
          fontSize: '1.2rem', 
          lineHeight: '1.7', 
          maxWidth: '680px', 
          margin: '0 auto',
          textShadow: '0 2px 10px rgba(0,0,0,0.5)'
        }}>
          {subheading}
        </p>

      </div>

      {/* Embedded Twinkle Animation Style */}
      <style>{`
        @keyframes celestialTwinkle {
          0% { transform: scale(0.8); opacity: 0.3; }
          50% { transform: scale(1.3); opacity: 1; filter: drop-shadow(0 0 4px #FFD700); }
          100% { transform: scale(0.8); opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}
