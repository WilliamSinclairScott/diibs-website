import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { styled } from '../stitches.config';
import { Outlet } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Venues from "../pages/Venues";
import Faq from "../pages/Faq";

const PageContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

const MainContent = styled('main', {
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
});

const PageWrapper = () => (
  <PageContainer>
    <Navbar />
    <MainContent>
      <Outlet />
    </MainContent>
    <Footer />
  </PageContainer>
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