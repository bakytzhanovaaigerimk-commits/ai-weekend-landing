'use client';

export default function Hero() {
  const scrollToRegistration = () => {
    const element = document.getElementById('registration');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSchedule = () => {
    const element = document.getElementById('schedule');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f1724] via-[#1a1f35] to-[#0b1220] text-white px-6 py-28 relative overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/80 to-transparent"></div>

      {/* Glowing orbs - TikTok style */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#ff2d55]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#40e0d0]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <span className="text-[#9aa4b2] text-sm font-semibold uppercase tracking-wider bg-white/5 px-4 py-2 rounded-full border border-white/10">
            Воркшоп
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-[#ff2d55] via-[#ff6b88] to-[#40e0d0] bg-clip-text text-transparent animate-fade-in">
          Сделай клип/мультик через ИИ за 1 день
        </h1>

        <p className="text-lg md:text-xl mb-8 text-[#9aa4b2] max-w-2xl mx-auto leading-relaxed">
          Практика, кейсы и готовый шоурил. <span className="text-white font-semibold">4 спикера</span>, ограниченные места.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <button
            onClick={scrollToRegistration}
            className="bg-gradient-to-r from-[#ff2d55] to-[#40e0d0] text-white font-bold px-8 py-4 text-base rounded-xl hover:shadow-lg hover:shadow-[#ff2d55]/20 transition-all min-w-[240px] transform hover:scale-105"
          >
            Купить билет — 2000 ₸
          </button>

          <button
            onClick={scrollToSchedule}
            className="bg-transparent border border-white/10 text-white font-semibold px-8 py-4 text-base rounded-xl hover:border-white/20 hover:bg-white/5 transition-all min-w-[200px]"
          >
            Программа
          </button>
        </div>
      </div>
    </section>
  );
}
