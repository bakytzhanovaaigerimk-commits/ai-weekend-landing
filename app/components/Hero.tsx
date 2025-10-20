'use client';

export default function Hero() {
  const scrollToRegistration = () => {
    const element = document.getElementById('registration');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-orange-950 to-purple-950 text-white px-4 relative overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,120,0,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,120,0,.05)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-6">
          <span className="text-orange-400 text-2xl md:text-3xl font-bold">AI Crew</span>
          <span className="text-white text-2xl md:text-3xl font-bold"> Connect</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400 bg-clip-text text-transparent">
          AI WEEKEND
        </h1>

        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-8"></div>

        <p className="text-2xl md:text-3xl mb-4 text-orange-300 max-w-3xl mx-auto font-semibold">
          for AI Creators
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <button
            onClick={scrollToRegistration}
            className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold px-10 py-4 text-lg hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg shadow-orange-500/30 min-w-[200px] transform hover:scale-105"
          >
            Регистрация
          </button>

          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-transparent border-2 border-orange-400 text-orange-300 font-semibold px-10 py-4 text-lg hover:border-orange-300 hover:text-white hover:bg-orange-500/10 transition-all min-w-[200px]"
          >
            Подробнее
          </button>
        </div>
      </div>
    </section>
  );
}
