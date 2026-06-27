import { motion } from "framer-motion";

const lines = [
  <>I am <span className="text-cyan-400 font-semibold">Gohel Darshit</span>, currently pursuing <span className="text-cyan-400 font-semibold">M.Sc. Information Technology</span>.</>,
  <>I am passionate about building modern <span className="text-cyan-400 font-semibold">web and mobile applications</span>.</>,
  <>My expertise includes <span className="text-cyan-400 font-semibold">Flutter, React.js, Python, Django and MySQL</span>.</>,
  <>I enjoy solving real-world problems and continuously learning new technologies.</>,
  <>I focus on creating clean, responsive and user-friendly applications.</>,
  <>I enjoy teamwork, collaboration and delivering high-quality software solutions.</>,
  <>My goal is to become a skilled <span className="text-cyan-400 font-semibold">Full Stack & Flutter Developer</span>.</>,
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="border border-cyan-400 text-cyan-400 px-5 py-2 rounded-full">
            Get To Know Me
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-6 text-white">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Here's a quick overview of who I am and what I enjoy building.
          </p>
        </motion.div>

        <div className="bg-slate-800/70 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 md:p-12">
          <p className="text-lg md:text-xl leading-10 text-gray-300">
            {lines.map((line, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.35,
                }}
                className="block mb-3"
              >
                {line}
              </motion.span>
            ))}
          </p>
        </div>

      </div>
    </section>
  );
}