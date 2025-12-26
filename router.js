import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "../Components/Layout/LayOut";
import Home from "../Views/Home";
import AboutUs from "../Views/AboutUs";
import Contact from "../Views/Contact";
import Menu from "../Views/Menu";
import PageNotFound from "../Views/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/AboutUs",
        element: <AboutUs />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      }, {
        path: "/Menu",
        element: <Menu />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ]
  },

]);
function Router() {
  return <RouterProvider router={router} />
}
export default Router;