import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import MainPage from './components/mainPage/MainPage'
import MovieFunction from './components/movieFunction/MovieFunction'
import Billboard from './components/billboard/Billboard'

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
      path: "/movie-function:id",
      element: (
        <Layout>
          <MovieFunction />
        </Layout>
      ),
    }
  ])

  return <RouterProvider router={router} />
}

export default App
