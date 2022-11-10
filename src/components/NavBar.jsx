import React from 'react'
import Logo from '../assets/images/Logo_3 (2).png'

function NavBar() {
  return (
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="pt-2">
            <img src={Logo} alt="" width='40%'/>
          </div>
            <div className="hidden space-x-6 md:flex">
              <a href="/" className="hover:underline decoration-blue-500 decoration-[0.25rem]">Home</a>
              <a href="/" className="hover:underline decoration-blue-500 decoration-[0.25rem]">Haiku</a>
              <a href="/" className="hover:underline decoration-blue-500 decoration-[0.25rem]">Kukai</a>
              <a href="/" className="hover:underline decoration-blue-500 decoration-[0.25rem]">Sensei</a>
              <a href="/" className="hover:underline decoration-blue-500 decoration-[0.25rem]">Community</a>
            </div>
          </div>
        </nav>
  )
}

export default NavBar