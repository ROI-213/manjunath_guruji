import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './Animated/ScrollReveal';
import SplitTextReveal from './Animated/SplitTextReveal';
import './FaqSection.css';

export default function FaqSection({ faqs }) {
  const [openId, setOpenId] = useState(faqs[0]?.id || null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = (faqs || []).filter(f => 
    !searchQuery || 
    f.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    f.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="faq-section" id="faqs">
      {/* Live Ambient Glowing Background Orbs */}
      <div className="faq-live-orb-1" />
      <div className="faq-live-orb-2" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div className="faq-header-container">
          <ScrollReveal direction="down">
            <div className="faq-live-badge">
              <HelpCircle size={15} style={{ color: '#FCD34D' }} />
              <span>Clear Answers &amp; Guidance</span>
              <Sparkles size={15} style={{ color: '#FCD34D' }} />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="font-serif faq-main-title">
              Frequently Asked <span className="faq-gold-accent">Questions</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="faq-subtitle-text">
              Find transparent answers regarding consultation privacy, photograph handling, scheduling, and remote phone/WhatsApp availability.
            </p>
          </ScrollReveal>

          {/* Search Input */}
          <div className="faq-search-wrapper">
            <Search size={18} style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: '#FCD34D' }} />
            <input
              type="text"
              className="faq-search-input"
              placeholder="Search FAQ (e.g. Privacy, Photo, Fees, WhatsApp)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Animated Accordion List */}
        <div className="faq-list">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openId === faq.id || searchQuery.length > 0;
            return (
              <ScrollReveal key={faq.id} direction="up" delay={0.06 * idx}>
                <div className="faq-item">
                  <button className="faq-question" onClick={() => toggleFaq(faq.id)}>
                    <span className="faq-question-text">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="faq-chevron-icon"
                    >
                      <ChevronDown size={22} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="faq-answer">
                          <p className="faq-answer-text">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
