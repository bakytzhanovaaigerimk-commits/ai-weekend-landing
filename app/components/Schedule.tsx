'use client';

const schedule = [
  { time: '10:00', title: 'Регистрация и кофе', desc: 'Встреча участников, выдача бейджей.' },
  { time: '10:30', title: 'Вступительное слово', desc: 'Цели воркшопа, представление спикеров.' },
  { time: '11:00', title: 'Практика: генерация персонажа', desc: 'Stable Diffusion — от идеи до арты.' },
  { time: '13:00', title: 'Обед / Нетворкинг', desc: 'Короткий перерыв и общение.' },
  { time: '14:00', title: 'Монтаж и рендер', desc: 'Создание сцены, рендеринг видео.' },
  { time: '16:00', title: 'Кейс-ревью', desc: 'Разбор работ и Q&A.' },
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 px-6 bg-[#0f1724] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#40e0d0]/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Программа дня
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ff2d55] to-[#40e0d0] mx-auto"></div>
        </div>

        <div className="space-y-6">
          {schedule.map((item, idx) => (
            <div
              key={idx}
              className="flex gap-6 group"
            >
              <div className="flex-shrink-0 w-20 text-right">
                <div className="text-[#40e0d0] font-bold text-lg">{item.time}</div>
              </div>
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-[#ff2d55] ring-4 ring-[#ff2d55]/20"></div>
                {idx < schedule.length - 1 && (
                  <div className="w-0.5 h-full bg-gradient-to-b from-[#ff2d55] to-transparent mt-2"></div>
                )}
              </div>
              <div className="flex-1 pb-12">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#40e0d0] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#9aa4b2]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
