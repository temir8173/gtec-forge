const cases = [
  {
    name: "Финтех-кабинет",
    stack: "Next.js · TypeScript · Node",
    result: "Скорость отклика интерфейса × 3, переход с легаси без простоя.",
    gradient: "from-indigo-500/30 to-cyan-500/20",
  },
  {
    name: "B2B-маркетплейс",
    stack: "React · Python · PostgreSQL",
    result: "Каталог 50k+ позиций, поиск с фасетами, рост конверсии +28%.",
    gradient: "from-cyan-500/30 to-indigo-500/10",
  },
  {
    name: "Корпоративный сайт",
    stack: "Headless WordPress · Next.js",
    result: "Lighthouse 98, редактор без боли для контент-команды.",
    gradient: "from-purple-500/20 to-indigo-500/30",
  },
];

export function Work() {
  return (
    <section id="work" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="max-w-2xl">
            <p className="label-mono text-[color:var(--cyan)]">Работы</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Избранные проекты</h2>
          </div>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition">
            Больше работ — в личной беседе →
          </a>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {cases.map((c) => (
            <article key={c.name} className="glass glow-border rounded-lg overflow-hidden group">
              <div className={`relative h-52 bg-gradient-to-br ${c.gradient} overflow-hidden`}>
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
                  <span className="font-display text-xl font-semibold">{c.name}</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{c.stack}</p>
                <p className="mt-3 text-sm leading-relaxed">{c.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
