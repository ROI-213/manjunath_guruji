import React, { useState, useEffect } from 'react';
import { MessageCircle, Calendar, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { trackEvent } from '../utils/analytics';

export default function Navbar({ data, currentPage, onNavigate, onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);

  const title = data?.title || "Astro Psychic India";
  const whatsapp = data?.whatsapp || "919845657808";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  // Exact 8 Menu Items in Exact Order
  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'booking', label: 'Book Wizard' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <motion.header 
      className={`navbar-wrapper ${scrolled ? 'is-scrolled' : ''}`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className={`nav-container floating-curved-nav ${scrolled ? 'scrolled-pill' : ''}`}>
        
        {/* 1. Orbit Border Traveling Star */}
        <div className="navbar-orbit-border-line">
          <div className="orbit-traveling-star" />
        </div>

        {/* 2. Brand Logo with Emblem & Live Availability */}
        <motion.a 
          href="#home" 
          className="brand-logo"
          variants={itemVariants}
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
        >
          <div className="astrology-logo-wrapper">
            <div className="zodiac-orbit-ring" />
            <div className="logo-icon-wrapper pulse-aura" style={{ overflow: 'hidden', padding: '1px', background: '#FFFFFF', border: '1.5px solid #D4AF37' }}>
              <img src="/logo.png" alt="Astro Psychic India Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }} />
            </div>
          </div>
          
          <div className="brand-text-block">
            <div className="brand-name">
              <span>{title}</span>
              <Sparkles size={13} className="celestial-sparkle-icon" />
            </div>
            <div className="brand-sub-live">
              <span className="live-pulse-dot" />
              <span>Guruji Online • Available Now</span>
            </div>
          </div>
        </motion.a>

        {/* 3. Navigation Links (Home → About Us → Services → Book Wizard → Gallery → Testimonials → FAQs → Contact Us) */}
        <nav className="nav-menu">
          <ul className="nav-links">
            {menuItems.map((link) => {
              const isActive = currentPage === link.id || (link.id === 'services' && currentPage === 'service-detail');
              return (
                <motion.li key={link.id} variants={itemVariants}>
                  <a 
                    href={`#${link.id}`} 
                    className={`nav-item-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.id);
                    }}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="active-celestial-dot" />}
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </nav>

        {/* 4. Action Buttons (WhatsApp → Book) */}
        <motion.div 
          className="nav-actions" 
          variants={itemVariants} 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.65rem', 
            flexShrink: 0,
            paddingRight: '0.2rem'
          }}
        >

          {/* Action 2: WhatsApp (Green Button) */}
          <a 
            href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`} 
            target="_blank" 
            rel="noreferrer" 
            className="btn btn-whatsapp btn-sm hide-mobile whatsapp-animated-btn"
            onClick={() => trackEvent('whatsapp_click', { source: 'navbar' })}
          >
            <MessageCircle size={15} />
            <span>WhatsApp</span>
          </a>
          
          {/* Action 3: Book (Gold Button) */}
          <button 
            className="btn btn-gold btn-sm gold-animated-btn" 
            onClick={() => {
              trackEvent('booking_request', { source: 'navbar' });
              if (onOpenBooking) {
                onOpenBooking();
              } else {
                onNavigate('booking');
              }
            }}
          >
            <Calendar size={15} />
            <span>Book Now</span>
          </button>

        </motion.div>

      </div>
    </motion.header>
  );
}
