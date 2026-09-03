import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Sparkles } from 'lucide-react';
import ContactHero from './ContactHero';
import EmergencyNotice from './EmergencyNotice';
import ContactForm from './ContactForm';
import CallbackModal from './CallbackModal';
import ContactSuccessState from './ContactSuccessState';

export default function ContactPage({ contactData, onOpenBooking }) {
  const [submissionData, setSubmissionData] = useState(null);
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);

  return (
    <div className="contact-page-wrapper" style={{ paddingBottom: '5rem' }}>
      
      {/* Hero Banner & Quick Cards */}
      <ContactHero 
        contactData={contactData}
        onOpenBooking={onOpenBooking}
        onOpenCallback={() => setIsCallbackOpen(true)}
      />

      {/* Side-by-Side Main Split: Left Info + Right Form */}
      <div className="container" style={{ maxWidth: '1240px', margin: '2rem auto 0 auto', padding: '0 1rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.3fr)',
          gap: '2rem',
          alignItems: 'start'
        }} className="contact-main-split-grid">
          
          {/* LEFT SIDE: Emergency Notice + Official Center Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Mandatory Emergency Notice Banner */}
            <EmergencyNotice />

            {/* Direct Contact & Center Address Details Card */}
            <div style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #FDFBF7 100%)',
              borderRadius: '16px',
              border: '1.5px solid rgba(184, 134, 11, 0.3)',
              padding: '1.75rem',
              boxShadow: '0 8px 30px rgba(184, 134, 11, 0.08)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <div className="badge-gold">
                  <Sparkles size={13} />
                  <span>Official Consultation Center Details</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Phone */}
                <a href="tel:+919845657808" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none', color: '#1F2937', padding: '0.85rem', background: '#FFFFFF', borderRadius: '12px', border: '1px solid rgba(37, 99, 235, 0.2)', transition: 'all 0.2s ease', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(37, 99, 235, 0.1)', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#6B7280', fontWeight: 600, textTransform: 'uppercase', display: 'block' }}>Phone Call</span>
                    <span style={{ fontSize: '0.98rem', fontWeight: 700, color: '#1F2937' }}>+91 98456 57808</span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a href="https://wa.me/919845657808" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none', color: '#1F2937', padding: '0.85rem', background: '#FFFFFF', borderRadius: '12px', border: '1px solid rgba(37, 211, 102, 0.2)', transition: 'all 0.2s ease', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(37, 211, 102, 0.1)', color: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#6B7280', fontWeight: 600, textTransform: 'uppercase', display: 'block' }}>WhatsApp Chat</span>
                    <span style={{ fontSize: '0.98rem', fontWeight: 700, color: '#1F2937' }}>+91 98456 57808</span>
                  </div>
                </a>

                {/* Email */}
                <a href="mailto:shekarbaba001@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none', color: '#1F2937', padding: '0.85rem', background: '#FFFFFF', borderRadius: '12px', border: '1px solid rgba(217, 119, 6, 0.2)', transition: 'all 0.2s ease', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(217, 119, 6, 0.1)', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={20} />
                  </div>
                  <div style={{ overflow: 'hidden' }}>
                    <span style={{ fontSize: '0.75rem', color: '#6B7280', fontWeight: 600, textTransform: 'uppercase', display: 'block' }}>Email Address</span>
                    <span style={{ fontSize: '0.92rem', fontWeight: 700, color: '#1F2937', wordBreak: 'break-all' }}>shekarbaba001@gmail.com</span>
                  </div>
                </a>

                {/* Address */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem', color: '#1F2937', padding: '0.85rem', background: '#FFFFFF', borderRadius: '12px', border: '1px solid rgba(220, 38, 38, 0.2)', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(220, 38, 38, 0.1)', color: '#DC2626', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#6B7280', fontWeight: 600, textTransform: 'uppercase', display: 'block' }}>Consultation Center Address</span>
                    <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#374151', lineHeight: '1.4', display: 'block' }}>
                      1st block 13th cross Akshayanagar T C Palya main road Bangalore-560016
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Main Intake Form or Success Screen */}
          <div>
            {!submissionData ? (
              <ContactForm 
                contactData={contactData}
                onSubmitSuccess={(data) => {
                  setSubmissionData(data);
                  window.scrollTo({ top: 100, behavior: 'smooth' });
                }}
              />
            ) : (
              <ContactSuccessState 
                submissionData={submissionData}
                contactData={contactData}
                onReset={() => setSubmissionData(null)}
              />
            )}
          </div>

        </div>

        <style>{`
          @media (max-width: 992px) {
            .contact-main-split-grid {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
          }
        `}</style>
      </div>

      {/* Quick Callback Modal */}
      <CallbackModal 
        isOpen={isCallbackOpen}
        onClose={() => setIsCallbackOpen(false)}
      />

    </div>
  );
}
