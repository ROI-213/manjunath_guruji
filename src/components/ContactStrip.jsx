import React from 'react';
import { MessageCircle, Phone, Lock, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { trackEvent } from '../utils/analytics';

export default function ContactStrip({ data, contactData, onOpenBooking }) {
  const info = contactData || data || {};
  const whatsappUrl = info.whatsappUrl || "https://wa.me/919845657808";
  const callUrl = info.callUrl || "tel:+919845657808";
  const phoneDisplay = info.phoneDisplay || "+91 98456 57808";

  return (
    <motion.section 
      className="contact-strip cosmic-blue-strip"
      initial={{ opacity: 0.9, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      
      {/* 1. Celestial Background Twinkling Stars & Dust */}
      <div className="strip-celestial-bg">
        <div className="star-twinkle s1" />
        <div className="star-twinkle s2" />
        <div className="star-twinkle s3" />
        <div className="star-twinkle s4" />
        <div className="dust-particle p1" />
        <div className="dust-particle p2" />
        <div className="shooting-star" />
      </div>

      {/* 2. Floating Live Animated Planets */}
      <svg className="floating-planet planet-blue-strip" width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="7" fill="#60A5FA" opacity="0.8" />
        <ellipse cx="12" cy="12" rx="11" ry="3" stroke="#D4AF37" strokeWidth="1" transform="rotate(-20 12 12)" opacity="0.9" />
      </svg>

      <svg className="floating-planet moon-blue-strip" width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="#F3E5AB" opacity="0.75" />
      </svg>

      <div className="container strip-container">
        
        {/* Left Confidentiality Message */}
        <div className="strip-message">
          <div className="lock-icon-pulse">
            <Lock size={20} />
          </div>
          <div>
            <p style={{ color: '#FFFFFF', fontWeight: '700', margin: 0, fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span>{info.message || "Pandit Shekar Guruji can clear Bad energy, Black energy, Any kind of Witchcraft by performing powerful prayers."}</span>
              <Sparkles size={14} style={{ color: '#D4AF37' }} className="celestial-sparkle" />
            </p>
            <span style={{ fontSize: '0.86rem', color: '#F3E5AB', opacity: 0.9 }}>
              {info.confidentialityText || "100% Private, confidential consultation & powerful prayers available."}
            </span>
          </div>
        </div>

        {/* Right Live CTAs */}
        <div className="strip-actions">
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="btn btn-whatsapp btn-sm animated-glow-btn"
            onClick={() => trackEvent('whatsapp_click', { source: 'blue_contact_strip' })}
          >
            <MessageCircle size={16} />
            <span>WhatsApp {phoneDisplay}</span>
          </a>

          <a 
            href={callUrl} 
            className="btn btn-call-strip btn-sm"
            onClick={() => trackEvent('call_click', { source: 'blue_contact_strip' })}
          >
            <Phone size={16} />
            <span>Call {phoneDisplay}</span>
          </a>
        </div>

      </div>
    </motion.section>
  );
}
