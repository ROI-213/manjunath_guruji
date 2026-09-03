import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Upload, Lock, AlertCircle } from 'lucide-react';

export default function Step3Concern({ bookingState, setBookingState, onNextStep, onPrevStep }) {
  const [fileError, setFileError] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!validTypes.includes(file.type)) {
      setFileError('Please select a valid JPG or PNG image file.');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setFileError('File size exceeds 5MB. Please upload a smaller photograph.');
      return;
    }

    setBookingState({ ...bookingState, fileName: file.name });
    setFileError('');
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (!bookingState.concern || bookingState.concern.trim().length < 5) {
      setError('Please provide a brief statement of your concern (minimum 5 characters).');
      return;
    }
    setError('');
    onNextStep();
  };

  return (
    <div className="glass-card" style={{ padding: '2rem' }}>
      <h3 className="font-serif" style={{ fontSize: '1.6rem', color: '#1F2937', marginBottom: '0.5rem' }}>
        Step 3: Concern & Uploads
      </h3>

      <p style={{ color: '#4B5563', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
        Provide a private summary of your situation and optional photograph uploads (palm, face, or personal photo).
      </p>

      <form onSubmit={handleNext} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        
        {/* Concern Description */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
            <label style={{ fontSize: '0.85rem', color: '#8B6508', fontWeight: 600 }}>
              Statement of Concern * (Max 1000 characters)
            </label>
            <span style={{ fontSize: '0.75rem', color: '#374151' }}>
              {bookingState.concern.length} / 1000
            </span>
          </div>

          <textarea 
            rows={5}
            required
            maxLength={1000}
            placeholder="Share a brief overview of your question, life situation, or relationship concern..."
            value={bookingState.concern}
            onChange={(e) => setBookingState({ ...bookingState, concern: e.target.value })}
            style={{ width: '100%', padding: '0.75rem', background: '#FFFFFF', border: '1px solid rgba(184,134,11,0.35)', borderRadius: '6px', color: '#1F2937' }}
          />

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#B8860B', fontSize: '0.75rem', marginTop: '0.25rem' }}>
            <Lock size={14} />
            <span>Confidentiality Notice: Your concern is stored encrypted and reviewed only by Guruji.</span>
          </div>
        </div>

        {/* Optional Photograph Upload */}
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', color: '#8B6508', fontWeight: 600, marginBottom: '0.35rem' }}>
            Palm / Face / Personal Photograph (Optional Secure Upload)
          </label>

          <div style={{ border: '1px dashed rgba(184,134,11,0.4)', borderRadius: '6px', padding: '1.25rem', textAlign: 'center', background: 'rgba(184,134,11,0.03)' }}>
            <Upload size={24} style={{ color: '#B8860B', marginBottom: '0.3rem' }} />
            <p style={{ fontSize: '0.8rem', color: '#374151' }}>
              {bookingState.fileName || "Click to upload confidential JPG or PNG photograph (Max 5MB)"}
            </p>
            <input 
              type="file" 
              accept="image/jpeg,image/png,image/jpg"
              onChange={handleFileChange}
              style={{ display: 'none' }}
              id="wizard-file-upload"
            />
            <label htmlFor="wizard-file-upload" style={{ cursor: 'pointer', display: 'block', width: '100%', height: '100%' }} />
          </div>
          {fileError && <span style={{ color: '#DC2626', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>{fileError}</span>}
        </div>

        {error && <span style={{ color: '#DC2626', fontSize: '0.8rem' }}>{error}</span>}

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
          <button type="button" className="btn btn-outline" onClick={onPrevStep}>
            <ArrowLeft size={16} />
            <span>Back to Step 2</span>
          </button>

          <button type="submit" className="btn btn-gold">
            <span>Continue to Step 4</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </form>
    </div>
  );
}
