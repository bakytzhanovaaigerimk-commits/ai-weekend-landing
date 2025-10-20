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
    { id: 'about', label: 'Программа' },
    { id: 'registration', label: 'Регистрация' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(254,44,85,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="text-xl font-black cursor-pointer text-white flex items-center gap-2 hover:scale-105 transition-transform"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] bg-clip-text text-transparent">
              AI WEEKEND
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="text-gray-300 hover:text-white font-medium transition-all hover:scale-110 relative group"
              >
                {section.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('registration')}
            className="relative px-6 py-2.5 bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] rounded-full font-bold text-sm overflow-hidden group hover:scale-105 transition-all hover:shadow-[0_0_20px_rgba(254,44,85,0.5)]"
          >
            <span className="relative z-10">Купить билет</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#25f4ee] to-[#fe2c55] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </div>
    </nav>
  );
}
