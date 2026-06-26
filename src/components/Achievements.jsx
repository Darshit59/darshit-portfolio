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
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_35%)]" />

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
            ✦ Milestones
          </span>

          <h2 className="mt-6 text-5xl font-black md:text-6xl">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            Some important milestones and accomplishments throughout my
            development journey.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-cyan-400" />
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                y: -8,
                scale: 1.02,
              }}
              className="group rounded-3xl border border-cyan-500/20 bg-slate-900/70 p-7 shadow-xl shadow-cyan-500/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-cyan-500/20"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-3xl text-cyan-400 transition group-hover:scale-110">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold">{item.title}</h3>

              <p className="mt-3 leading-7 text-slate-400">
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