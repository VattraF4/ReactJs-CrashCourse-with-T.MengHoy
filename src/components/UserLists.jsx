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
  if(action.type === "RESET") {
    return { ...state, users: people };
  }
  if(action.type === "REMOVE") {
    return { ...state, users: state.users.filter((u) => u.id !== action.payload) };
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
  function handleReset(){
    dispatch({ type: "RESET" });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2b2f32] p-4">
      <div className="w-full max-w-md bg-[#535353] p-6 rounded-2xl shadow-lg">
        {state.users.map((user) => (
          <Users
            {...user}
            key={user.id}
            onRemove={() => dispatch({ type: "REMOVE", payload: user.id })}
          />
        ))}
        <button
          className="w-full bg-[#d32f2f] hover:bg-[#b71c1c] text-white py-3 rounded-lg font-medium text-lg mt-2 transition-colors"
          onClick={() => handleClearAll()}
        >
          Clear All
        </button>
        <button
          className="w-full bg-[#1976d2] hover:bg-[#1565c0] text-white py-3 rounded-lg font-medium text-lg mt-2 transition-colors"
          onClick={() => handleReset()}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default UserLists;
