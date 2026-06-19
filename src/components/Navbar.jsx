import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur-md z-50 border-b border-slate-800">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400">
          DG
        </h1>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 text-sm">

          <a href="#about" className="hover:text-cyan-400 transition duration-300">
            About
          </a>

          <a href="#education" className="hover:text-cyan-400 transition duration-300">
            Education
          </a>

          <a href="#skills" className="hover:text-cyan-400 transition duration-300">
            Skills
          </a>

          <a href="#experience" className="hover:text-cyan-400 transition duration-300">
            Experience
          </a>

          <a href="#projects" className="hover:text-cyan-400 transition duration-300">
            Projects
          </a>

          <a href="#achievements" className="hover:text-cyan-400 transition duration-300">
            Achievements
          </a>

          <a href="#certificates" className="hover:text-cyan-400 transition duration-300">
            Certificates
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition duration-300">
            Contact
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800">

          <div className="flex flex-col p-5 gap-4 text-center">

            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>

            <a href="#education" onClick={() => setIsOpen(false)}>
              Education
            </a>

            <a href="#skills" onClick={() => setIsOpen(false)}>
              Skills
            </a>

            <a href="#experience" onClick={() => setIsOpen(false)}>
              Experience
            </a>

            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>

            <a href="#achievements" onClick={() => setIsOpen(false)}>
              Achievements
            </a>

            <a href="#certificates" onClick={() => setIsOpen(false)}>
              Certificates
            </a>

            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;