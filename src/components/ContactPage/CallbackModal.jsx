import React, { useState } from 'react';
import { X, PhoneCall, CheckCircle2, Send } from 'lucide-react';

export default function CallbackModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [time, setTime] = useState('Morning (9 AM - 12 PM)');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleReset}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '480px' }}>
        <button 
          onClick={handleReset}
          style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'none', border: 'none', color: '#4B5563', cursor: 'pointer' }}
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div className="badge-gold" style={{ marginBottom: '0.75rem' }}>
              <PhoneCall size={14} />
              <span>Request Phone Callback</span>
            </div>

            <h3 className="font-serif" style={{ fontSize: '1.6rem', color: '#1F2937', marginBottom: '0.5rem' }}>
              We Call You Back
            </h3>

            <p style={{ color: '#374151', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
              Enter your phone number and preferred window for a direct callback.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#715104', fontWeight: 600, marginBottom: '0.3rem' }}>
                  Full Name *
                </label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Ramesh Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ width: '100%', padding: '0.65rem', background: '#FFFFFF', border: '1px solid rgba(184, 134, 11, 0.35)', borderRadius: '6px', color: '#1F2937' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#715104', fontWeight: 600, marginBottom: '0.3rem' }}>
                  Phone Number with Country Code *
                </label>
                <input 
                  type="tel" 
                  required 
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{ width: '100%', padding: '0.65rem', background: '#FFFFFF', border: '1px solid rgba(184, 134, 11, 0.35)', borderRadius: '6px', color: '#1F2937' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#715104', fontWeight: 600, marginBottom: '0.3rem' }}>
                  Preferred Callback Window
                </label>
                <select 
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  style={{ width: '100%', padding: '0.65rem', background: '#FFFFFF', border: '1px solid rgba(184, 134, 11, 0.35)', borderRadius: '6px', color: '#1F2937' }}
                >
                  <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                  <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                  <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                </select>
              </div>

              <button type="submit" className="btn btn-gold btn-full">
                <Send size={16} />
                <span>Submit Callback Request</span>
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
              Callback Logged
            </h3>

            <p style={{ color: '#374151', fontSize: '0.9rem', marginBottom: '1.25rem', lineHeight: '1.6' }}>
              Thank you, <strong style={{ color: '#1F2937' }}>{name}</strong>. We have logged your request. You will receive a direct callback on <strong style={{ color: '#B8860B' }}>{phone}</strong> during your requested window.
            </p>

            <button className="btn btn-gold btn-full" onClick={handleReset}>
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
