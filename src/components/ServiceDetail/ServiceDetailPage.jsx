import React, { useState } from 'react';
import { 
  ShieldCheck, MessageCircle, Phone, Calendar, CheckCircle2, ChevronRight, Home, Lock, AlertCircle, ChevronDown, ChevronUp, Star, ArrowRight, UserCheck, Hand, Sparkles, HelpCircle, FileText
} from 'lucide-react';
import { servicesData } from '../../data/servicesDatabase';

export default function ServiceDetailPage({ serviceSlug, onNavigateServices, onSelectService, onOpenBooking, contactData }) {
  const service = servicesData.find(s => s.slug === serviceSlug) || servicesData[0];
  const [openFaq, setOpenFaq] = useState(0);

  // Find related services objects
  const relatedServices = servicesData.filter(s => 
    service.relatedServiceIds?.includes(s.id) && s.slug !== service.slug
  );

  return (
    <div className="service-detail-wrapper" style={{ paddingBottom: '5rem' }}>
      
      {/* 1. SERVICE HERO BANNER */}
      <section className="hero-section" style={{ padding: '3.5rem 0 3rem 0', background: 'radial-gradient(circle at 70% 30%, rgba(212, 175, 55, 0.12) 0%, transparent 70%)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9CA3AF', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
            <button onClick={onNavigateServices} style={{ background: 'none', border: 'none', color: '#D4AF37', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem', padding: 0 }}>
              <Home size={14} />
              <span>Services</span>
            </button>
            <ChevronRight size={14} />
            <span>{service.category}</span>
            <ChevronRight size={14} />
            <span style={{ color: '#1F2937' }}>{service.title}</span>
          </div>

          <div className="hero-grid" style={{ alignItems: 'center' }}>
            <div>
              <div className="badge-gold" style={{ marginBottom: '1rem' }}>
                <Sparkles size={14} />
                <span>{service.category}</span>
              </div>

              <h1 className="font-serif" style={{ fontSize: '3rem', color: '#1F2937', marginBottom: '1rem' }}>
                {service.title}
              </h1>

              {/* Special Bad & Black Energy / Witchcraft Clearing Feature Highlight */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                background: 'linear-gradient(90deg, rgba(212, 175, 55, 0.15) 0%, rgba(245, 158, 11, 0.15) 100%)',
                border: '1px solid rgba(212, 175, 55, 0.45)',
                borderRadius: '8px',
                padding: '0.45rem 0.95rem',
                marginBottom: '1.25rem',
                color: '#715104',
                fontSize: '0.92rem',
                fontWeight: 700
              }}>
                <Sparkles size={15} style={{ color: '#B8860B', flexShrink: 0 }} />
                <span>Pandit Shekar Guruji can clear Bad energy, Black energy, Any kind of Witchcraft by performing powerful prayers.</span>
              </div>

              <p style={{ color: '#374151', fontSize: '1.15rem', marginBottom: '2rem', maxWidth: '580px' }}>
                {service.shortDesc}
              </p>

              <div className="hero-ctas">
                <a href={contactData.whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
                  <MessageCircle size={18} />
                  <span>WhatsApp Guruji</span>
                </a>
                <button className="btn btn-gold" onClick={() => onOpenBooking(service.title)}>
                  <Calendar size={18} />
                  <span>Book Private Consultation</span>
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10B981', fontSize: '0.85rem', marginTop: '1rem' }}>
                <ShieldCheck size={18} />
                <span>100% Confidential & Private • Direct Access (+91 98456 57808)</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="portrait-frame" style={{ maxWidth: '400px' }}>
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="portrait-img" 
                  style={{ height: '380px', objectFit: 'cover' }} 
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/service_love.png';
                  }}
                />
                <div className="portrait-overlay-tag">
                  <h4>{service.title}</h4>
                  <p>Pandit Shekar Guruji Consultation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & WHO MAY REQUEST */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <h2 className="font-serif" style={{ fontSize: '2rem', color: '#1F2937', marginBottom: '1rem' }}>
              Overview & Scope of Guidance
            </h2>

            <p style={{ color: '#374151', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              {service.overview}
            </p>

            <h3 style={{ fontSize: '1.2rem', color: '#715104', marginBottom: '1rem' }}>
              Who May Request This Consultation:
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
              {service.whoShouldRequest.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', background: 'rgba(184, 134, 11, 0.05)', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid rgba(184, 134, 11, 0.15)' }}>
                  <CheckCircle2 size={18} style={{ color: '#D4AF37', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.95rem', color: '#1F2937' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMMON CONCERNS */}
      <section style={{ padding: '3.5rem 0', background: 'rgba(255, 255, 255, 0.015)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <h2>Common Concerns Addressed</h2>
            <p>Respectful evaluation of personal queries visitors frequently consult Guruji about.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem', maxWidth: '900px', margin: '0 auto' }}>
            {service.commonConcerns.map((concern, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.12)', border: '1px solid rgba(212, 175, 55, 0.3)', color: '#D4AF37', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.85rem', flexShrink: 0 }}>
                  {idx + 1}
                </div>
                <span style={{ color: '#1F2937', fontSize: '0.95rem' }}>{concern}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONSULTATION METHODS & 5. WHAT TO SHARE / REQUIRED INFO */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="about-grid">
            
            {/* 4. Methods Available */}
            <div className="glass-card" style={{ padding: '2rem' }}>
              <div className="badge-gold" style={{ marginBottom: '1rem' }}>
                <span>Available Consultation Channels</span>
              </div>
              <h3 className="font-serif" style={{ fontSize: '1.6rem', color: '#1F2937', marginBottom: '1.25rem' }}>
                Consultation Methods
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {service.methodsAvailable.map((method, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(184, 134, 11, 0.05)', padding: '0.85rem 1rem', borderRadius: '6px' }}>
                    <Sparkles size={16} style={{ color: '#D4AF37', flexShrink: 0 }} />
                    <span style={{ color: '#1F2937', fontSize: '0.95rem' }}>{method}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. What to Share / Required Information */}
            <div className="glass-card" style={{ padding: '2rem' }}>
              <div className="badge-gold" style={{ marginBottom: '1rem' }}>
                <span>Visitor Checklist</span>
              </div>
              <h3 className="font-serif" style={{ fontSize: '1.6rem', color: '#1F2937', marginBottom: '1.25rem' }}>
                What to Share (Suggested Information)
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {(service.whatToShare || service.requiredInformation).map((info, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(59, 130, 246, 0.08)', border: '1px solid rgba(59, 130, 246, 0.2)', padding: '0.85rem 1rem', borderRadius: '6px' }}>
                    <Lock size={16} style={{ color: '#2563EB', flexShrink: 0 }} />
                    <span style={{ color: '#1F2937', fontSize: '0.95rem' }}>{info}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. HOW THE CONSULTATION WORKS */}
      <section style={{ padding: '4rem 0', background: 'rgba(255, 255, 255, 0.015)' }}>
        <div className="container">
          <div className="section-header">
            <h2>How the Consultation Works</h2>
            <p>A simple, confidential step-by-step process designed for your peace of mind.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {service.howItWorks.map((step) => (
              <div key={step.step} className="glass-card" style={{ textAlign: 'center', padding: '1.75rem 1.25rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--gold-gradient)', color: '#FFFFFF', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                  {step.step}
                </div>
                <h4 style={{ fontSize: '1.1rem', color: '#1F2937', marginBottom: '0.5rem' }}>{step.title}</h4>
                <p style={{ fontSize: '0.85rem', color: '#374151' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. RELATED PRAYER OPTIONS & 8. WHY CONSULT SHEKAR GURUJI */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="about-grid">
            {/* 7. Prayers */}
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 className="font-serif" style={{ fontSize: '1.5rem', color: '#1F2937', marginBottom: '1.25rem' }}>
                Related Prayer Support Options
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {service.prayerOptions.map((prayer, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(212, 175, 55, 0.08)', padding: '0.85rem 1rem', borderRadius: '6px', borderLeft: '3px solid #D4AF37' }}>
                    <span style={{ color: '#715104', fontSize: '0.95rem', fontWeight: 600 }}>{prayer}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 8. Why Consult */}
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 className="font-serif" style={{ fontSize: '1.5rem', color: '#1F2937', marginBottom: '1.25rem' }}>
                Why Consult Pandit Shekar Guruji
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {service.whyConsult.map((pillar, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#1F2937', fontSize: '0.95rem' }}>
                    <CheckCircle2 size={18} style={{ color: '#10B981', flexShrink: 0 }} />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. APPROVED RELATED TESTIMONIALS */}
      {service.testimonials && service.testimonials.length > 0 && (
        <section style={{ padding: '4rem 0', background: 'rgba(255, 255, 255, 0.015)' }}>
          <div className="container">
            <div className="section-header">
              <h2>Visitor Experiences for {service.title}</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
              {service.testimonials.map((t, idx) => (
                <div key={idx} className="testimonial-card">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <h4 style={{ color: '#1F2937' }}>{t.name} ({t.location})</h4>
                    <div style={{ display: 'flex', gap: '2px' }}>
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#D4AF37" color="#D4AF37" />)}
                    </div>
                  </div>
                  <p style={{ fontStyle: 'italic', color: '#374151', fontSize: '0.95rem' }}>"{t.comment}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 10. SERVICE-SPECIFIC FAQS */}
      {service.faqs && service.faqs.length > 0 && (
        <section style={{ padding: '4rem 0' }}>
          <div className="container">
            <div className="section-header">
              <h2>{service.title} - FAQs ({service.faqs.length})</h2>
            </div>
            <div className="faq-list">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="faq-item">
                  <button className="faq-question" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                    <span>{faq.q}</span>
                    {openFaq === idx ? <ChevronUp size={18} style={{ color: '#D4AF37' }} /> : <ChevronDown size={18} />}
                  </button>
                  {openFaq === idx && (
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 11. MANDATORY RESPONSIBLE CONTENT DISCLAIMER BOX */}
      <section style={{ padding: '2.5rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="mandatory-disclaimer" style={{ background: 'rgba(212, 175, 55, 0.08)', borderLeft: '4px solid #D4AF37', padding: '1.5rem', borderRadius: '0 8px 8px 0' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
              <AlertCircle size={24} style={{ color: '#D4AF37', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ color: '#715104', fontSize: '1.05rem', marginBottom: '0.35rem', fontWeight: 600 }}>
                  Mandatory Responsible Content & Ethical Policy
                </h4>
                <p style={{ color: '#374151', fontSize: '0.92rem', lineHeight: '1.65' }}>
                  {service.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. CALL AND WHATSAPP CTA BANNER */}
      <section style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div className="glass-card" style={{ textAlign: 'center', padding: '3rem 2rem', background: 'linear-gradient(135deg, #FFFDF9 0%, #FAF4E8 100%)' }}>
            <h2 className="font-serif" style={{ fontSize: '2.25rem', color: '#1F2937', marginBottom: '1rem' }}>
              Speak Privately with Pandit Shekar Guruji
            </h2>
            <p style={{ color: '#374151', fontSize: '1.05rem', marginBottom: '2rem', maxWidth: '650px', margin: '0 auto 2rem auto' }}>
              Schedule your private {service.title} consultation via WhatsApp or Phone (+91 98456 57808) in complete confidentiality.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={contactData.whatsappUrl || "https://wa.me/919845657808"} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
                <MessageCircle size={18} />
                <span>WhatsApp +91 98456 57808</span>
              </a>

              <a href={contactData.callUrl || "tel:+919845657808"} className="btn btn-call">
                <Phone size={18} />
                <span>Call +91 98456 57808</span>
              </a>

              <button className="btn btn-gold" onClick={() => onOpenBooking(service.title)}>
                <Calendar size={18} />
                <span>Book Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 13. RELATED SERVICES CAROUSEL / GRID */}
      {relatedServices.length > 0 && (
        <section style={{ padding: '3rem 0', background: 'rgba(255, 255, 255, 0.015)' }}>
          <div className="container">
            <div className="section-header">
              <h2>Related Consultations</h2>
            </div>
            <div className="categories-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              {relatedServices.map((rel) => (
                <div key={rel.id} className="glass-card" style={{ padding: '1.5rem' }}>
                  <h4 style={{ color: '#1F2937', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{rel.title}</h4>
                  <p style={{ color: '#374151', fontSize: '0.85rem', marginBottom: '1rem' }}>{rel.shortDesc}</p>
                  <button 
                    className="btn btn-outline btn-sm btn-full"
                    onClick={() => onSelectService(rel.slug)}
                  >
                    <span>View Service</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
