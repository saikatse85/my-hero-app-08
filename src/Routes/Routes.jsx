import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import MainLayout from "../Layouts/MainLayout";
import Installation from "../Pages/Installation";
import ErrorPage from "../Pages/ErrorPage";
import AppDetails from "../Pages/AppDetails";
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <p>Loading......</p>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/app",
        Component: Apps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
      {
        path: "/app/:id",
        Component: AppDetails,
      },
    ],
  },
]);
export default router;
