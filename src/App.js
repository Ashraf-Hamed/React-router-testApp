import React from 'react'
import { createBrowserRouter , createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './Compontent/Layout/Layout'
import About from './Compontent/About/About'
import Contact from './Compontent/Contact/Contacts'
import Portoflio from './Compontent/Portfolio/Portfolio'
import FramWork from './Compontent/FramWork/FramWork'
import './App.css'


export default function App() {

  const Routes = createHashRouter([
    {
      path: "",
      element: <Layout></Layout>,
      children: [
        { index: true, element: <FramWork></FramWork> },
        { path : 'about', element: <About></About> },
        { path : 'portoflio', element: <Portoflio></Portoflio> },
        { path : 'contact', element: <Contact></Contact> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={Routes}></RouterProvider>
    </>
  )
}

