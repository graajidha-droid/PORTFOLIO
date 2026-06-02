import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-sky-500 hover:bg-sky-400 text-white shadow-xl hover:shadow-sky-400/25 hover:-translate-y-1 transition-all duration-300 z-40 border border-sky-400/20 active:scale-95"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5 animate-pulse-slow" />
    </button>
  );
}
