import React from 'react';
import { servicesCategories } from '../../data/servicesDatabase';

export default function FilterChips({ activeCategory, onSelectCategory }) {
  return (
    <div className="container" style={{ margin: '1.5rem auto 2.5rem auto' }}>
      <div 
        className="category-chips" 
        style={{ 
          display: 'flex', 
          flexWrap: 'nowrap', 
          overflowX: 'auto', 
          paddingBottom: '0.5rem', 
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {servicesCategories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              className={`chip ${isActive ? 'active' : ''}`}
              onClick={() => onSelectCategory(cat)}
              style={{
                flexShrink: 0,
                scrollSnapAlign: 'start',
                whiteSpace: 'nowrap'
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}
