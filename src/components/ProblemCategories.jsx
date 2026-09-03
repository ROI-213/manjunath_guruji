import React, { useState } from 'react';
import { Sparkles, MessageCircle, Calendar, ArrowRight, Search } from 'lucide-react';
import ScrollReveal from './Animated/ScrollReveal';
import SplitTextReveal from './Animated/SplitTextReveal';
import TiltCard from './Animated/TiltCard';
import { trackEvent } from '../utils/analytics';

export default function ProblemCategories({ categories, contactData, onOpenBooking }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  const filters = ['All', 'Love & Relationship', 'Marriage & Family', 'Career & Finance', 'Spiritual Prayers'];

  const filteredCategories = categories.filter(item => {
    const matchesFilter = activeFilter === 'All' || item.category === activeFilter;
    const matchesSearch = !searchQuery || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const displayedCategories = showAll || searchQuery ? filteredCategories : filteredCategories.slice(0, 8);

  return (
    <section className="categories-section" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <ScrollReveal direction="down">
            <div className="badge-gold" style={{ marginBottom: '1rem' }}>
              <Sparkles size={14} className="celestial-sparkle" />
              <span>Consultation Categories</span>
            </div>
          </ScrollReveal>

          <SplitTextReveal 
            text="Guidance Tailored to Your Concern"
            className="font-serif"
            style={{ fontSize: '2.5rem', color: '#1F2937', marginBottom: '0.85rem' }}
            noWrap
          />

          <ScrollReveal direction="up" delay={0.2}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              background: 'linear-gradient(90deg, rgba(212, 175, 55, 0.12) 0%, rgba(245, 158, 11, 0.12) 100%)',
              border: '1px solid rgba(212, 175, 55, 0.35)',
              borderRadius: '9999px',
              padding: '0.35rem 1rem',
              marginBottom: '0.85rem',
              color: '#715104',
              fontSize: '0.9rem',
              fontWeight: 700
            }}>
              <Sparkles size={14} style={{ color: '#B8860B' }} />
              <span>Pandit Shekar Guruji can clear Bad energy, Black energy, Any kind of Witchcraft by performing powerful prayers.</span>
            </div>
            <p style={{ color: '#374151' }}>Select your area of concern to explore Pandit Shekar Guruji’s personalized observation, powerful prayer rituals, and spiritual consultation methods.</p>
          </ScrollReveal>

          {/* Search Box */}
          <div style={{ position: 'relative', marginTop: '1.5rem', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '480px' }}>
              <Search size={18} style={{ position: 'absolute', left: '1.1rem', top: '50%', transform: 'translateY(-50%)', color: '#B8860B' }} />
              <input
                type="text"
                className="search-input-box"
                placeholder="Search concern (e.g. Love, Marriage, Business, Protection)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Filter Chips */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="category-chips">
            {filters.map((cat) => (
              <button
                key={cat}
                className={`chip ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* 3D Interactive Cards Grid */}
        <div className="categories-grid">
          {displayedCategories.map((item, idx) => (
            <ScrollReveal key={item.id} direction="up" delay={0.1 * (idx % 4)}>
              <TiltCard className="category-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: 0 }}>
                
                {item.imageUrl && (
                  <div style={{ width: '100%', height: '150px', overflow: 'hidden', borderBottom: '1px solid var(--border-subtle)' }}>
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/service_love.png';
                      }}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                      className="category-card-img"
                    />
                  </div>
                )}

                <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.72rem', color: '#715104', fontWeight: 600, background: 'rgba(184, 134, 11, 0.1)', padding: '0.2rem 0.55rem', borderRadius: '4px', border: '1px solid rgba(184,134,11,0.15)' }}>
                      {item.category}
                    </span>
                    <Sparkles size={13} style={{ color: '#B8860B' }} />
                  </div>

                  <h3 className="font-serif" style={{ color: '#1F2937', fontSize: '1.15rem', margin: 0 }}>{item.title}</h3>
                  <p style={{ color: '#4B5563', fontSize: '0.88rem', lineHeight: '1.5', margin: 0 }}>{item.description}</p>

                  <div className="category-actions" style={{ marginTop: 'auto', paddingTop: '0.85rem', borderTop: '1px solid rgba(184, 134, 11, 0.1)', display: 'flex', gap: '0.5rem' }}>
                  <a 
                    href={`https://wa.me/${contactData.whatsapp}?text=Hello%20Pandit%20Shekar%20Guruji,%20I%20am%20interested%20in%20${encodeURIComponent(item.title)}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn btn-whatsapp btn-sm"
                    onClick={() => trackEvent('whatsapp_click', { service: item.title })}
                  >
                    <MessageCircle size={14} />
                    <span>WhatsApp</span>
                  </a>

                  <button 
                    className="btn btn-outline btn-sm"
                    onClick={() => {
                      trackEvent('booking_request', { service: item.title });
                      onOpenBooking(item.title);
                    }}
                  >
                    <Calendar size={14} />
                    <span>Book</span>
                  </button>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
          ))}
        </div>

        {/* View All Expander Button */}
        {filteredCategories.length > 8 && (
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button className="btn btn-gold" onClick={() => setShowAll(!showAll)}>
              <span>{showAll ? 'Show Fewer Categories' : 'View All Problem Categories'}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
