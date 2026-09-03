import React, { useState, useEffect } from 'react';
import { servicesData } from '../../data/servicesDatabase';
import ServicesHero from './ServicesHero';
import FilterChips from './FilterChips';
import ServiceCard from './ServiceCard';
import EmptyState from './EmptyState';

export default function ServicesListingPage({ onSelectService, contactData }) {
  const [activeCategory, setActiveCategory] = useState('All Services');
  const [searchKeyword, setSearchKeyword] = useState('');

  // Sync URL query params (?category=...&search=...)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const catParam = params.get('category');
    const searchParam = params.get('search');
    
    if (catParam) setActiveCategory(catParam);
    if (searchParam) setSearchKeyword(searchParam);
  }, []);

  const updateQueryParams = (category, search) => {
    const params = new URLSearchParams();
    if (category && category !== 'All Services') params.set('category', category);
    if (search) params.set('search', search);

    const newUrl = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`;
    window.history.replaceState(null, '', newUrl);
  };

  const handleSelectCategory = (category) => {
    setActiveCategory(category);
    updateQueryParams(category, searchKeyword);
  };

  const handleSearchChange = (keyword) => {
    setSearchKeyword(keyword);
    updateQueryParams(activeCategory, keyword);
  };

  // Filtering Logic
  const filteredServices = servicesData.filter((service) => {
    if (!service.published) return false;

    const matchesCategory = activeCategory === 'All Services' || service.category === activeCategory;
    
    const query = searchKeyword.toLowerCase().trim();
    const matchesSearch = !query || 
      service.title.toLowerCase().includes(query) ||
      service.shortDesc.toLowerCase().includes(query) ||
      service.category.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="services-page-wrapper">
      <ServicesHero 
        searchKeyword={searchKeyword}
        setSearchKeyword={handleSearchChange}
      />

      <FilterChips 
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
      />

      <div className="container" style={{ marginBottom: '5rem' }}>
        {/* Highlight Announcement Ribbon */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.12) 0%, rgba(245, 158, 11, 0.1) 100%)',
          border: '1.5px solid rgba(212, 175, 55, 0.35)',
          borderRadius: '12px',
          padding: '1rem 1.5rem',
          marginBottom: '2rem',
          textAlign: 'center',
          color: '#715104',
          fontWeight: 600,
          fontSize: '0.98rem',
          boxShadow: '0 4px 15px rgba(184, 134, 11, 0.08)'
        }}>
          ✨ <strong>Specialized Spiritual Guidance:</strong> Pandit Shekar Guruji can clear Bad energy, Black energy, Any kind of Witchcraft by performing powerful prayers.
        </div>

        {filteredServices.length > 0 ? (
          <div className="categories-grid">
            {filteredServices.map((service) => (
              <ServiceCard 
                key={service.id}
                service={service}
                onSelectService={onSelectService}
              />
            ))}
          </div>
        ) : (
          <EmptyState 
            contactData={contactData}
            onResetFilter={() => {
              setActiveCategory('All Services');
              setSearchKeyword('');
              updateQueryParams('All Services', '');
            }}
          />
        )}
      </div>
    </div>
  );
}
