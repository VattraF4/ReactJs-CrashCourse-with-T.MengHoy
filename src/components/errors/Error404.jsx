function Error404() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100 sm:px-10">
      <section className="mx-auto max-w-xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Error 404
        </p>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-blue-400 sm:text-6xl">
          Page not found
        </h1>
        <p className="mb-8 text-lg leading-8 text-amber-50">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have
          been moved or the link may be incorrect.
        </p>
        <a
          href="/"
          className="inline-flex rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Back to home
        </a>
      </section>
    </main>
  )
}

export default Error404