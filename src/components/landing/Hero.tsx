export function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full opacity-40 blur-3xl orb pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--primary), transparent 60%)" }}
      />
      <div
        className="absolute top-40 right-0 h-[400px] w-[400px] rounded-full opacity-30 blur-3xl orb pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--cyan), transparent 60%)", animationDelay: "-6s" }}
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-2 glass rounded-md px-3 py-1.5 label-mono text-muted-foreground reveal">
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--cyan)] animate-pulse" />
          Команда инженеров — Алматы, Казахстан
        </div>

        <h1 className="reveal mt-6 text-5xl md:text-7xl font-bold leading-[1.05]" style={{ animationDelay: ".1s" }}>
          <span className="gradient-text">Технологии</span> для бизнеса.
          <br />
          С пониманием, зачем.
        </h1>

        <p
          className="reveal mt-7 mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed"
          style={{ animationDelay: ".2s" }}
        >
          Команда, которая создаёт веб-решения любой сложности и растёт вместе с клиентом —
          до полноценного технологического партнёрства.
        </p>

        <div className="reveal mt-10 flex items-center justify-center gap-3" style={{ animationDelay: ".3s" }}>
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 rounded-md px-7 py-3.5 font-medium text-primary-foreground overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
            style={{
              backgroundImage:
                "linear-gradient(135deg, color-mix(in oklab, var(--primary) 92%, white) 0%, var(--primary) 55%, color-mix(in oklab, var(--primary) 80%, black) 100%)",
              boxShadow:
                "0 1px 0 0 color-mix(in oklab, white 25%, transparent) inset, 0 0 0 1px color-mix(in oklab, var(--primary) 40%, transparent), 0 14px 40px -12px color-mix(in oklab, var(--primary) 70%, transparent)",
            }}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
            />
            <span className="relative tracking-tight">Обсудить проект</span>
            <span
              aria-hidden
              className="relative flex h-5 w-5 items-center justify-center rounded-full bg-white/15 transition-all duration-300 group-hover:bg-white/25 group-hover:translate-x-0.5"
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
                <path d="M1 5h7m0 0L5 2m3 3L5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
          <a
            href="#work"
            className="rounded-md glass px-7 py-3.5 font-medium hover:bg-white/[0.06] transition"
          >
            Посмотреть работы
          </a>
        </div>
      </div>
    </section>
  );
}
