import React, { useState } from 'react';
import { Compass, Sparkles, MessageCircle, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../Animated/ScrollReveal';
import './InteractiveZodiacGuidance.css';

const ZODIAC_SIGNS = [
  { id: 'aries', name: 'Aries (Mesha)', symbol: '♈', planet: 'Mars (Mangal)', element: 'Fire', focus: 'Action & New Ventures', remedy: 'Red Coral / Hanuman Prayer' },
  { id: 'taurus', name: 'Taurus (Vrishabha)', symbol: '♉', planet: 'Venus (Shukra)', element: 'Earth', focus: 'Finance & Relationship Harmony', remedy: 'White Quartz / Lakshmi Mantra' },
  { id: 'gemini', name: 'Gemini (Mithuna)', symbol: '♊', planet: 'Mercury (Budh)', element: 'Air', focus: 'Communication & Business Growth', remedy: 'Green Emerald / Vishnu Sahasranam' },
  { id: 'cancer', name: 'Cancer (Karka)', symbol: '♋', planet: 'Moon (Chandra)', element: 'Water', focus: 'Emotional Balance & Family Peace', remedy: 'Pearl / Moonlight Prayer' },
  { id: 'leo', name: 'Leo (Simha)', symbol: '♌', planet: 'Sun (Surya)', element: 'Fire', focus: 'Leadership & Recognition', remedy: 'Ruby / Aditya Hrudayam' },
  { id: 'virgo', name: 'Virgo (Kanya)', symbol: '♍', planet: 'Mercury (Budh)', element: 'Earth', focus: 'Precision & Career Stability', remedy: 'Green Tourmaline / Ganesha Prayer' },
  { id: 'libra', name: 'Libra (Tula)', symbol: '♎', planet: 'Venus (Shukra)', element: 'Air', focus: 'Partnership & Marital Unity', remedy: 'Diamond / Harmony Ritual' },
  { id: 'scorpio', name: 'Scorpio (Vrishchika)', symbol: '♏', planet: 'Mars (Mangal)', element: 'Water', focus: 'Transformation & Aura Shield', remedy: 'Red Coral / Durga Kavach' },
  { id: 'sagittarius', name: 'Sagittarius (Dhanu)', symbol: '♐', planet: 'Jupiter (Guru)', element: 'Fire', focus: 'Higher Knowledge & Fortune', remedy: 'Yellow Sapphire / Guru Stotram' },
  { id: 'capricorn', name: 'Capricorn (Makara)', symbol: '♑', planet: 'Saturn (Shani)', element: 'Earth', focus: 'Long-term Goals & Discipline', remedy: 'Blue Sapphire / Shani Shanti' },
  { id: 'aquarius', name: 'Aquarius (Kumbha)', symbol: '♒', planet: 'Saturn (Shani)', element: 'Air', focus: 'Innovation & Financial Rewards', remedy: 'Amethyst / Positive Energy Prayer' },
  { id: 'pisces', name: 'Pisces (Meena)', symbol: '♓', planet: 'Jupiter (Guru)', element: 'Water', focus: 'Intuition & Inner Peace', remedy: 'Yellow Topaz / Divine Blessing' }
];

export default function InteractiveZodiacGuidance({ contactData, onOpenBooking }) {
  const [selectedSign, setSelectedSign] = useState(ZODIAC_SIGNS[0]);

  return (
    <section className="zodiac-widget-section" id="zodiac-guidance">
      {/* Live Ambient Glowing Background Orbs */}
      <div className="zodiac-live-orb-1" />
      <div className="zodiac-live-orb-2" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Header */}
        <div className="zodiac-header-container">
          <ScrollReveal direction="down">
            <div className="zodiac-live-badge">
              <Compass size={15} style={{ color: '#FCD34D' }} />
              <span>Interactive Astrological Alignment</span>
              <Sparkles size={15} style={{ color: '#FCD34D' }} />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="font-serif zodiac-main-title">
              Check Your Planetary &amp; <span className="zodiac-gold-accent">Zodiac Energy</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="zodiac-subtitle-text">
              Select your Rashis / Sun sign below to discover your ruling planet, current life focus, and recommended spiritual remedy.
            </p>
          </ScrollReveal>
        </div>

        {/* Grid Selector */}
        <div className="zodiac-selector-grid">
          {ZODIAC_SIGNS.map((sign) => {
            const isSelected = selectedSign.id === sign.id;
            return (
              <button
                key={sign.id}
                onClick={() => setSelectedSign(sign)}
                className={`zodiac-sign-btn ${isSelected ? 'active' : ''}`}
              >
                <span className="zodiac-sign-symbol">{sign.symbol}</span>
                <span className="zodiac-sign-name">{sign.name.split(' ')[0]}</span>
                <span className="zodiac-sign-planet">{sign.planet.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Sign Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSign.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="zodiac-detail-card"
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
                <span className="zodiac-detail-symbol">{selectedSign.symbol}</span>
                <div>
                  <h3 className="zodiac-detail-name">{selectedSign.name}</h3>
                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.35rem', flexWrap: 'wrap' }}>
                    <span className="zodiac-pill-badge">
                      Ruling: {selectedSign.planet}
                    </span>
                    <span className="zodiac-pill-badge-alt">
                      Element: {selectedSign.element}
                    </span>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <h4 className="zodiac-focus-label">
                  Current Planetary Focus
                </h4>
                <p className="zodiac-focus-text">
                  {selectedSign.focus}. Individuals under this zodiac sign are currently experiencing shifting energy dynamics that influence choices and personal harmony.
                </p>
              </div>

              <div>
                <h4 className="zodiac-focus-label">
                  Recommended Spiritual Practice / Remedy
                </h4>
                <p className="zodiac-remedy-text">
                  <Sparkles size={16} />
                  <span>{selectedSign.remedy}</span>
                </p>
              </div>
            </div>

            <div className="zodiac-consult-box">
              <div className="zodiac-consult-trust">
                <ShieldCheck size={16} />
                <span>100% Confidential Kundali Evaluation</span>
              </div>
              <h4 className="zodiac-consult-heading">
                Get a Full Horoscope &amp; DOB Analysis with Pandit Shekar Guruji
              </h4>
              <p className="zodiac-consult-desc">
                Receive precise solutions tailored to your birth time, lagna, and planetary positions during a direct session.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', width: '100%', flexWrap: 'wrap' }}>
                <a
                  href={`https://wa.me/${contactData?.whatsapp || '919845657808'}?text=Hello%20Pandit%20Shekar%20Guruji,%20I%20would%20like%20a%20Zodiac%20and%20Horoscope%20reading%20for%20${encodeURIComponent(selectedSign.name)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp btn-sm"
                  style={{ flex: 1, minWidth: '140px' }}
                >
                  <MessageCircle size={15} />
                  <span>WhatsApp Guruji</span>
                </a>

                <button
                  className="btn btn-gold btn-sm"
                  style={{ flex: 1, minWidth: '140px' }}
                  onClick={() => onOpenBooking && onOpenBooking(`Horoscope Reading (${selectedSign.name})`)}
                >
                  <span>Book Consultation</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
