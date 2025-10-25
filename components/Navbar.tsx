"use client";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: '#2563eb' }} className="sticky top-0 z-50 py-4 shadow-lg">
      <div className="container max-w-7xl mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-3">
          <span style={{ color: '#ffffff' }} className="font-bold text-lg">Cédric DJOHOZIN</span>
          <span style={{ color: '#ffffff' }} className="text-sm">• Programmeur & Concepteur</span>
        </div>

        {/* Desktop menu */}
        <div className="space-x-6 flex items-center hidden sm:flex">
          <a href="#about" style={{ color: '#ffffff' }} className="hover:text-blue-100">À propos</a>
          <a href="#projects" style={{ color: '#ffffff' }} className="hover:text-blue-100">Projets</a>
          <a href="#skills" style={{ color: '#ffffff' }} className="hover:text-blue-100">Compétences</a>
          <a href="#contact" style={{ color: '#ffffff' }} className="hover:text-blue-100">Contact</a>
          {/* Lien vers le CV dans public */}
          <a href="/CV_Cedric_DJOHOZIN.pdf" 
             style={{ backgroundColor: '#ffffff', color: '#2563eb' }}
             className="ml-4 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50" 
             download>
            CV
          </a>
        </div>

        {/* Hamburger menu (mobile only) */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none"
          aria-label="Ouvrir le menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Menu déroulant mobile */}
      {menuOpen && (
        <div className="sm:hidden bg-blue-600 px-4 py-3 space-y-2 shadow-md">
          <a href="#about" style={{ color: '#fff' }} className="block py-2 px-2 rounded hover:text-blue-100 hover:bg-blue-700" onClick={() => setMenuOpen(false)}>À propos</a>
          <a href="#projects" style={{ color: '#fff' }} className="block py-2 px-2 rounded hover:text-blue-100 hover:bg-blue-700" onClick={() => setMenuOpen(false)}>Projets</a>
          <a href="#skills" style={{ color: '#fff' }} className="block py-2 px-2 rounded hover:text-blue-100 hover:bg-blue-700" onClick={() => setMenuOpen(false)}>Compétences</a>
          <a href="#contact" style={{ color: '#fff' }} className="block py-2 px-2 rounded hover:text-blue-100 hover:bg-blue-700" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}
