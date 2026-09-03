import React from 'react';
import { 
  MessageCircle, 
  Phone, 
  Calendar, 
  ChevronLeft, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import './HeroBanner.css';

export default function HeroBanner({ heroData, contactData, onOpenBooking }) {
  // 100% Preserved Original Content from props
  const heading = heroData?.heading || "Find Guidance for Life’s Difficult Situations.";
  const supportingCopy = heroData?.supportingCopy || "Pandit Shekar Guruji can clear Bad energy, Black energy, Any kind of Witchcraft by performing powerful prayers. Guruji offers private psychic readings and spiritual consultations using palm observation, date of birth, face reading and photographs.";
  const highlightLine = heroData?.highlightLine || "Bad & Black Energy Clearing • Past, Present & Future Guidance";
  const primaryCtaText = heroData?.primaryCtaText || "WhatsApp Guruji";
  const secondaryCtaText = heroData?.secondaryCtaText || "Call Now";
  const tertiaryCtaText = heroData?.tertiaryCtaText || "Book a Private Consultation";

  const whatsappNumber = contactData?.whatsapp || "919845657808";
  const cleanWhatsapp = whatsappNumber.replace(/[^0-9]/g, '');
  const callUrl = contactData?.callUrl || "tel:+919845657808";
  const whatsappUrl = `https://wa.me/${cleanWhatsapp}?text=Hello%20Pandit%20Shekar%20Guruji,%20I%20would%20like%20to%20consult%20with%20you.`;

  return (
    <div className="ref-hero-outer-wrapper">
      
      {/* MAIN HORIZONTAL HERO BANNER */}
      <section className="ref-hero-banner-section" aria-label="Pandit Shekar Guruji Vedic Astrology Banner">
        
        {/* Full-Width Panoramic Background Image & Ambient Gradients */}
        <div className="ref-hero-bg-canvas" />
        <div className="ref-hero-gradient-overlay" />
        <div className="ref-hero-edge-left" />
        <div className="ref-hero-edge-right" />

        {/* Carousel Navigation Arrows */}
        <button 
          className="ref-hero-arrow ref-hero-arrow-left" 
          aria-label="Previous Banner"
          onClick={() => {}}
        >
          <ChevronLeft size={18} />
        </button>

        <button 
          className="ref-hero-arrow ref-hero-arrow-right" 
          aria-label="Next Banner"
          onClick={() => {}}
        >
          <ChevronRight size={18} />
        </button>

        {/* Inner Grid Container */}
        <div className="ref-hero-inner-container">
          
          {/* Left 45-50% Space (Highlights sacred Kalash, Diyas, and golden sunburst aura) */}
          <div className="ref-hero-left-art-space" />

          {/* Right 40-45% Content Area (Original Content in Reference Style) */}
          <div className="ref-hero-right-content">
            
            {/* Original Highlight Line Badge */}
            <div className="ref-hero-badge-tag">
              <Sparkles size={13} />
              <span>{highlightLine}</span>
            </div>

            {/* Original Heading */}
            <h1 className="ref-hero-title">
              {heading}
            </h1>

            {/* Special Bad/Black Energy & Witchcraft Clearing Highlight Ribbon */}
            <div className="ref-hero-clearing-badge">
              <Sparkles size={13} style={{ color: '#FFE680', flexShrink: 0 }} />
              <span><strong>Pandit Shekar Guruji can clear Bad energy, Black energy, Any kind of Witchcraft by performing powerful prayers.</strong></span>
            </div>

            {/* Original Supporting Copy */}
            <p className="ref-hero-desc">
              {supportingCopy}
            </p>

            {/* Original Action CTA Buttons */}
            <div className="ref-hero-cta-group">
              
              {/* Primary CTA (WhatsApp Guruji) */}
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="ref-btn-whatsapp-hero"
                onClick={() => trackEvent('whatsapp_click', { source: 'hero_ref_banner' })}
              >
                <MessageCircle size={15} />
                <span>{primaryCtaText}</span>
              </a>

              {/* Tertiary CTA (Book a Private Consultation) */}
              <button 
                type="button"
                className="ref-btn-book-hero"
                onClick={() => {
                  trackEvent('booking_request', { source: 'hero_ref_banner' });
                  if (onOpenBooking) onOpenBooking();
                }}
              >
                <Calendar size={14} />
                <span>{tertiaryCtaText}</span>
              </button>

              {/* Secondary CTA (Call Now) */}
              <a 
                href={callUrl} 
                className="ref-btn-call-hero"
                onClick={() => trackEvent('call_click', { source: 'hero_ref_banner' })}
              >
                <Phone size={13} />
                <span>{secondaryCtaText}</span>
              </a>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}
