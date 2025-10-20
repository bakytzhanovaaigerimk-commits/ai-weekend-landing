export default function Speakers() {
  const speakers = [
    {
      name: "Александр Петров",
      role: "Директор по ИИ, Сбербанк",
      bio: "Руководитель разработки ML-решений",
      company: "Сбербанк"
    },
    {
      name: "Елена Смирнова",
      role: "Lead Data Scientist",
      bio: "Эксперт в области NLP",
      company: "Яндекс"
    },
    {
      name: "Дмитрий Волков",
      role: "CTO AI Division",
      bio: "Специалист по компьютерному зрению",
      company: "VK"
    },
    {
      name: "Мария Иванова",
      role: "Head of AI Ethics",
      bio: "Исследователь этики ИИ",
      company: "МГУ"
    }
  ];

  return (
    <section id="speakers" className="py-24 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-cyan-500 font-medium uppercase tracking-wider text-sm">Спикеры</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-slate-900">
            Эксперты форума
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ведущие специалисты в области искусственного интеллекта
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 overflow-hidden hover:border-cyan-500 transition-all group"
            >
              <div className="aspect-square bg-slate-900 flex items-center justify-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20"></div>
                <div className="text-6xl font-bold text-slate-700 relative z-10">
                  {speaker.name.charAt(0)}
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-cyan-500 font-medium uppercase tracking-wider mb-2">
                  {speaker.company}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {speaker.name}
                </h3>
                <p className="text-slate-600 font-medium text-sm mb-2">{speaker.role}</p>
                <p className="text-slate-500 text-sm">{speaker.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600">
            и другие эксперты отрасли
          </p>
        </div>
      </div>
    </section>
  );
}
