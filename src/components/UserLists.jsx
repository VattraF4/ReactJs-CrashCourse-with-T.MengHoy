import { useReducer } from "react";
import Users from "./Users";
import people from "../assets/data";
const initialState = {
  users: people,
};

const ActionTypes = {
  CLEAR_ALL: "CLEAR_ALL",
  RESET: "RESET",
  REMOVE: "REMOVE",
};
const reducer = (state, action) => {
  if (action.type === ActionTypes.CLEAR_ALL) {
    return { ...state, users: [] };
  }
  if (action.type === ActionTypes.RESET) {
    return { ...state, users: people };
  }
  if (action.type === ActionTypes.REMOVE) {
    return {
      ...state,
      users: state.users.filter((u) => u.id !== action.payload),
    };
  }

  throw new Error("DISPATCH ERROR: action type is not defined");
};
function UserLists() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2b2f32] p-4">
      <div className="w-full max-w-md bg-[#535353] p-6 rounded-2xl shadow-lg">
        {state.users.length > 0 ? (
          state.users.map((user) => (
            <Users
              {...user}
              key={user.id}
              onRemove={() =>
                dispatch({ type: ActionTypes.REMOVE, payload: user.id })
              }
            />
          ))
        ) : (
          <p className="mb-4 text-center text-lg text-white">
            No users to display.
          </p>
        )}
        <button
          className="w-full bg-[#d32f2f] hover:bg-[#b71c1c] text-white py-3 rounded-lg font-medium text-lg mt-2 transition-colors"
          onClick={() => dispatch({ type: ActionTypes.CLEAR_ALL })}
        >
          Clear All
        </button>
        <button
          className="w-full bg-[#1976d2] hover:bg-[#1565c0] text-white py-3 rounded-lg font-medium text-lg mt-2 transition-colors"
          onClick={() => dispatch({ type: ActionTypes.RESET })}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default UserLists;
