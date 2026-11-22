import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { Home, About, Service, Layout } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Service />,
      },
    ]
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
