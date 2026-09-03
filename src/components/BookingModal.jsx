import React, { useState } from 'react';
import { X, Calendar, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { servicesData } from '../data/servicesDatabase';

export default function BookingModal({ isOpen, onClose, initialService = '' }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: initialService || 'Love & Relationship Guidance',
    method: 'WhatsApp / Call',
    date: '',
    time: 'Morning (9 AM - 12 PM)',
    concern: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={handleClose}
          style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'none', border: 'none', color: '#6B7280', cursor: 'pointer' }}
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div className="badge-gold" style={{ marginBottom: '0.75rem' }}>
              <Calendar size={14} />
              <span>Quick Booking Request</span>
            </div>

            <h3 className="font-serif" style={{ fontSize: '1.75rem', color: '#1F2937', marginBottom: '0.5rem' }}>
              Book Private Consultation
            </h3>

            <p style={{ color: '#4B5563', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              Select your preferred service and time slot. All appointments are strictly confidential.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#8B6508', fontWeight: 600, marginBottom: '0.3rem' }}>
                  Full Name *
                </label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem', background: '#FFFFFF', border: '1px solid rgba(184, 134, 11, 0.35)', borderRadius: '6px', color: '#1F2937' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#8B6508', fontWeight: 600, marginBottom: '0.3rem' }}>
                  Phone / WhatsApp Number *
                </label>
                <input 
                  type="tel" 
                  required 
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem', background: '#FFFFFF', border: '1px solid rgba(184, 134, 11, 0.35)', borderRadius: '6px', color: '#1F2937' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#8B6508', fontWeight: 600, marginBottom: '0.3rem' }}>
                    Service Required
                  </label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{ width: '100%', padding: '0.65rem', background: '#FFFFFF', border: '1px solid rgba(184, 134, 11, 0.35)', borderRadius: '6px', color: '#1F2937' }}
                  >
                    {servicesData.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#8B6508', fontWeight: 600, marginBottom: '0.3rem' }}>
                    Consultation Method
                  </label>
                  <select 
                    value={formData.method}
                    onChange={(e) => setFormData({ ...formData, method: e.target.value })}
                    style={{ width: '100%', padding: '0.65rem', background: '#FFFFFF', border: '1px solid rgba(184, 134, 11, 0.35)', borderRadius: '6px', color: '#1F2937' }}
                  >
                    <option value="WhatsApp / Call">WhatsApp / Phone Call</option>
                    <option value="HD Video Call">HD Video Call</option>
                    <option value="In-Person">In-Person Visit</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#8B6508', fontWeight: 600, marginBottom: '0.3rem' }}>
                  Brief Statement of Concern
                </label>
                <textarea 
                  rows={3} 
                  placeholder="Share a short overview of your question..."
                  value={formData.concern}
                  onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem', background: '#FFFFFF', border: '1px solid rgba(184, 134, 11, 0.35)', borderRadius: '6px', color: '#1F2937' }}
                />
              </div>

              <button type="submit" className="btn btn-gold btn-full" style={{ marginTop: '0.5rem' }}>
                <Send size={16} />
                <span>Submit Booking Request</span>
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'rgba(16,185,129,0.12)',
              color: '#059669',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem auto'
            }}>
              <CheckCircle2 size={36} />
            </div>

            <h3 className="font-serif" style={{ fontSize: '1.75rem', color: '#1F2937', marginBottom: '0.75rem' }}>
              Booking Request Received
            </h3>

            <p style={{ color: '#4B5563', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Thank you, <strong style={{ color: '#1F2937' }}>{formData.name}</strong>. Your request for <strong style={{ color: '#B8860B' }}>{formData.service}</strong> has been logged. Our coordinator will contact you shortly on {formData.phone}.
            </p>

            <button className="btn btn-gold btn-full" onClick={handleClose}>
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
