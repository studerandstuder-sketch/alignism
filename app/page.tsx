export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      <header className="border-b border-neutral-200 sticky top-0 z-10 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="flex items-baseline gap-1">
            <span className="text-sm tracking-[0.2em] text-neutral-500 uppercase">
              ALIGNISM
            </span>
            <span className="h-4 w-px bg-neutral-300" />
            <span className="text-xs text-neutral-500">
              Live aligned. Live conscious. Live free.
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-16 pt-10 md:pt-16 flex-1">
        <section className="mb-16 md:mb-24">
          <p className="text-xs font-medium tracking-[0.25em] text-neutral-500 uppercase mb-3">
            A MODERN LIFE PHILOSOPHY
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
            Alignism<span className="text-neutral-400">™</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-700 mb-4">
            Live aligned. Live conscious. Live free.
          </p>
          <p className="text-sm md:text-base text-neutral-600 max-w-2xl">
            Alignism is a modern philosophy for people who want clarity,
            inner balance, and freedom in a world that constantly pulls
            them away from themselves.
          </p>
        </section>

        <section className="mb-16 md:mb-24" id="what">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            What is Alignism?
          </h2>
          <div className="space-y-4 text-sm md:text-base text-neutral-700 max-w-3xl leading-relaxed">
            <p>
              Alignism is a modern life philosophy founded by Sébastien Studer.
              It teaches how to live in harmony with your inner truth — with
              clarity, intention, and freedom — instead of being driven by
              expectations, noise, and comparison.
            </p>
            <p>
              It is not about perfection. It is about coherence. About building
              a life that feels calm, meaningful, and self-directed.
            </p>
          </div>
        </section>

        <section className="mb-16 md:mb-24" id="pillars">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            The 5 Pillars of Alignism
          </h2>
          <div className="grid gap-6 md:grid-cols-2 text-sm md:text-base">
            <div className="rounded-2xl border border-neutral-200 p-4 md:p-5">
              <h3 className="font-semibold mb-2">Inner Alignment</h3>
              <p className="text-neutral-700">
                Understanding your instincts, emotions, fears, and intuition.
                Seeing yourself clearly and letting your inner signals guide
                your decisions.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-4 md:p-5">
              <h3 className="font-semibold mb-2">Quality of Life</h3>
              <p className="text-neutral-700">
                Less stress, more energy. Better sleep, better health, better
                choices. The real luxury is peace of mind, not performance.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-4 md:p-5">
              <h3 className="font-semibold mb-2">Lucid Love</h3>
              <p className="text-neutral-700">
                Loving without losing yourself. Building relationships that are
                honest, breathing, and balanced — with partners, children,
                family, and friends.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-4 md:p-5">
              <h3 className="font-semibold mb-2">Modern Freedom</h3>
              <p className="text-neutral-700">
                Using money and technology consciously. Working intelligently,
                not endlessly. Letting AI assist you without letting it replace
                your humanity.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-4 md:p-5 md:col-span-2">
              <h3 className="font-semibold mb-2">Freedom of Movement</h3>
              <p className="text-neutral-700">
                Not belonging to a single country or system. Building options,
                mobility, and global citizenship so your life is not trapped by
                one decision or one border.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-5xl px-4 py-6 text-xs text-neutral-500 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <span>© {year} Alignism™. All rights reserved.</span>
          <span>
            Founded by{" "}
            <a
              href="https://sebastienstuder.com"
              className="underline-offset-2 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Sébastien Studer
            </a>
            .
          </span>
        </div>
      </footer>
    </div>
  );
}
