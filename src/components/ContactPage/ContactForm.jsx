import React, { useState } from 'react';
import { Send, MessageCircle, Lock, Upload, AlertCircle, CheckCircle2, ShieldCheck } from 'lucide-react';
import { servicesData } from '../../data/servicesDatabase';

const countryList = [
  "India (+91)",
  "United States (+1)",
  "United Kingdom (+44)",
  "United Arab Emirates (+971)",
  "Singapore (+65)",
  "Malaysia (+60)",
  "Australia (+61)",
  "Canada (+1)",
  "Saudi Arabia (+966)",
  "Qatar (+974)",
  "Oman (+968)",
  "Kuwait (+965)",
  "Bahrain (+973)",
  "Germany (+49)",
  "France (+33)",
  "Other International"
];

const languageOptions = [
  "Hindi",
  "English",
  "Kannada",
  "Telugu",
  "Tamil",
  "Marathi"
];

export default function ContactForm({ onSubmitSuccess, contactData }) {
  const [sameAsPhone, setSameAsPhone] = useState(true);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    whatsapp: '',
    email: '',
    country: 'India (+91)',
    city: '',
    language: 'Hindi',
    service: 'Love & Relationship Guidance',
    method: 'WhatsApp / Call',
    preferredDate: '',
    concern: '',
    fileName: '',
    fileError: '',
    consent: false
  });

  const todayStr = new Date().toISOString().split('T')[0];

  const sanitizeInput = (text) => {
    return text.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '').trim();
  };

  const handlePhoneChange = (val) => {
    setFormData(prev => ({
      ...prev,
      phone: val,
      whatsapp: sameAsPhone ? val : prev.whatsapp
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!validTypes.includes(file.type)) {
      setFormData(prev => ({ ...prev, fileError: 'Please upload a valid JPG or PNG image file.' }));
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setFormData(prev => ({ ...prev, fileError: 'File size exceeds 5MB limit. Please upload a smaller image.' }));
      return;
    }

    setFormData(prev => ({ ...prev, fileName: file.name, fileError: '' }));
  };

  const validate = () => {
    const errs = {};
    
    const cleanName = sanitizeInput(formData.fullName);
    if (!cleanName || cleanName.length < 2 || cleanName.length > 100) {
      errs.fullName = 'Full Name must be between 2 and 100 characters.';
    }

    if (!formData.phone || formData.phone.length < 7) {
      errs.phone = 'Valid phone number with country code is required.';
    }

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email format.';
    }

    const cleanConcern = sanitizeInput(formData.concern);
    if (!cleanConcern || cleanConcern.length < 5) {
      errs.concern = 'Please provide a brief description of your concern.';
    } else if (cleanConcern.length > 1000) {
      errs.concern = 'Concern description must not exceed 1000 characters.';
    }

    if (!formData.consent) {
      errs.consent = 'You must agree to the privacy policy to proceed.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const refNum = `API-${Math.floor(100000 + Math.random() * 900000)}`;

    onSubmitSuccess({
      ...formData,
      refNumber: refNum
    });
  };

  const handleSendWhatsApp = () => {
    if (!formData.fullName || !formData.concern) {
      alert("Please enter your Name and Concern before opening WhatsApp.");
      return;
    }
    const text = `Hello Pandit Shekar Guruji,\nMy Name: ${formData.fullName}\nService: ${formData.service}\nConcern: ${formData.concern}`;
    window.open(`https://wa.me/919845657808?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="glass-card" style={{ maxWidth: '100%', margin: '0', padding: '2rem 2.25rem', borderRadius: '18px', border: '1.5px solid rgba(212, 175, 55, 0.35)', boxShadow: '0 8px 32px rgba(184, 134, 11, 0.08)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
        <div className="badge-gold">
          <Lock size={12} />
          <span>Strictly Private Intake Form</span>
        </div>
      </div>

      <h2 className="font-serif" style={{ fontSize: '1.85rem', color: '#1F2937', marginBottom: '0.4rem' }}>
        Send Private Consultation Enquiry
      </h2>

      <p style={{ color: '#4B5563', fontSize: '0.88rem', marginBottom: '1.75rem' }}>
        Your personal details and photographs are encrypted and treated with 100% discretion.
      </p>

      <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
        
        {/* Full Name */}
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', color: '#8B6508', fontWeight: 600, marginBottom: '0.35rem' }}>
            Full Name * (2–100 characters)
          </label>
          <input 
            type="text" 
            required
            placeholder="e.g. Ramesh Kumar"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            style={{ width: '100%', padding: '0.75rem', background: '#FFFFFF', border: errors.fullName ? '1px solid #EF4444' : '1px solid rgba(184,134,11,0.35)', borderRadius: '6px', color: '#1F2937' }}
          />
          {errors.fullName && <span style={{ color: '#DC2626', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>{errors.fullName}</span>}
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
              value={formData.phone}
              onChange={(e) => handlePhoneChange(e.target.value)}
              style={{ width: '100%', padding: '0.75rem', background: '#FFFFFF', border: errors.phone ? '1px solid #EF4444' : '1px solid rgba(184,134,11,0.35)', borderRadius: '6px', color: '#1F2937' }}
            />
            {errors.phone && <span style={{ color: '#DC2626', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>{errors.phone}</span>}
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
              <label style={{ fontSize: '0.85rem', color: '#8B6508', fontWeight: 600 }}>
                WhatsApp Number
              </label>
              <label style={{ fontSize: '0.75rem', color: '#6B7280', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <input 
                  type="checkbox" 
                  checked={sameAsPhone}
                  onChange={(e) => {
                    setSameAsPhone(e.target.checked);
                    if (e.target.checked) setFormData(prev => ({ ...prev, whatsapp: prev.phone }));
                  }}
                />
                <span>Same as Phone</span>
              </label>
            </div>
            <input 
              type="tel" 
              disabled={sameAsPhone}
              placeholder="+91 98765 43210"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              style={{ width: '100%', padding: '0.75rem', background: sameAsPhone ? '#F3F4F6' : '#FFFFFF', border: '1px solid rgba(184,134,11,0.35)', borderRadius: '6px', color: '#1F2937' }}
            />
          </div>
        </div>

        {/* Email & Country/City */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: '#8B6508', fontWeight: 600, marginBottom: '0.35rem' }}>
              Email (Optional)
            </label>
            <input 
              type="email" 
              placeholder="ramesh@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{ width: '100%', padding: '0.75rem', background: '#FFFFFF', border: errors.email ? '1px solid #EF4444' : '1px solid rgba(184,134,11,0.35)', borderRadius: '6px', color: '#1F2937' }}
            />
            {errors.email && <span style={{ color: '#DC2626', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>{errors.email}</span>}
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: '#8B6508', fontWeight: 600, marginBottom: '0.35rem' }}>
              Country *
            </label>
            <select 
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              style={{ width: '100%', padding: '0.75rem', background: '#FFFFFF', border: '1px solid rgba(184,134,11,0.35)', borderRadius: '6px', color: '#1F2937' }}
            >
              {countryList.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: '#8B6508', fontWeight: 600, marginBottom: '0.35rem' }}>
              City (Optional)
            </label>
            <input 
              type="text" 
              placeholder="e.g. Bengaluru"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              style={{ width: '100%', padding: '0.75rem', background: '#FFFFFF', border: '1px solid rgba(184,134,11,0.35)', borderRadius: '6px', color: '#1F2937' }}
            />
          </div>
        </div>

        {/* Language, Service Required, Consultation Method */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: '#8B6508', fontWeight: 600, marginBottom: '0.35rem' }}>
              Preferred Language *
            </label>
            <select 
              value={formData.language}
              onChange={(e) => setFormData({ ...formData, language: e.target.value })}
              style={{ width: '100%', padding: '0.75rem', background: '#FFFFFF', border: '1px solid rgba(184,134,11,0.35)', borderRadius: '6px', color: '#1F2937' }}
            >
              {languageOptions.map(l => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: '#8B6508', fontWeight: 600, marginBottom: '0.35rem' }}>
              Service Required *
            </label>
            <select 
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              style={{ width: '100%', padding: '0.75rem', background: '#FFFFFF', border: '1px solid rgba(184,134,11,0.35)', borderRadius: '6px', color: '#1F2937' }}
            >
              {servicesData.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: '#8B6508', fontWeight: 600, marginBottom: '0.35rem' }}>
              Consultation Method *
            </label>
            <select 
              value={formData.method}
              onChange={(e) => setFormData({ ...formData, method: e.target.value })}
              style={{ width: '100%', padding: '0.75rem', background: '#FFFFFF', border: '1px solid rgba(184,134,11,0.35)', borderRadius: '6px', color: '#1F2937' }}
            >
              <option value="WhatsApp / Call">WhatsApp / Phone Call</option>
              <option value="Video Call">HD Video Call</option>
              <option value="In-Person">In-Person Visit (Admin Enabled)</option>
            </select>
          </div>
        </div>

        {/* Preferred Date */}
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', color: '#8B6508', fontWeight: 600, marginBottom: '0.35rem' }}>
            Preferred Date (Optional Request - Subject to Slot Confirmation)
          </label>
          <input 
            type="date" 
            min={todayStr}
            value={formData.preferredDate}
            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
            style={{ width: '100%', padding: '0.75rem', background: '#FFFFFF', border: '1px solid rgba(184,134,11,0.35)', borderRadius: '6px', color: '#1F2937' }}
          />
        </div>

        {/* Concern Statement */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
            <label style={{ fontSize: '0.85rem', color: '#8B6508', fontWeight: 600 }}>
              Statement of Concern * (Max 1000 chars)
            </label>
            <span style={{ fontSize: '0.75rem', color: '#374151' }}>
              {formData.concern.length} / 1000
            </span>
          </div>

          <textarea 
            rows={4}
            required
            maxLength={1000}
            placeholder="Share a brief overview of your question or situation..."
            value={formData.concern}
            onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
            style={{ width: '100%', padding: '0.75rem', background: '#FFFFFF', border: errors.concern ? '1px solid #EF4444' : '1px solid rgba(184,134,11,0.35)', borderRadius: '6px', color: '#1F2937' }}
          />
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#B8860B', fontSize: '0.75rem', marginTop: '0.25rem' }}>
            <AlertCircle size={14} />
            <span>Privacy Warning: Do not include sensitive financial account passwords or legal case evidence files here.</span>
          </div>

          {errors.concern && <span style={{ color: '#DC2626', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>{errors.concern}</span>}
        </div>

        {/* File Upload */}
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', color: '#8B6508', fontWeight: 600, marginBottom: '0.35rem' }}>
            Palm / Face / Personal Photograph (Optional Secure Upload)
          </label>
          <div style={{ border: '1px dashed rgba(184,134,11,0.4)', borderRadius: '6px', padding: '1rem', textAlign: 'center', background: 'rgba(184,134,11,0.03)' }}>
            <Upload size={22} style={{ color: '#B8860B', marginBottom: '0.3rem' }} />
            <p style={{ fontSize: '0.8rem', color: '#374151' }}>
              {formData.fileName || "Click to select JPG or PNG image (Max 5MB limit)"}
            </p>
            <input 
              type="file" 
              accept="image/jpeg,image/png,image/jpg"
              onChange={handleFileChange}
              style={{ display: 'none' }}
              id="contact-file-upload"
            />
            <label htmlFor="contact-file-upload" style={{ cursor: 'pointer', display: 'block', width: '100%', height: '100%' }} />
          </div>
          {formData.fileError && <span style={{ color: '#DC2626', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>{formData.fileError}</span>}
        </div>

        {/* Privacy Consent */}
        <div>
          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: '#374151', cursor: 'pointer' }}>
            <input 
              type="checkbox"
              required
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              style={{ marginTop: '2px' }}
            />
            <span>
              I consent to the processing of my details strictly for private consultation purposes in accordance with the Privacy Policy. *
            </span>
          </label>
          {errors.consent && <span style={{ color: '#DC2626', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>{errors.consent}</span>}
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
          <button type="submit" className="btn btn-gold" style={{ flex: 1 }}>
            <Send size={18} />
            <span>Submit Private Enquiry</span>
          </button>

          <button type="button" className="btn btn-whatsapp" onClick={handleSendWhatsApp} style={{ flex: 1 }}>
            <MessageCircle size={18} />
            <span>Send Through WhatsApp</span>
          </button>
        </div>

      </form>
    </div>
  );
}
