import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -60]);
  const y2 = useTransform(scrollY, [0, 300], [0, -30]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.7]);

  return (
    <section id="start" className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-900 via-emerald-800 to-amber-900" />
      <motion.div style={{ y: y1, opacity }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIyNjIzMTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-soft-light" />
      </motion.div>

      <div className="relative mx-auto max-w-6xl px-6 pt-40 pb-28 sm:pt-48 sm:pb-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-emerald-50 drop-shadow"
        >
          Entdecke die Welt der Pilze
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 max-w-2xl text-lg text-emerald-100/90"
        >
          Eine interaktive Enzyklopädie mit essbaren, giftigen und seltenen Arten.
          Durchsuche das Lexikon, filtere nach Kategorien und teste dein Wissen im Quiz.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-10 flex items-center gap-4"
        >
          <a
            href="#lexikon"
            className="rounded-xl bg-emerald-600 px-5 py-3 text-white shadow-lg shadow-emerald-900/30 hover:bg-emerald-500 transition-colors"
          >
            Zum Pilzlexikon
          </a>
          <a
            href="#quiz"
            className="rounded-xl bg-white/10 px-5 py-3 text-emerald-50 hover:bg-white/15 backdrop-blur border border-white/10"
          >
            Wissen testen
          </a>
        </motion.div>
      </div>

      <motion.div style={{ y: y2 }} className="relative">
        <svg className="block w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,32L60,58.7C120,85,240,139,360,154.7C480,171,600,149,720,128C840,107,960,85,1080,96C1200,107,1320,149,1380,170.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" fill="currentColor" className="text-amber-50" />
        </svg>
      </motion.div>
    </section>
  );
}
