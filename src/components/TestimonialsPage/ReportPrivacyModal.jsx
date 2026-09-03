import React, { useState } from 'react';
import { X, ShieldAlert, CheckCircle2, Send } from 'lucide-react';

export default function ReportPrivacyModal({ item, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [reason, setReason] = useState('');
  const [email, setEmail] = useState('');

  if (!item) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px' }}>
        <button 
          onClick={onClose}
          style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'none', border: 'none', color: '#4B5563', cursor: 'pointer' }}
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div className="badge-gold" style={{ marginBottom: '0.75rem' }}>
              <ShieldAlert size={14} />
              <span>Privacy & Removal Path</span>
            </div>

            <h3 className="font-serif" style={{ fontSize: '1.6rem', color: '#1F2937', marginBottom: '0.5rem' }}>
              Request Privacy Removal or Edit
            </h3>

            <p style={{ color: '#374151', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
              If you are the author of this voluntary testimonial ("{item.name}") or have a privacy request, please submit details below.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#715104', fontWeight: 600, marginBottom: '0.3rem' }}>
                  Your Contact Email *
                </label>
                <input 
                  type="email" 
                  required 
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ width: '100%', padding: '0.65rem', background: '#FFFFFF', border: '1px solid rgba(184, 134, 11, 0.35)', borderRadius: '6px', color: '#1F2937' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#715104', fontWeight: 600, marginBottom: '0.3rem' }}>
                  Reason for Request (e.g. Anonymize name, Remove review) *
                </label>
                <textarea 
                  rows={3} 
                  required 
                  placeholder="State your privacy or removal request..."
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  style={{ width: '100%', padding: '0.65rem', background: '#FFFFFF', border: '1px solid rgba(184, 134, 11, 0.35)', borderRadius: '6px', color: '#1F2937' }}
                />
              </div>

              <button type="submit" className="btn btn-gold btn-full">
                <Send size={16} />
                <span>Submit Privacy Request</span>
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: 'rgba(16,185,129,0.15)',
              color: '#10B981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem auto'
            }}>
              <CheckCircle2 size={32} />
            </div>

            <h3 className="font-serif" style={{ fontSize: '1.5rem', color: '#1F2937', marginBottom: '0.5rem' }}>
              Privacy Request Submitted
            </h3>

            <p style={{ color: '#374151', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
              Your request has been logged. Our site administrator will review and action your privacy request within 24 hours.
            </p>

            <button className="btn btn-outline btn-full" onClick={onClose}>
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
