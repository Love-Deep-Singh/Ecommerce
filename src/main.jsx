import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './PAGES/Home/App.jsx'
import './index.css'
import Product from './PAGES/Product/product.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router=createBrowserRouter(
  [{
    path:"/",
    element:<App/>
  },
  {
    path:"product",
    element:<Product/>
  }
]
  
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
      </React.StrictMode>,
)
