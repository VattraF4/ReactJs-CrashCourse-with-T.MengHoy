import React, { useReducer, useState } from "react";
import Users from "./Users";
import people from "../assets/data";
const initialState = {
  users: people,
  isLogin:true,
};
const reducer = (state, action) => {
  if(action.type === "CLEAR_ALL") {
    return { ...state, users: [] };
  }
  // console.log("action", action);
  // return ;
};
function UserLists() {

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("state", state);
  function handleClearAll() {
    dispatch({ type: "CLEAR_ALL" });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2b2f32] p-4">
      <div className="w-full max-w-md bg-[#535353] p-6 rounded-2xl shadow-lg">
        {state.users.map((user) => (
          <Users
            {...user}
            key={user.id}
            onRemove={() => setUsers(users.filter((u) => u.id !== user.id))}
          />
        ))}
        <button
          className="w-full bg-[#d32f2f] hover:bg-[#b71c1c] text-white py-3 rounded-lg font-medium text-lg mt-2 transition-colors"
          onClick={() => handleClearAll()}
        >
          Clear All
        </button>
      </div>
    </div>
  );
}

export default UserLists;
