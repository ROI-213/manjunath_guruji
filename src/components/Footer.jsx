import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import ScrollReveal from './Animated/ScrollReveal';
import { trackEvent } from '../utils/analytics';
import './Footer.css';

export default function Footer({ data, onNavigate }) {
  const phone = data.phone || "+91 98456 57808";
  const email = data.email || "shekarbaba001@gmail.com";
  const address = data.address || "1st block 13th cross Akshayanagar T C Palya main road Bangalore-560016";
  const whatsappUrl = `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=Hello%20Pandit%20Shekar%20Guruji,%20I%20would%20like%20to%20consult%20you.`;
  const callUrl = `tel:${phone.replace(/\s+/g, '')}`;

  return (
    <footer className="site-footer">
      {/* Continuous Seamless Sliding Background Image */}
      <div className="footer-sliding-bg" />

      {/* Ambient Glowing Orbs */}
      <div className="footer-ambient-orb-1" />
      <div className="footer-ambient-orb-2" />

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        
        {/* Main Two-Column Split: Left Logo/Brand + Right Contact/Links */}
        <ScrollReveal direction="up">
          <div className="footer-main-split">
            
            {/* LEFT END: Logo & Guruji Brand Info */}
            <div className="footer-left-brand">
              <div className="footer-brand-header">
                <div className="footer-logo-ring">
                  <img src="/logo.png" alt="Astro Psychic India Logo" className="footer-logo-img" />
                </div>
                <div>
                  <h3 className="footer-brand-title">
                    {data.title || "ASTRO PSYCHIC INDIA"}
                  </h3>
                  <p className="footer-brand-subtitle">
                    {data.subtitle || "Pandit Shekar Guruji"}
                  </p>
                </div>
              </div>

              <p className="footer-brand-desc">
                Decades of authentic Vedic astrological lineage, palm observation, Kundali analysis, and powerful spiritual prayers for clearing Bad energy, Black energy &amp; Witchcraft.
              </p>

              <div className="footer-brand-quick-actions">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-whatsapp btn-sm"
                  onClick={() => trackEvent('whatsapp_click', { source: 'footer_left_brand' })}
                >
                  <MessageCircle size={15} />
                  <span>WhatsApp Guruji</span>
                </a>
                <a 
                  href={callUrl} 
                  className="btn btn-call btn-sm"
                  onClick={() => trackEvent('call_click', { source: 'footer_left_brand' })}
                >
                  <Phone size={15} />
                  <span>Call Directly</span>
                </a>
              </div>
            </div>

            {/* RIGHT END: Contact Cards & Navigation */}
            <div className="footer-right-content">
              <div className="footer-contact-grid">
                
                <a href={callUrl} className="footer-contact-card" onClick={() => trackEvent('call_click', { source: 'footer_card' })}>
                  <div className="footer-icon-circle" style={{ background: 'rgba(37, 99, 235, 0.18)', color: '#60A5FA' }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="footer-contact-label">Phone</span>
                    <span className="footer-contact-val">{phone}</span>
                  </div>
                </a>

                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="footer-contact-card" onClick={() => trackEvent('whatsapp_click', { source: 'footer_card' })}>
                  <div className="footer-icon-circle" style={{ background: 'rgba(37, 211, 102, 0.18)', color: '#4ADE80' }}>
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <span className="footer-contact-label">WhatsApp</span>
                    <span className="footer-contact-val">{phone}</span>
                  </div>
                </a>

                <a href={`mailto:${email}`} className="footer-contact-card">
                  <div className="footer-icon-circle" style={{ background: 'rgba(217, 119, 6, 0.18)', color: '#FCD34D' }}>
                    <Mail size={18} />
                  </div>
                  <div style={{ overflow: 'hidden' }}>
                    <span className="footer-contact-label">Email</span>
                    <span className="footer-contact-val" style={{ wordBreak: 'break-all', fontSize: '0.85rem' }}>{email}</span>
                  </div>
                </a>

                <div className="footer-contact-card">
                  <div className="footer-icon-circle" style={{ background: 'rgba(236, 72, 153, 0.18)', color: '#F472B6' }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="footer-contact-label">Address</span>
                    <span className="footer-contact-val" style={{ fontSize: '0.8rem', lineHeight: '1.3' }}>
                      {address}
                    </span>
                  </div>
                </div>

              </div>

              {/* Navigation Links */}
              <div className="footer-nav-row">
                <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="footer-nav-link">Home</a>
                <a href="#about-page" onClick={(e) => { e.preventDefault(); onNavigate('about'); }} className="footer-nav-link">About Us</a>
                <a href="#services-page" onClick={(e) => { e.preventDefault(); onNavigate('services'); }} className="footer-nav-link">Services</a>
                <a href="#gallery-page" onClick={(e) => { e.preventDefault(); onNavigate('gallery'); }} className="footer-nav-link">Gallery</a>
                <a href="#testimonials-page" onClick={(e) => { e.preventDefault(); onNavigate('testimonials'); }} className="footer-nav-link">Testimonials</a>
                <a href="#faqs-page" onClick={(e) => { e.preventDefault(); onNavigate('faqs'); }} className="footer-nav-link">FAQs</a>
                <a href="#contact-page" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} className="footer-nav-link">Contact Us</a>
              </div>
            </div>

          </div>
        </ScrollReveal>

        {/* Mandatory Responsible Guidance Disclaimer */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="footer-disclaimer-card">
            <p className="footer-disclaimer-text">
              <strong style={{ color: '#FCD34D' }}>Responsible Consultation Disclaimer:</strong> Spiritual &amp; psychic readings offered by Pandit Shekar Guruji are personal observations based on traditional Indian palmistry, date of birth, face reading, and spiritual prayer traditions. Outcomes may vary from individual to individual. Services do not replace certified medical, legal, financial, or psychological professionals. Emergency crisis support: Tele-MANAS (14416).
            </p>
          </div>
        </ScrollReveal>

        {/* Legal Links & Copyright */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="footer-bottom-bar">
            <div className="footer-legal-links">
              <a href="#privacy" onClick={(e) => { e.preventDefault(); onNavigate('privacy'); }} className="footer-legal-link">Privacy Policy</a>
              <span>•</span>
              <a href="#terms" onClick={(e) => { e.preventDefault(); onNavigate('terms'); }} className="footer-legal-link">Terms &amp; Conditions</a>
              <span>•</span>
              <a href="#disclaimer-page" onClick={(e) => { e.preventDefault(); onNavigate('disclaimer-page'); }} className="footer-legal-link">Disclaimer</a>
              <span>•</span>
              <a href="#cookie-policy" onClick={(e) => { e.preventDefault(); onNavigate('cookie-policy'); }} className="footer-legal-link">Cookie Policy</a>
              <span>•</span>
              <a href="#refund-policy" onClick={(e) => { e.preventDefault(); onNavigate('refund-policy'); }} className="footer-legal-link">Refund Policy</a>
            </div>

            <p className="footer-copyright-text">
              © {new Date().getFullYear()} {data.title || "Astro Psychic India"}. All rights reserved. Confidential Indian Astrology &amp; Spiritual Prayers.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </footer>
  );
}
