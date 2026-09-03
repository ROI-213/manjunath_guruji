import React from 'react';
import { 
  HeartHandshake, Compass, Lock, MessageCircle, ShieldCheck, Smile, FileText, Sparkles 
} from 'lucide-react';
import { initialSiteData } from '../../data/defaultData';

const iconMap = {
  HeartHandshake: HeartHandshake,
  Compass: Compass,
  Lock: Lock,
  MessageCircle: MessageCircle,
  ShieldCheck: ShieldCheck,
  Smile: Smile,
  FileText: FileText
};

export default function SpiritualPhilosophy({ philosophyData }) {
  const philosophyList = philosophyData || initialSiteData.aboutPage?.philosophy || [];

  return (
    <section style={{ padding: '4rem 0', background: 'rgba(212, 175, 55, 0.03)' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge-gold" style={{ marginBottom: '0.75rem' }}>
            <Sparkles size={14} />
            <span>Ethical Foundation</span>
          </div>
          <h2 className="font-serif" style={{ fontSize: '2.5rem', color: '#1F2937', marginBottom: '0.75rem' }}>
            Our Core Spiritual Philosophy
          </h2>
          <p style={{ color: '#4B5563', maxWidth: '620px', margin: '0 auto' }}>
            Guided by fundamental principles that protect visitor dignity, freedom, and emotional safety.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {philosophyList.map((item, idx) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <div key={idx} className="glass-card" style={{ padding: '1.5rem', border: '1px solid rgba(212, 175, 55, 0.2)', boxShadow: '0 4px 16px rgba(184, 134, 11, 0.05)' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'rgba(212, 175, 55, 0.12)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#B8860B',
                  marginBottom: '1rem'
                }}>
                  <Icon size={22} />
                </div>
                <h4 className="font-serif" style={{ fontSize: '1.15rem', color: '#1F2937', marginBottom: '0.5rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.88rem', color: '#4B5563', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
