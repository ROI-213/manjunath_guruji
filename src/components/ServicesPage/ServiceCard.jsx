import React from 'react';
import { 
  Heart, Users, Briefcase, TrendingUp, Shield, Hand, Calendar, Flame, Sparkles, ArrowRight, MessageCircle, ShieldCheck
} from 'lucide-react';

const iconMap = {
  Heart: Heart,
  Users: Users,
  Briefcase: Briefcase,
  TrendingUp: TrendingUp,
  Shield: Shield,
  Hand: Hand,
  Calendar: Calendar,
  Flame: Flame,
  Sparkles: Sparkles
};

export default function ServiceCard({ service, onSelectService }) {
  const Icon = iconMap[service.icon] || Sparkles;

  return (
    <div className="glass-card category-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '0', overflow: 'hidden' }}>
      {/* Top Image Section */}
      <div style={{ position: 'relative', height: '190px', overflow: 'hidden', backgroundColor: '#FAF5EA' }}>
        <img 
          src={service.imageUrl} 
          alt={service.title} 
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/service_love.png';
          }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
        />
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(to top, rgba(15, 20, 32, 0.75) 0%, rgba(15, 20, 32, 0.15) 50%, transparent 100%)' 
        }} />
        
        <div style={{ position: 'absolute', top: '0.85rem', left: '0.85rem', zIndex: 2 }}>
          <span className="badge-gold" style={{ fontSize: '0.75rem', padding: '0.25rem 0.65rem', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
            {service.category}
          </span>
        </div>

        {service.safetyLabel && (
          <div style={{ position: 'absolute', top: '0.85rem', right: '0.85rem', zIndex: 2 }}>
            <span style={{ 
              fontSize: '0.75rem', 
              padding: '0.25rem 0.65rem', 
              borderRadius: '9999px', 
              background: 'rgba(5, 150, 105, 0.9)', 
              border: '1px solid rgba(255, 255, 255, 0.3)', 
              color: '#FFFFFF', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.25rem',
              fontWeight: 600,
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
            }}>
              <ShieldCheck size={12} />
              <span>{service.safetyLabel}</span>
            </span>
          </div>
        )}

        <div style={{
          position: 'absolute',
          bottom: '-18px',
          left: '1.25rem',
          width: '44px',
          height: '44px',
          borderRadius: '12px',
          background: 'var(--gold-gradient)',
          color: '#07090E',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 14px rgba(184, 134, 11, 0.4)',
          zIndex: 3,
          border: '2px solid #FFFFFF'
        }}>
          <Icon size={22} />
        </div>
      </div>

      <div style={{ padding: '1.75rem 1.25rem 1.25rem 1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3 style={{ fontSize: '1.2rem', color: '#1F2937', marginBottom: '0.5rem' }}>
          {service.title}
        </h3>

        <p style={{ fontSize: '0.88rem', color: '#374151', marginBottom: '1.5rem', flexGrow: 1, lineHeight: '1.5' }}>
          {service.shortDesc}
        </p>

        <div className="category-actions" style={{ gap: '0.5rem' }}>
          <button 
            className="btn btn-gold btn-sm"
            onClick={() => onSelectService(service.slug)}
            style={{ flex: 1 }}
          >
            <span>View Details</span>
            <ArrowRight size={14} />
          </button>

          <a 
            href={`https://wa.me/919845657808?text=Hello%20Pandit%20Shekar%20Guruji%2C%20I%20am%20interested%20in%20a%20private%20consultation%20for%20${encodeURIComponent(service.title)}.`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-whatsapp btn-sm"
            title="WhatsApp Consultation"
          >
            <MessageCircle size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
