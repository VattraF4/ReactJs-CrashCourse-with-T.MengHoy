import { Link } from "react-router-dom";

function Service() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <header className="mb-12 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            What we do
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Services built around your goals.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Practical support and thoughtful solutions to help you move
            forward with confidence.
          </p>
        </header>

        <section
          aria-label="Available services"
          className="grid gap-5 md:grid-cols-3"
        >
          {[
            {
              title: "Strategy",
              description: "Turn ideas into a clear, actionable plan.",
            },
            {
              title: "Design",
              description: "Create experiences that are simple and engaging.",
            },
            {
              title: "Development",
              description: "Build reliable solutions that grow with you.",
            },
          ].map((service) => (
            <article
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition hover:-translate-y-1 hover:border-blue-400"
              key={service.title}
            >
              <h2 className="text-xl font-semibold text-white">
                {service.title}
              </h2>
              <p className="mt-3 leading-7 text-slate-400">
                {service.description}
              </p>
            </article>
          ))}
        </section>

        <Link
          className="mt-12 inline-flex rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-200 transition hover:border-blue-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-950"
          to="/"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}

export default Service;