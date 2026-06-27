import { motion } from "framer-motion";
import {
  FaCertificate,
  FaJava,
  FaPhp,
  FaDatabase,
  FaHtml5,
  FaAndroid,
  FaGlobe,
  FaShieldAlt,
} from "react-icons/fa";

const certificates = [
  {
    title: "Introduction to Object-Oriented Programming with Java",
    icon: <FaJava className="text-[#f89820]" />,
  },
  {
    title: "Learn PHP Database Connectivity",
    icon: <FaPhp className="text-[#777BB4]" />,
  },
  {
    title: "Database Design and Basic SQL in PostgreSQL",
    icon: <FaDatabase className="text-[#336791]" />,
  },
  {
    title: "Development with HTML, CSS & JavaScript",
    icon: <FaHtml5 className="text-[#E34F26]" />,
  },
  {
    title: "Build Your First Android App",
    icon: <FaAndroid className="text-[#3DDC84]" />,
  },
  {
    title: "Introduction to Web Development",
    icon: <FaGlobe className="text-cyan-400" />,
  },
  {
    title: "Foundations of Cybersecurity",
    icon: <FaShieldAlt className="text-red-400" />,
  },
];

function Certificates() {
  return (
    <section
      id="certificates"
      className="relative overflow-hidden bg-slate-950 px-4 py-20 text-white sm:px-6 md:py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_35%)]" />

      <div className="relative mx-auto w-full max-w-7xl overflow-hidden">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-400/60 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-cyan-300 sm:px-6 sm:text-sm">
            ✦ Certifications
          </span>

          <h2 className="mx-auto mt-6 max-w-full break-words text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Professional{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Certificates
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl px-2 text-base leading-8 text-slate-400 sm:text-lg">
            Certifications earned through continuous learning and professional
            development.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-cyan-400" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -4,
                scale: 1.01,
              }}
              className="group w-full min-w-0 overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900/70 p-5 shadow-xl shadow-cyan-500/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-cyan-500/20 sm:p-7"
            >
              <div className="mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-3xl transition group-hover:scale-110 sm:h-16 sm:w-16">
                {certificate.icon}
              </div>

              <h3 className="break-words text-xl font-bold leading-8 text-white sm:text-lg sm:leading-7">
                {certificate.title}
              </h3>

              <div className="mt-5 flex min-w-0 items-center gap-2 text-cyan-400">
                <FaCertificate className="shrink-0" />
                <span className="break-words text-sm font-semibold">
                  Certificate Completed
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;