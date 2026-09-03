import React from 'react';
import { motion } from 'framer-motion';

export default function PageTransition({ children, routeKey }) {
  return (
    <motion.div
      key={routeKey}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: 'relative', width: '100%' }}
    >
      {/* Soft Radial Gold Overlay Background Transition */}
      <motion.div
        initial={{ opacity: 0.4, scale: 0.95 }}
        animate={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 90
        }}
      />
      {children}
    </motion.div>
  );
}
