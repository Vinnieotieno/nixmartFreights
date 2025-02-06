// File: App.js
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import About from '@/pages/About';
import Contact from '@/pages/Contact';


const BlogPage = React.lazy(() => import('@/pages/Blog/sections/BlogPage'));
const BlogDetail = React.lazy(() => import('@/pages/Blog/sections/BlogDetail'));
const ServiceDetail = React.lazy(() => import('@/pages/Services/sections/ServiceDetails')); // Lazy load ServiceDetail

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Define all routes using MainLayout
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about-us" element={<About />} />
          <Route path="contact-us" element={<Contact />} />
          {/*<Route path="track" element={<Track />} />*/}

          {/* Dynamic Service Detail Route 
          <Route
            path="services/:id"
            element={
              <Suspense fallback={<div className="text-center py-20">Loading Service Details...</div>}>
                <ServiceDetail />
              </Suspense>
            }
          />
          */}
          {/* Blog Routes 
          <Route
            path="blog"
            element={
              <Suspense fallback={<div className="text-center py-20">Loading Blog Page...</div>}>
                <BlogPage />
              </Suspense>
            }
          />
          <Route
            path="blog/:slug"
            element={
              <Suspense fallback={<div className="text-center py-20">Loading Blog Post...</div>}>
                <BlogDetail />
              </Suspense>
            }
          />*/}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
