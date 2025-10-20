'use client';

export default function About() {
  const features = [
    {
      icon: '✨',
      title: 'Практические кейсы',
      desc: 'Съёмка, генерация персонажей, монтаж и рендеринг',
      color: 'from-[#fe2c55] to-[#ff6b88]'
    },
    {
      icon: '⚡',
      title: 'AI-инструменты',
      desc: 'Stable Diffusion, Runway, Sora и другие пайплайны',
      color: 'from-[#25f4ee] to-[#4de8e0]'
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#fe2c55] opacity-10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#25f4ee] opacity-10 rounded-full blur-[100px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Что вас ждёт 🎬
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] mx-auto"></div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-white/30 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(254,44,85,0.2)]"
            >
              <div className="text-5xl mb-4 animate-float" style={{animationDelay: `${idx * 0.2}s`}}>
                {feature.icon}
              </div>
              <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Host Card */}
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#fe2c55] opacity-10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#fe2c55] to-[#25f4ee] p-1">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-5xl">
                  👨‍💼
                </div>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="inline-block px-3 py-1 bg-[#fe2c55]/20 border border-[#fe2c55]/30 rounded-full text-sm font-bold text-[#fe2c55] mb-3">
                ВЕДУЩИЙ
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Диас Жумагалиев
              </h3>
              <p className="text-gray-400 mb-4">
                Эксперт по AI-генерации видео и motion-дизайну
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">20+ проектов</span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">AI Creator</span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">TikTok Expert</span>
              </div>
            </div>
          </div>
        </div>

        {/* Limited Places Warning */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-[#fe2c55]/10 to-[#25f4ee]/10 border-2 border-[#fe2c55] rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#fe2c55] opacity-20 rounded-full blur-2xl"></div>
            <div className="relative z-10 flex items-center gap-4">
              <div className="text-4xl animate-pulse">⚠️</div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-1">Всего 10 мест!</h4>
                <p className="text-gray-300 text-sm">
                  Интерактивный формат • Игры • Нетворкинг • Делимся опытом
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
