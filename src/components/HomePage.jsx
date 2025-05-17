import React from 'react';
import Landing from './Landing';
import NewestCourses from './NewestCourses';
import Testimonials from './Testimonials';
import NewestBlogs from './NewestBlogs';

function HomePage() {
  return (
    <>
      <Landing />
      <div className="container relative px-0">
        <div className="absolute top-0 h-lvh w-full bg-[url('public/wavebackground.jpg')] bg-cover opacity-50 -z-10"></div>
        <NewestCourses />
      </div>
      <Testimonials />
      <NewestBlogs />
    </>
  );
}

export default HomePage;
