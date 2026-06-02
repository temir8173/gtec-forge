const groups = [
  { label: "Frontend", code: "FE", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { label: "Backend", code: "BE", items: ["Node.js", "PHP", "Python"] },
  { label: "CMS", code: "CMS", items: ["WordPress", "Headless CMS"] },
  { label: "AI", code: "AI", items: ["AI-assisted development"] },
  { label: "DevOps", code: "OPS", items: ["Docker", "CI/CD", "Cloud"] },
];

export function Stack() {
  const total = groups.reduce((n, g) => n + g.items.length, 0);

  return (
    <section id="stack" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-5xl">
          <div className="max-w-2xl">
            <p className="label-mono text-[color:var(--cyan)]">// Технологии</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Стек, на котором мы работаем</h2>
          </div>
          <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground flex items-center gap-3 shrink-0">
            <span>{groups.length} групп</span>
            <span className="w-1 h-1 rounded-full bg-[color:var(--cyan)]" />
            <span>{total} инструментов</span>
          </div>
        </div>

        <div
          className="mt-14 border rounded-lg overflow-hidden divide-y"
          style={{
            borderColor: "color-mix(in oklab, var(--primary) 15%, transparent)",
          }}
        >
          {groups.map((g, idx) => (
            <div
              key={g.label}
              className="group grid grid-cols-[auto_1fr] md:grid-cols-[180px_1fr] gap-4 md:gap-8 px-5 md:px-7 py-5 transition-colors hover:bg-white/[0.02]"
              style={{
                borderColor: "color-mix(in oklab, var(--primary) 10%, transparent)",
              }}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span
                  className="font-mono text-[10px] text-muted-foreground/70 tabular-nums"
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="label-mono text-foreground/90">{g.label}</span>
                <span
                  className="hidden md:inline font-mono text-[9px] uppercase tracking-[0.18em] px-1.5 py-0.5 border"
                  style={{
                    color: "color-mix(in oklab, var(--cyan) 80%, transparent)",
                    borderColor: "color-mix(in oklab, var(--cyan) 25%, transparent)",
                  }}
                >
                  {g.code}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {g.items.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-md text-sm font-mono bg-white/[0.025] border border-white/10 text-muted-foreground hover:border-[color:var(--cyan)]/40 hover:text-foreground transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
