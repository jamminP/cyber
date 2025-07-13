import { useEffect } from 'react';

const useMeta = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
}) => {
  useEffect(() => {
    if (title) document.title = title;

    const updateMetaTag = (name, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const updatePropertyMetaTag = (property, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 기본 meta
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph meta
    updatePropertyMetaTag('og:title', ogTitle || title);
    updatePropertyMetaTag('og:description', ogDescription || description);
    updatePropertyMetaTag('og:image', ogImage);
    updatePropertyMetaTag('og:url', ogUrl || window.location.href);
    updatePropertyMetaTag('og:type', 'website');
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl]);
};

export default useMeta;
