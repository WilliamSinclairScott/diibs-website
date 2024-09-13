import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Venues from "../pages/Venues/Venues";
import Faq from "../pages/Faq/Faq";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const PageWrapper = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageWrapper />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/venues",
        element: <Venues />
      },
      {
        path: "/faq",
        element: <Faq />
      }
    ]
  }
]);

export default function Router() {
    return (
      <RouterProvider router={router} /> 
    )
}