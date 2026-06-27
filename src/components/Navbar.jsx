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
        className={`fixed left-3 right-3 top-4 z-50 mx-auto max-w-7xl rounded-2xl transition-all duration-300 sm:left-4 sm:right-4 ${
          scrolled
            ? "border border-cyan-500/20 bg-slate-900/80 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl"
            : "border border-white/10 bg-slate-900/40 backdrop-blur-xl"
        }`}
      >
        <div className="flex min-w-0 items-center justify-between px-4 py-3 sm:px-5 sm:py-4 md:px-7">
          <a href="#home" className="group shrink-0">
            <h1 className="text-2xl font-black tracking-wide text-white sm:text-3xl">
              D
              <span className="text-cyan-400 transition group-hover:text-white">
                G
              </span>
            </h1>
          </a>

          <div className="hidden items-center gap-6 xl:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-sm font-medium text-gray-200 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all hover:text-cyan-400 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="shrink-0 text-2xl text-white transition hover:text-cyan-400 xl:hidden"
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
              className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="fixed right-0 top-0 z-[60] h-dvh w-[82vw] max-w-[320px] overflow-y-auto border-l border-cyan-500/20 bg-slate-950/95 shadow-2xl backdrop-blur-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-5 sm:px-7 sm:py-6">
                <h2 className="text-2xl font-bold text-white">
                  D<span className="text-cyan-400">G</span>
                </h2>

                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="text-3xl text-white transition hover:text-cyan-400"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="flex flex-col gap-4 px-6 pb-8 pt-7 sm:px-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="break-words rounded-xl px-3 py-2 text-base font-medium text-gray-200 transition hover:bg-cyan-400/10 hover:text-cyan-400 sm:text-lg"
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