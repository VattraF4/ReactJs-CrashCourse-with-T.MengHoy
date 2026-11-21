import axios from "axios";
import "./App.css";
import { useEffect, useReducer } from "react";
import GitHubUser from "./components/GitHubUser";

function reducer(state, action) {
  switch (action.type) {
    case "FETCH":
      return { ...state, users: action.payload };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_ERROR":
      return { ...state, isError: action.payload };
    default:
      return state;
  }
}

function App() {
  const defaultState = {
    users: [],
    isLoading: true,
    isError: false,
  };

  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);
  // const [users, setUsers] = useState([]);

  const [state, dispatch] = useReducer(reducer, defaultState);

  // Destructuring state for easier access
  const { users, isLoading, isError } = state;

  const url = "https://api.github.com/users";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        dispatch({ type: "FETCH", payload: response.data });
      } catch {
        dispatch({ type: "SET_ERROR", payload: true });
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    };

    fetchData();
  }, []);
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#2b2f32] p-4">
        <p className="text-lg text-white">Loading...</p>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#2b2f32] p-4">
        <p className="text-lg text-white">Error fetching data.</p>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <GitHubUser key={user.id} {...user} />
        ))}
      </div>
    </>
  );
}

export default App;
