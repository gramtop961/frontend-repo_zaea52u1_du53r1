import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MushroomExplorer from './components/MushroomExplorer';
import QuizSection from './components/QuizSection';

export default function App() {
  return (
    <div className="min-h-screen bg-amber-50 text-emerald-950 selection:bg-emerald-200/60">
      <Navbar />
      <main>
        <Hero />
        <MushroomExplorer />
        <ContactSection />
        <QuizSection />
        <Footer />
      </main>
    </div>
  );
}

function ContactSection() {
  return (
    <section id="kontakt" className="relative bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900">Kontakt</h2>
        <p className="mt-2 text-emerald-800/70">Fragen, Feedback oder Kooperationen? Schreib uns eine Nachricht.</p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 grid gap-4 rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-emerald-900/80">Name</label>
              <input required className="mt-1 w-full rounded-xl border border-emerald-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-300" />
            </div>
            <div>
              <label className="block text-sm text-emerald-900/80">E-Mail</label>
              <input type="email" required className="mt-1 w-full rounded-xl border border-emerald-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-300" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-emerald-900/80">Nachricht</label>
            <textarea rows={4} required className="mt-1 w-full rounded-xl border border-emerald-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-300" />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-emerald-800/70">Wir melden uns in der Regel innerhalb von 48 Stunden.</p>
            <button className="rounded-xl bg-emerald-600 px-5 py-2.5 text-white">Senden</button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-emerald-900 text-emerald-50">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm">© {new Date().getFullYear()} Interaktive Pilz-Enzyklopädie</p>
        <a href="#start" className="text-sm hover:underline">Nach oben</a>
      </div>
    </footer>
  );
}
