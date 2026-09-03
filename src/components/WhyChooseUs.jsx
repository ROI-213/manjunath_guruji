import React, { useState } from 'react';
import { ShieldCheck, Sparkles, Award, Lock, Eye, Compass, Heart, Scale, Check, X } from 'lucide-react';
import ScrollReveal from './Animated/ScrollReveal';
import SplitTextReveal from './Animated/SplitTextReveal';
import TiltCard from './Animated/TiltCard';

const iconMap = {
  0: ShieldCheck,
  1: Lock,
  2: Eye,
  3: Compass,
  4: Heart,
  5: Scale,
  6: Award,
  7: Sparkles
};

const COMPARISON_ITEMS = [
  { feature: 'Confidentiality Guarantee', guruji: '100% Encrypted & Post-Session Data Deletion', generic: 'Uncertain data retention' },
  { feature: 'Messaging Approach', guruji: 'Positive, Empowering & Solution-Focused', generic: 'Often fear-based or alarmist' },
  { feature: 'Remedy Transparency', guruji: 'Authentic Traditional Prayers & Horoscopes', generic: 'Costly mandatory gemstone push' },
  { feature: 'Accessibility', guruji: 'Direct Personal WhatsApp & Phone Access', generic: 'Call-center / bot intermediaries' },
  { feature: 'Ethical Stance', guruji: 'Respectful non-guaranteed genuine advice', generic: 'False 100% instant outcome claims' }
];

export default function WhyChooseUs({ features }) {
  const [showMatrix, setShowMatrix] = useState(false);

  return (
    <section className="why-section" style={{ position: 'relative', padding: '5rem 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <ScrollReveal direction="down">
            <div className="badge-gold" style={{ marginBottom: '1rem' }}>
              <ShieldCheck size={14} />
              <span>Trust & Ethical Standards</span>
            </div>
          </ScrollReveal>

          <SplitTextReveal 
            text="Why Consult Pandit Shekar Guruji"
            className="font-serif"
            style={{ fontSize: '2.5rem', color: '#1F2937', marginBottom: '0.85rem' }}
          />

          <ScrollReveal direction="up" delay={0.2}>
            <p style={{ color: '#374151' }}>Built on authentic Indian spiritual traditions, 100% discretion, and honest non-guaranteed ethical standards.</p>
          </ScrollReveal>
        </div>

        {/* Feature Cards Grid */}
        <div className="why-grid" style={{ marginBottom: '3rem' }}>
          {features.map((item, idx) => {
            const Icon = iconMap[idx % 8] || ShieldCheck;
            return (
              <ScrollReveal key={idx} direction="up" delay={0.08 * idx}>
                <TiltCard className="why-card">
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(184, 134, 11, 0.1)',
                    border: '1px solid rgba(184, 134, 11, 0.3)',
                    color: '#B8860B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.85rem'
                  }}>
                    <Icon size={22} />
                  </div>

                  <h4 style={{ color: '#715104', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.35rem' }}>{item.title}</h4>
                  <p style={{ color: '#374151', fontSize: '0.92rem', lineHeight: '1.55' }}>{item.description}</p>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Ethical Practice Comparison Matrix Trigger */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <button
            className="btn btn-outline"
            onClick={() => setShowMatrix(!showMatrix)}
          >
            <Scale size={16} />
            <span>{showMatrix ? 'Hide Ethical Comparison' : 'Compare Ethical Standards vs Generic Readers'}</span>
          </button>
        </div>

        {showMatrix && (
          <div style={{
            background: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            border: '1.5px solid var(--border-gold)',
            padding: '2rem',
            boxShadow: 'var(--shadow-gold)',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            <h3 className="font-serif" style={{ textAlign: 'center', fontSize: '1.5rem', color: '#1F2937', marginBottom: '1.5rem' }}>
              Ethical Practices Comparison Matrix
            </h3>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--border-gold)' }}>
                    <th style={{ padding: '0.85rem', color: '#715104', fontSize: '0.9rem' }}>Feature / Standard</th>
                    <th style={{ padding: '0.85rem', color: '#059669', fontSize: '0.9rem' }}>Pandit Shekar Guruji</th>
                    <th style={{ padding: '0.85rem', color: '#DC2626', fontSize: '0.9rem' }}>Generic Readers</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ITEMS.map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(184, 134, 11, 0.15)' }}>
                      <td style={{ padding: '0.85rem', fontWeight: 600, color: '#1F2937' }}>{row.feature}</td>
                      <td style={{ padding: '0.85rem', color: '#047857', fontWeight: 600 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <Check size={16} style={{ color: '#059669' }} />
                          <span>{row.guruji}</span>
                        </div>
                      </td>
                      <td style={{ padding: '0.85rem', color: '#9CA3AF' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <X size={16} style={{ color: '#EF4444' }} />
                          <span>{row.generic}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
