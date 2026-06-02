import { useEffect, useState } from "react";

type Lang = "ru" | "kk";

export function Nav() {
  const links = [
    { href: "#services", label: "Услуги" },
    { href: "#approach", label: "Подход" },
    { href: "#stack", label: "Технологии" },
    { href: "#work", label: "Работы" },
    { href: "#team", label: "Команда" },
  ];

  const [lang, setLang] = useState<Lang>("ru");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem("lang") as Lang | null)) || null;
    if (saved === "ru" || saved === "kk") setLang(saved);
  }, []);

  const choose = (l: Lang) => {
    setLang(l);
    try {
      localStorage.setItem("lang", l);
      document.documentElement.lang = l;
    } catch {}
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="rounded-md flex items-center justify-between px-5 py-2.5 border border-white/10 bg-[oklch(0.18_0.02_260/0.75)] text-white backdrop-blur-xl shadow-[0_8px_30px_-10px_rgba(0,0,0,0.4)]">
          <a href="#top" className="flex items-center gap-2 font-display font-bold tracking-tight">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" />
            gtec<span className="text-muted-foreground">.kz</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div
              role="group"
              aria-label="Язык / Тіл"
              className="hidden sm:inline-flex items-center rounded-md border border-white/10 bg-white/[0.03] p-0.5 font-mono text-[11px] uppercase tracking-wider"
            >
              {(["ru", "kk"] as const).map((l) => {
                const active = lang === l;
                return (
                  <button
                    key={l}
                    type="button"
                    onClick={() => choose(l)}
                    aria-pressed={active}
                    className={
                      "px-2 py-1 rounded-[5px] transition-colors " +
                      (active
                        ? "bg-primary/15 text-primary"
                        : "text-muted-foreground hover:text-foreground")
                    }
                  >
                    {l === "ru" ? "Ru" : "Kk"}
                  </button>
                );
              })}
            </div>
            <a
              href="#contact"
              className="text-sm rounded-md bg-primary text-primary-foreground px-4 py-1.5 font-medium hover:opacity-90 transition"
            >
              Обсудить
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
