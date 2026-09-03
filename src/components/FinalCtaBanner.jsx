import React from 'react';
import { MessageCircle, Phone, Calendar, Sparkles } from 'lucide-react';
import ScrollReveal from './Animated/ScrollReveal';
import SplitTextReveal from './Animated/SplitTextReveal';
import MagneticButton from './Animated/MagneticButton';
import { trackEvent } from '../utils/analytics';

export default function FinalCtaBanner({ contactData, onOpenBooking }) {
  const contact = contactData || {};
  const whatsappUrl = contact.whatsappUrl || (contact.whatsapp ? `https://wa.me/${contact.whatsapp}` : "https://wa.me/919845657808");
  const callUrl = contact.callUrl || "tel:+919845657808";

  return (
    <section className="final-cta-section" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Radial Gold Pulse Aura */}
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, rgba(252, 251, 247, 0) 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="cta-box">
          
          <ScrollReveal direction="down">
            <div className="badge-gold" style={{ marginBottom: '1rem' }}>
              <Sparkles size={14} className="celestial-sparkle" />
              <span>Private Spiritual Guidance</span>
            </div>
          </ScrollReveal>

          <SplitTextReveal 
            text="Ready to Discuss Your Difficult Situation?"
            className="font-serif"
            style={{ fontSize: '2.6rem', color: '#1F2937', marginBottom: '1rem' }}
          />

          <ScrollReveal direction="up" delay={0.2}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              background: 'linear-gradient(90deg, rgba(212, 175, 55, 0.15) 0%, rgba(245, 158, 11, 0.15) 100%)',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              borderRadius: '9999px',
              padding: '0.4rem 1.1rem',
              marginBottom: '1rem',
              color: '#715104',
              fontSize: '0.92rem',
              fontWeight: 700
            }}>
              <Sparkles size={15} style={{ color: '#B8860B' }} />
              <span>Pandit Shekar Guruji can clear Bad energy, Black energy, Any kind of Witchcraft by performing powerful prayers.</span>
            </div>
            <p style={{ color: '#4B5563' }}>Speak directly with Pandit Shekar Guruji via Phone or WhatsApp for respectful, confidential insights into your past, present, and future possibilities, and clearing negative obstacles.</p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              
              <MagneticButton
                href={whatsappUrl}
                target="_blank"
                className="btn btn-whatsapp animated-glow-btn"
                onClick={() => trackEvent('whatsapp_click', { source: 'final_cta' })}
              >
                <MessageCircle size={18} />
                <span>WhatsApp Guruji Now</span>
              </MagneticButton>

              <MagneticButton
                href={callUrl}
                className="btn btn-call"
                onClick={() => trackEvent('call_click', { source: 'final_cta' })}
              >
                <Phone size={18} />
                <span>Call Guruji Directly</span>
              </MagneticButton>

              <MagneticButton
                className="btn btn-gold animated-gold-pulse"
                onClick={() => {
                  trackEvent('booking_request', { source: 'final_cta' });
                  onOpenBooking("Final CTA Banner");
                }}
              >
                <Calendar size={18} />
                <span>Book Private Consultation</span>
              </MagneticButton>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
