import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Complete loader after 1.8s
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.05,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
          }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: '#070A14',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}
        >
          {/* Radial Gold Glow Backlight */}
          <div style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.18) 0%, transparent 70%)',
            filter: 'blur(30px)'
          }} />

          <div style={{ position: 'relative', textAlign: 'center', width: '180px', height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            
            {/* Outer Rotating Zodiac Circle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                border: '1.5px dashed rgba(212, 175, 55, 0.6)',
                boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)'
              }}
            />

            {/* Traveling Light Beam Circle */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                inset: '-8px',
                borderRadius: '50%',
                border: '2px solid transparent',
                borderTopColor: '#F3E5AB',
                borderRightColor: '#D4AF37',
                filter: 'drop-shadow(0 0 6px #D4AF37)'
              }}
            />

            {/* Fading Om Spiritual Symbol */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                width: '76px',
                height: '76px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #B8860B 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#070A14',
                fontSize: '2.2rem',
                fontWeight: 'bold',
                boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)',
                zIndex: 2
              }}
            >
              ॐ
            </motion.div>

          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              position: 'absolute',
              bottom: '22%',
              fontFamily: "'Cinzel', serif",
              fontSize: '0.95rem',
              color: '#F3E5AB',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}
          >
            Astro Psychic India
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
