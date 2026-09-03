import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { servicesData } from '../../data/servicesDatabase';

export default function Step2Consultation({ bookingState, setBookingState, onNextStep, onPrevStep }) {
  const todayStr = new Date().toISOString().split('T')[0];

  const handleNext = (e) => {
    e.preventDefault();
    onNextStep();
  };

  return (
    <div className="glass-card" style={{ padding: '2rem' }}>
      <h3 className="font-serif" style={{ fontSize: '1.6rem', color: '#1F2937', marginBottom: '0.5rem' }}>
        Step 2: Consultation Selection
      </h3>

      <p style={{ color: '#4B5563', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
        Select your specific consultation service, channel, and preferred appointment timing slot.
      </p>

      <form onSubmit={handleNext} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        
        {/* Specific Service */}
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', color: '#8B6508', fontWeight: 600, marginBottom: '0.35rem' }}>
            Select Service *
          </label>
          <select 
            value={bookingState.serviceTitle}
            onChange={(e) => setBookingState({ ...bookingState, serviceTitle: e.target.value })}
            style={{ width: '100%', padding: '0.75rem', background: '#FFFFFF', border: '1px solid rgba(184,134,11,0.35)', borderRadius: '6px', color: '#1F2937' }}
          >
            {servicesData.map(s => (
              <option key={s.id} value={s.title}>
                {s.title} ({s.category})
              </option>
            ))}
          </select>
        </div>

        {/* Consultation Method */}
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', color: '#8B6508', fontWeight: 600, marginBottom: '0.35rem' }}>
            Consultation Channel / Method *
          </label>
          <select 
            value={bookingState.method}
            onChange={(e) => setBookingState({ ...bookingState, method: e.target.value })}
            style={{ width: '100%', padding: '0.75rem', background: '#FFFFFF', border: '1px solid rgba(184,134,11,0.35)', borderRadius: '6px', color: '#1F2937' }}
          >
            <option value="WhatsApp / Call">WhatsApp / Direct Phone Call</option>
            <option value="HD Video Call">HD Video Consultation</option>
            <option value="In-Person">In-Person Meeting (Admin Schedule Enabled)</option>
          </select>
        </div>

        {/* Preferred Date & Time Window */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: '#8B6508', fontWeight: 600, marginBottom: '0.35rem' }}>
              Preferred Date (Prevents past selection)
            </label>
            <input 
              type="date" 
              min={todayStr}
              value={bookingState.preferredDate}
              onChange={(e) => setBookingState({ ...bookingState, preferredDate: e.target.value })}
              style={{ width: '100%', padding: '0.75rem', background: '#FFFFFF', border: '1px solid rgba(184,134,11,0.35)', borderRadius: '6px', color: '#1F2937' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: '#8B6508', fontWeight: 600, marginBottom: '0.35rem' }}>
              Preferred Time Window
            </label>
            <select 
              value={bookingState.timeSlot}
              onChange={(e) => setBookingState({ ...bookingState, timeSlot: e.target.value })}
              style={{ width: '100%', padding: '0.75rem', background: '#FFFFFF', border: '1px solid rgba(184,134,11,0.35)', borderRadius: '6px', color: '#1F2937' }}
            >
              <option value="Morning (9 AM - 12 PM IST)">Morning (9:00 AM – 12:00 PM IST)</option>
              <option value="Afternoon (12 PM - 4 PM IST)">Afternoon (12:00 PM – 4:00 PM IST)</option>
              <option value="Evening (4 PM - 8 PM IST)">Evening (4:00 PM – 8:00 PM IST)</option>
            </select>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
          <button type="button" className="btn btn-outline" onClick={onPrevStep}>
            <ArrowLeft size={16} />
            <span>Back to Step 1</span>
          </button>

          <button type="submit" className="btn btn-gold">
            <span>Continue to Step 3</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </form>
    </div>
  );
}
