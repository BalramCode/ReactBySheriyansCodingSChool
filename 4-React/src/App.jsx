import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Cantact"
import Navbar from './components/Navbar'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
