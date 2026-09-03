import React from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

export default function LightboxModal({ item, onClose, onPrev, onNext }) {
  if (!item) return null;

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 1200 }}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()} 
        style={{ maxWidth: '800px', padding: '1rem', background: '#07090E' }}
      >
        <button 
          onClick={onClose} 
          style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 10, background: 'rgba(0,0,0,0.6)', border: '1px solid #D4AF37', borderRadius: '50%', width: '36px', height: '36px', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
        >
          <X size={20} />
        </button>

        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', background: '#000', maxHeight: '520px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {item.type === 'video' ? (
            <video controls autoPlay style={{ width: '100%', maxHeight: '500px', objectFit: 'contain' }}>
              <source src={item.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={item.url} alt={item.title} style={{ width: '100%', maxHeight: '500px', objectFit: 'contain' }} />
          )}

          <button 
            onClick={onPrev}
            style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(212,175,55,0.4)', color: '#FFF', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          >
            <ChevronLeft size={24} />
          </button>

          <button 
            onClick={onNext}
            style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(212,175,55,0.4)', color: '#FFF', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div style={{ padding: '1rem 0.5rem 0.5rem 0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem' }}>{item.title}</h4>
            <p style={{ color: '#D4AF37', fontSize: '0.85rem' }}>{item.category} • {item.description}</p>
          </div>

          <a 
            href={`https://wa.me/919845657808?text=Hello%20Guruji%2C%20I%20saw%20your%20gallery%20item%20"${encodeURIComponent(item.title)}"%20and%20want%20to%20know%20more.`}
            target="_blank" 
            rel="noreferrer"
            className="btn btn-whatsapp btn-sm"
          >
            <MessageCircle size={16} />
            <span>Enquire via WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
