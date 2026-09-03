import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import ScrollReveal from './Animated/ScrollReveal';
import SplitTextReveal from './Animated/SplitTextReveal';
import { motion } from 'framer-motion';

export default function ConsultationProcess({ steps, onOpenBooking }) {

  return (
    <section className="process-section" style={{ position: 'relative', padding: '4rem 0 3.5rem', background: 'radial-gradient(ellipse at 50% 10%, rgba(250,244,232,0.9) 0%, rgba(252,251,247,1) 100%)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2rem' }}>
          <ScrollReveal direction="down">
            <div className="badge-gold" style={{ marginBottom: '0.75rem' }}>
              <Sparkles size={14} className="celestial-sparkle" />
              <span>Step-by-Step Flow</span>
            </div>
          </ScrollReveal>

          <SplitTextReveal 
            text="Confidential Consultation Process"
            className="font-serif"
            style={{ fontSize: '2.2rem', color: '#1F2937', marginBottom: '0.6rem' }}
          />

          <ScrollReveal direction="up" delay={0.2}>
            <p style={{ color: '#4B5563', fontSize: '0.95rem' }}>From your initial contact to private remedies, explore the transparent 5-step consultation roadmap.</p>
          </ScrollReveal>
        </div>

        {/* ALL 5 STEPS IN SINGLE ROW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '0.75rem',
            width: '100%',
            marginBottom: '2rem'
          }}
        >
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: '#FFFFFF',
                borderRadius: '14px',
                border: '1.5px solid rgba(184, 134, 11, 0.18)',
                padding: '1.35rem 1rem 1.2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                textAlign: 'left',
                boxShadow: '0 4px 14px rgba(0,0,0,0.025), 0 1px 4px rgba(184,134,11,0.04)',
                transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = 'rgba(184, 134, 11, 0.5)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(184, 134, 11, 0.12), 0 4px 12px rgba(236, 72, 153, 0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(184, 134, 11, 0.18)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.025), 0 1px 4px rgba(184,134,11,0.04)';
              }}
            >
              {/* Top accent line */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #B8860B, #D4AF37)',
                borderRadius: '14px 14px 0 0'
              }} />

              {/* Step Number Badge */}
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(254,243,199,0.7) 0%, rgba(253,242,248,0.7) 100%)',
                border: '1.5px solid rgba(184,134,11,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-serif)',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#8B6508',
                marginBottom: '0.85rem'
              }}>
                {step.number}
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1rem',
                fontWeight: 700,
                color: '#1F2937',
                marginBottom: '0.4rem',
                lineHeight: 1.25,
                margin: '0 0 0.4rem'
              }}>
                {step.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '0.76rem',
                color: '#6B7280',
                lineHeight: 1.5,
                marginBottom: '0.65rem'
              }}>
                {step.description}
              </p>

              {/* Input Tags */}
              <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                {step.inputs.map((inp, i) => (
                  <span key={i} style={{
                    background: 'rgba(250,244,232,0.6)',
                    border: '1px solid rgba(184,134,11,0.15)',
                    color: '#715104',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '9999px',
                    fontSize: '0.65rem',
                    fontWeight: 600
                  }}>
                    {inp}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Connector arrows row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          marginBottom: '1.75rem'
        }}>
          {steps.map((_, idx) => (
            <React.Fragment key={idx}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #B8860B, #D4AF37)',
                boxShadow: '0 2px 6px rgba(184,134,11,0.25)'
              }} />
              {idx < steps.length - 1 && (
                <ArrowRight size={14} style={{ color: '#D4AF37', opacity: 0.5 }} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Confidentiality + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap'
          }}
        >
          <span style={{
            fontSize: '0.85rem',
            color: '#059669',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}>
            <CheckCircle2 size={16} />
            100% Confidential &bull; Private &bull; Respectful
          </span>

          <button
            onClick={() => onOpenBooking("Process Section")}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #8B6508 100%)',
              color: '#FFFFFF',
              fontSize: '0.9rem',
              fontWeight: 700,
              padding: '0.7rem 1.5rem',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 5px 18px rgba(184, 134, 11, 0.3)',
              transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
            }}
          >
            Start Your Reading Now
            <ArrowRight size={15} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
