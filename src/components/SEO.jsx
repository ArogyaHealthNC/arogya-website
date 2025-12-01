/**
 * SEO Component - Arogya Wellness Website
 *
 * Purpose: Manage per-page meta tags for SEO
 * Updates document title and meta description dynamically
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const defaultMeta = {
  title: 'Arogya | Guided Exercise & Wellness Program for Adults',
  description: 'Join Arogya — a community-based wellness program with 3 live exercise sessions per week and lifestyle discussions on nutrition, sleep, and stress. Led by a Registered Dietitian.',
};

function SEO({ title, description, noIndex = false }) {
  const location = useLocation();

  useEffect(() => {
    // Update document title
    document.title = title || defaultMeta.title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || defaultMeta.description);
    }

    // Update OG title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title || defaultMeta.title);
    }

    // Update OG description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description || defaultMeta.description);
    }

    // Update OG URL
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', `https://arogya.com${location.pathname}`);
    }

    // Update Twitter title
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title || defaultMeta.title);
    }

    // Update Twitter description
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description || defaultMeta.description);
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `https://arogya.com${location.pathname}`);
    }

    // Handle noIndex
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) {
      robotsMeta.setAttribute('content', noIndex ? 'noindex, nofollow' : 'index, follow');
    }

    // Cleanup: reset to defaults when component unmounts
    return () => {
      document.title = defaultMeta.title;
    };
  }, [title, description, noIndex, location.pathname]);

  return null;
}

export default SEO;
