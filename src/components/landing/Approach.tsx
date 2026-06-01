import { Sparkles, GitBranch, HeartHandshake } from "lucide-react";

const points = [
  {
    icon: Sparkles,
    title: "ИИ как инструмент, а не замена экспертизы",
    desc: "Мы используем современные AI-инструменты там, где они реально ускоряют и улучшают — но каждое решение проходит через голову инженера, а не генерируется в один клик.",
  },
  {
    icon: GitBranch,
    title: "Технологии выбираются под задачу",
    desc: "Мы не тащим в каждый проект один и тот же стек. Подбираем то, что оправданно — по масштабу, бюджету, перспективам роста.",
  },
  {
    icon: HeartHandshake,
    title: "Мы сопровождаем, а не сдаём и уходим",
    desc: "Проект — это начало отношений, не конец сделки.",
  },
];

export function Approach() {
  return (
    <section id="approach" className="py-28 relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="label-mono text-[color:var(--cyan)]">Наш подход</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Чем мы отличаемся</h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {points.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass rounded-lg p-7 relative overflow-hidden">
              <div
                className="absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-20 blur-2xl"
                style={{ background: "var(--primary)" }}
              />
              <Icon className="h-7 w-7 text-[color:var(--cyan)] relative" />
              <h3 className="mt-5 text-xl font-semibold relative">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed relative">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
