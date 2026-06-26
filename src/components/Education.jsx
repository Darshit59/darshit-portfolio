import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaCalendarAlt } from "react-icons/fa";

const education = [
  {
    degree: "Master of Science in Information Technology",
    university: "Lok Jagruti Kendra University",
    duration: "2025 - Present",
    description:
      "Currently pursuing M.Sc. Information Technology with a focus on Full Stack Development, Flutter, React, Python, and modern software engineering.",
  },
  {
    degree: "Bachelor of Science in Information Technology",
    university: "Lok Jagruti Kendra University",
    duration: "2022 - 2025",
    description:
      "Built multiple real-world academic projects while strengthening skills in web development, databases, programming, and UI/UX.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:false}}
          transition={{duration:0.6}}
          className="text-center mb-16"
        >
          <span className="px-5 py-2 rounded-full border border-cyan-400 text-cyan-400">
            Academic Journey
          </span>

          <h2 className="text-5xl font-bold mt-6 text-white">
            My <span className="text-cyan-400">Education</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Building a strong academic foundation with continuous learning.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-cyan-400 via-cyan-500 to-transparent"></div>

          <div className="space-y-12">
            {education.map((item,index)=>(
              <motion.div
                key={index}
                initial={{opacity:0,x:-80}}
                whileInView={{opacity:1,x:0}}
                viewport={{once:false,amount:0.35}}
                transition={{duration:0.7,delay:index*0.2}}
                className="relative flex gap-8"
              >
                <div className="relative z-10 w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.6)]">
                  <FaGraduationCap className="text-white text-2xl"/>
                </div>

                <motion.div
                  whileHover={{scale:1.02,y:-5}}
                  className="flex-1 rounded-3xl border border-cyan-500/20 bg-slate-800/60 backdrop-blur-xl p-8 shadow-xl"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {item.degree}
                      </h3>

                      <div className="flex items-center gap-2 mt-3 text-cyan-400">
                        <FaUniversity />
                        <span>{item.university}</span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                      <FaCalendarAlt />
                      {item.duration}
                    </div>
                  </div>

                  <p className="text-gray-300 leading-8 mt-6">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
