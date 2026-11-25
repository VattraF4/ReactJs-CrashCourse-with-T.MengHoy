import { Outlet } from "react-router-dom";

function UserLayout() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100 sm:px-10">
      <div className="mx-auto flex min-h-[70vh] max-w-5xl items-center">
        <section className="w-full overflow-hidden rounded-3xl border border-slate-800 bg-linear-to-br from-slate-900 via-slate-900 to-blue-950/80 p-8 shadow-2xl sm:p-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Community
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Meet our users.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Browse and manage user profiles in one place.
          </p>
          <div className="mt-10 border-t border-slate-700 pt-8">
            <Outlet />
          </div>
        </section>
      </div>
    </main>
  );
}

export default UserLayout;
