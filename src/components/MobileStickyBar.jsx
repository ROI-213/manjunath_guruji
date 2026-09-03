import React from 'react';
import { MessageCircle, Phone, Calendar } from 'lucide-react';

export default function MobileStickyBar({ contactData, onOpenBooking }) {
  return (
    <div className="mobile-sticky-bar">
      <div className="mobile-sticky-grid">
        <a href={contactData.whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-whatsapp btn-sm btn-full">
          <MessageCircle size={16} />
          <span>WhatsApp</span>
        </a>
        <a href={contactData.callUrl} className="btn btn-call btn-sm btn-full">
          <Phone size={16} />
          <span>Call Now</span>
        </a>
      </div>
    </div>
  );
}
