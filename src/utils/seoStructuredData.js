// SEO, JSON-LD Structured Data, OpenGraph, Sitemap & Robots.txt Generator

export const updatePageSeo = ({ title, description, canonicalUrl, ogImage }) => {
  if (title) document.title = title;
  
  // Update Meta Description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.name = 'description';
    document.head.appendChild(metaDesc);
  }
  if (description) metaDesc.content = description;

  // Update OpenGraph Title
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (!ogTitle) {
    ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    document.head.appendChild(ogTitle);
  }
  ogTitle.content = title || 'Astro Psychic India';

  // Update OpenGraph Description
  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (!ogDesc) {
    ogDesc = document.createElement('meta');
    ogDesc.setAttribute('property', 'og:description');
    document.head.appendChild(ogDesc);
  }
  ogDesc.content = description || '';

  // Update OpenGraph Image
  let ogImg = document.querySelector('meta[property="og:image"]');
  if (!ogImg) {
    ogImg = document.createElement('meta');
    ogImg.setAttribute('property', 'og:image');
    document.head.appendChild(ogImg);
  }
  ogImg.content = ogImage || 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80';
};

export const injectJsonLd = (schemaObj) => {
  let script = document.getElementById('json-ld-schema');
  if (!script) {
    script = document.createElement('script');
    script.id = 'json-ld-schema';
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schemaObj, null, 2);
};

// 1. Person Schema (Guruji)
export const getPersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Pandit Shekar Guruji",
  "jobTitle": "Spiritual Consultant & Psychic Observer",
  "worksFor": {
    "@type": "Organization",
    "name": "Astro Psychic India"
  },
  "knowsLanguage": ["Hindi", "English", "Kannada", "Telugu", "Tamil"],
  "knowsAbout": ["Palm Observation", "Date of Birth Analysis", "Face Reading", "Spiritual Prayer Guidance"]
});

// 2. Organization Schema
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Astro Psychic India",
  "url": "https://astropsychicindia.com",
  "logo": "https://astropsychicindia.com/logo.png",
  "email": "shekarbaba001@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1st block 13th cross Akshayanagar T C Palya main road",
    "addressLocality": "Bangalore",
    "postalCode": "560016",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9845657808",
    "contactType": "Customer Service",
    "availableLanguage": ["Hindi", "English", "Kannada", "Telugu", "Tamil"]
  }
});

// 3. Service Schema
export const getServiceSchema = (service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": service.title,
  "category": service.category,
  "provider": {
    "@type": "Person",
    "name": "Pandit Shekar Guruji"
  },
  "description": service.shortDesc,
  "areaServed": "Worldwide"
});

// 4. FAQPage Schema
export const getFaqPageSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question || faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer || faq.a
    }
  }))
});

// 5. BreadcrumbList Schema
export const getBreadcrumbSchema = (crumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": crumbs.map((crumb, idx) => ({
    "@type": "ListItem",
    "position": idx + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
});

// XML Sitemap & Robots.txt string generator
export const generateSitemapXml = () => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://astropsychicindia.com/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://astropsychicindia.com/about-us</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://astropsychicindia.com/services</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://astropsychicindia.com/gallery</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://astropsychicindia.com/testimonials</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://astropsychicindia.com/faqs</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://astropsychicindia.com/contact</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://astropsychicindia.com/privacy-policy</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>
  <url><loc>https://astropsychicindia.com/terms-and-conditions</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>
</urlset>`;

export const generateRobotsTxt = () => `User-agent: *
Allow: /
Disallow: /admin
Disallow: /private-uploads/
Disallow: /preview/
Disallow: /thank-you/

Sitemap: https://astropsychicindia.com/sitemap.xml`;
