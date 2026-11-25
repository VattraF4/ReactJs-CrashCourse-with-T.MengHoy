import { useLoaderData } from "react-router-dom";

function User() {
  const users = useLoaderData();

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {users.map((user) => (
        <article
          className="rounded-2xl border border-slate-700 bg-slate-950/60 p-5"
          key={user.id}
        >
          <h2 className="text-lg font-semibold text-white">{user.name}</h2>
          <p className="mt-2 break-all text-sm text-blue-300">{user.email}</p>
        </article>
      ))}
    </div>
  );
}

export default User;
