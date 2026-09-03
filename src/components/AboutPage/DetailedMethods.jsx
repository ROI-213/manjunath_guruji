import React from 'react';
import { Hand, Calendar, UserCheck, Image as ImageIcon, ShieldCheck, Shield, Sparkles } from 'lucide-react';
import { initialSiteData } from '../../data/defaultData';

const iconMap = {
  Hand: Hand,
  Calendar: Calendar,
  UserCheck: UserCheck,
  Image: ImageIcon,
  Shield: Shield
};

export default function DetailedMethods({ methods, onOpenBooking }) {
  const methodList = methods || initialSiteData.aboutPage?.detailedMethods || [];

  return (
    <section style={{ padding: '4rem 0' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge-gold" style={{ marginBottom: '0.75rem' }}>
            <Sparkles size={14} />
            <span>Observation Modalities</span>
          </div>
          <h2 className="font-serif" style={{ fontSize: '2.5rem', color: '#1F2937', marginBottom: '0.75rem' }}>
            Detailed Consultation Methods
          </h2>
          <p style={{ color: '#4B5563', maxWidth: '620px', margin: '0 auto' }}>
            Each observation technique is conducted with clarity, privacy, and traditional care.
          </p>
        </div>

        <div className="detailed-methods-single-line-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.25rem',
          alignItems: 'stretch'
        }}>
          {methodList.map((item) => {
            const Icon = iconMap[item.icon] || Hand;
            return (
              <div key={item.id} className="glass-card" style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '1.5rem 1.25rem',
                border: '1px solid rgba(212, 175, 55, 0.25)',
                boxShadow: '0 8px 30px rgba(184, 134, 11, 0.08)',
                borderRadius: '16px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(212, 175, 55, 0.12)',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#B8860B',
                    flexShrink: 0
                  }}>
                    <Icon size={20} />
                  </div>
                  <h3 className="font-serif" style={{ fontSize: '1.15rem', color: '#1F2937', margin: 0, lineHeight: 1.3 }}>{item.title}</h3>
                </div>

                <p style={{ color: '#4B5563', fontSize: '0.88rem', marginBottom: '1.25rem', lineHeight: '1.55', flexGrow: 1 }}>
                  {item.explanation}
                </p>

                <div style={{ background: 'rgba(184, 134, 11, 0.05)', border: '1px solid rgba(184, 134, 11, 0.15)', borderRadius: '8px', padding: '0.85rem', marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.8rem' }}>
                  <div>
                    <strong style={{ color: '#715104' }}>Provide: </strong>
                    <span style={{ color: '#374151' }}>{item.whatToProvide}</span>
                  </div>
                  <div>
                    <strong style={{ color: '#2563EB' }}>Remote: </strong>
                    <span style={{ color: '#374151' }}>{item.remoteAvailability}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#059669', fontSize: '0.75rem', marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid rgba(184, 134, 11, 0.12)' }}>
                  <ShieldCheck size={14} style={{ flexShrink: 0 }} />
                  <span>{item.privacyNote}</span>
                </div>

                <button 
                  className="btn btn-gold btn-sm btn-full"
                  style={{ marginTop: '1rem', fontSize: '0.82rem', padding: '0.55rem' }}
                  onClick={() => onOpenBooking && onOpenBooking(item.title)}
                >
                  Request Session
                </button>
              </div>
            );
          })}
        </div>

        <style>{`
          @media (max-width: 1024px) {
            .detailed-methods-single-line-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 640px) {
            .detailed-methods-single-line-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
