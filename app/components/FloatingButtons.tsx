'use client';

import { useEffect, useState } from 'react';
import Icon from '@mdi/react';
import { mdiArrowUp } from '@mdi/js';

export default function FloatingButtons() {
  const [showButton, setShowButton] = useState(false);
  const [showWhatsappButton, setShowWhatsappButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Show regular button after scrolling 200px
      setShowButton(scrollY > 200);

      // Get contact form element
      const contactForm = document.getElementById('contact');

      // Check if contact form is in viewport
      let hideWhatsApp = false;

      if (contactForm) {
        const contactRect = contactForm.getBoundingClientRect();
        // Hide WhatsApp button if contact form is visible (even partially)
        hideWhatsApp = contactRect.top < windowHeight && contactRect.bottom > 0;
      }

      // Also hide WhatsApp button if user is near the bottom (footer area)
      // Adjust this value based on your footer height
      const footerThreshold = 300; // pixels from bottom
      const nearBottom = scrollY + windowHeight >= documentHeight - footerThreshold;

      if (nearBottom) {
        hideWhatsApp = true;
      }

      // Show WhatsApp button only if scrolled enough AND not in contact/footer area
      setShowWhatsappButton(!hideWhatsApp);
    };

    window.addEventListener('scroll', handleScroll);

    // Call once on mount to set initial state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Reset URL to remove any hash fragments
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          title="Go to top"
          className="fixed bottom-10 left-10 z-50 bg-blue-400 hover:bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-colors duration-300"
        >
          <Icon path={mdiArrowUp} size={1.2} />
        </button>
      )}
      {showWhatsappButton && (
        <a
          href="https://wa.me/972765991386?text=%D7%94%D7%99%D7%99%2C%20%D7%A8%D7%90%D7%99%D7%AA%D7%99%20%D7%90%D7%AA%20%D7%94%D7%9E%D7%95%D7%93%D7%A2%D7%94%20%D7%A9%D7%9C%D7%9B%D7%9D%20%D7%A2%D7%9C%20%D7%A0%D7%99%D7%98%D7%95%D7%A8%20%D7%97%D7%93%D7%A8%20%D7%A9%D7%A8%D7%AA%D7%99%D7%9D%0A%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%95%D7%93"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed floating-whatsapp z-50 bg-whatsapp hover:bg-green-400 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-colors duration-300"
        >
          <img
            src="/images/icons/whatsapp-border.svg"
            alt="WhatsApp"
            className="inline-block w-7 h-7"
          />
        </a>
      )}
    </>
  );
}

