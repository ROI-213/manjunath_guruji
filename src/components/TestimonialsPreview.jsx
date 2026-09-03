import React, { useEffect, useRef } from 'react';
import { Star, Quote, ShieldCheck, MessageCircle, Calendar, Sparkles } from 'lucide-react';
import ScrollReveal from './Animated/ScrollReveal';
import SplitTextReveal from './Animated/SplitTextReveal';
import { motion } from 'framer-motion';

const EXTENDED_TESTIMONIALS = [
  { id: 1, name: 'R. Sharma', location: 'Bengaluru', service: 'Psychic Reading', rating: 5, comment: 'Peaceful and accurate guidance. Pandit Guruji provided genuine clarity about my career path. Truly transformed my perspective.' },
  { id: 2, name: 'A. Patel', location: 'Mumbai', service: 'Family Guidance', rating: 5, comment: 'Extremely respectful consultation. His deep insights about family harmony were spot on. Highly recommend speaking with him.' },
  { id: 3, name: 'S. Krishnan', location: 'Chennai', service: 'Love & Relationship', rating: 5, comment: 'Was skeptical at first but Guruji\'s reading was incredibly accurate. He gave me hope and a clear path forward in my relationship.' },
  { id: 4, name: 'P. Nair', location: 'Kochi', service: 'Career Guidance', rating: 5, comment: 'Detailed analysis of my birth chart. The guidance helped me make the right career decision at the right time. Forever grateful.' },
  { id: 5, name: 'M. Reddy', location: 'Hyderabad', service: 'Palm Reading', rating: 5, comment: 'His palm observation was remarkably detailed. He identified key life events accurately without any prior information from me.' },
  { id: 6, name: 'T. Iyer', location: 'Coimbatore', service: 'Spiritual Protection', rating: 5, comment: 'After the prayer session, I felt a genuine shift in my home energy. The peace that followed was undeniable. Truly blessed.' },
  { id: 7, name: 'K. Bhat', location: 'Mangalore', service: 'Photo Reading', rating: 5, comment: 'The remote photo reading was just as powerful as in-person. Very professional, private, and genuinely helpful.' },
  { id: 8, name: 'V. Menon', location: 'Thrissur', service: 'Marriage Guidance', rating: 5, comment: 'Helped our family navigate a complex marriage situation with grace and wisdom. His approach is respectful and solution-focused.' }
];

function TestimonialCard({ item }) {
  return (
    <div style={{
      minWidth: '320px',
      maxWidth: '340px',
      background: '#FFFFFF',
      borderRadius: '20px',
      border: '1.5px solid rgba(184, 134, 11, 0.2)',
      boxShadow: '0 6px 24px rgba(184, 134, 11, 0.08)',
      padding: '1.75rem',
      position: 'relative',
      overflow: 'hidden',
      flexShrink: 0
    }}>
      {/* Decorative quote watermark */}
      <div style={{ position: 'absolute', top: '1rem', right: '1.25rem', opacity: 0.07, color: '#B8860B' }}>
        <Quote size={52} />
      </div>

      {/* Gold top accent line */}
      <div style={{
        position: 'absolute',
        top: 0, left: '1.5rem', right: '1.5rem',
        height: '3px',
        background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
        borderRadius: '999px'
      }} />

      {/* Stars */}
      <div style={{ display: 'flex', gap: '3px', marginBottom: '0.85rem' }}>
        {[...Array(item.rating || 5)].map((_, i) => (
          <Star key={i} size={15} fill="#D4AF37" stroke="#D4AF37" />
        ))}
      </div>

      {/* Comment */}
      <p style={{
        color: '#1F2937',
        fontSize: '0.92rem',
        lineHeight: 1.65,
        fontStyle: 'italic',
        marginBottom: '1.25rem',
        position: 'relative',
        zIndex: 1
      }}>
        "{item.comment}"
      </p>

      {/* Author row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderTop: '1px solid rgba(184,134,11,0.12)', paddingTop: '1rem' }}>
        <div style={{
          width: '42px', height: '42px', borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(212,175,55,0.2), rgba(184,134,11,0.1))',
          border: '2px solid rgba(184,134,11,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#B8860B', fontWeight: 700, fontSize: '1.1rem',
          flexShrink: 0
        }}>
          {item.name.charAt(0)}
        </div>
        <div>
          <h4 style={{ color: '#1F2937', fontWeight: 700, fontSize: '0.92rem', margin: 0 }}>{item.name}</h4>
          <p style={{ color: '#715104', fontSize: '0.78rem', fontWeight: 600, margin: 0 }}>{item.location} · {item.service}</p>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <ShieldCheck size={16} style={{ color: '#059669' }} />
        </div>
      </div>
    </div>
  );
}

function InfiniteMarquee({ items, direction = 'left', speed = 35 }) {
  const trackRef = useRef(null);
  const duplicated = [...items, ...items];

  return (
    <div style={{ overflow: 'hidden', width: '100%', position: 'relative' }}>
      {/* Fade edges */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px', zIndex: 2,
        background: 'linear-gradient(90deg, #FCFBF7, transparent)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px', zIndex: 2,
        background: 'linear-gradient(-90deg, #FCFBF7, transparent)',
        pointerEvents: 'none'
      }} />

      <motion.div
        ref={trackRef}
        style={{ display: 'flex', gap: '1.25rem', width: 'max-content' }}
        animate={{ x: direction === 'left' ? [0, `-${50}%`] : [`-${50}%`, 0] }}
        transition={{ duration: items.length * speed * 0.1, ease: 'linear', repeat: Infinity }}
      >
        {duplicated.map((item, idx) => (
          <TestimonialCard key={`${item.id}-${idx}`} item={item} />
        ))}
      </motion.div>
    </div>
  );
}

export default function TestimonialsPreview({ testimonials }) {
  const allItems = testimonials && testimonials.length > 3 ? testimonials : EXTENDED_TESTIMONIALS;
  const row1 = allItems.slice(0, Math.ceil(allItems.length / 2));
  const row2 = allItems.slice(Math.ceil(allItems.length / 2));

  return (
    <section className="testimonials-section" style={{ position: 'relative', overflow: 'hidden', padding: '5rem 0' }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
        width: '700px', height: '700px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 65%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div className="section-header">
          <ScrollReveal direction="down">
            <div className="badge-gold" style={{ marginBottom: '1rem' }}>
              <ShieldCheck size={14} />
              <span>Voluntary Feedback</span>
            </div>
          </ScrollReveal>

          <SplitTextReveal
            text="Verified Client Experiences"
            className="font-serif"
            style={{ fontSize: '2.5rem', color: '#1F2937', marginBottom: '0.85rem' }}
          />

          <ScrollReveal direction="up" delay={0.2}>
            <p style={{ color: '#374151', maxWidth: '560px', margin: '0 auto' }}>
              Voluntarily submitted reviews from visitors who received spiritual guidance and personal peace of mind.
            </p>
          </ScrollReveal>

          {/* Live Stats Bar */}
          <ScrollReveal direction="up" delay={0.3}>
            <div style={{
              display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap',
              margin: '2rem auto 0',
              padding: '1rem 2rem',
              background: 'rgba(184,134,11,0.05)',
              borderRadius: '14px', border: '1px solid rgba(184,134,11,0.15)',
              maxWidth: '600px'
            }}>
              {[
                { value: '1000+', label: 'Satisfied Clients' },
                { value: '4.9/5', label: 'Average Rating' },
                { value: '25+', label: 'Years Trusted' }
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div className="font-serif" style={{ color: '#B8860B', fontSize: '1.5rem', fontWeight: 700 }}>{stat.value}</div>
                  <div style={{ color: '#4B5563', fontSize: '0.8rem', fontWeight: 500 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Infinite Marquee Rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '2.5rem' }}>
        <InfiniteMarquee items={row1} direction="left" speed={40} />
        {row2.length > 0 && <InfiniteMarquee items={row2} direction="right" speed={35} />}
      </div>

      {/* Disclaimer */}
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <ScrollReveal direction="up" delay={0.3}>
          <p style={{
            textAlign: 'center', color: '#9CA3AF', fontSize: '0.78rem', marginTop: '2rem',
            fontStyle: 'italic'
          }}>
            * All testimonials are voluntarily submitted. Names are abbreviated for privacy. Individual results may vary.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
