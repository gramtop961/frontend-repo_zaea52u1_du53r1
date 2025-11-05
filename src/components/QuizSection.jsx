import { useState } from 'react';
import { motion } from 'framer-motion';

const QUESTIONS = [
  {
    q: 'Welcher Pilz ist für schwere Vergiftungen bekannt?',
    options: ['Steinpilz', 'Grüner Knollenblätterpilz', 'Pfifferling'],
    a: 1,
  },
  {
    q: 'Welche Eigenschaft trifft auf den Pfifferling zu?',
    options: ['Giftig', 'Selten', 'Essbar'],
    a: 2,
  },
  {
    q: 'Was ist beim Sammeln besonders wichtig?',
    options: [
      'Nur sicher bestimmte Pilze mitnehmen',
      'Alles mitnehmen und später sortieren',
      'Am besten in Plastiktüten sammeln',
    ],
    a: 0,
  },
];

export default function QuizSection() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);

  const current = QUESTIONS[step];

  const select = (idx) => {
    if (finished) return;
    const next = [...answers];
    next[step] = idx;
    setAnswers(next);
  };

  const nextStep = () => {
    if (step < QUESTIONS.length - 1) setStep((s) => s + 1);
    else setFinished(true);
  };

  const score = answers.reduce((acc, v, i) => (v === QUESTIONS[i].a ? acc + 1 : acc), 0);

  return (
    <section id="quiz" className="relative bg-gradient-to-b from-amber-50 to-emerald-50">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900">Quiz: Teste dein Pilzwissen</h2>
        <p className="mt-2 text-emerald-800/70">Kurzes Multiple-Choice-Quiz mit direkter Auswertung.</p>

        {!finished ? (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-8 rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm"
          >
            <div className="text-emerald-900/80 text-sm mb-3">Frage {step + 1} von {QUESTIONS.length}</div>
            <h3 className="text-xl font-semibold text-emerald-900">{current.q}</h3>
            <div className="mt-5 grid gap-3">
              {current.options.map((opt, idx) => {
                const selected = answers[step] === idx;
                return (
                  <button
                    key={opt}
                    onClick={() => select(idx)}
                    className={`text-left rounded-xl border px-4 py-3 transition-all ${
                      selected
                        ? 'border-emerald-600 bg-emerald-50'
                        : 'border-emerald-200 hover:bg-emerald-50/60'
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-emerald-800/70">
                {answers[step] !== undefined ? 'Antwort gewählt' : 'Bitte eine Option wählen'}
              </div>
              <button
                onClick={nextStep}
                disabled={answers[step] === undefined}
                className="rounded-xl bg-emerald-600 px-5 py-2.5 text-white disabled:opacity-50"
              >
                {step < QUESTIONS.length - 1 ? 'Weiter' : 'Auswerten'}
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-emerald-900">Ergebnis</h3>
            <p className="mt-2 text-emerald-900/80">
              Du hast {score} von {QUESTIONS.length} Fragen richtig beantwortet.
            </p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => {
                  setStep(0);
                  setAnswers([]);
                  setFinished(false);
                }}
                className="rounded-xl bg-emerald-600 px-5 py-2.5 text-white"
              >
                Nochmal spielen
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
