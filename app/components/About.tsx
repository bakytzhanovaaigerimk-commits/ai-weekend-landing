'use client';

export default function About() {

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
                  alt="Диас Жумагалиев"
                  className="w-full h-full object-cover"
                />
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

      </div>
    </section>
  );
}
