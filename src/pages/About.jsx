import { Link } from "react-router-dom";

function About() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <section className="grid items-center gap-10 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-blue-950/70 p-8 shadow-2xl sm:p-14 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              About us
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Thoughtful work. Meaningful results.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              We combine creativity, strategy, and technology to turn
              ambitious ideas into useful experiences.
            </p>
            <Link
              className="mt-8 inline-flex rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-900"
              to="/"
            >
              Back to home
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4" aria-label="Our values">
            {[
              ["01", "Curious"],
              ["02", "Reliable"],
              ["03", "Focused"],
              ["04", "Collaborative"],
            ].map(([number, value]) => (
              <div
                className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5"
                key={number}
              >
                <span className="text-sm font-semibold text-blue-400">
                  {number}
                </span>
                <p className="mt-3 font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;