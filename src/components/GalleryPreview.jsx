import React, { useState } from 'react';
import { Play, Eye } from 'lucide-react';

export default function GalleryPreview({ gallery, items, onOpenLightbox, onNavigate }) {
  const list = Array.isArray(gallery) ? gallery : (Array.isArray(items) ? items : []);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Consultation Setting', 'Prayer Activities', 'Temple Visits', 'Guruji', 'Ceremonies', 'Video Messages'];

  const filteredItems = activeCategory === 'All'
    ? list
    : list.filter(item => item && item.category === activeCategory);

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="section-header">
          <div className="badge-gold" style={{ marginBottom: '0.75rem' }}>
            <span>Visual Glimpse</span>
          </div>
          <h2>Spiritual Moments and Activities</h2>
          <p>Approved glimpses of consultation settings, traditional prayer altars, temple visits, and spiritual reflections.</p>
        </div>

        <div className="category-chips">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`chip ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div 
              key={item.id || Math.random()} 
              className="gallery-item"
              onClick={() => onOpenLightbox ? onOpenLightbox(item) : onNavigate && onNavigate('gallery')}
            >
              <img src={item.url} alt={item.title} />
              
              {item.type === 'video' && (
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  background: 'rgba(212, 175, 55, 0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#07090E',
                  boxShadow: '0 0 20px rgba(0,0,0,0.5)'
                }}>
                  <Play size={24} style={{ marginLeft: '3px' }} />
                </div>
              )}

              <div className="gallery-overlay">
                <h4>{item.title}</h4>
                <p>{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <button 
            className="btn btn-outline" 
            onClick={() => onNavigate ? onNavigate('gallery') : onOpenLightbox && list.length > 0 && onOpenLightbox(list[0])}
          >
            <Eye size={18} />
            <span>View Full Gallery Page</span>
          </button>
        </div>
      </div>
    </section>
  );
}
