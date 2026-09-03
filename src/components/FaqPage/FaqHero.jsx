import React from 'react';
import { Search, HelpCircle, X, Sparkles, Home } from 'lucide-react';

export default function FaqHero({ searchKeyword, setSearchKeyword }) {
  const stars = [
    { top: '16%', left: '12%', size: 2.5, opacity: 0.8, delay: '0.2s', dur: '3s' },
    { top: '26%', left: '28%', size: 1.5, opacity: 0.6, delay: '1.2s', dur: '4s' },
    { top: '14%', left: '74%', size: 3, opacity: 0.9, delay: '0.8s', dur: '2.5s' },
    { top: '34%', left: '88%', size: 2, opacity: 0.7, delay: '1.8s', dur: '3.5s' },
    { top: '76%', left: '14%', size: 2, opacity: 0.75, delay: '1.5s', dur: '2.8s' },
    { top: '80%', left: '82%', size: 2.5, opacity: 0.8, delay: '0.5s', dur: '4.2s' },
  ];

  return (
    <section className="faq-hero-universe-section" style={{
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
          <span style={{ color: '#FFFFFF', fontWeight: 600 }}>FAQs</span>
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
            <span>Clear Answers &amp; Ethical Disclosures</span>
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
          Frequently Asked <span style={{
            background: 'linear-gradient(135deg, #FCE7A1 0%, #D4AF37 50%, #F59E0B 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 2px 8px rgba(212,175,55,0.4))'
          }}>Questions</span>
        </h1>

        <p style={{ 
          color: '#E5E7EB', 
          fontSize: '1.18rem', 
          lineHeight: '1.7', 
          maxWidth: '680px', 
          margin: '0 auto 2rem auto',
          textShadow: '0 2px 10px rgba(0,0,0,0.5)'
        }}>
          Explore detailed answers regarding consultation methods, privacy guarantees, photo policies, and spiritual standards.
        </p>

        {/* Search Input Bar */}
        <div style={{ position: 'relative', maxWidth: '580px', margin: '0 auto' }}>
          <Search size={20} style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: '#D4AF37' }} />
          
          <input 
            type="text" 
            placeholder="Search FAQs by keyword (e.g. privacy, photos, guarantee, appointment)..."
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            style={{
              width: '100%',
              padding: '0.95rem 3rem 0.95rem 3.2rem',
              background: 'rgba(255, 255, 255, 0.96)',
              border: '2px solid rgba(212, 175, 55, 0.6)',
              borderRadius: '9999px',
              color: '#1F2937',
              fontSize: '0.95rem',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
              outline: 'none'
            }}
          />

          {searchKeyword && (
            <button 
              onClick={() => setSearchKeyword('')}
              style={{ position: 'absolute', right: '1.25rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#6B7280', cursor: 'pointer' }}
            >
              <X size={18} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
