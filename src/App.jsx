import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h2>Home Page</h2>,
  },
  {
    path: "/about",
    element: <h2>About Page</h2>,
  },
  {
    path: "/services",
    element: <h2>Services Page</h2>,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
