"use client"
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import  Link  from 'next/link';

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mobile-nav">
      <button className="hamburger-menu" onClick={toggleMenu}>
        <FaBars className="text-white" />
      </button>
      <nav className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link href="/" className="mx-4">Products</Link>
        <Link href="/" className="mx-4">About</Link>
        <Link href="/" className="mx-4">Features</Link>
        <Link href="/" className="mx-4">Contact</Link>
      </nav>
    </div>
  );
};

export default MobileNav;