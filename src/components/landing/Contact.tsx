import { useState } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="glass rounded-lg p-8 md:p-14 relative overflow-hidden">
          <div
            className="absolute -top-32 -right-32 h-80 w-80 rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--primary)" }}
          />
          <div
            className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full opacity-20 blur-3xl"
            style={{ background: "var(--cyan)" }}
          />

          <div className="relative grid md:grid-cols-2 gap-12">
            <div>
              <p className="label-mono text-[color:var(--cyan)]">Контакты</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
                Есть задача?<br />Расскажите — <span className="gradient-text">разберёмся.</span>
              </h2>
              <p className="mt-5 text-muted-foreground">
                Отвечаем в течение 1 рабочего дня.
              </p>

              <div className="mt-8 space-y-3 text-sm font-mono">
                <a href="mailto:hello@gtec.kz" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition">
                  <Mail className="h-4 w-4" />
                  <span>hello@gtec.kz</span>
                </a>
                <a href="https://wa.me/77000000000" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition">
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
                <a href="https://t.me/gtec_kz" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition">
                  <Send className="h-4 w-4" />
                  <span>Telegram</span>
                </a>
              </div>
            </div>

            {sent ? (
              <div className="glass rounded-lg p-8 flex flex-col items-center justify-center text-center">
                <div className="h-14 w-14 rounded-md bg-primary/20 text-primary flex items-center justify-center text-2xl">✓</div>
                <h3 className="mt-4 text-xl font-semibold">Спасибо!</h3>
                <p className="mt-2 text-sm text-muted-foreground">Ответим в течение рабочего дня.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-4"
              >
                <Field label="Имя" name="name" required />
                <Field label="Email или телефон" name="contact" required />
                <Field label="Опишите задачу" name="message" textarea required />
                <button
                  type="submit"
                  className="w-full rounded-md bg-primary text-primary-foreground py-3.5 font-medium hover:opacity-90 transition shadow-[0_10px_40px_-10px_var(--primary)]"
                >
                  Отправить
                </button>
              </form>
            )}
          </div>
        </div>

        <footer className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-mono">
          <span>© 2026 gtec.kz</span>
          <span>Алматы · Казахстан</span>
        </footer>
      </div>
    </section>
  );
}

function Field({ label, name, textarea, required }: { label: string; name: string; textarea?: boolean; required?: boolean }) {
  const cls =
    "w-full rounded-md bg-white/[0.03] border border-white/10 px-4 py-3 text-sm outline-none focus:border-primary/60 focus:bg-white/[0.05] transition placeholder:text-muted-foreground/60";
  return (
    <label className="block">
      <span className="label-mono text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea name={name} required={required} rows={4} className={`mt-2 ${cls} resize-none`} />
      ) : (
        <input name={name} required={required} className={`mt-2 ${cls}`} />
      )}
    </label>
  );
}
