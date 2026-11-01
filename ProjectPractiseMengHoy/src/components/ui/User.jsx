import React, { useContext } from "react";
import { navBarContext } from "./NavBar";

function User() {
  const { user, signOut } = useContext(navBarContext);
  // return null;
  return user ? (
    <div className="flex flex-row flex-2 gap-3 items-center">
      <span>Welcome, {user?.name}</span>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={signOut}
      >
        Sing Out
      </button>
    </div>
  ) : (
    <div className="flex flex-2 gap-0 items-center justify-center">
      {/* <span>User</span> */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Sing In
      </button>
    </div>
  );
}

export default User;
