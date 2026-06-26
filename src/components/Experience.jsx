import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaLaptopCode,
  FaBuilding,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

const experiences = [
  {
    title: "Software Developer Intern",
    company: "Grownited Private Limited",
    duration: "2025 - Present",
    icon: <FaBriefcase />,
    points: [
      "Dashboard UI Development",
      "Email OTP Verification",
      "Backend Integration",
      "Database Connectivity",
    ],
  },
  {
    title: "TrivNest Application",
    company: "Flutter Developer",
    duration: "Current Project",
    icon: <FaLaptopCode />,
    points: [
      "PG Management Platform",
      "Firebase Integration",
      "Owner Dashboard",
      "Razorpay Integration",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_35%)]" />

      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-3 rounded-full border border-cyan-400/60 bg-cyan-400/10 px-6 py-2 text-sm font-bold uppercase tracking-wider text-cyan-300">
            ✦ My Journey
          </span>

          <h2 className="mt-6 text-5xl font-black md:text-6xl">
            Work{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">
            Practical experience and projects where I applied my development
            skills to build real-world solutions.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-cyan-400" />
        </motion.div>

        <div className="relative ml-4 border-l-4 border-cyan-500/50 md:ml-8">
          {experiences.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.55, delay: index * 0.15 }}
              className="relative mb-12 ml-8 last:mb-0"
            >
              <div className="absolute -left-[47px] top-2 flex h-10 w-10 items-center justify-center rounded-full border-4 border-slate-950 bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/40">
                {item.icon}
              </div>

              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                className="rounded-3xl border border-cyan-500/20 bg-slate-900/75 p-7 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/70 hover:bg-slate-900"
              >
                <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 flex items-center gap-2 text-cyan-400">
                      <FaBuilding />
                      {item.company}
                    </p>
                  </div>

                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                    <FaCalendarAlt />
                    {item.duration}
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {item.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3 rounded-xl border border-slate-700/70 bg-slate-800/50 px-4 py-3 text-slate-300"
                    >
                      <FaCheckCircle className="text-cyan-400" />
                      <span className="text-sm font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;