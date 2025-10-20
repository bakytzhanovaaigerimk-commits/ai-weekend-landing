'use client';

export default function About() {
  const program = [
    {
      icon: "🗣",
      title: "Ведущий в эти выходные: Диас",
      description: ""
    },
    {
      icon: "🎮",
      title: "Игры, нетворкинг, делимся опытом и лайфхаками",
      description: ""
    },
    {
      icon: "⚠️",
      title: "Места ограничены",
      description: "Максимум 10 человек"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-bold uppercase tracking-wider text-sm bg-orange-100 px-4 py-2 rounded-full border border-orange-300">
            📋 Что вас ждёт
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Программа AI WEEKEND
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-8"></div>
        </div>

        {/* Host section */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-white p-10 rounded-2xl shadow-xl border-2 border-orange-200 hover:border-orange-400 transition-all">
            <div className="mb-6">
              <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-orange-100 to-amber-100 overflow-hidden mb-6 ring-4 ring-orange-300 ring-offset-4">
                <img
                  src="/host-photo.jpg"
                  alt="Диас"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const sibling = e.currentTarget.nextElementSibling as HTMLElement;
                    if (sibling) sibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center text-6xl" style={{display: 'none'}}>
                  🎤
                </div>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-3 text-center">
              🗣 Спикер: Диас Жумагалиев
            </h3>
          </div>
        </div>

        {/* Program highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-orange-200 hover:border-orange-400 hover:shadow-xl transition-all group">
            <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">🎮</div>
            <h3 className="text-2xl font-bold text-orange-700 mb-3">Интерактивный формат</h3>
            <p className="text-slate-600 text-lg">
              Игры • Нетворкинг • Делимся опытом и лайфхаками
            </p>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-orange-100 p-8 rounded-xl shadow-lg border-2 border-red-400 hover:shadow-xl transition-all group">
            <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">⚠️</div>
            <h3 className="text-2xl font-bold text-red-700 mb-3">Места ограничены!</h3>
            <p className="text-red-600 text-lg font-semibold">
              Максимум 10 человек
            </p>
            <p className="text-slate-600 mt-2">
              Успейте зарегистрироваться пока есть свободные места
            </p>
          </div>
        </div>

        {/* Pricing section */}
        <div className="bg-gradient-to-br from-purple-900 via-orange-900 to-purple-900 text-white p-12 rounded-2xl shadow-2xl relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h3 className="text-4xl font-bold mb-6">Стоимость участия</h3>
            <div className="bg-orange-950/50 p-8 rounded-xl border border-orange-500/30 mb-8">
              <div className="text-7xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-4">
                2000 ₸
              </div>
              <p className="text-orange-100 text-lg">
                Включает участие в обоих днях мероприятия
              </p>
            </div>
            <div className="bg-purple-950/50 p-6 rounded-xl border border-purple-700">
              <h4 className="text-2xl font-semibold mb-4 text-orange-400 flex items-center justify-center gap-2">
                <span>💳</span> Как оплатить
              </h4>
              <p className="text-orange-100 text-lg leading-relaxed">
                После регистрации вы получите детали для перевода на <span className="font-bold text-white">Kaspi</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
