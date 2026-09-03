import React, { useState } from 'react';
import { Hand, Sparkles, HelpCircle, ArrowRight, Shield, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PALM_LINES = [
  {
    id: 'lifeline',
    title: 'Life Line (Ayur Rekha)',
    position: 'Curving around the thumb base',
    focus: 'Vitality, major life changes, physical well-being & longevity potential',
    details: 'Pandit Shekar Guruji evaluates line clarity, breaks, and supporting mounts to guide health choices and personal energy timing.',
    color: '#D97706'
  },
  {
    id: 'heartline',
    title: 'Heart Line (Hridaya Rekha)',
    position: 'Horizontal line at top of palm under fingers',
    focus: 'Emotional harmony, relationship stability, partner understanding & trust',
    details: 'Indicates your emotional nature, partner compatibility, and deeper relationship feelings.',
    color: '#E11D48'
  },
  {
    id: 'headline',
    title: 'Head Line (Masti Rekha)',
    position: 'Middle horizontal line across palm',
    focus: 'Intellect, decision-making clarity, career focus & mental peace',
    details: 'Shows thought patterns, mental resilience under stress, and career problem-solving abilities.',
    color: '#2563EB'
  },
  {
    id: 'fateline',
    title: 'Fate Line (Bhagya Rekha)',
    position: 'Vertical line rising up center of palm',
    focus: 'Career trajectory, financial stability, success cycles & life destiny',
    details: 'Reveals professional turning points, business luck, and timing of major achievements.',
    color: '#059669'
  },
  {
    id: 'sunmount',
    title: 'Sun Mount & Line (Surya Parvat)',
    position: 'Mount below ring finger',
    focus: 'Fame, reputation, artistic gifts, social status & prosperity',
    details: 'Enhances public standing, recognition in career, and protection against slander.',
    color: '#B8860B'
  }
];

export default function InteractivePalmistryGuide({ onOpenBooking }) {
  const [activeLine, setActiveLine] = useState(PALM_LINES[0]);

  return (
    <section className="palmistry-guide-section" style={{ padding: '4rem 0', background: '#FCFBF7', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
          <div className="badge-gold" style={{ marginBottom: '0.85rem' }}>
            <Hand size={14} />
            <span>Palmistry Observation Insights</span>
          </div>
          <h2 className="font-serif" style={{ fontSize: '2.4rem', color: '#1F2937', marginBottom: '0.75rem' }}>
            How Palm Line Observation Works
          </h2>
          <p style={{ color: '#4B5563', fontSize: '1.05rem' }}>
            Explore the key palm lines and mounts that Pandit Shekar Guruji inspects during your private palm reading session.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          alignItems: 'center'
        }}>

          {/* Line Selection Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {PALM_LINES.map((line) => {
              const isActive = activeLine.id === line.id;
              return (
                <button
                  key={line.id}
                  onClick={() => setActiveLine(line)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.1rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    background: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.7)',
                    border: isActive ? `2px solid ${line.color}` : '1px solid var(--border-subtle)',
                    boxShadow: isActive ? '0 8px 25px rgba(0,0,0,0.06)' : 'none',
                    cursor: 'pointer',
                    transition: 'var(--transition)',
                    textAlign: 'left'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: line.color,
                      boxShadow: isActive ? `0 0 10px ${line.color}` : 'none'
                    }} />
                    <div>
                      <h4 className="font-serif" style={{ fontSize: '1.05rem', color: '#1F2937', margin: 0 }}>{line.title}</h4>
                      <p style={{ fontSize: '0.82rem', color: '#6B7280', margin: 0 }}>{line.position}</p>
                    </div>
                  </div>
                  <Sparkles size={16} style={{ color: isActive ? line.color : '#CBD5E1' }} />
                </button>
              );
            })}
          </div>

          {/* Active Detail Display Box */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLine.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              style={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #FAF4E8 100%)',
                padding: '2.25rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-gold)',
                boxShadow: 'var(--shadow-gold)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '6px',
                height: '100%',
                backgroundColor: activeLine.color
              }} />

              <div className="badge-gold" style={{ marginBottom: '1rem', borderColor: activeLine.color, color: activeLine.color }}>
                <CheckCircle2 size={13} />
                <span>Selected Line Highlight</span>
              </div>

              <h3 className="font-serif" style={{ fontSize: '1.75rem', color: '#1F2937', marginBottom: '0.5rem' }}>
                {activeLine.title}
              </h3>

              <div style={{ background: 'rgba(255,255,255,0.8)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.82rem', color: '#715104', fontWeight: 600, display: 'block', textTransform: 'uppercase' }}>
                  Primary Line Location
                </span>
                <span style={{ fontSize: '0.95rem', color: '#1F2937' }}>{activeLine.position}</span>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <h4 style={{ fontSize: '0.9rem', color: '#715104', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  Key Areas Evaluated
                </h4>
                <p style={{ color: '#374151', fontSize: '1.02rem', lineHeight: '1.6' }}>
                  {activeLine.focus}
                </p>
              </div>

              <div style={{ marginBottom: '1.75rem' }}>
                <h4 style={{ fontSize: '0.9rem', color: '#715104', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  Guruji’s Observation Technique
                </h4>
                <p style={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {activeLine.details}
                </p>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <button
                  className="btn btn-gold btn-full"
                  onClick={() => onOpenBooking && onOpenBooking(`Palm Reading - ${activeLine.title}`)}
                >
                  <Hand size={16} />
                  <span>Send Your Palm Photo for Evaluation</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
