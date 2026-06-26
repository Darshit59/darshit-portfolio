import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Tech Stack", href: "#techstack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/80 backdrop-blur-2xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/10"
            : "bg-slate-900/40 backdrop-blur-xl border border-white/10"
        }`}
      >
        <div className="flex items-center justify-between px-5 md:px-7 py-4">
          <a href="#home" className="group">
            <h1 className="text-3xl font-black tracking-wide text-white">
              D<span className="text-cyan-400 group-hover:text-white transition">G</span>
            </h1>
          </a>

          <div className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-sm font-medium text-gray-200 hover:text-cyan-400 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="xl:hidden text-white text-2xl hover:text-cyan-400 transition"
          >
            <FaBars />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55]"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="fixed top-0 right-0 w-80 max-w-[85%] h-screen bg-slate-950/95 backdrop-blur-2xl z-[60] border-l border-cyan-500/20 shadow-2xl"
            >
              <div className="flex items-center justify-between px-7 py-6 border-b border-white/10">
                <h2 className="text-2xl font-bold text-white">
                  D<span className="text-cyan-400">G</span>
                </h2>

                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="text-white text-3xl hover:text-cyan-400 transition"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="flex flex-col px-8 gap-5 mt-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="text-lg font-medium text-gray-200 hover:text-cyan-400 transition"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}