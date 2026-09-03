import React from 'react';
import { User, Calendar, MessageSquare, CheckSquare } from 'lucide-react';

export default function BookingProgressBar({ currentStep }) {
  const steps = [
    { num: 1, label: "Personal Details", icon: User },
    { num: 2, label: "Consultation Selection", icon: Calendar },
    { num: 3, label: "Concern & Uploads", icon: MessageSquare },
    { num: 4, label: "Consent & Review", icon: CheckSquare }
  ];

  return (
    <div style={{ maxWidth: '850px', margin: '0 auto 2.5rem auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem', position: 'relative' }}>
        {steps.map((step) => {
          const Icon = step.icon;
          const isActive = currentStep === step.num;
          const isCompleted = currentStep > step.num;

          return (
            <div 
              key={step.num}
              style={{
                background: isActive ? 'rgba(212, 175, 55, 0.15)' : isCompleted ? 'rgba(16, 185, 129, 0.12)' : '#FFFFFF',
                border: isActive ? '1.5px solid #B8860B' : isCompleted ? '1.5px solid #10B981' : '1px solid rgba(184, 134, 11, 0.2)',
                borderRadius: '10px',
                padding: '0.85rem 0.5rem',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: isActive ? 'var(--gold-gradient)' : isCompleted ? '#10B981' : 'rgba(184, 134, 11, 0.12)',
                color: isActive || isCompleted ? '#FFFFFF' : '#715104',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 0.4rem auto',
                fontSize: '0.85rem'
              }}>
                <Icon size={16} />
              </div>
              
              <span style={{ 
                fontSize: '0.78rem', 
                fontWeight: isActive ? '700' : '600',
                color: isActive ? '#715104' : isCompleted ? '#059669' : '#374151',
                display: 'block'
              }}>
                Step {step.num}: {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
