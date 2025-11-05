import { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#start', label: 'Start' },
    { href: '#lexikon', label: 'Pilzlexikon' },
    { href: '#hinweise', label: 'Sammelhinweise' },
    { href: '#quiz', label: 'Quiz' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto mt-4 w-[92%] rounded-2xl bg-gradient-to-r from-emerald-800/80 via-emerald-700/70 to-amber-800/80 backdrop-blur supports-[backdrop-filter]:bg-white/10 shadow-lg border border-white/10">
        <div className="flex items-center justify-between px-4 py-3">
          <a href="#start" className="flex items-center gap-2 text-emerald-100">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-600/80 text-white shadow-inner">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="font-semibold tracking-wide">Pilz-Enzyklopädie</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-emerald-50/90 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menü umschalten"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden px-4 pb-4 flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl bg-white/5 px-3 py-2 text-emerald-50 hover:bg-white/10"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
