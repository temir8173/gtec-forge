import { Sparkles, GitBranch, HeartHandshake } from "lucide-react";

const points = [
  {
    icon: Sparkles,
    title: "ИИ как инструмент, а не замена экспертизы",
    desc: "Мы используем современные AI-инструменты там, где они реально ускоряют и улучшают — но каждое решение проходит через голову инженера, а не генерируется в один клик.",
    id: "ID_001",
    sysCode: "SYS_V01 // AI_CORE",
    footer: "Process_Optimization",
    dotIndex: 0,
  },
  {
    icon: GitBranch,
    title: "Технологии выбираются под задачу",
    desc: "Мы не тащим в каждый проект один и тот же стек. Подбираем то, что оправданно — по масштабу, бюджету, перспективам роста.",
    id: "ID_002",
    sysCode: "SYS_V02 // STACK_ARC",
    footer: "Stack_Selection",
    dotIndex: 1,
  },
  {
    icon: HeartHandshake,
    title: "Мы сопровождаем, а не сдаём и уходим",
    desc: "Проект — это начало отношений, не конец сделки. Мы остаёмся рядом для поддержки, масштабирования и развития продукта.",
    id: "ID_003",
    sysCode: "SYS_V03 // LIFECYCLE",
    footer: "Support_Lifecycle",
    dotIndex: 2,
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

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map(({ icon: Icon, title, desc, id, sysCode, footer, dotIndex }) => (
            <div
              key={title}
              className="group relative bg-card border p-8 overflow-hidden transition-colors hover:border-[color:var(--cyan)]/40"
              style={{ borderColor: "color-mix(in oklab, var(--primary) 15%, transparent)" }}
            >
              {/* Blueprint corner accents */}
              <span
                className="absolute top-0 left-0 w-4 h-4 border-t border-l"
                style={{ borderColor: "color-mix(in oklab, var(--primary) 40%, transparent)" }}
              />
              <span
                className="absolute top-0 right-0 w-4 h-4 border-t border-r"
                style={{ borderColor: "color-mix(in oklab, var(--primary) 40%, transparent)" }}
              />
              <span
                className="absolute bottom-0 left-0 w-4 h-4 border-b border-l"
                style={{ borderColor: "color-mix(in oklab, var(--primary) 40%, transparent)" }}
              />
              <span
                className="absolute bottom-0 right-0 w-4 h-4 border-b border-r"
                style={{ borderColor: "color-mix(in oklab, var(--primary) 40%, transparent)" }}
              />

              {/* SysCode label */}
              <span
                className="absolute top-8 right-8 text-[8px] font-mono uppercase tracking-[0.18em]"
                style={{ color: "color-mix(in oklab, var(--primary) 55%, transparent)" }}
              >
                {sysCode}
              </span>

              {/* Header meta */}
              <div className="flex items-center justify-between mb-12">
                <span
                  className="px-2 py-1 font-mono text-[10px] text-primary border"
                  style={{
                    backgroundColor: "color-mix(in oklab, var(--primary) 5%, transparent)",
                    borderColor: "color-mix(in oklab, var(--primary) 12%, transparent)",
                  }}
                >
                  {id}
                </span>
                <div
                  className="h-px flex-grow mx-4"
                  style={{ backgroundColor: "color-mix(in oklab, var(--primary) 12%, transparent)" }}
                />
              </div>

              {/* Icon frame */}
              <div className="relative w-16 h-16 mb-8 flex items-center justify-center">
                <div
                  className="absolute inset-0 rounded-full border border-dashed transition-transform duration-700 group-hover:rotate-180"
                  style={{ borderColor: "color-mix(in oklab, var(--cyan) 35%, transparent)" }}
                />
                <Icon
                  strokeWidth={1.5}
                  className="w-7 h-7 text-[color:var(--cyan)] relative"
                />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold leading-tight mb-4">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground mb-8">{desc}</p>

              {/* Footer meta */}
              <div
                className="pt-6 border-t flex items-center justify-between"
                style={{ borderColor: "color-mix(in oklab, var(--primary) 8%, transparent)" }}
              >
                <span className="font-mono text-[10px] uppercase text-muted-foreground tracking-wider">
                  {footer}
                </span>
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-1 h-1"
                      style={{
                        backgroundColor:
                          i === dotIndex
                            ? "var(--cyan)"
                            : "color-mix(in oklab, var(--foreground) 15%, transparent)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
