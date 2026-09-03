import React from 'react';
import { Phone, MessageCircle, Calendar, PhoneCall, Sparkles, Lock, Clock, Home } from 'lucide-react';

export default function ContactHero({ contactData, onOpenBooking, onOpenCallback }) {
  const stars = [
    { top: '15%', left: '10%', size: 2.5, opacity: 0.8, delay: '0.2s', dur: '3s' },
    { top: '25%', left: '28%', size: 1.5, opacity: 0.6, delay: '1.2s', dur: '4s' },
    { top: '12%', left: '72%', size: 3, opacity: 0.9, delay: '0.8s', dur: '2.5s' },
    { top: '35%', left: '88%', size: 2, opacity: 0.7, delay: '1.8s', dur: '3.5s' },
    { top: '75%', left: '16%', size: 2, opacity: 0.75, delay: '1.5s', dur: '2.8s' },
    { top: '80%', left: '80%', size: 2.5, opacity: 0.8, delay: '0.5s', dur: '4.2s' },
  ];

  return (
    <section className="contact-hero-universe-section" style={{
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
          <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Contact Us</span>
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
            <Lock size={13} style={{ color: '#FCD34D' }} />
            <span>Strictly Private &amp; Confidential Communication</span>
            <Lock size={13} style={{ color: '#FCD34D' }} />
          </div>
        </div>

        <h1 className="font-serif" style={{ 
          fontSize: '3.2rem', 
          color: '#FFFFFF', 
          marginBottom: '1rem',
          letterSpacing: '1px',
          textShadow: '0 4px 20px rgba(0,0,0,0.6)'
        }}>
          Speak Privately with <span style={{
            background: 'linear-gradient(135deg, #FCE7A1 0%, #D4AF37 50%, #F59E0B 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 2px 8px rgba(212,175,55,0.4))'
          }}>Shekar Guruji</span>
        </h1>

        <p style={{ 
          color: '#E5E7EB', 
          fontSize: '1.18rem', 
          lineHeight: '1.7', 
          maxWidth: '680px', 
          margin: '0 auto 2rem auto',
          textShadow: '0 2px 10px rgba(0,0,0,0.5)'
        }}>
          Direct access for private consultations via Phone call, WhatsApp, or Scheduled Appointment. Complete discretion assured.
        </p>

        {/* Quick Action Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem', marginTop: '2.5rem' }}>
          
          <a href={contactData.callUrl || "tel:+919845657808"} className="glass-card" style={{ padding: '1.5rem 1rem', textDecoration: 'none', textAlign: 'center', background: '#FFFFFF', borderRadius: '16px', border: '1.5px solid rgba(37, 99, 235, 0.3)', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
            <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'rgba(37, 99, 235, 0.1)', border: '1px solid rgba(37, 99, 235, 0.3)', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem auto' }}>
              <Phone size={22} />
            </div>
            <h4 style={{ color: '#1F2937', fontSize: '1.05rem', marginBottom: '0.25rem' }}>Call Guruji</h4>
            <p style={{ color: '#4B5563', fontSize: '0.82rem', margin: 0, fontWeight: 600 }}>+91 98456 57808</p>
          </a>

          <a href={contactData.whatsappUrl || "https://wa.me/919845657808"} target="_blank" rel="noreferrer" className="glass-card" style={{ padding: '1.5rem 1rem', textDecoration: 'none', textAlign: 'center', background: '#FFFFFF', borderRadius: '16px', border: '1.5px solid rgba(37, 211, 102, 0.3)', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
            <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'rgba(37, 211, 102, 0.1)', border: '1px solid rgba(37, 211, 102, 0.3)', color: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem auto' }}>
              <MessageCircle size={22} />
            </div>
            <h4 style={{ color: '#1F2937', fontSize: '1.05rem', marginBottom: '0.25rem' }}>WhatsApp</h4>
            <p style={{ color: '#4B5563', fontSize: '0.82rem', margin: 0, fontWeight: 600 }}>Instant Encrypted Chat</p>
          </a>

          <a href="mailto:shekarbaba001@gmail.com" className="glass-card" style={{ padding: '1.5rem 1rem', textDecoration: 'none', textAlign: 'center', background: '#FFFFFF', borderRadius: '16px', border: '1.5px solid rgba(217, 119, 6, 0.3)', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
            <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'rgba(217, 119, 6, 0.1)', border: '1px solid rgba(217, 119, 6, 0.3)', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem auto' }}>
              <Calendar size={22} />
            </div>
            <h4 style={{ color: '#1F2937', fontSize: '1.05rem', marginBottom: '0.25rem' }}>Email Us</h4>
            <p style={{ color: '#4B5563', fontSize: '0.82rem', margin: 0, fontWeight: 600 }}>shekarbaba001@gmail.com</p>
          </a>

          <div className="glass-card" onClick={onOpenCallback} style={{ padding: '1.5rem 1rem', textAlign: 'center', cursor: 'pointer', background: '#FFFFFF', borderRadius: '16px', border: '1.5px solid rgba(5, 150, 105, 0.3)', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
            <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'rgba(5, 150, 105, 0.1)', border: '1px solid rgba(5, 150, 105, 0.3)', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem auto' }}>
              <PhoneCall size={22} />
            </div>
            <h4 style={{ color: '#1F2937', fontSize: '1.05rem', marginBottom: '0.25rem' }}>Callback</h4>
            <p style={{ color: '#4B5563', fontSize: '0.82rem', margin: 0, fontWeight: 600 }}>We Call You Back</p>
          </div>

        </div>

        {/* Availability Info Strip */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginTop: '2.5rem', color: '#E5E7EB', fontSize: '0.88rem', flexWrap: 'wrap' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Clock size={16} style={{ color: '#FCD34D' }} />
            <span>Consultation Hours: 8:00 AM – 9:00 PM IST (Daily)</span>
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Lock size={16} style={{ color: '#34D399' }} />
            <span>Strict Privacy Guaranteed</span>
          </span>
        </div>

      </div>
    </section>
  );
}
