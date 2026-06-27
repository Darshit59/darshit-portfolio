import { motion } from "framer-motion";
import {
  FaTrophy,
  FaMedal,
  FaLaptopCode,
  FaGraduationCap,
  FaRocket,
  FaBriefcase,
} from "react-icons/fa";

const achievements = [
  {
    title: "Software Developer Intern",
    description: "Grownited Private Limited",
    icon: <FaBriefcase />,
  },
  {
    title: "Portfolio Website",
    description: "Designed & Deployed Personal Portfolio",
    icon: <FaLaptopCode />,
  },
  {
    title: "Event Management System",
    description: "Built using Django & MySQL",
    icon: <FaMedal />,
  },
  {
    title: "TrivNest PG Finder",
    description: "Flutter + Firebase Application",
    icon: <FaRocket />,
  },
  {
    title: "Razorpay Integration",
    description: "Secure Payment Gateway Integration",
    icon: <FaTrophy />,
  },
  {
    title: "M.Sc Information Technology",
    description: "Currently Pursuing Master's Degree",
    icon: <FaGraduationCap />,
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-slate-950 px-4 py-20 text-white sm:px-6 md:py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_35%)]" />

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
            ✦ Milestones
          </span>

          <h2 className="mx-auto mt-6 max-w-full break-words text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl px-2 text-base leading-8 text-slate-400 sm:text-lg">
            Some important milestones and accomplishments throughout my
            development journey.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-cyan-400" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
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
              <div className="mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-2xl text-cyan-400 transition group-hover:scale-110 sm:h-16 sm:w-16 sm:text-3xl">
                {item.icon}
              </div>

              <h3 className="break-words text-xl font-bold leading-8 text-white">
                {item.title}
              </h3>

              <p className="mt-3 break-words text-sm leading-7 text-slate-400 sm:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;