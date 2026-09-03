import React, { useState, useEffect } from 'react';
import { Lock, Check } from 'lucide-react';

export default function CookieConsentBanner() {
  const [accepted, setAccepted] = useState(true); // Default hidden if already dismissed

  useEffect(() => {
    const isConsentGiven = localStorage.getItem('cookie_consent');
    if (!isConsentGiven) setAccepted(false);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '1rem',
      left: '1rem',
      right: '1rem',
      maxWidth: '600px',
      margin: '0 auto',
      background: 'rgba(15, 20, 32, 0.95)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(212, 175, 55, 0.4)',
      borderRadius: '12px',
      padding: '1rem 1.25rem',
      zIndex: 1050,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem',
      boxShadow: '0 10px 30px rgba(0,0,0,0.8)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <Lock size={20} style={{ color: '#D4AF37', flexShrink: 0 }} />
        <p style={{ color: '#E5E7EB', fontSize: '0.82rem', margin: 0, lineHeight: '1.4' }}>
          We use necessary cookies to enable secure consultations and anonymous analytics.
        </p>
      </div>

      <button 
        onClick={handleAccept} 
        className="btn btn-gold btn-sm"
        style={{ padding: '0.4rem 1rem', fontSize: '0.8rem', flexShrink: 0 }}
      >
        <Check size={14} />
        <span>Accept</span>
      </button>
    </div>
  );
}
