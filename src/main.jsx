import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import HomePage from './components/HomePage.jsx';
import App from './App.jsx'
import Hello from './components/Hello.jsx';
import About from './components/About.jsx';
import Courses from './components/Courses.jsx';
import Workshops from './components/WorkShops.jsx';

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
    {
      path: 'about',
      element: <About />
    },
    {
      path: 'courses',
      element: <Courses />
    },
    {
      path: 'workshops',
      element: <Workshops />
    },
  ]
}
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
