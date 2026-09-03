import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles, Music2, ChevronDown } from 'lucide-react';

const MANTRAS = [
  {
    id: 'om_vedic',
    name: 'Sacred Om Chant',
    desc: 'Traditional 136.1Hz Cosmic Om Chant with Vocal Formants & Temple Bell',
    rootFreq: 136.1, // Earth Cosmic frequency
    vocalVowels: [
      { f1: 450, f2: 850, f3: 2400 }, // 'O'
      { f1: 300, f2: 1200, f3: 2600 }  // 'M'
    ],
    bellInterval: 7000
  },
  {
    id: 'gayatri',
    name: 'Gayatri Solar Drone',
    desc: '108Hz Solar Plexus Vedic Resonance with Singing Bowl Overtones',
    rootFreq: 108.0, // Sacred 108 Vedic frequency
    vocalVowels: [
      { f1: 650, f2: 1100, f3: 2500 }, // 'Aa'
      { f1: 400, f2: 900, f3: 2200 }   // 'Uum'
    ],
    bellInterval: 9000
  },
  {
    id: 'shiva',
    name: 'Maha Mrityunjaya & Shiva',
    desc: '111Hz Deep Cellular Healing Mantra with Temple Ghanta Resonance',
    rootFreq: 111.0, // Deep healing frequency
    vocalVowels: [
      { f1: 380, f2: 800, f3: 2300 },
      { f1: 520, f2: 1000, f3: 2700 }
    ],
    bellInterval: 8000
  }
];

export default function SpiritualSoundscape() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeMantraIndex, setActiveMantraIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const audioCtxRef = useRef(null);
  const nodesRef = useRef([]);
  const bellTimerRef = useRef(null);

  const activeMantra = MANTRAS[activeMantraIndex];

  // Play realistic brass temple bell chime
  const triggerTempleBell = (ctx, destination, fundamental = 850) => {
    try {
      const now = ctx.currentTime;
      // Inharmonic brass bell spectrum multipliers
      const bellHarmonics = [1, 2.76, 5.4, 8.93, 11.2];
      const masterBellGain = ctx.createGain();
      masterBellGain.gain.setValueAtTime(0.045, now);
      masterBellGain.gain.exponentialRampToValueAtTime(0.0001, now + 4.5);
      masterBellGain.connect(destination);

      bellHarmonics.forEach((mult, i) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(fundamental * mult * (1 + (Math.random() - 0.5) * 0.01), now);
        
        g.gain.setValueAtTime(1 / (i + 1), now);
        g.gain.exponentialRampToValueAtTime(0.0001, now + (3.8 / (i + 0.8)));

        osc.connect(g);
        g.connect(masterBellGain);

        osc.start(now);
        osc.stop(now + 4.8);
      });
    } catch (_) {}
  };

  const startSoundscape = (mantraIdx = activeMantraIndex) => {
    try {
      stopSoundscape();

      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;

      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const selectedMantra = MANTRAS[mantraIdx];
      const rootFreq = selectedMantra.rootFreq;
      const now = ctx.currentTime;

      // Master output gain with gentle fade in
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, now);
      masterGain.gain.linearRampToValueAtTime(0.12, now + 1.5);
      masterGain.connect(ctx.destination);

      const activeNodes = [masterGain];

      // 1. Tanpura / Drone Foundations (Root, 5th, Octave)
      const droneHarmonics = [
        { mult: 0.5, type: 'sine', gain: 0.08 }, // Sub-bass warmth
        { mult: 1.0, type: 'sawtooth', gain: 0.04 }, // Rich harmonic root
        { mult: 1.5, type: 'sine', gain: 0.05 }, // Fifth (Pa)
        { mult: 2.0, type: 'triangle', gain: 0.03 } // Octave
      ];

      // Lowpass warmth filter
      const warmFilter = ctx.createBiquadFilter();
      warmFilter.type = 'lowpass';
      warmFilter.frequency.setValueAtTime(480, now);
      warmFilter.connect(masterGain);
      activeNodes.push(warmFilter);

      droneHarmonics.forEach(({ mult, type, gain: gVal }) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(rootFreq * mult, now);

        // Gentle pitch drift for human organicity
        const drift = ctx.createOscillator();
        const driftGain = ctx.createGain();
        drift.frequency.setValueAtTime(0.12 + Math.random() * 0.08, now);
        driftGain.gain.setValueAtTime(0.8, now);
        drift.connect(driftGain);
        driftGain.connect(osc.frequency);
        drift.start(now);

        g.gain.setValueAtTime(gVal, now);

        osc.connect(g);
        g.connect(warmFilter);

        osc.start(now);
        activeNodes.push(osc, g, drift, driftGain);
      });

      // 2. Vocal Formant Synthesizer ("Ooo - Mmm" human chant emulation)
      const vocalOsc = ctx.createOscillator();
      vocalOsc.type = 'sawtooth';
      vocalOsc.frequency.setValueAtTime(rootFreq, now);

      // Breath envelope LFO (Swells like natural breathing chant every 5s)
      const breathLfo = ctx.createOscillator();
      breathLfo.frequency.setValueAtTime(0.2, now); // 5 sec chant cycle
      const breathGain = ctx.createGain();
      breathGain.gain.setValueAtTime(0.04, now);
      breathLfo.connect(breathGain.gain);

      // 3 Parallel Formant Bandpass Filters (F1, F2, F3)
      selectedMantra.vocalVowels.forEach((vowel, vIdx) => {
        const f1 = ctx.createBiquadFilter();
        f1.type = 'bandpass';
        f1.Q.setValueAtTime(6.0, now);
        f1.frequency.setValueAtTime(vowel.f1, now);

        const f2 = ctx.createBiquadFilter();
        f2.type = 'bandpass';
        f2.Q.setValueAtTime(7.0, now);
        f2.frequency.setValueAtTime(vowel.f2, now);

        // Subtle vowel morphing LFO
        const morph = ctx.createOscillator();
        morph.frequency.setValueAtTime(0.2, now);
        const morphGain = ctx.createGain();
        morphGain.gain.setValueAtTime(60, now);
        morph.connect(morphGain);
        morphGain.connect(f1.frequency);
        morph.start(now);

        vocalOsc.connect(f1);
        vocalOsc.connect(f2);

        f1.connect(breathGain);
        f2.connect(breathGain);

        activeNodes.push(f1, f2, morph, morphGain);
      });

      breathGain.connect(masterGain);
      breathLfo.start(now);
      vocalOsc.start(now);
      activeNodes.push(vocalOsc, breathLfo, breathGain);

      // 3. Initial Temple Bell Chime
      triggerTempleBell(ctx, masterGain, 820);

      // Periodic Bell Loop
      bellTimerRef.current = setInterval(() => {
        if (ctx && ctx.state === 'running') {
          triggerTempleBell(ctx, masterGain, 820 + (Math.random() - 0.5) * 60);
        }
      }, selectedMantra.bellInterval);

      nodesRef.current = activeNodes;
      setIsPlaying(true);
    } catch (err) {
      console.warn("Mantra audio synthesis notice:", err);
    }
  };

  const stopSoundscape = () => {
    if (bellTimerRef.current) {
      clearInterval(bellTimerRef.current);
      bellTimerRef.current = null;
    }

    if (nodesRef.current.length > 0) {
      nodesRef.current.forEach((node) => {
        try {
          if (node.stop) node.stop();
          if (node.disconnect) node.disconnect();
        } catch (_) {}
      });
      nodesRef.current = [];
    }

    if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
      try {
        audioCtxRef.current.suspend();
      } catch (_) {}
    }

    setIsPlaying(false);
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopSoundscape();
    } else {
      startSoundscape(activeMantraIndex);
    }
  };

  const selectMantra = (index) => {
    setActiveMantraIndex(index);
    setMenuOpen(false);
    if (isPlaying) {
      startSoundscape(index);
    }
  };

  useEffect(() => {
    return () => {
      stopSoundscape();
    };
  }, []);

  return (
    <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
      
      {/* Main Mantra Button */}
      <button
        onClick={toggleSound}
        title={isPlaying ? `Click to Pause ${activeMantra.name}` : `Play ${activeMantra.name}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.45rem',
          padding: '0.42rem 0.9rem',
          borderRadius: 'var(--radius-full)',
          background: isPlaying 
            ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.22) 0%, rgba(255, 255, 255, 0.95) 100%)' 
            : 'rgba(184, 134, 11, 0.08)',
          border: isPlaying ? '1.5px solid #B8860B' : '1px solid rgba(184, 134, 11, 0.35)',
          color: '#715104',
          fontSize: '0.82rem',
          fontWeight: 700,
          cursor: 'pointer',
          transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
          boxShadow: isPlaying ? '0 2px 10px rgba(184, 134, 11, 0.25)' : 'none',
          whiteSpace: 'nowrap'
        }}
      >
        {isPlaying ? (
          <>
            <Volume2 size={15} style={{ color: '#B8860B', animation: 'pulse 1.4s infinite' }} />
            <span>{activeMantra.name}</span>
            <Sparkles size={12} style={{ color: '#D97706' }} />
          </>
        ) : (
          <>
            <VolumeX size={15} style={{ opacity: 0.7 }} />
            <span>Mantra Sound</span>
          </>
        )}
      </button>

      {/* Mantra Quick Switcher Dropdown Arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setMenuOpen(!menuOpen);
        }}
        title="Choose Vedic Mantra"
        style={{
          background: isPlaying ? 'rgba(184, 134, 11, 0.15)' : 'rgba(184, 134, 11, 0.06)',
          border: '1px solid rgba(184, 134, 11, 0.3)',
          borderLeft: 'none',
          borderTopRightRadius: '9999px',
          borderBottomRightRadius: '9999px',
          padding: '0.42rem 0.45rem',
          marginLeft: '-6px',
          cursor: 'pointer',
          color: '#715104',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s ease'
        }}
      >
        <ChevronDown size={12} style={{ transform: menuOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} />
      </button>

      {/* Mantra Selection Menu */}
      {menuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '115%',
            right: 0,
            background: '#FFFFFF',
            border: '1.5px solid rgba(184, 134, 11, 0.35)',
            borderRadius: '14px',
            padding: '0.5rem',
            width: '260px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
            zIndex: 1100,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.35rem'
          }}
        >
          <div style={{ padding: '0.3rem 0.5rem', fontSize: '0.72rem', fontWeight: 700, color: '#8B6508', textTransform: 'uppercase', letterSpacing: '0.5px', borderBottom: '1px solid rgba(184, 134, 11, 0.15)' }}>
            Select Divine Mantra
          </div>

          {MANTRAS.map((mantra, idx) => {
            const isSelected = idx === activeMantraIndex;
            return (
              <button
                key={mantra.id}
                onClick={() => selectMantra(idx)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '0.5rem 0.65rem',
                  borderRadius: '8px',
                  background: isSelected ? 'rgba(184, 134, 11, 0.12)' : 'transparent',
                  border: isSelected ? '1px solid #B8860B' : '1px solid transparent',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'background 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', width: '100%', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.84rem', fontWeight: 700, color: isSelected ? '#715104' : '#1F2937' }}>
                    {mantra.name}
                  </span>
                  {isSelected && <Sparkles size={12} style={{ color: '#B8860B' }} />}
                </div>
                <span style={{ fontSize: '0.7rem', color: '#6B7280', marginTop: '0.15rem' }}>
                  {mantra.desc}
                </span>
              </button>
            );
          })}
        </div>
      )}

    </div>
  );
}
