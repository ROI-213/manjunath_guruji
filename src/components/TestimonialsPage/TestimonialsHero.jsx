import React from 'react';
import { Star, ShieldCheck, PlusCircle, Sparkles, Home } from 'lucide-react';

export default function TestimonialsHero({ onOpenSubmission }) {
  const stars = [
    { top: '16%', left: '8%', size: 2.5, opacity: 0.8, delay: '0.2s', dur: '3s' },
    { top: '24%', left: '26%', size: 1.5, opacity: 0.6, delay: '1.2s', dur: '4s' },
    { top: '14%', left: '72%', size: 3, opacity: 0.9, delay: '0.8s', dur: '2.5s' },
    { top: '32%', left: '86%', size: 2, opacity: 0.7, delay: '1.8s', dur: '3.5s' },
    { top: '78%', left: '16%', size: 2, opacity: 0.75, delay: '1.5s', dur: '2.8s' },
    { top: '82%', left: '84%', size: 2.5, opacity: 0.8, delay: '0.5s', dur: '4.2s' },
  ];

  return (
    <section className="testimonials-hero-universe-section" style={{
      position: 'relative',
      padding: '4.5rem 0 3.5rem 0',
      background: 'linear-gradient(135deg, #070314 0%, #110726 35%, #1A0D38 65%, #080316 100%)',
      overflow: 'hidden',
      borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)'
    }}>
      {/* Nebula Glow */}
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

      {/* Twinkling Stars */}
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
        
        {/* Breadcrumb */}
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
          <span style={{ color: '#F3BA2F', display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600 }}>
            <Home size={14} />
            <span>Home</span>
          </span>
          <span style={{ color: 'rgba(212, 175, 55, 0.6)' }}>/</span>
          <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Testimonials</span>
        </div>

        {/* Badge */}
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
            <span>Voluntary &amp; Moderated Experiences</span>
            <Sparkles size={13} style={{ color: '#FCD34D' }} />
          </div>
        </div>

        <h1 className="font-serif" style={{ 
          fontSize: '3.2rem', 
          color: '#FFFFFF', 
          marginBottom: '1rem',
          letterSpacing: '1px',
          textShadow: '0 4px 20px rgba(0,0,0,0.6)'
        }}>
          Client <span style={{
            background: 'linear-gradient(135deg, #FCE7A1 0%, #D4AF37 50%, #F59E0B 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 2px 8px rgba(212,175,55,0.4))'
          }}>Experiences &amp; Testimonials</span>
        </h1>

        <p style={{ 
          color: '#E5E7EB', 
          fontSize: '1.18rem', 
          lineHeight: '1.7', 
          maxWidth: '680px', 
          margin: '0 auto 2rem auto',
          textShadow: '0 2px 10px rgba(0,0,0,0.5)'
        }}>
          Read voluntarily submitted feedback from individuals who have consulted Pandit Shekar Guruji. Mandatory administrator moderation applies to all submissions.
        </p>

        <button 
          className="btn btn-gold" 
          onClick={onOpenSubmission}
          style={{ boxShadow: '0 4px 25px rgba(212, 175, 55, 0.4)' }}
        >
          <PlusCircle size={18} />
          <span>Share Your Voluntary Experience</span>
        </button>
      </div>
    </section>
  );
}
