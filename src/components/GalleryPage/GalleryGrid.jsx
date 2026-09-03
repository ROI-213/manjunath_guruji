import React, { useState } from 'react';
import { Play, Eye, ChevronDown } from 'lucide-react';
import { galleryCategories, galleryMedia } from '../../data/galleryDatabase';

export default function GalleryGrid({ onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredMedia = activeCategory === 'All'
    ? galleryMedia.filter(item => item.published)
    : galleryMedia.filter(item => item.published && item.category === activeCategory);

  const displayedMedia = filteredMedia.slice(0, visibleCount);

  return (
    <section style={{ padding: '2rem 0 5rem 0' }}>
      <div className="container">
        
        {/* Category Filter Chips */}
        <div className="category-chips" style={{ marginBottom: '2.5rem' }}>
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              className={`chip ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(6);
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Balanced Card Grid for Gallery Items */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {displayedMedia.map((item) => (
            <div 
              key={item.id} 
              className="glass-card"
              onClick={() => onOpenLightbox(item)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '1rem',
                border: '1.5px solid rgba(212, 175, 55, 0.3)',
                boxShadow: '0 8px 30px rgba(184, 134, 11, 0.08)',
                borderRadius: '16px',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                overflow: 'hidden',
                background: '#FFFFFF'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(184, 134, 11, 0.18)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(184, 134, 11, 0.08)';
              }}
            >
              {/* Image Container with Fixed Proportions */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '240px',
                borderRadius: '12px',
                overflow: 'hidden',
                background: 'rgba(212, 175, 55, 0.05)',
                marginBottom: '1rem'
              }}>
                <img 
                  src={item.url} 
                  alt={item.altText || item.title} 
                  loading="lazy" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s ease'
                  }}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/service_protection.jpg';
                  }}
                />

                {/* Category Badge overlay */}
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  background: 'rgba(15, 23, 42, 0.85)',
                  backdropFilter: 'blur(6px)',
                  color: '#FCD34D',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  padding: '0.3rem 0.75rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                  zIndex: 2
                }}>
                  {item.category}
                </div>

                {/* Click to expand overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'rgba(212, 175, 55, 0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                  zIndex: 2
                }}>
                  <Eye size={16} />
                </div>
              </div>

              {/* Text Info */}
              <div style={{ padding: '0 0.5rem 0.5rem 0.5rem' }}>
                <h4 className="font-serif" style={{ fontSize: '1.2rem', color: '#1F2937', margin: '0 0 0.4rem 0' }}>
                  {item.title}
                </h4>
                {item.caption && (
                  <p style={{ color: '#4B5563', fontSize: '0.88rem', lineHeight: '1.55', margin: 0 }}>
                    {item.caption}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
