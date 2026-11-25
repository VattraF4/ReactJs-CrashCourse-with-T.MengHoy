import React from "react";
import { Link, Outlet } from "react-router-dom";

function AboutLayout() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100 sm:px-10">
      <div className="mx-auto flex min-h-[70vh] max-w-5xl items-center">
        <section className="w-full overflow-hidden rounded-3xl border border-slate-800 bg-linear-to-br from-slate-900 via-slate-900 to-blue-950/80 p-8 shadow-2xl sm:p-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            About us
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Get to know us.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Learn more about our vision, mission, and goals.
          </p>
          <nav
            aria-label="About navigation"
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              to="."
              className="rounded-lg bg-blue-500 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Our Vision
            </Link>
            <Link
              to="mission"
              className="rounded-lg border border-slate-600 px-6 py-3 text-center font-semibold text-slate-200 transition hover:border-blue-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Our Mission
            </Link>
            <Link
              to="goals"
              className="rounded-lg border border-slate-600 px-6 py-3 text-center font-semibold text-slate-200 transition hover:border-blue-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Our Goals
            </Link>
          </nav>
          <div className="mt-8 border-t border-slate-700 pt-6 text-lg font-semibold text-slate-100">
            <Outlet />
          </div>
        </section>
      </div>
    </main>
  );
}

export default AboutLayout;
