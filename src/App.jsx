import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { Home, Service, Error404 } from "./pages";

import RootLayout from "./components/layout/RootLayout";
import AboutLayout from "./components/layout/AboutLayout";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     errorElement: <Error404 />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <AboutLayout />,
//         children: [
//           {
//             index: true,
//             element: <h4>Our Vision</h4>,
//           },
//           {
//             path: "mission",
//             element: <h4>Our Mission</h4>,
//           },
//           {
//             path: "goals",
//             element: <h4>Our Goals</h4>,
//           },
//         ],
//       },
//       {
//         path: "services",
//         element: <Service />,
//       },
//     ],
//   },
// ]);

const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<Error404 />}>
      <Route index element={<Home />} />
      <Route path="about" element={<AboutLayout />}>
        <Route index element={<h4>Our Vision</h4>} />
        <Route path="mission" element={<h4>Our Mission</h4>} />
        <Route path="goals" element={<h4>Our Goals</h4>} />
      </Route>
      <Route path="services" element={<Service />} />
    </Route>,
  ),
);
function App() {
  return <RouterProvider router={routers} />;
}

export default App;
