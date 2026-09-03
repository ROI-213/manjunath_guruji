import React, { useState } from 'react';
import TestimonialsHero from './TestimonialsHero';
import TestimonialsGrid from './TestimonialsGrid';
import TestimonialSubmissionModal from './TestimonialSubmissionModal';
import ReportPrivacyModal from './ReportPrivacyModal';
import { initialTestimonialsData } from '../../data/testimonialsDatabase';

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState(initialTestimonialsData);
  const [isSubmissionOpen, setIsSubmissionOpen] = useState(false);
  const [reportItem, setReportItem] = useState(null);

  const handleAddTestimonial = (newTestimonial) => {
    setTestimonials(prev => [newTestimonial, ...prev]);
  };

  return (
    <div className="testimonials-page-wrapper">
      <TestimonialsHero 
        onOpenSubmission={() => setIsSubmissionOpen(true)}
      />

      <TestimonialsGrid 
        testimonials={testimonials}
        onOpenReport={(item) => setReportItem(item)}
      />

      <TestimonialSubmissionModal 
        isOpen={isSubmissionOpen}
        onClose={() => setIsSubmissionOpen(false)}
        onSubmitTestimonial={handleAddTestimonial}
      />

      <ReportPrivacyModal 
        item={reportItem}
        onClose={() => setReportItem(null)}
      />
    </div>
  );
}
