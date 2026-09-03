import React from 'react';
import { AlertTriangle, ShieldAlert } from 'lucide-react';

export default function EmergencyNotice() {
  return (
    <div style={{
      background: 'rgba(239, 68, 68, 0.06)',
      border: '1.5px solid rgba(239, 68, 68, 0.35)',
      borderRadius: '16px',
      padding: '1.25rem 1.35rem',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.85rem',
      marginBottom: '1.5rem',
      boxShadow: '0 4px 15px rgba(220, 38, 38, 0.04)'
    }}>
      <AlertTriangle size={22} style={{ color: '#DC2626', flexShrink: 0, marginTop: '2px' }} />
      <div>
        <h4 style={{ color: '#991B1B', fontSize: '0.95rem', marginBottom: '0.35rem', fontWeight: 700 }}>
          Important Emergency &amp; Safety Notice
        </h4>
        <p style={{ color: '#7F1D1D', fontSize: '0.85rem', lineHeight: '1.6', margin: 0 }}>
          This website provides spiritual and psychic consultation for personal reflection. <strong style={{ color: '#991B1B' }}>This is NOT an emergency service.</strong> If you or someone you know is facing a medical emergency, physical violence, threats, self-harm thoughts, or immediate legal danger, please contact your local emergency services (e.g. 112 in India, Tele-MANAS 14416) or qualified licensed professional healthcare providers immediately.
        </p>
      </div>
    </div>
  );
}
