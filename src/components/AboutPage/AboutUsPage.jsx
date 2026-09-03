import React from 'react';
import { initialSiteData } from '../../data/defaultData';
import AboutBanner from './AboutBanner';
import AboutGuruji from '../AboutGuruji';
import DetailedMethods from './DetailedMethods';
import SpiritualPhilosophy from './SpiritualPhilosophy';
import AreasGrid from './AreasGrid';
import MissionVision from './MissionVision';

export default function AboutUsPage({ aboutData, aboutPageData, contactData, onOpenBooking, onNavigateHome }) {
  const pageData = aboutPageData || initialSiteData.aboutPage || {};
  const contact = contactData || initialSiteData.contactStrip || {};
  const aboutInfo = aboutData || initialSiteData.about || {};

  return (
    <div className="about-us-page-wrapper" style={{ paddingBottom: '5rem' }}>
      <AboutBanner 
        bannerData={pageData.banner} 
        onNavigateHome={onNavigateHome} 
      />
      <AboutGuruji 
        aboutData={aboutInfo} 
        contactData={contact} 
        onOpenBooking={onOpenBooking} 
      />
      <DetailedMethods 
        methods={pageData.detailedMethods} 
        onOpenBooking={onOpenBooking} 
      />
      <SpiritualPhilosophy 
        philosophyData={pageData.philosophy} 
      />
      <AreasGrid 
        areas={pageData.areasOfGuidance} 
        onOpenBooking={onOpenBooking} 
      />
      <MissionVision 
        missionVisionData={pageData.missionVision} 
      />
    </div>
  );
}
