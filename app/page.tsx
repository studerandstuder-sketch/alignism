
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
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

      <main className="mx-auto max-w-5xl px-4 pb-16 pt-10 md:pt-16">
        <section className="mb-16 md:mb-24">
          <h1 className="text-4xl font-semibold mb-4">Alignism™</h1>
          <p className="text-lg text-neutral-700 mb-4">
            A modern philosophy of clarity, intention, and freedom.
          </p>
        </section>
      </main>

      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-5xl px-4 py-6 text-xs text-neutral-500">
          © 2025 Alignism™. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
