import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import HomePage from './components/HomePage.jsx';
import App from './App.jsx'
import Hello from './components/Hello.jsx';

const router = createBrowserRouter([{
  path: "/", 
  element: <App />,
  children: [
    {
      index: true,
      element: <HomePage />
    },
    {
      path: 'hello',
      element: <Hello />
    },
  ]
}
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
