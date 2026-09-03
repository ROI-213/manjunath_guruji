import React from 'react';
import { Target, Eye, Sparkles } from 'lucide-react';
import { initialSiteData } from '../../data/defaultData';

export default function MissionVision({ missionVisionData }) {
  const mvData = missionVisionData || initialSiteData.aboutPage?.missionVision || {};

  return (
    <section style={{ padding: '4rem 0', background: 'rgba(212, 175, 55, 0.03)' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge-gold" style={{ marginBottom: '0.75rem' }}>
            <Sparkles size={14} />
            <span>Purpose & Direction</span>
          </div>
          <h2 className="font-serif" style={{ fontSize: '2.5rem', color: '#1F2937', marginBottom: '0.75rem' }}>
            Our Mission & Vision
          </h2>
          <p style={{ color: '#4B5563', maxWidth: '620px', margin: '0 auto' }}>
            Building a trustworthy, respectful, and modern platform for spiritual reflection.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          <div className="glass-card" style={{ padding: '2.5rem', border: '1px solid rgba(212, 175, 55, 0.25)', boxShadow: '0 8px 30px rgba(184, 134, 11, 0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(212, 175, 55, 0.12)', border: '1px solid rgba(212, 175, 55, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B8860B' }}>
                <Target size={22} />
              </div>
              <h3 className="font-serif" style={{ fontSize: '1.75rem', color: '#1F2937', margin: 0 }}>Our Mission</h3>
            </div>
            <p style={{ color: '#4B5563', fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>
              {mvData.mission || "To provide respectful, confidential, and accessible spiritual consultation that offers genuine clarity, emotional grounding, and ethical prayer guidance without fear-based messaging."}
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2.5rem', border: '1px solid rgba(59, 130, 246, 0.25)', boxShadow: '0 8px 30px rgba(59, 130, 246, 0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(59, 130, 246, 0.12)', border: '1px solid rgba(59, 130, 246, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563EB' }}>
                <Eye size={22} />
              </div>
              <h3 className="font-serif" style={{ fontSize: '1.75rem', color: '#1F2937', margin: 0 }}>Our Vision</h3>
            </div>
            <p style={{ color: '#4B5563', fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>
              {mvData.vision || "To create a globally trusted platform for spiritual learning, seamless appointment booking, and safe private communication rooted in integrity and mutual respect."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
