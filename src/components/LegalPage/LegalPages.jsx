import React from 'react';
import { ShieldAlert, FileText, Lock, ShieldCheck } from 'lucide-react';

export default function LegalPages({ policyType }) {
  return (
    <div className="legal-pages-wrapper" style={{ padding: '3.5rem 0 5rem 0' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        
        {/* Legal Review Notice Banner */}
        <div style={{ background: 'rgba(212, 175, 55, 0.08)', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '10px', padding: '1rem 1.25rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', color: '#F3E5AB' }}>
          <ShieldAlert size={20} style={{ color: '#D4AF37', flexShrink: 0 }} />
          <span>Legal Review Notice: These policy documents are prepared for Astro Psychic India. Final jurisdiction adjustments require review by qualified legal counsel in the regions served.</span>
        </div>

        {/* 14.1 PRIVACY POLICY */}
        {policyType === 'privacy' && (
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <div className="badge-gold" style={{ marginBottom: '0.75rem' }}>
              <Lock size={14} />
              <span>Section 14.1</span>
            </div>
            <h1 className="font-serif" style={{ fontSize: '2.5rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>
              Privacy Policy
            </h1>

            <div style={{ color: '#E5E7EB', lineHeight: '1.75', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p>Astro Psychic India ("we", "us", "our") is committed to protecting your privacy and confidential personal data when you consult Pandit Shekar Guruji.</p>
              
              <h3 style={{ color: '#F3E5AB', fontSize: '1.2rem', marginTop: '0.5rem' }}>1. Data Categories Collected</h3>
              <p>We collect full names, age confirmation, phone numbers, WhatsApp numbers, optional email addresses, country, preferred language, statement of concern, and optional photographs (palms, face, personal photo) voluntarily submitted for consultation.</p>

              <h3 style={{ color: '#F3E5AB', fontSize: '1.2rem', marginTop: '0.5rem' }}>2. Photograph Storage & Retention Policy</h3>
              <p>Uploaded photographs are stored in an isolated, encrypted repository accessible exclusively by Pandit Shekar Guruji. Photographs are retained strictly for the duration of active reading evaluation and are permanently deleted post-consultation upon request.</p>

              <h3 style={{ color: '#F3E5AB', fontSize: '1.2rem', marginTop: '0.5rem' }}>3. Third-Party Disclosures & Security</h3>
              <p>We strictly DO NOT sell, rent, trade, or disclose your personal data, photographs, or consultation notes to third parties. All submissions utilize SSL encryption.</p>

              <h3 style={{ color: '#F3E5AB', fontSize: '1.2rem', marginTop: '0.5rem' }}>4. Deletion Requests & Rights</h3>
              <p>You reserve the right to request immediate deletion of your submitted details or photos by contacting us via phone or WhatsApp (+91 98456 57808) or via email (shekarbaba001@gmail.com).</p>
            </div>
          </div>
        )}

        {/* 14.2 TERMS AND CONDITIONS */}
        {policyType === 'terms' && (
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <div className="badge-gold" style={{ marginBottom: '0.75rem' }}>
              <FileText size={14} />
              <span>Section 14.2</span>
            </div>
            <h1 className="font-serif" style={{ fontSize: '2.5rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>
              Terms and Conditions
            </h1>

            <div style={{ color: '#E5E7EB', lineHeight: '1.75', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p>By accessing Astro Psychic India, you agree to comply with these Terms and Conditions.</p>

              <h3 style={{ color: '#F3E5AB', fontSize: '1.2rem', marginTop: '0.5rem' }}>1. Nature of Services</h3>
              <p>Services provided by Pandit Shekar Guruji consist of spiritual, intuitive, and traditional psychic observation (palmistry, DOB analysis, face reading). Consultations are intended for personal reflection.</p>

              <h3 style={{ color: '#F3E5AB', fontSize: '1.2rem', marginTop: '0.5rem' }}>2. User Responsibilities & Age Limit</h3>
              <p>You must be 18 years of age or older. You agree to provide truthful information and maintain respectful communication. Prohibited conduct includes harassment, fake identity submission, or abusive language.</p>

              <h3 style={{ color: '#F3E5AB', fontSize: '1.2rem', marginTop: '0.5rem' }}>3. Limitation of Liability & Jurisdiction</h3>
              <p>Astro Psychic India shall not be held liable for personal decisions, financial choices, or actions taken following a consultation. [Jurisdiction Placeholder: Subject to legal jurisdiction in Bengaluru, Karnataka, India].</p>
            </div>
          </div>
        )}

        {/* 14.3 DISCLAIMER */}
        {policyType === 'disclaimer-page' && (
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <div className="badge-gold" style={{ marginBottom: '0.75rem' }}>
              <ShieldCheck size={14} />
              <span>Section 14.3</span>
            </div>
            <h1 className="font-serif" style={{ fontSize: '2.5rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>
              Website & Service Disclaimer
            </h1>

            <div style={{ color: '#E5E7EB', lineHeight: '1.75', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p>Spiritual and psychic services offered by Pandit Shekar Guruji are based on personal belief, traditional observation, and individual interpretation.</p>

              <div style={{ background: 'rgba(212, 175, 55, 0.1)', borderLeft: '4px solid #D4AF37', padding: '1.25rem', borderRadius: '0 8px 8px 0' }}>
                <h4 style={{ color: '#F3E5AB', marginTop: 0 }}>Core Disclaimers:</h4>
                <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
                  <li>No specific result, outcome, or future prediction can be guaranteed.</li>
                  <li>Spiritual consultations DO NOT replace professional medical care, licensed psychological therapy, certified financial advice, or legal counsel.</li>
                  <li>This website DOES NOT provide emergency services. Medical emergencies, physical threats, self-harm thoughts, or legal crises require local emergency services.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* 14.4 COOKIE POLICY */}
        {policyType === 'cookie-policy' && (
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <div className="badge-gold" style={{ marginBottom: '0.75rem' }}>
              <FileText size={14} />
              <span>Section 14.4</span>
            </div>
            <h1 className="font-serif" style={{ fontSize: '2.5rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>
              Cookie Policy
            </h1>

            <div style={{ color: '#E5E7EB', lineHeight: '1.75', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p>We use cookies to ensure optimal functionality, security, and performance on our web app.</p>
              
              <h3 style={{ color: '#F3E5AB', fontSize: '1.2rem', marginTop: '0.5rem' }}>Categories of Cookies Used:</h3>
              <ul style={{ paddingLeft: '1.25rem' }}>
                <li><strong>Strictly Necessary Cookies:</strong> Essential for page navigation, security, and form progress.</li>
                <li><strong>Analytics Cookies:</strong> Anonymous event tracking (e.g. call clicks, WhatsApp clicks) to measure site usability.</li>
                <li><strong>Marketing Cookies:</strong> Disabled by default to protect visitor privacy.</li>
              </ul>
            </div>
          </div>
        )}

        {/* 14.5 REFUND / CANCELLATION POLICY */}
        {policyType === 'refund-policy' && (
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <div className="badge-gold" style={{ marginBottom: '0.75rem' }}>
              <FileText size={14} />
              <span>Section 14.5</span>
            </div>
            <h1 className="font-serif" style={{ fontSize: '2.5rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>
              Refund & Cancellation Policy
            </h1>

            <div style={{ color: '#E5E7EB', lineHeight: '1.75', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p>This policy defines rescheduling, cancellation windows, and refund eligibility when payment features are enabled.</p>

              <h3 style={{ color: '#F3E5AB', fontSize: '1.2rem', marginTop: '0.5rem' }}>1. Rescheduling & Cancellations</h3>
              <p>Appointments may be rescheduled free of charge up to 12 hours prior to your scheduled consultation time by contacting WhatsApp (+91 98456 57808).</p>

              <h3 style={{ color: '#F3E5AB', fontSize: '1.2rem', marginTop: '0.5rem' }}>2. No-Show & Refund Eligibility</h3>
              <p>If an appointment is cancelled by the administrator, a 100% refund is processed to the original payment method within 5-7 business days.</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export function PrivacyPolicyPage() {
  return <LegalPages policyType="privacy" />;
}

export function TermsConditionsPage() {
  return <LegalPages policyType="terms" />;
}

export function DisclaimerPage() {
  return <LegalPages policyType="disclaimer-page" />;
}

export function CookiePolicyPage() {
  return <LegalPages policyType="cookie-policy" />;
}

export function RefundPolicyPage() {
  return <LegalPages policyType="refund-policy" />;
}
