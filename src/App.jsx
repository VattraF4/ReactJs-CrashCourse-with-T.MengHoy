import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Home, About, Service } from "./pages"; 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Service />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
