import React, { useState } from 'react';
import { X, Star, Upload, ShieldCheck, CheckCircle2, Send, Lock } from 'lucide-react';

export default function TestimonialSubmissionModal({ isOpen, onClose, onSubmitTestimonial }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    category: 'Relationship',
    rating: 5,
    testimonial: '',
    mediaName: '',
    isAnonymous: false,
    consent: false
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Please check the consent box to proceed.");
      return;
    }

    const newTestimonial = {
      id: Date.now(),
      name: formData.isAnonymous ? "Anonymous Visitor" : formData.name,
      location: formData.location || "India",
      category: formData.category,
      type: "text",
      rating: Number(formData.rating),
      date: "Just Now",
      comment: formData.testimonial,
      verified: false,
      published: false // Mandatory admin approval required
    };

    onSubmitTestimonial(newTestimonial);
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px', maxHeight: '90vh', overflowY: 'auto' }}>
        <button 
          onClick={handleClose}
          style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'none', border: 'none', color: '#4B5563', cursor: 'pointer' }}
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div className="badge-gold" style={{ marginBottom: '0.75rem' }}>
              <ShieldCheck size={14} />
              <span>Voluntary Visitor Review</span>
            </div>

            <h3 className="font-serif" style={{ fontSize: '1.75rem', color: '#1F2937', marginBottom: '0.5rem' }}>
              Share Your Voluntary Experience
            </h3>

            <p style={{ color: '#374151', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              Your feedback helps others understand our compassionate, confidential environment. Mandatory admin review applies prior to publication.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#715104', fontWeight: 600, marginBottom: '0.3rem' }}>
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
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#715104', fontWeight: 600, marginBottom: '0.3rem' }}>
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    required 
                    placeholder="ramesh@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: '100%', padding: '0.65rem', background: '#FFFFFF', border: '1px solid rgba(184, 134, 11, 0.35)', borderRadius: '6px', color: '#1F2937' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#715104', fontWeight: 600, marginBottom: '0.3rem' }}>
                    Phone Number *
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

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#715104', fontWeight: 600, marginBottom: '0.3rem' }}>
                    City / Location *
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Bengaluru, Karnataka"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    style={{ width: '100%', padding: '0.65rem', background: '#FFFFFF', border: '1px solid rgba(184, 134, 11, 0.35)', borderRadius: '6px', color: '#1F2937' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#715104', fontWeight: 600, marginBottom: '0.3rem' }}>
                    Service Category *
                  </label>
                  <select 
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    style={{ width: '100%', padding: '0.65rem', background: '#FFFFFF', border: '1px solid rgba(184, 134, 11, 0.35)', borderRadius: '6px', color: '#1F2937' }}
                  >
                    <option value="Relationship">Relationship</option>
                    <option value="Marriage">Marriage</option>
                    <option value="Family">Family</option>
                    <option value="Career">Career</option>
                    <option value="Business">Business</option>
                    <option value="Spiritual Prayer">Spiritual Prayer</option>
                    <option value="Personal Guidance">Personal Guidance</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#715104', fontWeight: 600, marginBottom: '0.3rem' }}>
                    Rating (1 to 5 Stars) *
                  </label>
                  <select 
                    value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                    style={{ width: '100%', padding: '0.65rem', background: '#FFFFFF', border: '1px solid rgba(184, 134, 11, 0.35)', borderRadius: '6px', color: '#1F2937' }}
                  >
                    <option value="5">5 Stars (Excellent)</option>
                    <option value="4">4 Stars (Good)</option>
                    <option value="3">3 Stars (Average)</option>
                    <option value="2">2 Stars (Fair)</option>
                    <option value="1">1 Star (Poor)</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#715104', fontWeight: 600, marginBottom: '0.3rem' }}>
                  Your Experience / Testimonial *
                </label>
                <textarea 
                  rows={4} 
                  required 
                  placeholder="Share your voluntary experience with Pandit Shekar Guruji..."
                  value={formData.testimonial}
                  onChange={(e) => setFormData({ ...formData, testimonial: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem', background: '#FFFFFF', border: '1px solid rgba(184, 134, 11, 0.35)', borderRadius: '6px', color: '#1F2937' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#715104', fontWeight: 600, marginBottom: '0.3rem' }}>
                  Optional Audio / Video Clip Upload
                </label>
                <div style={{ border: '1px dashed rgba(184, 134, 11, 0.4)', borderRadius: '6px', padding: '0.75rem', textAlign: 'center', background: 'rgba(184, 134, 11, 0.04)' }}>
                  <Upload size={18} style={{ color: '#B8860B', marginBottom: '0.2rem' }} />
                  <p style={{ fontSize: '0.75rem', color: '#374151' }}>
                    {formData.mediaName || "Upload optional MP3 audio or MP4 video snippet"}
                  </p>
                  <input 
                    type="file" 
                    accept="audio/*,video/*" 
                    onChange={(e) => setFormData({ ...formData, mediaName: e.target.files[0]?.name || '' })}
                    style={{ display: 'none' }} 
                    id="testimonial-media-upload"
                  />
                  <label htmlFor="testimonial-media-upload" style={{ cursor: 'pointer', display: 'block', width: '100%', height: '100%' }} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.5rem', background: 'rgba(184, 134, 11, 0.04)', padding: '0.75rem', borderRadius: '6px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#1F2937', cursor: 'pointer' }}>
                  <input 
                    type="checkbox"
                    checked={formData.isAnonymous}
                    onChange={(e) => setFormData({ ...formData, isAnonymous: e.target.checked })}
                  />
                  <span>Display as Anonymous / Initials Only on public site</span>
                </label>

                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8rem', color: '#374151', cursor: 'pointer' }}>
                  <input 
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    style={{ marginTop: '2px' }}
                  />
                  <span>I confirm this experience is voluntarily submitted, truthful, and subject to admin review before publication.</span>
                </label>
              </div>

              <button type="submit" className="btn btn-gold btn-full" style={{ marginTop: '0.5rem' }}>
                <Send size={16} />
                <span>Submit for Administrator Review</span>
              </button>

            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'rgba(16,185,129,0.15)',
              color: '#10B981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem auto'
            }}>
              <CheckCircle2 size={36} />
            </div>

            <h3 className="font-serif" style={{ fontSize: '1.75rem', color: '#1F2937', marginBottom: '0.75rem' }}>
              Submission Received
            </h3>

            <p style={{ color: '#374151', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Thank you for sharing your experience. In accordance with website policy, <strong style={{ color: '#B8860B' }}>administrator approval is mandatory prior to publication</strong>. Your phone number and email address will remain strictly confidential.
            </p>

            <button className="btn btn-gold btn-full" onClick={handleClose}>
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
