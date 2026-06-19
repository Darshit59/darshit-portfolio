function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <h1 className="text-2xl font-bold text-cyan-400">
          DG
        </h1>

        <div className="flex gap-6">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;