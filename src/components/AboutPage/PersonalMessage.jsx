import React from 'react';
import { MessageSquareQuote, Lock } from 'lucide-react';
import { initialSiteData } from '../../data/defaultData';

export default function PersonalMessage({ messageData, onOpenBooking }) {
  const msg = messageData || initialSiteData.aboutPage?.personalMessage || {};

  return (
    <section style={{ padding: '4rem 0', background: 'radial-gradient(circle at 70% 50%, rgba(212, 175, 55, 0.08) 0%, transparent 70%)' }}>
      <div className="container">
        <div className="glass-card" style={{ padding: '3rem', border: '1px solid rgba(212, 175, 55, 0.25)', boxShadow: '0 8px 30px rgba(184, 134, 11, 0.08)' }}>
          <div className="hero-grid" style={{ alignItems: 'center' }}>
            <div className="portrait-frame" style={{ maxWidth: '320px', margin: '0 auto' }}>
              <img 
                src={msg.imageUrl || initialSiteData.hero.imageUrl} 
                alt="Pandit Shekar Guruji Message" 
                className="portrait-img"
                style={{ height: '360px', objectFit: 'cover' }}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/dob_guidance.png';
                }}
              />
            </div>

            <div>
              <div className="badge-gold" style={{ marginBottom: '1rem' }}>
                <MessageSquareQuote size={14} />
                <span>Personal Word</span>
              </div>

              <h2 className="font-serif" style={{ fontSize: '2.4rem', color: '#1F2937', marginBottom: '1.25rem' }}>
                {msg.heading || "A Message from Shekar Guruji"}
              </h2>

              <p style={{ color: '#374151', fontSize: '1.15rem', fontStyle: 'italic', lineHeight: '1.7', marginBottom: '2rem', borderLeft: '3px solid #D4AF37', paddingLeft: '1.25rem' }}>
                "{msg.body || "Life often presents moments of deep uncertainty where an objective perspective and prayerful reflection bring clarity. My goal is to listen to your concerns with complete empathy, observe traditional markers with care, and provide honest guidance that empowers you to walk forward with confidence and peace."}"
              </p>

              <button className="btn btn-gold" onClick={() => onOpenBooking && onOpenBooking("Personal Message CTA")}>
                <Lock size={16} />
                <span>{msg.ctaText || "Speak with Guruji"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
