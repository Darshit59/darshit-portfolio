import { motion } from "framer-motion";
import {
  FaReact,
  FaGithub,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

import {
  SiFlutter,
  SiFirebase,
  SiDjango,
  SiMysql,
  SiTailwindcss,
  SiDart,
} from "react-icons/si";

function TechStack() {
  const techs = [
    { name: "Flutter", icon: <SiFlutter />, color: "text-[#02569B]" },
    { name: "Dart", icon: <SiDart />, color: "text-[#0175C2]" },
    { name: "React", icon: <FaReact />, color: "text-[#61DAFB]" },
    { name: "JavaScript", icon: <FaJs />, color: "text-[#F7DF1E]" },
    { name: "Python", icon: <FaPython />, color: "text-[#3776AB]" },
    { name: "Django", icon: <SiDjango />, color: "text-[#44B78B]" },
    { name: "Firebase", icon: <SiFirebase />, color: "text-[#FFCA28]" },
    { name: "MySQL", icon: <SiMysql />, color: "text-[#4479A1]" },
    { name: "Git", icon: <FaGitAlt />, color: "text-[#F05032]" },
    { name: "GitHub", icon: <FaGithub />, color: "text-white" },
    { name: "HTML", icon: <FaHtml5 />, color: "text-[#E34F26]" },
    { name: "CSS", icon: <FaCss3Alt />, color: "text-[#1572B6]" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-[#06B6D4]" },
  ];

  return (
    <section
      id="techstack"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_35%)]" />

      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-3 rounded-full border border-cyan-400/60 bg-cyan-400/10 px-6 py-2 text-sm font-bold uppercase tracking-wider text-cyan-300">
            ✦ Technologies
          </span>

          <h2 className="mt-6 text-5xl font-black md:text-6xl">
            Tech{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">
            Technologies, tools and frameworks I use to build modern web and
            mobile applications.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-cyan-400" />
        </motion.div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {techs.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 35, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.45,
                delay: index * 0.04,
              }}
              whileHover={{ y: -10, scale: 1.04 }}
              className="group relative rounded-3xl border border-cyan-500/20 bg-slate-900/70 p-6 text-center shadow-xl shadow-cyan-500/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/70 hover:bg-slate-800/80 hover:shadow-cyan-500/20"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/10 to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div
                  className={`mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-700/70 bg-slate-950/60 text-5xl transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-400/60 ${tech.color}`}
                >
                  {tech.icon}
                </div>

                <h3 className="text-base font-bold text-slate-100">
                  {tech.name}
                </h3>

                <div className="mx-auto mt-3 h-1 w-8 rounded-full bg-cyan-400 opacity-0 transition-all duration-300 group-hover:w-12 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;