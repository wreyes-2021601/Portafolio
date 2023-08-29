import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider ,createBrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import { Estructura } from './components/Estructura.jsx';

const routes = createBrowserRouter([

  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Estructura/>,
      }
    ]
  },
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={routes} ></RouterProvider>
  </React.StrictMode>,
)
