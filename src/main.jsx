import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import Homepage from './pages/homePage.jsx'
import ErrorPage from './pages/errorPage.jsx'
import ShopPage from './pages/shopPage.jsx'
import CartPage from './pages/cartPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "cart", element: <CartPage /> },
    ],
    errorElement: <ErrorPage />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
