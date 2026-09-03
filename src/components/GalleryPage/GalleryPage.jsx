import React, { useState } from 'react';
import GalleryHero from './GalleryHero';
import GalleryGrid from './GalleryGrid';
import LightboxModal from '../LightboxModal';
import { galleryMedia } from '../../data/galleryDatabase';

export default function GalleryPage() {
  const [activeLightboxItem, setActiveLightboxItem] = useState(null);

  const handleNext = () => {
    if (!activeLightboxItem) return;
    const currentIndex = galleryMedia.findIndex(i => i.id === activeLightboxItem.id);
    const nextIndex = (currentIndex + 1) % galleryMedia.length;
    setActiveLightboxItem(galleryMedia[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeLightboxItem) return;
    const currentIndex = galleryMedia.findIndex(i => i.id === activeLightboxItem.id);
    const prevIndex = (currentIndex - 1 + galleryMedia.length) % galleryMedia.length;
    setActiveLightboxItem(galleryMedia[prevIndex]);
  };

  return (
    <div className="gallery-page-wrapper">
      <GalleryHero />
      <GalleryGrid onOpenLightbox={(item) => setActiveLightboxItem(item)} />
      
      <LightboxModal 
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}
