function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-2xl font-bold text-cyan-400">
          DG
        </h1>

        <div className="hidden lg:flex gap-6 text-sm">

          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>

          <a href="#education" className="hover:text-cyan-400 transition">
            Education
          </a>

          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>

          <a href="#experience" className="hover:text-cyan-400 transition">
            Experience
          </a>

          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>

          <a href="#achievements" className="hover:text-cyan-400 transition">
            Achievements
          </a>

          <a href="#certificates" className="hover:text-cyan-400 transition">
            Certificates
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;