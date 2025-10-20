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
        isScrolled ? 'bg-slate-900/95 backdrop-blur-sm border-b border-slate-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="text-xl font-bold cursor-pointer text-white flex items-center gap-2"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="text-orange-400">AI Crew</span>
            <span>Connect</span>
          </div>

          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="text-orange-200 hover:text-orange-400 font-medium transition-colors"
              >
                {section.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => window.open('https://forms.gle/bp5uo3LpeFHqjNzJ7', '_blank')}
            className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-2 font-medium transition-all hover:from-orange-600 hover:to-amber-600 rounded"
          >
            Регистрация
          </button>
        </div>
      </div>
    </nav>
  );
}
