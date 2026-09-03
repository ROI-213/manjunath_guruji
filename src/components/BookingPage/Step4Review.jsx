import React, { useState } from 'react';
import { ArrowLeft, Send, ShieldCheck, Check } from 'lucide-react';

export default function Step4Review({ bookingState, setBookingState, onSubmitBooking, onPrevStep }) {
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bookingState.privacyConsent) {
      setError('Privacy consent is required to complete your booking request.');
      return;
    }
    if (!bookingState.termsAccepted) {
      setError('Terms acceptance is required to complete your booking request.');
      return;
    }

    setError('');
    onSubmitBooking();
  };

  return (
    <div className="glass-card" style={{ padding: '2rem' }}>
      <h3 className="font-serif" style={{ fontSize: '1.6rem', color: '#1F2937', marginBottom: '0.5rem' }}>
        Step 4: Consent & Summary Review
      </h3>

      <p style={{ color: '#4B5563', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
        Review your entered details, confirm privacy consent, and submit your booking request.
      </p>

      {/* Summary Box */}
      <div style={{ background: '#FAF8F2', border: '1px solid rgba(184, 134, 11, 0.3)', borderRadius: '8px', padding: '1.25rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem' }}>
        <div><strong style={{ color: '#8B6508' }}>Full Name:</strong> <span style={{ color: '#1F2937' }}>{bookingState.fullName}</span></div>
        <div><strong style={{ color: '#8B6508' }}>Phone / WhatsApp:</strong> <span style={{ color: '#1F2937' }}>{bookingState.phone}</span></div>
        <div><strong style={{ color: '#8B6508' }}>Language / Country:</strong> <span style={{ color: '#1F2937' }}>{bookingState.language} ({bookingState.country})</span></div>
        <div><strong style={{ color: '#8B6508' }}>Service Selected:</strong> <span style={{ color: '#B8860B', fontWeight: 600 }}>{bookingState.serviceTitle}</span></div>
        <div><strong style={{ color: '#8B6508' }}>Channel & Timing:</strong> <span style={{ color: '#1F2937' }}>{bookingState.method} • {bookingState.preferredDate || 'Flexible Date'} ({bookingState.timeSlot})</span></div>
        <div><strong style={{ color: '#8B6508' }}>Photograph Uploaded:</strong> <span style={{ color: '#1F2937' }}>{bookingState.fileName || 'None'}</span></div>
        <div><strong style={{ color: '#8B6508' }}>Statement of Concern:</strong> <p style={{ color: '#374151', margin: '0.2rem 0 0 0', fontStyle: 'italic' }}>"{bookingState.concern}"</p></div>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        
        {/* Privacy Consent Checkbox */}
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: '#374151', cursor: 'pointer' }}>
          <input 
            type="checkbox"
            required
            checked={bookingState.privacyConsent}
            onChange={(e) => setBookingState({ ...bookingState, privacyConsent: e.target.checked })}
            style={{ marginTop: '2px' }}
          />
          <span>I consent to the processing of my details strictly for private consultation purposes in accordance with the Privacy Policy. *</span>
        </label>

        {/* Terms Acceptance Checkbox */}
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: '#374151', cursor: 'pointer' }}>
          <input 
            type="checkbox"
            required
            checked={bookingState.termsAccepted}
            onChange={(e) => setBookingState({ ...bookingState, termsAccepted: e.target.checked })}
            style={{ marginTop: '2px' }}
          />
          <span>I understand that a booking request is not confirmed until an administrator updates its status and contacts me. *</span>
        </label>

        {error && <span style={{ color: '#DC2626', fontSize: '0.8rem' }}>{error}</span>}

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
          <button type="button" className="btn btn-outline" onClick={onPrevStep}>
            <ArrowLeft size={16} />
            <span>Back to Step 3</span>
          </button>

          <button type="submit" className="btn btn-gold">
            <Send size={16} />
            <span>Submit Booking Request</span>
          </button>
        </div>

      </form>
    </div>
  );
}
