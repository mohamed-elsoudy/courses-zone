import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import HomePage from './components/pages/HomePage.jsx';
import App from './App.jsx'
import Blog from './components/pages/Blog.jsx';
import About from './components/pages/About.jsx';
import Courses from './components/pages/Courses.jsx';
import Workshops from './components/pages/WorkShops.jsx';
import Consultations from './components/pages/Consultations.jsx';
import Podcast from './components/pages/Podcast.jsx';

const router = createBrowserRouter([{
  path: "/", 
  element: <App />,
  children: [
    {
      index: true,
      element: <HomePage />
    },
    {
      path: 'blog',
      element: <Blog />
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
    {
      path: 'consultations',
      element: <Consultations />
    },
    {
      path: 'podcast',
      element: <Podcast />
    },
  ]
}
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
