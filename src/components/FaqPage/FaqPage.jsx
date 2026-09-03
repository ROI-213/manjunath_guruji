import React, { useState, useEffect } from 'react';
import FaqHero from './FaqHero';
import { faqCategories, faqData } from '../../data/faqDatabase';
import { ChevronDown, ChevronUp, Link as LinkIcon, MessageCircle, Phone, Calendar, Sparkles } from 'lucide-react';

export default function FaqPage({ onOpenBooking, contactData }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [openId, setOpenId] = useState(faqData[0]?.id || null);

  const contact = contactData || {
    whatsappUrl: "https://wa.me/919845657808",
    callUrl: "tel:+919845657808",
    phoneDisplay: "+91 98456 57808"
  };

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const match = faqData.find(item => item.anchor === hash || item.id === hash);
      if (match) {
        setOpenId(match.id);
        const el = document.getElementById(match.anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const filteredFaqs = faqData.filter((item) => {
    const matchesCat = activeCategory === 'All' || item.category === activeCategory;
    const query = searchKeyword.toLowerCase().trim();
    const matchesSearch = !query || 
      item.question.toLowerCase().includes(query) ||
      item.answer.toLowerCase().includes(query) ||
      (item.keywords && item.keywords.some(k => k.toLowerCase().includes(query)));

    return matchesCat && matchesSearch;
  });

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="faq-page-wrapper" style={{ paddingBottom: '5rem' }}>
      <FaqHero 
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />

      <div className="container" style={{ margin: '2rem auto 4rem auto' }}>
        
        {/* Category Filters */}
        <div className="category-chips" style={{ marginBottom: '2.5rem' }}>
          {faqCategories.map((cat) => (
            <button
              key={cat}
              className={`chip ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordions with Deep-Link Anchors */}
        <div className="faq-list">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} id={faq.anchor} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button className="faq-question" onClick={() => toggleFaq(faq.id)}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ color: '#715104', fontSize: '0.8rem', background: 'rgba(184, 134, 11, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 600 }}>
                        {faq.category}
                      </span>
                      <span style={{ color: '#1F2937' }}>{faq.question}</span>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <a 
                        href={`#${faq.anchor}`} 
                        onClick={(e) => e.stopPropagation()} 
                        title="Copy Deep Link Anchor"
                        style={{ color: '#374151', fontSize: '0.75rem', textDecoration: 'none' }}
                      >
                        <LinkIcon size={14} />
                      </a>
                      {isOpen ? <ChevronUp size={18} style={{ color: '#B8860B' }} /> : <ChevronDown size={18} />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="faq-answer">
                      <p style={{ color: '#374151' }}>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="glass-card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
              <p style={{ color: '#374151', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                No FAQs matched your search keywords.
              </p>
              <button className="btn btn-outline" onClick={() => { setActiveCategory('All'); setSearchKeyword(''); }}>
                Clear Search
              </button>
            </div>
          )}
        </div>

        {/* Radiant Unique Universe CTA Banner After FAQ List */}
        <div style={{
          position: 'relative',
          marginTop: '4.5rem',
          padding: '3.5rem 2.5rem',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #090316 0%, #16092E 40%, #240E48 100%)',
          borderRadius: '24px',
          border: '1.5px solid rgba(212, 175, 55, 0.45)',
          boxShadow: '0 15px 50px rgba(0, 0, 0, 0.35)',
          overflow: 'hidden'
        }}>
          {/* Ambient Glows */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '500px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.22) 0%, transparent 70%)',
            filter: 'blur(40px)',
            pointerEvents: 'none'
          }} />

          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid rgba(212, 175, 55, 0.4)', padding: '0.3rem 0.9rem', borderRadius: '9999px', color: '#FCD34D', fontSize: '0.82rem', fontWeight: 600, marginBottom: '1.25rem' }}>
              <Sparkles size={14} />
              <span>Direct Communication &amp; Support</span>
              <Sparkles size={14} />
            </div>

            <h3 className="font-serif" style={{ fontSize: '2.4rem', color: '#FFFFFF', marginBottom: '0.9rem', letterSpacing: '0.5px', textShadow: '0 4px 20px rgba(0,0,0,0.6)' }}>
              Still Need Help or Have a <span style={{
                background: 'linear-gradient(135deg, #FCE7A1 0%, #D4AF37 50%, #F59E0B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 2px 8px rgba(212,175,55,0.4))'
              }}>Specific Question?</span>
            </h3>

            <p style={{ color: '#E5E7EB', fontSize: '1.12rem', lineHeight: '1.7', marginBottom: '2.25rem', maxWidth: '650px', margin: '0 auto 2.25rem auto', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
              Pandit Shekar Guruji and his coordinator are available to answer your personal questions directly.
            </p>

            <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href={contact.whatsappUrl || "https://wa.me/919845657808"} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-whatsapp"
                style={{ padding: '0.85rem 1.75rem', fontSize: '0.95rem', boxShadow: '0 4px 20px rgba(37, 211, 102, 0.35)' }}
              >
                <MessageCircle size={18} />
                <span>Ask via WhatsApp</span>
              </a>

              <a 
                href={contact.callUrl || "tel:+919845657808"} 
                className="btn"
                style={{ 
                  padding: '0.85rem 1.75rem', 
                  fontSize: '0.95rem', 
                  background: 'rgba(255, 255, 255, 0.95)',
                  color: '#1E3A8A',
                  border: '1.5px solid rgba(59, 130, 246, 0.4)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                }}
              >
                <Phone size={18} style={{ color: '#2563EB' }} />
                <span style={{ fontWeight: 700 }}>Call {contact.phoneDisplay || "+91 98456 57808"}</span>
              </a>

              <button 
                className="btn btn-gold" 
                onClick={() => onOpenBooking && onOpenBooking("FAQ Help CTA")}
                style={{ padding: '0.85rem 1.75rem', fontSize: '0.95rem', boxShadow: '0 4px 25px rgba(212, 175, 55, 0.45)' }}
              >
                <Calendar size={18} />
                <span>Book Consultation</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
