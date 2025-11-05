import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Leaf, Skull, Star } from 'lucide-react';

const MUSHROOMS = [
  {
    name: 'Steinpilz',
    latin: 'Boletus edulis',
    category: 'essbar',
    img: 'https://images.unsplash.com/photo-1508002366005-75a695ee2d17?q=80&w=2070&auto=format&fit=crop',
    desc: 'Aromatischer Speisepilz mit nussigem Geschmack und fester Konsistenz.'
  },
  {
    name: 'Fliegenpilz',
    latin: 'Amanita muscaria',
    category: 'giftig',
    img: 'https://images.unsplash.com/photo-1608380475645-5a240b88742f?q=80&w=2070&auto=format&fit=crop',
    desc: 'Auffälliger roter Hut mit weißen Punkten. Giftig und nicht zum Verzehr geeignet.'
  },
  {
    name: 'Pfifferling',
    latin: 'Cantharellus cibarius',
    category: 'essbar',
    img: 'https://images.unsplash.com/photo-1622737133809-d95047b9f8ad?q=80&w=1974&auto=format&fit=crop',
    desc: 'Beliebter Speisepilz mit pfeffrig-fruchtiger Note und goldgelber Farbe.'
  },
  {
    name: 'Morchel',
    latin: 'Morchella esculenta',
    category: 'selten',
    img: 'https://images.unsplash.com/photo-1587156368418-1a28968d33a5?q=80&w=1974&auto=format&fit=crop',
    desc: 'Frühjahrs-Pilz mit wabenartigem Hut. Geschätzt in der Gourmetküche.'
  },
  {
    name: 'Grüner Knollenblätterpilz',
    latin: 'Amanita phalloides',
    category: 'giftig',
    img: 'https://images.unsplash.com/photo-1632925443789-f31cf35d8a1e?q=80&w=1974&auto=format&fit=crop',
    desc: 'Extrem giftig! Verantwortlich für viele Vergiftungen. Niemals verzehren.'
  },
  {
    name: 'Parasol',
    latin: 'Macrolepiota procera',
    category: 'essbar',
    img: 'https://images.unsplash.com/photo-1509805523828-8f57e1619acc?q=80&w=1974&auto=format&fit=crop',
    desc: 'Großer Schirmpilz, jung als Schnitzel beliebt. Sicher bestimmen lernen!'
  },
  {
    name: 'Kaiserling',
    latin: 'Amanita caesarea',
    category: 'selten',
    img: 'https://images.unsplash.com/photo-1699848616181-6ef4c21c9f3a?q=80&w=1974&auto=format&fit=crop',
    desc: 'Seltene Delikatesse, in Mitteleuropa geschützt. Verwechslungsgefahr beachten.'
  },
];

const CATEGORY_META = {
  essbar: { label: 'Essbar', icon: Leaf, color: 'bg-emerald-600/90 text-white' },
  giftig: { label: 'Giftig', icon: Skull, color: 'bg-rose-600/90 text-white' },
  selten: { label: 'Selten', icon: Star, color: 'bg-amber-600/90 text-white' },
};

export default function MushroomExplorer() {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState('alle');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MUSHROOMS.filter((m) => {
      const matchesQuery = !q || m.name.toLowerCase().includes(q) || m.latin.toLowerCase().includes(q);
      const matchesCat = active === 'alle' || m.category === active;
      return matchesQuery && matchesCat;
    });
  }, [query, active]);

  return (
    <section id="lexikon" className="relative bg-amber-50">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900">Pilzlexikon</h2>
            <p className="mt-2 text-emerald-800/70">Suche nach Namen oder filtere nach Kategorie.</p>
          </div>
          <div className="flex items-center gap-3">
            {['alle', 'essbar', 'giftig', 'selten'].map((c) => {
              const meta = CATEGORY_META[c];
              const isActive = active === c;
              return (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all shadow-sm ${
                    isActive
                      ? c === 'alle'
                        ? 'bg-emerald-900 text-emerald-50 border-emerald-900'
                        : `${meta?.color} border-transparent`
                      : 'bg-white border-emerald-200 text-emerald-800 hover:bg-emerald-50'
                  }`}
                >
                  {c !== 'alle' && meta?.icon && <meta.icon className="h-4 w-4" />}
                  <span className="capitalize">{c}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative mb-8">
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-600/10 to-amber-600/10" />
          <div className="relative flex items-center gap-3 rounded-2xl border border-emerald-200 bg-white px-4 py-3 shadow-sm">
            <Search className="h-5 w-5 text-emerald-700" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Nach Pilznamen oder lateinischem Namen suchen..."
              className="w-full bg-transparent outline-none placeholder:text-emerald-800/60 text-emerald-900"
            />
          </div>
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((m) => {
              const meta = CATEGORY_META[m.category];
              return (
                <motion.article
                  key={m.name}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="group overflow-hidden rounded-2xl border border-emerald-200 bg-white shadow-sm hover:shadow-xl transition-shadow"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={m.img}
                      alt={m.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className={`absolute left-3 top-3 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium shadow ${meta.color}`}>
                      {meta.icon && <meta.icon className="h-3.5 w-3.5" />}
                      {meta.label}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-emerald-900">{m.name}</h3>
                    <p className="text-sm italic text-emerald-800/70">{m.latin}</p>
                    <p className="mt-3 text-emerald-900/80 leading-relaxed">{m.desc}</p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </AnimatePresence>

        <div id="hinweise" className="mt-14 rounded-2xl border border-emerald-200 bg-white/60 p-6 backdrop-blur shadow-sm">
          <h3 className="text-2xl font-bold text-emerald-900">Sammelhinweise</h3>
          <ul className="mt-4 grid gap-3 text-emerald-900/90 sm:grid-cols-2">
            <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-600" />Nur sicher bestimmte Pilze sammeln und im Zweifel liegen lassen.</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-600" />Naturschutz beachten: Seltene Arten stehen oft unter Schutz.</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-rose-600" />Keine überständigen oder wurmstichigen Exemplare mitnehmen.</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-800" />Pilze luftig in Körben transportieren, nicht in Plastiktüten.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
