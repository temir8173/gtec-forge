const groups = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { label: "Backend", items: ["Node.js", "PHP", "Python"] },
  { label: "CMS", items: ["WordPress", "Headless CMS"] },
  { label: "AI", items: ["AI-assisted development"] },
  { label: "DevOps", items: ["Docker", "CI/CD", "Cloud"] },
];

export function Stack() {
  return (
    <section id="stack" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm text-[color:var(--cyan)] font-medium uppercase tracking-widest">Технологии</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Стек, на котором мы работаем</h2>
        </div>

        <div className="mt-14 space-y-5">
          {groups.map((g) => (
            <div
              key={g.label}
              className="glass rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-5"
            >
              <div className="w-40 shrink-0">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">{g.label}</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {g.items.map((t) => (
                  <span
                    key={t}
                    className="px-4 py-1.5 rounded-full text-sm bg-white/[0.03] border border-white/10 hover:border-primary/50 hover:text-foreground transition-colors"
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
