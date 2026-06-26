import { motion } from "framer-motion";
import {
  FaRocket,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaGithub,
  FaMobileAlt,
  FaLaptopCode,
  FaGlobe,
} from "react-icons/fa";

const projects = [
  {
    title: "TrivNest - PG Management Platform",
    subtitle: "Flutter • Firebase • Firestore • Razorpay",
    description:
      "TrivNest is a complete PG Management and Accommodation platform built for students and working professionals. The application provides room booking, rent management, complaints handling, food menu management, owner dashboard, analytics and admin controls.",
    featured: true,
    icon: <FaMobileAlt />,
    status: "🚀 Play Store Launch Coming Soon",
    features: [
      "User Authentication",
      "Room Booking System",
      "Rent Payment Module",
      "Complaint Management",
      "Food Menu Management",
      "Owner Dashboard",
      "Income & Expense Analytics",
      "WhatsApp Integration",
      "Firebase Backend",
      "Razorpay Integration",
    ],
  },
  {
    title: "Event Management System",
    subtitle: "Django • Python • MySQL",
    description:
      "Developed a complete event management platform with user authentication, event booking, admin panel and MySQL database integration.",
    icon: <FaLaptopCode />,
    features: [
      "User Authentication",
      "Event Booking",
      "Admin Panel",
      "MySQL Database",
    ],
  },
  {
    title: "Personal Portfolio Website",
    subtitle: "React • Tailwind CSS • Vercel",
    description:
      "Designed and deployed a professional portfolio website showcasing skills, projects, internship experience, achievements and certifications.",
    icon: <FaGlobe />,
    features: [
      "Responsive Design",
      "Modern UI",
      "Animations",
      "Vercel Deployment",
    ],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.13),transparent_35%)]" />

      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-3 rounded-full border border-cyan-400/60 bg-cyan-400/10 px-6 py-2 text-sm font-bold uppercase tracking-wider text-cyan-300">
            ✦ My Work
          </span>

          <h2 className="mt-6 text-5xl font-black md:text-6xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">
            A collection of projects that showcase my development skills and
            problem-solving approach.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-cyan-400" />
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className={`group relative overflow-hidden rounded-3xl border p-8 shadow-2xl backdrop-blur-xl transition-all duration-300 ${
                project.featured
                  ? "border-cyan-400/40 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 shadow-cyan-500/10 hover:border-cyan-300/80"
                  : "border-cyan-500/20 bg-slate-900/75 shadow-cyan-500/5 hover:border-cyan-400/70"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                {project.featured && (
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-xs font-black uppercase tracking-wider text-slate-950">
                      <FaRocket />
                      Featured Project
                    </span>

                    <span className="rounded-full border border-purple-400/40 bg-purple-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-purple-300">
                      Mobile App
                    </span>
                  </div>
                )}

                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="mb-4 flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/40 bg-cyan-400/10 text-2xl text-cyan-300">
                        {project.icon}
                      </div>

                      <h3
                        className={`font-black text-white ${
                          project.featured ? "text-3xl" : "text-2xl"
                        }`}
                      >
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-cyan-400">{project.subtitle}</p>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-800/70 text-slate-300 transition-all hover:border-cyan-400 hover:text-cyan-300">
                      <FaGithub />
                    </button>

                    <button className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-800/70 text-slate-300 transition-all hover:border-cyan-400 hover:text-cyan-300">
                      <FaExternalLinkAlt />
                    </button>
                  </div>
                </div>

                <p className="mt-6 leading-8 text-slate-300">
                  {project.description}
                </p>

                <div
                  className={`mt-7 grid gap-3 ${
                    project.featured
                      ? "md:grid-cols-2"
                      : "sm:grid-cols-2 lg:grid-cols-4"
                  }`}
                >
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-xl border border-slate-700/70 bg-slate-800/50 px-4 py-3 text-slate-300"
                    >
                      <FaCheckCircle className="shrink-0 text-cyan-400" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {project.status && (
                  <div className="mt-7">
                    <span className="inline-flex rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-5 py-3 text-sm font-bold text-emerald-300">
                      {project.status}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;