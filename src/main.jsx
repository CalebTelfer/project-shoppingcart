import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import ErrorPage from './pages/errorPage.jsx'
import ShopPage from './pages/shopPage.jsx'
import CartPage from './pages/cartPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile",
    element: <App />,
  },
  {
    path: "shop",
    element: <ShopPage />,
  },
  {
    path: "cart",
    element: <CartPage />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
