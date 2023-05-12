import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

// Pages
import Home from './pages/Home.jsx'
import Signup, {signupAction} from './pages/Signup.jsx'
import Login from './pages/Login.jsx'

const router = createBrowserRouter([
  {
    path: '/signup',
    element: <Signup />,
    action: signupAction
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <Home />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
