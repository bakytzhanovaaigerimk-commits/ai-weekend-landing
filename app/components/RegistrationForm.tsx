'use client';

export default function RegistrationForm() {
  const handleRegisterClick = () => {
    window.open('https://forms.gle/bp5uo3LpeFHqjNzJ7', '_blank');
  };

  return (
    <section id="registration" className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#fe2c55] opacity-10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#25f4ee] opacity-10 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '1s'}}></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] rounded-full text-sm font-bold">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              🎯 РЕГИСТРАЦИЯ ОТКРЫТА
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Забронируй своё место! 🚀
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Присоединяйся к <span className="text-[#fe2c55] font-bold">AI WEEKEND</span> — интерактивный формат, игры и нетворкинг
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="group relative bg-gradient-to-br from-green-500/10 to-green-500/5 border-2 border-green-500 p-8 rounded-2xl hover:scale-105 transition-all text-center">
            <div className="text-5xl mb-4 animate-pulse">🎉</div>
            <h3 className="text-green-400 font-black text-3xl mb-2">БЕСПЛАТНО</h3>
            <p className="text-gray-300 text-lg">Участие полностью бесплатное!</p>
            <p className="text-gray-400 text-sm mt-2">Не упусти шанс!</p>
          </div>

          <div className="group relative bg-gradient-to-br from-[#fe2c55]/10 to-[#fe2c55]/5 border-2 border-[#fe2c55] p-8 rounded-2xl hover:scale-105 transition-all text-center">
            <div className="text-5xl mb-4 animate-pulse">⚠️</div>
            <h3 className="text-[#fe2c55] font-black text-3xl mb-2">10 мест</h3>
            <p className="text-gray-300 text-lg">Ограниченные места</p>
            <p className="text-gray-400 text-sm mt-2">Регистрируйся сейчас!</p>
          </div>
        </div>

        {/* Main CTA Card */}
        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 md:p-12 rounded-3xl overflow-hidden group">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#fe2c55]/0 via-[#fe2c55]/5 to-[#25f4ee]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div className="relative z-10 text-center">
            <h3 className="text-2xl md:text-4xl font-black text-white mb-6">
              Готовы присоединиться? 🔥
            </h3>

            <p className="text-gray-300 mb-8 text-lg">
              Регистрируйся сейчас — места ограничены!
            </p>

            <button
              onClick={handleRegisterClick}
              className="group/btn relative px-10 py-5 bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] rounded-full font-black text-xl overflow-hidden transition-all hover:scale-110 hover:shadow-[0_0_50px_rgba(254,44,85,0.8)] min-w-[280px] animate-bounce-slow"
            >
              {/* Animated shimmer */}
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"></div>
              </div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="animate-wiggle inline-block">✨</span>
                Зарегистрироваться
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#25f4ee] to-[#fe2c55] opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
            </button>

            <p className="text-gray-500 text-xs mt-6">
              📱 Форма откроется в новой вкладке
            </p>
          </div>
        </div>

        {/* Location Info */}
        <div className="mt-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
            <div className="flex items-center gap-4 justify-center">
              <div className="text-3xl">📍</div>
              <div className="text-left">
                <h4 className="text-white font-bold text-lg">г. Астана</h4>
                <p className="text-gray-400 text-sm">Адрес высылается после регистрации</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Присоединяйся к комьюнити AI-креаторов 🎨
          </p>
        </div>
      </div>
    </section>
  );
}
