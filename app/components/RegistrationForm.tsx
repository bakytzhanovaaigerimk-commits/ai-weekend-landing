'use client';

export default function RegistrationForm() {
  const handleRegisterClick = () => {
    window.open('https://forms.gle/bp5uo3LpeFHqjNzJ7', '_blank');
  };

  return (
    <section id="registration" className="py-24 px-4 bg-gradient-to-br from-purple-900 via-orange-900 to-purple-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="text-orange-300 font-bold uppercase tracking-wider text-sm bg-orange-500/20 px-4 py-2 rounded-full border border-orange-400/50">
            🎯 Регистрация открыта
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mt-6 mb-6 bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent">
            Успей забронировать место!
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto leading-relaxed">
            Присоединяйтесь к <span className="text-orange-400 font-bold">AI WEEKEND</span> — два дня погружения в мир искусственного интеллекта
          </p>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-green-900 to-emerald-900 border-2 border-green-500 p-8 backdrop-blur-sm transition-all rounded-xl text-center">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-green-300 font-bold text-3xl mb-2">БЕСПЛАТНО</h3>
            <p className="text-green-200 text-lg">Участие полностью бесплатное!</p>
          </div>
          <div className="bg-purple-950/50 border-2 border-red-600 p-8 backdrop-blur-sm hover:border-red-500 transition-all rounded-xl text-center">
            <div className="text-5xl mb-4">⚠️</div>
            <h3 className="text-red-300 font-bold text-2xl mb-2">Всего 10 мест</h3>
            <p className="text-red-400 text-lg font-semibold">Регистрируйтесь сейчас!</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-orange-500 to-amber-600 p-12 text-center relative overflow-hidden group hover:shadow-2xl hover:shadow-orange-500/30 transition-all rounded-xl">
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Готовы присоединиться?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Заполните простую форму регистрации и получите подтверждение на вашу почту
            </p>
            <button
              onClick={handleRegisterClick}
              className="bg-purple-900 text-white font-bold px-12 py-5 text-xl hover:bg-purple-800 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 rounded-lg"
            >
              📝 Зарегистрироваться сейчас
            </button>
            <p className="text-white/80 text-sm mt-6">
              ⚡ Форма откроется в новой вкладке
            </p>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-12 max-w-md mx-auto">
          <div className="bg-purple-950/40 border border-orange-700 p-6 backdrop-blur-sm rounded-xl text-center">
            <h4 className="text-orange-400 font-bold mb-3 flex items-center justify-center gap-2 text-xl">
              <span className="text-3xl">📍</span> Место проведения
            </h4>
            <p className="text-orange-100 text-lg">г. Астана</p>
            <p className="text-orange-200/60 text-sm mt-2">Адрес будет отправлен после регистрации</p>
          </div>
        </div>
      </div>
    </section>
  );
}
