import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

// Pages
import Home from './pages/Home.jsx'
import Signup, {signupAction} from './pages/Signup.jsx'
import Login, {loginAction} from './pages/Login.jsx'

// Auth
import {AuthProvider} from './context/AuthContext.jsx'
import Protected from './components/Protected.jsx'


const router = createBrowserRouter([
  {
    path: '/signup',
    element: <Signup />,
    action: signupAction
  },
  {
    path: '/login',
    element: <Login />,
    action: loginAction
  },
  {
    path: '/',
    element: <Protected> 
      <Home />
    </Protected>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
