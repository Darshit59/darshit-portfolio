import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaFileDownload } from "react-icons/fa";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/70 backdrop-blur-2xl border border-cyan-500/20 shadow-2xl"
            : "bg-slate-900/40 backdrop-blur-xl border border-white/10"
        }`}
      >
        <div className="flex items-center justify-between px-7 py-4">
          <a href="#home" className="group">
            <h1 className="text-3xl font-black tracking-wide text-white">
              D<span className="text-cyan-400 group-hover:text-white">G</span>
            </h1>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-gray-200 hover:text-cyan-400 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/Darshit_Gohel_Resume.pdf"
              download
              className="flex items-center gap-2 border border-cyan-400 text-cyan-300 px-4 py-2 rounded-full hover:bg-cyan-500/10 transition"
            >
              <FaFileDownload />
              Resume
            </a>

            <a
              href="#contact"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:scale-105 transition"
            >
              Hire Me
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white text-2xl"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed top-0 right-0 w-72 h-screen bg-slate-950/95 backdrop-blur-2xl z-[60] border-l border-cyan-500/20"
          >
            <div className="flex justify-end p-6">
              <button onClick={() => setOpen(false)} className="text-white text-3xl">
                <FaTimes />
              </button>
            </div>

            <div className="flex flex-col px-8 gap-6 mt-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-xl text-gray-200 hover:text-cyan-400 transition"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="/Darshit_Gohel_Resume.pdf"
                download
                className="mt-6 border border-cyan-400 rounded-xl py-3 text-center text-cyan-300"
              >
                Download Resume
              </a>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl py-3 text-center font-semibold text-white"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
