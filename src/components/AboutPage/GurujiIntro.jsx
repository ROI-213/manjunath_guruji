import React from 'react';
import { ShieldCheck, MessageCircle, Phone, Lock } from 'lucide-react';
import { initialSiteData } from '../../data/defaultData';

export default function GurujiIntro({ introData, contactData, onOpenBooking }) {
  const intro = introData || initialSiteData.aboutPage?.intro || {};
  const contact = contactData || initialSiteData.contactStrip || {};

  const badge = intro.badge || "Strict Discretion & Privacy Assured";
  const title = intro.title || "Honest, Respectful & Confidential Spiritual Guidance";
  const body = Array.isArray(intro.body) ? intro.body : [
    "Pandit Shekar Guruji is an independent spiritual consultant who provides non-judgmental, traditional psychic readings and prayer guidance to individuals facing complex life decisions.",
    "With a focus on clarity rather than fear, Guruji offers private consultations through palm observation, date-of-birth charts, face feature analysis, and photograph evaluation.",
    "Whether you prefer to connect remotely via phone or WhatsApp (+91 98456 57808) or arrange a private session, every conversation is treated with utmost discretion, respect, and complete privacy."
  ];
  const availabilityText = intro.availabilityText || "Direct Phone & WhatsApp Consultations Available Globally (+91 98456 57808)";
  const phoneDisplay = contact.phoneDisplay || "+91 98456 57808";
  const whatsappUrl = contact.whatsappUrl || "https://wa.me/919845657808";
  const callUrl = contact.callUrl || "tel:+919845657808";

  return (
    <section style={{ padding: '3.5rem 0', background: 'transparent' }}>
      <div className="container">
        <div className="glass-card" style={{ padding: '3rem 2.5rem', border: '1px solid rgba(212, 175, 55, 0.25)', boxShadow: '0 8px 30px rgba(184, 134, 11, 0.08)' }}>
          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
            <div className="badge-gold" style={{ marginBottom: '1.25rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <ShieldCheck size={16} />
              <span>{badge}</span>
            </div>

            <h2 className="font-serif" style={{ fontSize: '2.4rem', color: '#1F2937', marginBottom: '1.25rem' }}>
              {title}
            </h2>

            {/* Bad/Black Energy & Witchcraft Clearing Highlight */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              background: 'linear-gradient(90deg, rgba(212, 175, 55, 0.15) 0%, rgba(245, 158, 11, 0.15) 100%)',
              border: '1.5px solid rgba(212, 175, 55, 0.45)',
              borderRadius: '9999px',
              padding: '0.45rem 1.1rem',
              marginBottom: '1.5rem',
              color: '#715104',
              fontSize: '0.94rem',
              fontWeight: 700
            }}>
              <ShieldCheck size={16} style={{ color: '#B8860B' }} />
              <span>Pandit Shekar Guruji can clear Bad energy, Black energy, Any kind of Witchcraft by performing powerful prayers.</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#374151', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              {body.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div style={{ background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '12px', padding: '1rem 1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', color: '#715104', fontSize: '0.95rem', fontWeight: 600 }}>
              <Lock size={18} style={{ color: '#D4AF37' }} />
              <span>{availabilityText}</span>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn btn-gold" onClick={() => onOpenBooking && onOpenBooking("Speak with Guruji - About Page")}>
                <Lock size={16} />
                <span>Speak with Guruji</span>
              </button>

              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
                <MessageCircle size={16} />
                <span>WhatsApp {phoneDisplay}</span>
              </a>

              <a href={callUrl} className="btn btn-call">
                <Phone size={16} />
                <span>Call {phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
