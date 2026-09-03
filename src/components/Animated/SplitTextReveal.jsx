import React from 'react';
import { motion } from 'framer-motion';

export default function SplitTextReveal({ text, className = '', style = {}, tag = 'h2', delay = 0, noWrap = false }) {
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay
      }
    }
  };

  const wordVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const Tag = tag;

  return (
    <Tag className={className} style={{ ...style, display: 'inline-block', whiteSpace: noWrap ? 'nowrap' : undefined }}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        style={{ display: 'inline-flex', flexWrap: noWrap ? 'nowrap' : 'wrap', gap: '0.3em' }}
      >
        {words.map((word, idx) => (
          <span key={idx} style={{ overflow: 'hidden', display: 'inline-block' }}>
            <motion.span variants={wordVariants} style={{ display: 'inline-block' }}>
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
