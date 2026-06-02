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
            className="group relative inline-flex items-center gap-3 rounded-md bg-primary text-primary-foreground px-7 py-3.5 transition-all duration-300 hover:-translate-y-0.5"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              letterSpacing: "0.04em",
              boxShadow:
                "0 1px 0 0 color-mix(in oklab, white 14%, transparent) inset, 0 10px 30px -14px color-mix(in oklab, var(--primary) 80%, transparent)",
            }}
          >
            <span>Обсудить проект</span>
            <svg
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M1 5h11m0 0L8 1m4 4L8 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
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
