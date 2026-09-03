import React from 'react';
import { HelpCircle, MessageCircle, Phone } from 'lucide-react';

export default function EmptyState({ onResetFilter, contactData }) {
  return (
    <div className="glass-card" style={{ maxWidth: '650px', margin: '3rem auto', textAlign: 'center', padding: '3rem 2rem' }}>
      <div style={{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: 'rgba(212, 175, 55, 0.15)',
        border: '1px solid rgba(212, 175, 55, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#D4AF37',
        margin: '0 auto 1.25rem auto'
      }}>
        <HelpCircle size={32} />
      </div>

      <h3 className="font-serif" style={{ fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
        Unsure Which Service Matches Your Situation?
      </h3>

      <p style={{ color: '#9CA3AF', fontSize: '1rem', marginBottom: '1.75rem', lineHeight: '1.6' }}>
        No matching service was found for your current search keywords. You don't need to fit your situation into a category — speak privately with Pandit Shekar Guruji directly.
      </p>

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href={contactData.whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
          <MessageCircle size={18} />
          <span>Speak via WhatsApp</span>
        </a>

        <a href={contactData.callUrl || "tel:+919845657808"} className="btn btn-call">
          <Phone size={18} />
          <span>Call Direct +91 98456 57808</span>
        </a>

        <button className="btn btn-outline" onClick={onResetFilter}>
          Clear Search & View All
        </button>
      </div>
    </div>
  );
}
