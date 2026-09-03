import React, { useState } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const countryOptions = [
  "India (+91)",
  "United States (+1)",
  "United Kingdom (+44)",
  "United Arab Emirates (+971)",
  "Singapore (+65)",
  "Malaysia (+60)",
  "Australia (+61)",
  "Canada (+1)",
  "Saudi Arabia (+966)",
  "Other International"
];

const languageOptions = ["Hindi", "English", "Kannada", "Telugu", "Tamil", "Marathi"];

export default function Step1Personal({ bookingState, setBookingState, onNextStep }) {
  const [sameAsPhone, setSameAsPhone] = useState(true);
  const [error, setError] = useState('');

  const handleNext = (e) => {
    e.preventDefault();
    if (!bookingState.fullName || bookingState.fullName.trim().length < 2) {
      setError('Please enter a valid full name (minimum 2 characters).');
      return;
    }
    if (!bookingState.phone || bookingState.phone.trim().length < 7) {
      setError('Please enter a valid phone number with country code.');
      return;
    }
    if (!bookingState.ageConfirmed) {
      setError('Age confirmation (18+) is required to proceed.');
      return;
    }

    setError('');
    onNextStep();
  };

  return (
    <div className="glass-card" style={{ padding: '2rem' }}>
      <h3 className="font-serif" style={{ fontSize: '1.6rem', color: '#1F2937', marginBottom: '0.5rem' }}>
        Step 1: Personal Details
      </h3>

      <p style={{ color: '#4B5563', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
        Enter your primary contact information for private appointment coordination.
      </p>

      <form onSubmit={handleNext} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        
        {/* Full Name */}
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', color: '#8B6508', fontWeight: 600, marginBottom: '0.35rem' }}>
            Full Name *
          </label>
          <input 
            type="text" 
            required 
            placeholder="e.g. Ramesh Kumar"
            value={bookingState.fullName}
            onChange={(e) => setBookingState({ ...bookingState, fullName: e.target.value })}
            style={{ width: '100%', padding: '0.75rem', background: '#FFFFFF', border: '1px solid rgba(184,134,11,0.35)', borderRadius: '6px', color: '#1F2937' }}
          />
        </div>

        {/* Age Confirmation Checkbox */}
        <div>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#374151', cursor: 'pointer' }}>
            <input 
              type="checkbox"
              required
              checked={bookingState.ageConfirmed}
              onChange={(e) => setBookingState({ ...bookingState, ageConfirmed: e.target.checked })}
            />
            <span>I confirm that I am 18 years of age or older. *</span>
          </label>
        </div>

        {/* Phone & WhatsApp */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: '#8B6508', fontWeight: 600, marginBottom: '0.35rem' }}>
              Phone Number * (with Country Code)
            </label>
            <input 
              type="tel" 
              required
              placeholder="+91 98765 43210"
              value={bookingState.phone}
              onChange={(e) => {
                const val = e.target.value;
                setBookingState(prev => ({
                  ...prev,
                  phone: val,
                  whatsapp: sameAsPhone ? val : prev.whatsapp
                }));
              }}
              style={{ width: '100%', padding: '0.75rem', background: '#FFFFFF', border: '1px solid rgba(184,134,11,0.35)', borderRadius: '6px', color: '#1F2937' }}
            />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
              <label style={{ fontSize: '0.85rem', color: '#8B6508', fontWeight: 600 }}>
                WhatsApp Number
              </label>
              <label style={{ fontSize: '0.75rem', color: '#374151', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <input 
                  type="checkbox" 
                  checked={sameAsPhone}
                  onChange={(e) => {
                    setSameAsPhone(e.target.checked);
                    if (e.target.checked) setBookingState(prev => ({ ...prev, whatsapp: prev.phone }));
                  }}
                />
                <span>Same as Phone</span>
              </label>
            </div>
            <input 
              type="tel" 
              disabled={sameAsPhone}
              placeholder="+91 98765 43210"
              value={bookingState.whatsapp}
              onChange={(e) => setBookingState({ ...bookingState, whatsapp: e.target.value })}
              style={{ width: '100%', padding: '0.75rem', background: sameAsPhone ? '#F3F4F6' : '#FFFFFF', border: '1px solid rgba(184,134,11,0.35)', borderRadius: '6px', color: '#1F2937' }}
            />
          </div>
        </div>

        {/* Email & Country & Language */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: '#8B6508', fontWeight: 600, marginBottom: '0.35rem' }}>
              Email (Optional)
            </label>
            <input 
              type="email" 
              placeholder="ramesh@example.com"
              value={bookingState.email}
              onChange={(e) => setBookingState({ ...bookingState, email: e.target.value })}
              style={{ width: '100%', padding: '0.75rem', background: '#FFFFFF', border: '1px solid rgba(184,134,11,0.35)', borderRadius: '6px', color: '#1F2937' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: '#8B6508', fontWeight: 600, marginBottom: '0.35rem' }}>
              Country *
            </label>
            <select 
              value={bookingState.country}
              onChange={(e) => setBookingState({ ...bookingState, country: e.target.value })}
              style={{ width: '100%', padding: '0.75rem', background: '#FFFFFF', border: '1px solid rgba(184,134,11,0.35)', borderRadius: '6px', color: '#1F2937' }}
            >
              {countryOptions.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: '#8B6508', fontWeight: 600, marginBottom: '0.35rem' }}>
              Preferred Language *
            </label>
            <select 
              value={bookingState.language}
              onChange={(e) => setBookingState({ ...bookingState, language: e.target.value })}
              style={{ width: '100%', padding: '0.75rem', background: '#FFFFFF', border: '1px solid rgba(184,134,11,0.35)', borderRadius: '6px', color: '#1F2937' }}
            >
              {languageOptions.map(l => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>
        </div>

        {error && <span style={{ color: '#DC2626', fontSize: '0.8rem' }}>{error}</span>}

        <div style={{ textAlign: 'right', marginTop: '1rem' }}>
          <button type="submit" className="btn btn-gold">
            <span>Continue to Step 2</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </form>
    </div>
  );
}
