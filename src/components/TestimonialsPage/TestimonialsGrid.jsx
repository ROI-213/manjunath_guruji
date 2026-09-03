import React, { useState } from 'react';
import { Star, Volume2, Video, CheckCircle, ShieldAlert, Flag, Heart, Briefcase, Users, Sparkles, MessageSquare } from 'lucide-react';
import { testimonialCategories } from '../../data/testimonialsDatabase';

const sectionMeta = {
  'Career': { title: 'Career & Professional Direction', icon: Briefcase, color: '#D4AF37' },
  'Business': { title: 'Business & Commercial Progress', icon: Briefcase, color: '#D4AF37' },
  'Relationship': { title: 'Love & Relationship Understanding', icon: Heart, color: '#EC4899' },
  'Marriage': { title: 'Marriage & Partner Harmony', icon: Users, color: '#8B5CF6' },
  'Family': { title: 'Family & Domestic Peace', icon: Users, color: '#10B981' },
  'Personal Guidance': { title: 'Personal Reflection & Emotional Peace', icon: Sparkles, color: '#F59E0B' },
  'Spiritual Prayer': { title: 'Spiritual Prayers & Protection', icon: Sparkles, color: '#6366F1' }
};

export default function TestimonialsGrid({ testimonials = [], onOpenReport }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const publishedTestimonials = testimonials.filter(item => item.published);

  // Group testimonials by category
  const categoriesToDisplay = activeCategory === 'All'
    ? Array.from(new Set(publishedTestimonials.map(t => t.category)))
    : [activeCategory];

  return (
    <section style={{ padding: '2rem 0 5rem 0' }}>
      <div className="container">
        
        {/* Category Filters */}
        <div className="category-chips" style={{ marginBottom: '3rem' }}>
          {testimonialCategories.map((cat) => (
            <button
              key={cat}
              className={`chip ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Section-Wise Testimonials Display */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {categoriesToDisplay.map((catName) => {
            const sectionItems = publishedTestimonials.filter(t => t.category === catName);
            if (sectionItems.length === 0) return null;

            const meta = sectionMeta[catName] || { title: `${catName} Experiences`, icon: MessageSquare, color: '#D4AF37' };
            const SectionIcon = meta.icon;

            return (
              <div key={catName} className="testimonial-section-group">
                
                {/* Section Header Banner */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  marginBottom: '1.5rem',
                  paddingBottom: '0.85rem',
                  borderBottom: '2px solid rgba(212, 175, 55, 0.2)'
                }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'rgba(212, 175, 55, 0.12)',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: meta.color || '#B8860B',
                    flexShrink: 0
                  }}>
                    <SectionIcon size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif" style={{ fontSize: '1.5rem', color: '#1F2937', margin: 0 }}>
                      {meta.title}
                    </h3>
                    <span style={{ fontSize: '0.8rem', color: '#715104', fontWeight: 600 }}>
                      {sectionItems.length} Verified {sectionItems.length === 1 ? 'Experience' : 'Experiences'}
                    </span>
                  </div>
                </div>

                {/* Cards Grid for this Section */}
                <div className="testimonials-grid" style={{ marginBottom: '1rem' }}>
                  {sectionItems.map((item) => (
                    <div key={item.id} className="testimonial-card" style={{ display: 'flex', flexDirection: 'column', padding: '1.75rem', border: '1px solid rgba(212, 175, 55, 0.22)', boxShadow: '0 6px 24px rgba(184, 134, 11, 0.06)' }}>
                      <div className="testimonial-header" style={{ marginBottom: '1rem' }}>
                        <div className="author-info">
                          <h4 style={{ fontSize: '1.15rem', color: '#1F2937', margin: '0 0 0.25rem 0' }}>{item.name}</h4>
                          <p style={{ margin: 0, fontSize: '0.82rem', color: '#6B7280' }}>
                            {item.location} • <span style={{ color: '#B8860B', fontWeight: 600 }}>{item.category}</span>
                          </p>
                        </div>

                        <div className="testimonial-stars" style={{ display: 'flex', gap: '2px' }}>
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} size={15} fill="#D4AF37" color="#D4AF37" />
                          ))}
                        </div>
                      </div>

                      <p className="testimonial-body" style={{ flexGrow: 1, color: '#374151', fontSize: '0.95rem', lineHeight: '1.65', fontStyle: 'italic', margin: '0 0 1.25rem 0' }}>
                        "{item.comment}"
                      </p>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '0.85rem', borderTop: '1px solid rgba(184, 134, 11, 0.12)', fontSize: '0.78rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#059669', fontWeight: 600 }}>
                          {item.verified && (
                            <>
                              <CheckCircle size={14} />
                              <span>Admin Moderated &amp; Verified</span>
                            </>
                          )}
                        </div>

                        {item.type === 'audio' && (
                          <span className="media-badge" style={{ background: 'rgba(212, 175, 55, 0.15)', color: '#8B6508', padding: '0.2rem 0.5rem', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 600 }}>
                            <Volume2 size={13} />
                            <span>Audio ({item.audioLength})</span>
                          </span>
                        )}

                        {item.type === 'video' && (
                          <span className="media-badge" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#1D4ED8', padding: '0.2rem 0.5rem', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 600 }}>
                            <Video size={13} />
                            <span>Video ({item.videoLength})</span>
                          </span>
                        )}

                        <button 
                          onClick={() => onOpenReport && onOpenReport(item)}
                          style={{ background: 'none', border: 'none', color: '#6B7280', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem' }}
                          title="Request Privacy / Report Content"
                        >
                          <Flag size={12} />
                          <span>Privacy Path</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Disclaimer Footer */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem', color: '#4B5563', fontSize: '0.88rem', maxWidth: '680px', margin: '3.5rem auto 0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#715104', fontWeight: 600 }}>
            <ShieldAlert size={16} style={{ color: '#D4AF37' }} />
            <span>Ethical Standard &amp; Moderation Disclaimer</span>
          </div>
          <p style={{ margin: 0, lineHeight: 1.6 }}>Testimonials reflect individual personal perspectives. Individual results and decisions may naturally vary from person to person. No specific outcome is guaranteed.</p>
        </div>

      </div>
    </section>
  );
}
