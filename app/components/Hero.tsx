'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToRegistration = () => {
    const element = document.getElementById('registration');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-6 relative overflow-hidden">
      {/* TikTok-style glowing effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#fe2c55] opacity-20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#25f4ee] opacity-20 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '1s'}}></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(254,44,85,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(254,44,85,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10 pt-20">
        {/* Badge */}
        <div className={`inline-block mb-8 ${mounted ? 'animate-slide-up' : 'opacity-0'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] rounded-full text-sm font-bold">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            AI CREW CONNECT
          </span>
        </div>

        {/* Main Title with glitch effect */}
        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight ${mounted ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.1s'}}>
          <span className="block bg-gradient-to-r from-[#fe2c55] via-white to-[#25f4ee] bg-clip-text text-transparent hover:animate-glitch cursor-default">
            AI WEEKEND
          </span>
        </h1>

        {/* Subtitle */}
        <p className={`text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed ${mounted ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
          <span className="text-[#25f4ee] font-bold text-3xl">Присоединяйся к комьюнити AI-WEEKEND</span>
          <br />
          <span className="text-gray-400 text-lg">Интерактивный формат • Игры • Нетворкинг</span>
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 ${mounted ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
          <button
            onClick={scrollToRegistration}
            className="group relative px-8 py-4 bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-110 hover:shadow-[0_0_40px_rgba(254,44,85,0.8)] min-w-[240px] animate-bounce-slow"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 w-full h-full">
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
            </div>
            <span className="relative z-10 flex items-center justify-center gap-2">
              🎉 БЕСПЛАТНО
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#25f4ee] to-[#fe2c55] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>

          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-full font-bold text-lg hover:bg-white/10 hover:border-[#25f4ee] transition-all min-w-[200px] hover:animate-wiggle relative overflow-hidden"
          >
            <span className="relative z-10 inline-flex items-center gap-2">
              Подробнее
              <span className="animate-slide-lr inline-block">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#fe2c55]/0 via-[#fe2c55]/10 to-[#fe2c55]/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 gap-8 max-w-md mx-auto ${mounted ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#25f4ee] mb-1">🎉</div>
            <div className="text-2xl font-black text-white mb-1">БЕСПЛАТНО</div>
            <div className="text-sm text-gray-400">Участие</div>
          </div>
          <div className="text-center border-l border-white/10">
            <div className="text-4xl font-bold text-[#fe2c55] mb-1">⚠️</div>
            <div className="text-2xl font-black text-white mb-1">10 мест</div>
            <div className="text-sm text-gray-400">Максимум</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
