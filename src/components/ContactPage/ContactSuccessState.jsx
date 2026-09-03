import React from 'react';
import { CheckCircle2, ShieldCheck, MessageCircle, Phone, ArrowLeft, Copy, Check } from 'lucide-react';

export default function ContactSuccessState({ submissionData, onReset, contactData }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopyRef = () => {
    navigator.clipboard.writeText(submissionData.refNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-card" style={{ maxWidth: '750px', margin: '3rem auto', textAlign: 'center', padding: '3.5rem 2.5rem' }}>
      
      <div style={{
        width: '68px',
        height: '68px',
        borderRadius: '50%',
        background: 'rgba(16,185,129,0.15)',
        border: '1px solid rgba(16,185,129,0.4)',
        color: '#10B981',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 1.5rem auto'
      }}>
        <CheckCircle2 size={40} />
      </div>

      <div className="badge-green" style={{ marginBottom: '1rem' }}>
        <ShieldCheck size={14} />
        <span>Enquiry Logged Securely</span>
      </div>

      <h2 className="font-serif" style={{ fontSize: '2.25rem', color: '#1F2937', marginBottom: '0.75rem' }}>
        Enquiry Received
      </h2>

      <p style={{ color: '#374151', fontSize: '1.05rem', marginBottom: '2rem' }}>
        Thank you, <strong style={{ color: '#1F2937' }}>{submissionData.fullName}</strong>. Your consultation details have been encrypted and submitted directly to Pandit Shekar Guruji’s private coordinator.
      </p>

      {/* Generated Reference Box */}
      <div style={{
        background: 'rgba(212, 175, 55, 0.1)',
        border: '1px solid rgba(212, 175, 55, 0.3)',
        borderRadius: '12px',
        padding: '1.25rem',
        maxWidth: '450px',
        margin: '0 auto 2rem auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ textAlign: 'left' }}>
          <span style={{ fontSize: '0.75rem', color: '#715104', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
            Unique Reference Number
          </span>
          <h3 style={{ fontSize: '1.5rem', color: '#B8860B', margin: 0, fontFamily: 'monospace' }}>
            {submissionData.refNumber}
          </h3>
        </div>

        <button 
          onClick={handleCopyRef}
          className="btn btn-outline btn-sm"
          style={{ padding: '0.4rem 0.75rem' }}
        >
          {copied ? <Check size={14} style={{ color: '#10B981' }} /> : <Copy size={14} />}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>

      {/* Clear Next Step Instructions */}
      <div style={{ background: 'rgba(184, 134, 11, 0.05)', border: '1px solid rgba(184, 134, 11, 0.15)', borderRadius: '8px', padding: '1.25rem 1.5rem', textAlign: 'left', marginBottom: '2.5rem', fontSize: '0.9rem', color: '#374151', lineHeight: '1.7' }}>
        <h4 style={{ color: '#715104', fontSize: '1rem', marginBottom: '0.5rem' }}>Next Step Instructions:</h4>
        <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
          <li>Guruji or his direct coordinator will evaluate your submitted details and photographs.</li>
          <li>We will connect with you via <strong style={{ color: '#1F2937' }}>{submissionData.phone}</strong> or WhatsApp to schedule your exact private consultation time slot.</li>
          <li>If you require immediate assistance, you may open direct WhatsApp chat below referencing <strong style={{ color: '#B8860B' }}>{submissionData.refNumber}</strong>.</li>
        </ul>
      </div>

      {/* Immediate WhatsApp Connect Button */}
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a 
          href={`https://wa.me/919845657808?text=Hello%20Pandit%20Shekar%20Guruji%2C%20I%20just%20submitted%20an%20enquiry%20under%20Reference%20%23${submissionData.refNumber}.`}
          target="_blank"
          rel="noreferrer"
          className="btn btn-whatsapp"
        >
          <MessageCircle size={18} />
          <span>Connect Immediately on WhatsApp</span>
        </a>

        <button className="btn btn-outline" onClick={onReset}>
          <ArrowLeft size={16} />
          <span>Back to Contact Page</span>
        </button>
      </div>

    </div>
  );
}
