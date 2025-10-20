'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const sections = [
    { id: 'speakers', label: 'Спикеры' },
    { id: 'schedule', label: 'Программа' },
    { id: 'registration', label: 'Регистрация' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0b1220]/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div
            className="text-lg font-bold cursor-pointer text-white flex items-center gap-2"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="bg-gradient-to-r from-[#ff2d55] to-[#40e0d0] bg-clip-text text-transparent">AI Форум</span>
          </div>

          <div className="hidden md:flex space-x-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="text-[#9aa4b2] hover:text-white font-medium transition-colors text-sm"
              >
                {section.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('registration')}
            className="bg-gradient-to-r from-[#ff2d55] to-[#40e0d0] text-white px-6 py-2.5 font-semibold transition-all hover:shadow-lg hover:shadow-[#ff2d55]/20 rounded-lg text-sm"
          >
            Купить билет
          </button>
        </div>
      </div>
    </nav>
  );
}
