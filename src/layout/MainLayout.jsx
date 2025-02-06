import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import { footerItems, navbaritems } from '@/constants/layout'

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar data={navbaritems}/>

      {/* Outlet (Centered) */}
      <div className="flex-1 ">
        <Outlet />
      </div>

      {/* Footer */}
      <Footer data={footerItems} />
    </div>
  );
}

export default MainLayout