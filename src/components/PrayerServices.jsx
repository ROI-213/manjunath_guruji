import React from 'react';
import { Sparkles, Shield, Info, MessageCircle, Calendar } from 'lucide-react';

export default function PrayerServices({ prayers, prayerData, contactData, onOpenBooking }) {
  const info = prayerData || {};
  const list = prayers || info.servicesList || [
    { title: "Spiritual Protection Prayers", description: "Positive energy prayer activities for protective harmony." },
    { title: "Family Harmony Prayers", description: "Peaceful spiritual remedies for domestic tranquility." }
  ];
  const contact = contactData || {};

  return (
    <section className="guidance-section" id="prayers" style={{ background: 'rgba(255, 255, 255, 0.015)' }}>
      <div className="container">
        <div className="guidance-grid">
          <div style={{ order: 2 }}>
            <div className="badge-gold" style={{ marginBottom: '1rem' }}>
              <Sparkles size={14} />
              <span>Positive Spiritual Foundations</span>
            </div>

            <h2 className="font-serif" style={{ fontSize: '2.4rem', color: '#FBF9F2', marginBottom: '1rem' }}>
              {info.heading || "Spiritual Prayer Services & Energy Cleansing"}
            </h2>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              background: 'linear-gradient(90deg, rgba(212, 175, 55, 0.2) 0%, rgba(245, 158, 11, 0.2) 100%)',
              border: '1px solid rgba(212, 175, 55, 0.45)',
              borderRadius: '9999px',
              padding: '0.35rem 1rem',
              marginBottom: '1rem',
              color: '#FDE68A',
              fontSize: '0.92rem',
              fontWeight: 600
            }}>
              <Sparkles size={14} style={{ color: '#FCD34D' }} />
              <span>Pandit Shekar Guruji can clear Bad energy, Black energy, Any kind of Witchcraft by performing powerful prayers.</span>
            </div>

            <p style={{ color: '#A3A3C2', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
              {info.intro || "Pandit Shekar Guruji can clear Bad energy, Black energy, Any kind of Witchcraft by performing powerful prayers. Traditional Indian prayer activities performed for peace of mind, family well-being, and positive environmental vibrations."}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem', margin: '1.5rem 0' }}>
              {list.map((service, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '0.85rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <Shield size={18} style={{ color: '#D4AF37' }} />
                  <span style={{ fontSize: '0.95rem', color: '#FBF9F2' }}>
                    {typeof service === 'string' ? service : service.title}
                  </span>
                </div>
              ))}
            </div>

            <div className="mandatory-disclaimer">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <Info size={18} style={{ color: '#60A5FA', flexShrink: 0, marginTop: '2px' }} />
                <span>{info.mandatoryDisclaimer || "Spiritual prayers foster inner peace and positive energy. Services do not guarantee specific outer event outcomes."}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              <button className="btn btn-gold" onClick={() => onOpenBooking && onOpenBooking("Spiritual Prayer Service")}>
                <Calendar size={18} />
                <span>Request Prayer Support</span>
              </button>
              <a href={contact.whatsappUrl || "https://wa.me/919845657808"} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
                <MessageCircle size={18} />
                <span>WhatsApp Guruji</span>
              </a>
            </div>
          </div>

          <div style={{ order: 1, position: 'relative' }}>
            <div className="glass-card" style={{ padding: '0.75rem' }}>
              <img 
                src={info.imageUrl || "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"} 
                alt="Spiritual Prayer Altar Diya" 
                style={{ width: '100%', height: '440px', objectFit: 'cover', borderRadius: '8px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
