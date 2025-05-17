import './App.css'
import Header from './components/Header';
import Landing from './components/Landing';
import NewestCourses from './components/NewestCourses';
import Testimonials from './components/Testimonials';
import NewestBlogs from './components/NewestBlogs';

function App() {

  return (
    <>
      <Header />
      <Landing />
      <div className="container relative px-0">
        <div className="absolute top-0 h-lvh w-full bg-[url('public/wavebackground.jpg')] bg-cover opacity-50 -z-10"></div>
        <NewestCourses />
      </div>
      <Testimonials />
      <div className="container newest-blogs">
        <NewestBlogs />
      </div>
    </>
  )
}

export default App
