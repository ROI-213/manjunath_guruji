import React, { useState, useEffect } from 'react';
import { useInView } from 'framer-motion';

export default function AnimatedCounter({ value, suffix = '', duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericTarget = parseInt(value, 10) || 0;

  useEffect(() => {
    if (!isInView || numericTarget <= 0) return;

    let start = 0;
    const stepTime = Math.abs(Math.floor((duration * 1000) / numericTarget));
    const timer = setInterval(() => {
      start += Math.ceil(numericTarget / 30);
      if (start >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, Math.max(stepTime, 30));

    return () => clearInterval(timer);
  }, [isInView, numericTarget, duration]);

  return (
    <span ref={ref} className="font-serif">
      {count}{suffix}
    </span>
  );
}
