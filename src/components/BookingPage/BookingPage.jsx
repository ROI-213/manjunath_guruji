import React, { useState } from 'react';
import BookingProgressBar from './BookingProgressBar';
import Step1Personal from './Step1Personal';
import Step2Consultation from './Step2Consultation';
import Step3Concern from './Step3Concern';
import Step4Review from './Step4Review';
import BookingConfirmation from './BookingConfirmation';

export default function BookingPage({ contactData }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [bookingState, setBookingState] = useState({
    fullName: '',
    ageConfirmed: false,
    phone: '',
    whatsapp: '',
    email: '',
    country: 'India (+91)',
    language: 'Hindi',
    serviceTitle: 'Love & Relationship Guidance',
    method: 'WhatsApp / Call',
    preferredDate: '',
    timeSlot: 'Morning (9 AM - 12 PM IST)',
    concern: '',
    fileName: '',
    privacyConsent: false,
    termsAccepted: false,
    bookingRef: ''
  });

  const handleNextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 4));
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const handleSubmitBooking = () => {
    const refID = `BOOK-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingState(prev => ({ ...prev, bookingRef: refID }));
    setIsSubmitted(true);
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    setBookingState({
      fullName: '',
      ageConfirmed: false,
      phone: '',
      whatsapp: '',
      email: '',
      country: 'India (+91)',
      language: 'Hindi',
      serviceTitle: 'Love & Relationship Guidance',
      method: 'WhatsApp / Call',
      preferredDate: '',
      timeSlot: 'Morning (9 AM - 12 PM IST)',
      concern: '',
      fileName: '',
      privacyConsent: false,
      termsAccepted: false,
      bookingRef: ''
    });
  };

  const stars = [
    { top: '15%', left: '10%', size: 2.5, opacity: 0.8, delay: '0.2s', dur: '3s' },
    { top: '25%', left: '28%', size: 1.5, opacity: 0.6, delay: '1.2s', dur: '4s' },
    { top: '12%', left: '72%', size: 3, opacity: 0.9, delay: '0.8s', dur: '2.5s' },
    { top: '35%', left: '88%', size: 2, opacity: 0.7, delay: '1.8s', dur: '3.5s' },
    { top: '75%', left: '16%', size: 2, opacity: 0.75, delay: '1.5s', dur: '2.8s' },
    { top: '80%', left: '80%', size: 2.5, opacity: 0.8, delay: '0.5s', dur: '4.2s' },
  ];

  return (
    <div className="booking-page-wrapper" style={{ paddingBottom: '5rem' }}>
      {/* Cosmic Universe Hero Header for Booking Wizard */}
      <section className="booking-hero-universe-section" style={{
        position: 'relative',
        padding: '4.5rem 0 3.5rem 0',
        background: 'linear-gradient(135deg, #070314 0%, #110726 35%, #1A0D38 65%, #080316 100%)',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)',
        marginBottom: '3rem'
      }}>
        {/* Nebula Glow */}
        <div style={{
          position: 'absolute',
          top: '-40%',
          left: '25%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(184, 134, 11, 0.18) 0%, rgba(139, 92, 246, 0.12) 45%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none'
        }} />

        {/* Twinkling Stars */}
        {stars.map((s, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: s.top,
              left: s.left,
              width: `${s.size}px`,
              height: `${s.size}px`,
              borderRadius: '50%',
              backgroundColor: '#FFF8E7',
              boxShadow: `0 0 ${s.size * 3}px rgba(255, 235, 160, 0.9)`,
              animation: `celestialTwinkle ${s.dur} infinite ease-in-out alternate`,
              animationDelay: s.delay,
              opacity: s.opacity,
              pointerEvents: 'none'
            }}
          />
        ))}

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '850px' }}>
          {/* Breadcrumb */}
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            fontSize: '0.85rem', 
            color: '#E5E7EB', 
            marginBottom: '1.25rem',
            background: 'rgba(255, 255, 255, 0.08)',
            padding: '0.35rem 1rem',
            borderRadius: '9999px',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            backdropFilter: 'blur(8px)'
          }}>
            <span style={{ color: '#F3BA2F', fontWeight: 600 }}>Home</span>
            <span style={{ color: 'rgba(212, 175, 55, 0.6)' }}>/</span>
            <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Book Wizard</span>
          </div>

          <h1 className="font-serif" style={{ 
            fontSize: '3.2rem', 
            color: '#FFFFFF', 
            marginBottom: '1rem',
            letterSpacing: '1px',
            textShadow: '0 4px 20px rgba(0,0,0,0.6)'
          }}>
            Book a <span style={{
              background: 'linear-gradient(135deg, #FCE7A1 0%, #D4AF37 50%, #F59E0B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 2px 8px rgba(212,175,55,0.4))'
            }}>Private Consultation</span>
          </h1>

          <p style={{ 
            color: '#E5E7EB', 
            fontSize: '1.18rem', 
            lineHeight: '1.7', 
            maxWidth: '680px', 
            margin: '0 auto',
            textShadow: '0 2px 10px rgba(0,0,0,0.5)'
          }}>
            Complete our confidential step-by-step intake form to request a private appointment with Pandit Shekar Guruji.
          </p>
        </div>
      </section>

      <div className="container" style={{ maxWidth: '900px' }}>
        
        {!isSubmitted ? (
          <>
            <BookingProgressBar currentStep={currentStep} />

            {currentStep === 1 && (
              <Step1Personal 
                bookingState={bookingState}
                setBookingState={setBookingState}
                onNextStep={handleNextStep}
              />
            )}

            {currentStep === 2 && (
              <Step2Consultation 
                bookingState={bookingState}
                setBookingState={setBookingState}
                onNextStep={handleNextStep}
                onPrevStep={handlePrevStep}
              />
            )}

            {currentStep === 3 && (
              <Step3Concern 
                bookingState={bookingState}
                setBookingState={setBookingState}
                onNextStep={handleNextStep}
                onPrevStep={handlePrevStep}
              />
            )}

            {currentStep === 4 && (
              <Step4Review 
                bookingState={bookingState}
                setBookingState={setBookingState}
                onSubmitBooking={handleSubmitBooking}
                onPrevStep={handlePrevStep}
              />
            )}
          </>
        ) : (
          <BookingConfirmation 
            bookingState={bookingState}
            onReset={handleReset}
            contactData={contactData}
          />
        )}

      </div>
    </div>
  );
}
