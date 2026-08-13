import { useEffect } from 'react';

const BASE_URL = 'https://we-tech-guys.vercel.app';
const DEFAULT_OG_IMAGE = `${BASE_URL}/logo.png`;

export default function SEO({
  title = 'WTG - We Tech Guys | Website Development Company',
  description = 'WTG - We Tech Guys builds modern, responsive, and affordable business websites, e-commerce stores, landing pages, and custom web solutions. We Build. You Grow.',
  canonicalPath = '',
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  schema = null
}) {
  const fullCanonicalUrl = canonicalPath ? `${BASE_URL}${canonicalPath}` : BASE_URL;

  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper to update or set meta tag
    const setMetaTag = (selector, attributeName, attributeValue, contentValue) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentValue);
    };

    // 2. Update Description
    setMetaTag('meta[name="description"]', 'name', 'description', description);

    // 3. Update Open Graph Meta Tags
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', fullCanonicalUrl);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage);
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'WTG — We Tech Guys');

    // 4. Update Twitter Card Meta Tags
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);

    // 5. Update Canonical Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullCanonicalUrl);

    // 6. Inject Schema.org JSON-LD Structured Data
    let schemaScript = document.querySelector('script[type="application/ld+json"]#wtg-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      schemaScript.setAttribute('id', 'wtg-schema');
      document.head.appendChild(schemaScript);
    }

    const defaultSchema = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      'name': 'WTG - We Tech Guys',
      'url': BASE_URL,
      'logo': `${BASE_URL}/logo.png`,
      'image': `${BASE_URL}/logo.png`,
      'description': 'Modern, responsive and affordable website development company for growing businesses.',
      'telephone': '+91-8667587977',
      'email': 'wtgwebservices@gmail.com',
      'slogan': 'WE BUILD. YOU GROW.',
      'priceRange': '₹2,000 - ₹50,000',
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': 'IN'
      },
      'offers': {
        '@type': 'Offer',
        'name': 'Special Launch Offer for First 5 Customers',
        'price': '2000.00',
        'priceCurrency': 'INR',
        'description': 'Affordable business website development for ₹2,000 to ₹5,000 for the first 5 customers.'
      }
    };

    schemaScript.textContent = JSON.stringify(schema || defaultSchema);

  }, [title, description, fullCanonicalUrl, ogType, ogImage, schema]);

  return null;
}
