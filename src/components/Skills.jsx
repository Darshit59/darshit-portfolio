import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaDatabase,
  FaTools,
  FaCode,
  FaBootstrap,
  FaNpm,
  FaFigma,
  FaAndroid,
  FaRocket,
} from "react-icons/fa";

import { VscVscode } from "react-icons/vsc";

import {
  SiFlutter,
  SiDart,
  SiJavascript,
  SiTailwindcss,
  SiDjango,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiSqlite,
  SiPostman,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

const sections = [
  {
    title: "Frontend Development",
    icon: <FaCode />,
    color: "blue",
    skills: [
      { name: "Flutter", icon: <SiFlutter className="text-[#02569B]" /> },
      { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "Dart", icon: <SiDart className="text-[#0175C2]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3]" /> },
      { name: "Responsive Design", icon: <FaCode className="text-cyan-400" /> },
    ],
  },
  {
    title: "Backend Development",
    icon: <FaNodeJs />,
    color: "green",
    skills: [
      { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
      { name: "Django", icon: <SiDjango className="text-[#44B78B]" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
      { name: "Express", icon: <SiExpress className="text-white" /> },
      { name: "REST API", icon: <FaCode className="text-cyan-400" /> },
      { name: "JWT Authentication", icon: <FaCode className="text-cyan-400" /> },
    ],
  },
  {
    title: "Database",
    icon: <FaDatabase />,
    color: "purple",
    skills: [
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
      { name: "SQLite", icon: <SiSqlite className="text-[#003B57]" /> },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: <FaTools />,
    color: "yellow",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" /> },
      { name: "Android Studio", icon: <FaAndroid className="text-[#3DDC84]" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
      { name: "Figma", icon: <FaFigma className="text-[#F24E1E]" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "Netlify", icon: <SiNetlify className="text-[#00C7B7]" /> },
      { name: "npm", icon: <FaNpm className="text-[#CB3837]" /> },
    ],
  },
];

const colorClasses = {
  blue: {
    border: "border-blue-500/50",
    shadow: "shadow-blue-500/20",
    iconBg: "bg-blue-500/10",
    text: "text-blue-400",
    line: "bg-blue-400",
  },
  green: {
    border: "border-emerald-500/50",
    shadow: "shadow-emerald-500/20",
    iconBg: "bg-emerald-500/10",
    text: "text-emerald-400",
    line: "bg-emerald-400",
  },
  purple: {
    border: "border-purple-500/50",
    shadow: "shadow-purple-500/20",
    iconBg: "bg-purple-500/10",
    text: "text-purple-400",
    line: "bg-purple-400",
  },
  yellow: {
    border: "border-yellow-500/50",
    shadow: "shadow-yellow-500/20",
    iconBg: "bg-yellow-500/10",
    text: "text-yellow-400",
    line: "bg-yellow-400",
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-950 px-4 py-20 text-white sm:px-6 md:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.16),transparent_35%)]" />
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative mx-auto w-full max-w-7xl overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-400/60 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-cyan-300 sm:px-6 sm:text-sm">
            ✦ My Expertise
          </span>

          <h2 className="mt-6 break-words text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Technical{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl px-2 text-base leading-8 text-slate-400 sm:text-lg">
            Technologies, frameworks and tools that I use to build modern and
            scalable applications
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-cyan-400" />
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {sections.map((section, index) => {
            const colors = colorClasses[section.color];

            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className={`w-full overflow-hidden rounded-2xl border ${colors.border} bg-slate-900/70 p-5 shadow-2xl ${colors.shadow} backdrop-blur-xl sm:p-6`}
              >
                <div className="mb-7 flex items-center gap-4">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border ${colors.border} ${colors.iconBg} text-2xl ${colors.text} sm:h-16 sm:w-16 sm:text-3xl`}
                  >
                    {section.icon}
                  </div>

                  <div className="min-w-0">
                    <h3 className="break-words text-2xl font-bold leading-tight sm:text-3xl">
                      {section.title}
                    </h3>
                    <div className={`mt-3 h-1 w-10 rounded-full ${colors.line}`} />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {section.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.08 + skillIndex * 0.03,
                      }}
                      whileHover={{ scale: 1.02 }}
                      className="flex min-h-[64px] w-full min-w-0 items-center gap-3 rounded-lg border border-slate-700/70 bg-slate-800/50 px-4 py-3 transition-all hover:border-cyan-400/70 hover:bg-slate-800"
                    >
                      <span className="shrink-0 text-2xl sm:text-3xl">
                        {skill.icon}
                      </span>

                      <span className="min-w-0 break-words text-base font-semibold leading-snug text-slate-100 sm:text-sm">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-12 flex w-full max-w-2xl items-start gap-4 rounded-2xl border border-blue-500/40 bg-slate-900/80 px-5 py-6 shadow-2xl shadow-blue-500/10 backdrop-blur-xl sm:mt-14 sm:items-center sm:gap-6 sm:px-8 sm:py-7"
        >
          <div className="shrink-0 text-4xl text-blue-400 sm:text-5xl">
            <FaRocket />
          </div>

          <div className="min-w-0">
            <h4 className="break-words text-lg font-bold sm:text-xl">
              Always learning, always improving 🚀
            </h4>
            <p className="mt-2 break-words text-sm leading-7 text-slate-400 sm:text-base">
              Exploring new technologies to build better solutions
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}