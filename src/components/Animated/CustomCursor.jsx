import React, { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Disable custom cursor on touch devices or reduced motion
    if (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, select, .glass-card, .chip, [role="button"]');
      setIsHovered(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Central Gold Dot */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          backgroundColor: '#F3E5AB',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 999999,
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
          transition: 'transform 0.05s linear',
          boxShadow: '0 0 10px #D4AF37'
        }}
      />

      {/* Larger Soft Outer Ring */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovered ? '48px' : '32px',
          height: isHovered ? '48px' : '32px',
          border: '1.5px solid rgba(212, 175, 55, 0.6)',
          backgroundColor: isHovered ? 'rgba(212, 175, 55, 0.08)' : 'transparent',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 999998,
          transform: `translate3d(${position.x - (isHovered ? 24 : 16)}px, ${position.y - (isHovered ? 24 : 16)}px, 0)`,
          transition: 'transform 0.15s ease-out, width 0.2s ease, height 0.2s ease, background-color 0.2s ease',
          boxShadow: isHovered ? '0 0 20px rgba(212, 175, 55, 0.3)' : 'none'
        }}
      />
    </>
  );
}
