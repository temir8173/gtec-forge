export function Nav() {
  const links = [
    { href: "#services", label: "Услуги" },
    { href: "#approach", label: "Подход" },
    { href: "#stack", label: "Технологии" },
    { href: "#work", label: "Работы" },
    { href: "#team", label: "Команда" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="glass rounded-full flex items-center justify-between px-5 py-2.5">
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
          <a
            href="#contact"
            className="text-sm rounded-full bg-primary text-primary-foreground px-4 py-1.5 font-medium hover:opacity-90 transition"
          >
            Обсудить
          </a>
        </div>
      </div>
    </header>
  );
}
