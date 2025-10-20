'use client';

import { useState } from 'react';

const speakers = [
  {
    name: 'Алексеев И.',
    role: 'Режиссёр, AI-креатор',
    bio: 'Практик по созданию видео с ИИ, 20 проектов.',
  },
  {
    name: 'Мирзаханова А.',
    role: 'Motion-дизайнер',
    bio: 'Автор курсов по генеративному арту.',
  },
  {
    name: 'Батыр',
    role: 'Технический продюсер',
    bio: 'Оптимизация пайплайнов рендера.',
  },
  {
    name: 'Гульнара',
    role: 'Саунд-дизайнер',
    bio: 'Комбинирует AI-аудио и микширование.',
  },
];

export default function Speakers() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % speakers.length);
  const prev = () => setCurrent((current - 1 + speakers.length) % speakers.length);

  return (
    <section id="speakers" className="py-24 px-6 bg-[#0b1220] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-[#ff2d55]/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Спикеры
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ff2d55] to-[#40e0d0] mx-auto"></div>
        </div>

        <div className="relative max-w-md mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#ff2d55]/20 to-[#40e0d0]/20 overflow-hidden border-4 border-[#ff2d55]/30">
              <div className="w-full h-full bg-gradient-to-br from-[#ff2d55]/10 to-[#40e0d0]/10 flex items-center justify-center text-6xl">
                👤
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{speakers[current].name}</h3>
            <p className="text-[#40e0d0] font-semibold mb-4">{speakers[current].role}</p>
            <p className="text-[#9aa4b2] leading-relaxed">{speakers[current].bio}</p>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all"
          >
            ←
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all"
          >
            →
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {speakers.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === current ? 'bg-[#ff2d55] w-8' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
