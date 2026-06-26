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
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/60 bg-cyan-400/10 px-6 py-2 text-sm font-bold uppercase tracking-wider text-cyan-300">
            ✦ Certifications
          </span>

          <h2 className="mt-6 text-5xl font-black md:text-6xl">
            Professional{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Certificates
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            Certifications earned through continuous learning and professional
            development.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-cyan-400" />
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                y: -8,
                scale: 1.02,
              }}
              className="group rounded-3xl border border-cyan-500/20 bg-slate-900/70 p-7 shadow-xl shadow-cyan-500/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-cyan-500/20"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-3xl transition group-hover:scale-110">
                {certificate.icon}
              </div>

              <h3 className="text-lg font-bold leading-7 text-white">
                {certificate.title}
              </h3>

              <div className="mt-5 flex items-center gap-2 text-cyan-400">
                <FaCertificate />
                <span className="text-sm font-semibold">
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