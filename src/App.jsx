import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import MainPage from "./components/mainPage/MainPage";
import MovieScreening from "./components/movieScreening/MovieScreening";
import Billboard from "./components/billboard/Billboard";
import UpdateFunction from "./components/updateFunction/UpdateFunction";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <MainPage />
        </Layout>
      ),
    },
    {
      path: "/billboard",
      element: (
        <Layout>
          <Billboard />
        </Layout>
      ),
    },
    {
      path: "/movie-screening/:id",
      element: (
        <Layout>
          <MovieScreening />
        </Layout>
      ),
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
