import React from 'react';
import { 
  Heart, Users, Home, Briefcase, TrendingUp, Coins, Building, UserX, Sparkles, Sun, Flame, Shield 
} from 'lucide-react';
import { initialSiteData } from '../../data/defaultData';

const iconMap = {
  Heart: Heart,
  Users: Users,
  Home: Home,
  Briefcase: Briefcase,
  TrendingUp: TrendingUp,
  Coins: Coins,
  Building: Building,
  UserX: UserX,
  Sparkles: Sparkles,
  Sun: Sun,
  Flame: Flame,
  Shield: Shield
};

export default function AreasGrid({ areas, onOpenBooking }) {
  const areaList = areas || initialSiteData.aboutPage?.areasOfGuidance || [];

  return (
    <section style={{ padding: '4rem 0' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge-gold" style={{ marginBottom: '0.75rem' }}>
            <Sparkles size={14} />
            <span>Scope of Consultation</span>
          </div>
          <h2 className="font-serif" style={{ fontSize: '2.5rem', color: '#1F2937', marginBottom: '0.75rem' }}>
            Areas of Guidance
          </h2>
          <p style={{ color: '#4B5563', maxWidth: '620px', margin: '0 auto' }}>
            Comprehensive life domains in which Pandit Shekar Guruji offers private observation and spiritual guidance.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.25rem' }}>
          {areaList.map((item, idx) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div 
                key={idx} 
                className="glass-card category-card" 
                style={{ 
                  padding: '1.25rem 1rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.85rem',
                  cursor: 'pointer',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  boxShadow: '0 4px 14px rgba(184, 134, 11, 0.05)'
                }}
                onClick={() => onOpenBooking && onOpenBooking(item.name)}
              >
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(212, 175, 55, 0.12)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#B8860B',
                  flexShrink: 0
                }}>
                  <Icon size={20} />
                </div>
                <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1F2937' }}>{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
