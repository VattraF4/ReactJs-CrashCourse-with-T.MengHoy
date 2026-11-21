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

  const url = "https://api.github.com/users";
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios(url);
        return response.data;
      };
      fetchData().then((data) => {
        dispatch({ type: "FETCH", payload: data });
      });
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: true });
    }
    dispatch({ type: "SET_LOADING", payload: false });
  }, []);
  return (
    <>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {state.users.map((user) => (
          <GitHubUser key={user.id} {...user} />
        ))}
      </div>
    </>
  );
}

export default App;
