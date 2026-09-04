import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import ContactStrip from './components/ContactStrip';
import AboutGuruji from './components/AboutGuruji';
import ReadingMethods from './components/ReadingMethods';
import ProblemCategories from './components/ProblemCategories';
import LoveRelationships from './components/LoveRelationships';
import BadEnergyWitchcraftClearing from './components/BadEnergyWitchcraftClearing';
import ConsultationProcess from './components/ConsultationProcess';
import TestimonialsPreview from './components/TestimonialsPreview';
import FaqSection from './components/FaqSection';
import FinalCtaBanner from './components/FinalCtaBanner';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import AdminDrawer from './components/AdminDrawer';
import BookingModal from './components/BookingModal';
import PrivacyRemovalModal from './components/TestimonialsPage/ReportPrivacyModal';

// Interactive Components
import InteractiveZodiacGuidance from './components/Interactive/InteractiveZodiacGuidance';
import InteractivePalmistryGuide from './components/Interactive/InteractivePalmistryGuide';

// Animated Components
import PageLoader from './components/Animated/PageLoader';
import PageTransition from './components/Animated/PageTransition';
import CustomCursor from './components/Animated/CustomCursor';
import ScrollProgressButton from './components/Animated/ScrollProgressButton';

// Page Components
import AboutUsPage from './components/AboutPage/AboutUsPage';
import ServicesListingPage from './components/ServicesPage/ServicesListingPage';
import ServiceDetailPage from './components/ServiceDetail/ServiceDetailPage';
import BookingPage from './components/BookingPage/BookingPage';
import GalleryPage from './components/GalleryPage/GalleryPage';
import TestimonialsPage from './components/TestimonialsPage/TestimonialsPage';
import FaqPage from './components/FaqPage/FaqPage';
import ContactPage from './components/ContactPage/ContactPage';
import CookieConsentBanner from './components/LegalPage/CookieConsentBanner';
import {
  PrivacyPolicyPage,
  TermsConditionsPage,
  DisclaimerPage,
  CookiePolicyPage,
  RefundPolicyPage
} from './components/LegalPage/LegalPages';

// Datasets & SEO Utilities
import { initialSiteData } from './data/defaultData';
import { servicesData } from './data/servicesDatabase';
import { updatePageSeo } from './utils/seoStructuredData';

export default function App() {
  const [appData, setAppData] = useState(() => ({
    siteInfo: initialSiteData.header,
    hero: initialSiteData.hero,
    contact: initialSiteData.contactStrip,
    about: {
      heading: "About Pandit Shekar Guruji",
      subheading: "Pandit Shekar Guruji offers private psychic readings and spiritual consultations using palm observation, date of birth, face reading and photographs.",
      bio: [
        "A trusted spiritual consultant and psychic reader dedicated to helping individuals find clarity amidst uncertainty.",
        "Every session combines traditional observation methods with strict confidentiality, deep respect for personal values, and sincere prayer-based spiritual support."
      ],
      image: '/about_guruji_hd_1.jpg',
      imageAlt: "Pandit Shekar Guruji Portrait",
      images: [
        {
          url: '/about_guruji_hd_1.jpg',
          alt: 'ಶ್ರೀ ಶ್ರೀ ಶ್ರೀ ಹಠಯೋಗಿ ವೀರಾನಂದ ಸ್ವಾಮೀಜಿ',
          objectPosition: 'center 75%'
        },
        {
          url: '/about_guruji_hd_2.jpg',
          alt: 'Pandit Shekar Guruji with Devotee',
          objectPosition: 'center center'
        }
      ],
      modalities: [
        { title: "Palm Observation", desc: "Hand line & mount analysis for life trajectory insights", icon: "Hand" },
        { title: "Date of Birth Analysis", desc: "Birth timing evaluation for strengths and personal cycles", icon: "Calendar" },
        { title: "Face Reading", desc: "Intuitive facial observation for personal disposition", icon: "UserCheck" },
        { title: "Photograph Reading", desc: "Remote image-based consultation from anywhere", icon: "Image" },
        { title: "Personal Discussion", desc: "Empathetic one-on-one dialogue in a safe space", icon: "MessageSquare" },
        { title: "Spiritual Prayer Guidance", desc: "Tailored prayer practices for personal well-being", icon: "Flame" }
      ],
      stats: [
        { value: "25", suffix: "+", label: "Years of Practice" },
        { value: "1000", suffix: "+", label: "Consultations" },
        { value: "5", suffix: "", label: "Languages" },
        { value: "100", suffix: "%", label: "Confidentiality" }
      ],
      trustPoints: [
        "100% Private & Confidential",
        "No Fear-Based Claims",
        "Direct WhatsApp & Phone Access",
        "Global Remote Consultations"
      ]
    },
    aboutPage: initialSiteData.aboutPage,
    readingMethods: [
      {
        id: 'palm',
        title: 'Palm Observation',
        description: 'Insights derived from palm line structure.',
        imageUrl: '/palm_observation.png',
        imageAlt: 'Detailed spiritual palmistry observation with glowing golden palm lines'
      },
      {
        id: 'dob',
        title: 'Date-of-Birth Guidance',
        description: 'Numerology & birth chart alignment.',
        imageUrl: '/dob_guidance.png',
        imageAlt: 'Vedic Kundali birth chart with celestial zodiac wheel'
      },
      {
        id: 'face',
        title: 'Face Observation',
        description: 'Intuitive expression reading.',
        imageUrl: '/face_observation.png',
        imageAlt: 'Serene face reading observation with golden aura glow'
      },
      {
        id: 'photo',
        title: 'Photograph Reading',
        description: 'Remote picture-based consultation.',
        imageUrl: '/photo_reading.png',
        imageAlt: 'Sacred prayer shrine table with photograph frame and diya lamp',
        icon: 'Image'
      },
      {
        id: 'clearing',
        title: 'Energy & Witchcraft Clearing',
        description: 'Pandit Shekar Guruji can clear Bad energy, Black energy Any kind of Witchcraft by performing powerful prayers.',
        imageUrl: '/service_protection.jpg',
        imageAlt: 'Pandit Shekar Guruji powerful prayers for clearing Bad energy, Black energy & Witchcraft',
        icon: 'Shield'
      }
    ],
    problemCategories: servicesData.map(s => ({
      id: s.id,
      title: s.title,
      category: s.category,
      description: s.shortDesc,
      imageUrl: s.imageUrl
    })),
    loveGuidance: {
      heading: "Love and Relationship Guidance",
      description: "Private consultations for relationship concerns, family harmony, and partner understanding."
    },
    prayerServices: [
      { title: "Spiritual Protection", description: "Positive energy and protective prayer activities." },
      { title: "Family Harmony", description: "Peaceful spiritual prayers for domestic tranquility." }
    ],
    processSteps: [
      { number: "01", title: "Reach Out", description: "Call or WhatsApp Guruji directly.", inputs: ["Full Name", "Preferred Language"] },
      { number: "02", title: "Share Details", description: "Provide DOB or palm photo privately.", inputs: ["DOB", "Palm Image"] },
      { number: "03", title: "Observation", description: "Guruji evaluates your concern.", inputs: ["Confidential Evaluation"] },
      { number: "04", title: "Guidance", description: "Receive spiritual remedies & insight.", inputs: ["Personalized Plan"] },
      { number: "05", title: "Follow-Up", description: "Ongoing spiritual prayer support.", inputs: ["Continued Peace"] }
    ],
    whyChooseUs: [
      { title: "100% Confidentiality", description: "Private data and photos are deleted post-evaluation." },
      { title: "Ethical Standards", description: "No fear-based messaging or false guarantees." },
      { title: "25+ Years Experience", description: "Decades of authentic Indian spiritual practice." },
      { title: "Remote Consultations", description: "Direct WhatsApp & phone availability." }
    ],
    gallery: [
      { id: 1, title: "Guruji Prayer Activity", category: "Prayer Activities", url: initialSiteData.hero.imageUrl },
      { id: 2, title: "Temple Ceremonies", category: "Spiritual Ceremonies", url: initialSiteData.hero.imageUrl }
    ],
    testimonials: [
      { id: 1, name: "R. Sharma", location: "Bengaluru", service: "Psychic Reading", rating: 5, comment: "Peaceful and accurate guidance. Pandit Guruji provided genuine clarity." },
      { id: 2, name: "A. Patel", location: "Mumbai", service: "Family Guidance", rating: 5, comment: "Extremely respectful consultation. Highly recommend speaking with him." }
    ],
    faqs: [
      { id: 'f1', question: "Are my photos kept private?", answer: "Yes, all uploaded photographs are stored in an encrypted repository and deleted after consultation." },
      { id: 'f2', question: "Do you guarantee 100% outcomes?", answer: "No, authentic spiritual readings offer personal guidance. Claims of 100% guaranteed results are unethical." }
    ],
    allServices: servicesData
  }));

  const [currentPage, setCurrentPage] = useState('home');
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Modals
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  // Dynamic SEO Injection on Page Navigation
  useEffect(() => {
    const activeService = selectedServiceId
      ? appData.allServices.find(s => s.id === selectedServiceId)
      : null;

    updatePageSeo({
      title: activeService ? `${activeService.title} | Astro Psychic India` : 'Astro Psychic India | Pandit Shekar Guruji',
      description: activeService ? activeService.shortDesc : appData.hero.supportingCopy
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, selectedServiceId, appData.allServices, appData.hero.supportingCopy]);

  // Open Booking Wizard Handler
  const handleOpenBooking = (serviceName = '') => {
    setPreselectedService(serviceName);
    setIsBookingModalOpen(true);
  };

  // Open Service Detail Page Handler
  const handleSelectServiceDetail = (serviceId) => {
    setSelectedServiceId(serviceId);
    setCurrentPage('service-detail');
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', backgroundColor: '#FCFBF7', color: '#1F2937', position: 'relative' }}>
      
      {/* 1. Global Page Loader */}
      <PageLoader />

      {/* 2. Desktop Custom Cursor */}
      <CustomCursor />

      {/* 3. Floating Curved Glass Navbar */}
      <Navbar 
        data={appData.siteInfo} 
        currentPage={currentPage}
        onNavigate={(page) => {
          setSelectedServiceId(null);
          setCurrentPage(page);
        }}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* 4. Page Transition Wrapper */}
      <PageTransition routeKey={currentPage + (selectedServiceId || '')}>
        <main>
          {currentPage === 'home' && (
            <>
              <HeroBanner 
                heroData={appData.hero} 
                contactData={appData.contact} 
                onOpenBooking={() => handleOpenBooking()} 
              />

              <ContactStrip 
                data={appData.contact} 
                onOpenBooking={() => handleOpenBooking()}
              />

              <AboutGuruji 
                aboutData={appData.about} 
                contactData={appData.contact} 
                onOpenBooking={() => handleOpenBooking()} 
              />

              <ReadingMethods 
                readings={appData.readingMethods} 
                contactData={appData.contact} 
                onOpenBooking={(name) => handleOpenBooking(name)} 
              />

              <InteractivePalmistryGuide 
                onOpenBooking={(name) => handleOpenBooking(name)} 
              />

              <InteractiveZodiacGuidance 
                contactData={appData.contact} 
                onOpenBooking={(name) => handleOpenBooking(name)} 
              />

              <ProblemCategories 
                categories={appData.problemCategories} 
                contactData={appData.contact} 
                onOpenBooking={(name) => handleOpenBooking(name)} 
              />

              <LoveRelationships 
                data={appData.loveGuidance} 
                contactData={appData.contact} 
                onOpenBooking={() => handleOpenBooking("Love & Relationship Guidance")} 
              />

              <BadEnergyWitchcraftClearing 
                contactData={appData.contact}
                onOpenBooking={(name) => handleOpenBooking(name || "Bad & Black Energy / Witchcraft Clearing")}
              />

              <ConsultationProcess 
                steps={appData.processSteps} 
                onOpenBooking={() => handleOpenBooking()} 
              />

              <TestimonialsPreview testimonials={appData.testimonials} />

              <FaqSection faqs={appData.faqs} />

              <FinalCtaBanner 
                contactData={appData.contact} 
                onOpenBooking={() => handleOpenBooking()} 
              />
            </>
          )}

          {currentPage === 'about' && (
            <AboutUsPage 
              aboutData={appData.about} 
              aboutPageData={appData.aboutPage}
              contactData={appData.contact}
              onOpenBooking={(name) => handleOpenBooking(name)}
              onNavigateHome={() => setCurrentPage('home')}
            />
          )}

          {currentPage === 'services' && (
            <ServicesListingPage 
              services={appData.allServices}
              onSelectService={handleSelectServiceDetail}
              onOpenBooking={(name) => handleOpenBooking(name)}
              contactData={appData.contact}
            />
          )}

          {currentPage === 'service-detail' && selectedServiceId && (
            <ServiceDetailPage 
              serviceId={selectedServiceId}
              allServices={appData.allServices}
              contactData={appData.contact}
              onOpenBooking={(name) => handleOpenBooking(name)}
              onSelectService={handleSelectServiceDetail}
            />
          )}

          {currentPage === 'booking' && (
            <BookingPage 
              services={appData.allServices}
              contactData={appData.contact}
            />
          )}

          {currentPage === 'gallery' && (
            <GalleryPage 
              initialItems={appData.gallery}
              onOpenBooking={() => handleOpenBooking()}
            />
          )}

          {currentPage === 'testimonials' && (
            <TestimonialsPage 
              initialTestimonials={appData.testimonials}
              onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)}
              onOpenBooking={() => handleOpenBooking()}
            />
          )}

          {currentPage === 'faqs' && (
            <FaqPage 
              initialFaqs={appData.faqs}
              onOpenBooking={() => handleOpenBooking()}
            />
          )}

          {currentPage === 'contact' && (
            <ContactPage 
              contactData={appData.contact}
              services={appData.allServices}
              onOpenBooking={() => handleOpenBooking()}
            />
          )}

          {/* Legal Policy Pages */}
          {currentPage === 'privacy' && <PrivacyPolicyPage />}
          {currentPage === 'terms' && <TermsConditionsPage />}
          {currentPage === 'disclaimer-page' && <DisclaimerPage />}
          {currentPage === 'cookie-policy' && <CookiePolicyPage />}
          {currentPage === 'refund-policy' && <RefundPolicyPage />}
        </main>
      </PageTransition>

      {/* Footer */}
      <Footer 
        data={appData.siteInfo} 
        onNavigate={(page) => {
          setSelectedServiceId(null);
          setCurrentPage(page);
        }} 
      />

      {/* Floating Back to Top Button */}
      <ScrollProgressButton />

      {/* Floating Mobile Actions Bar */}
      <MobileStickyBar 
        contactData={appData.contact}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Admin Panel Drawer */}
      <AdminDrawer 
        isOpen={isAdminOpen} 
        onClose={() => setIsAdminOpen(false)}
        appData={appData}
        setAppData={setAppData}
      />

      {/* Direct Booking Modal */}
      {isBookingModalOpen && (
        <BookingModal 
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          preselectedService={preselectedService}
          services={appData.allServices}
          contactData={appData.contact}
        />
      )}

      {/* Privacy Removal Modal */}
      {isPrivacyModalOpen && (
        <PrivacyRemovalModal 
          isOpen={isPrivacyModalOpen}
          onClose={() => setIsPrivacyModalOpen(false)}
        />
      )}

      {/* Cookie Consent Notice */}
      <CookieConsentBanner />

    </div>
  );
}
