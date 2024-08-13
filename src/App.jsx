import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import MainPage from "./components/mainPage/MainPage";
import MovieScreening from "./components/movieScreening/MovieScreening";
import Billboard from "./components/billboard/Billboard";
import EditMovie from "./components/editMovie/EditMovie";
import DeleteMovie from "./components/deleteMovie/DeleteMovie";
import AddMovie from "./components/addMovie/AddMovie";

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
    },
    {
      path: "/admin/edit-movie/:id",
      element: (
        <Layout>
          <EditMovie />
        </Layout>
      ),
    },
    {
      path: "/admin/delete-movie/:id",
      element: (
        <Layout>
          <DeleteMovie />
        </Layout>
      ),
    },

    {
      path: "/admin/add-movie",
      element: (
        <Layout>
          <AddMovie />
        </Layout>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
