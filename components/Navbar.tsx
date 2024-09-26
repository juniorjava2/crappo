'use client'

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { CustomButton } from "."
import { FaBars, FaTimes } from "react-icons/fa"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <nav className="bg-[#0d0d2b] text-white p-4 relative z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <Image className="mr-2" width={40} height={40} alt="Logo" src="/logo.svg" />
          <span className="font-bold text-xl">CRAPPO</span>
        </div>

        {/* Mobile menu button */}
        <button onClick={toggleMenu} className="md:hidden z-50">
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-4">
          <NavLinks />
          <AuthButtons />
        </div>

        {/* Mobile menu */}
        <div 
          className={`fixed top-0 right-0 h-full w-64 bg-[#0d0d2b] p-4 transition-transform duration-300 ease-in-out transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="mt-16">
            <NavLinks mobile />
            <AuthButtons mobile />
          </div>
        </div>

        {/* Backdrop */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden" 
            onClick={toggleMenu}
          />
        )}
      </div>
    </nav>
  )
}

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const linkClass = mobile ? "block py-2" : ""
  return (
    <div className={`${mobile ? "mt-4" : "flex space-x-4"}`}>
      <Link href="/" className={linkClass}>Products</Link>
      <Link href="/" className={linkClass}>About</Link>
      <Link href="/" className={linkClass}>Features</Link>
      <Link href="/" className={linkClass}>Contact</Link>
    </div>
  )
}

function AuthButtons({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className={`${mobile ? "mt-4 space-y-2" : "flex items-center space-x-4"}`}>
      <CustomButton title="Login" containerStyles={mobile ? "w-full" : ""} />
      <div className={mobile ? "my-2" : "h-6 w-px bg-gray-400"} />
      <CustomButton title="Register" containerStyles={`${mobile ? "w-full" : ""} bg-blue-500 rounded-full`} />
    </div>
  )
}