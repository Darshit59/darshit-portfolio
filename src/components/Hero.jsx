import profile from "../assets/profile.jpg";
import resume from "../assets/resume.pdf";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaFileAlt,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center pt-24 px-6"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] top-0 left-0 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] bottom-0 right-0 animate-pulse"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto"
      >
        <div>
          <p className="text-cyan-400 text-xl font-medium">Hello, I'm</p>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white mt-4 leading-tight">
            GOHEL <span className="text-cyan-400">DARSHIT</span>
          </h1>

          <div className="mt-6 text-3xl font-bold text-cyan-400">
            <TypeAnimation
              sequence={[
                "Flutter Developer",2000,
                "React Developer",2000,
                "Python Developer",2000,
                "Full Stack Developer",2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </div>

          <p className="mt-8 text-lg text-gray-300 leading-8 max-w-xl">
            Passionate Flutter, React and Python Developer focused on building
            modern web and mobile applications with beautiful UI, scalable
            architecture and excellent user experience.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 px-7 py-4 rounded-xl font-semibold duration-300 shadow-lg"
            >
              <FaFileAlt /> View Resume
            </a>

            <a
              href={resume}
              download
              className="flex items-center gap-3 border border-cyan-500 hover:bg-cyan-500/20 px-7 py-4 rounded-xl font-semibold duration-300"
            >
              <FaDownload /> Download Resume
            </a>
          </div>

          <div className="flex gap-6 mt-10">
            <a href="https://github.com/Darshit59" target="_blank" rel="noreferrer" className="text-3xl hover:text-cyan-400 duration-300">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/darshit-gohel-9a170725a/" target="_blank" rel="noreferrer" className="text-3xl hover:text-cyan-400 duration-300">
              <FaLinkedin />
            </a>
          </div>

          <div className="grid grid-cols-3 gap-5 mt-14">
            {[
              ["5+","Projects"],
              ["1","Internship"],
              ["10+","Certificates"],
            ].map(([n,label])=>(
              <motion.div
                key={label}
                whileHover={{scale:1.05}}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 text-center"
              >
                <h3 className="text-3xl font-bold text-cyan-400">{n}</h3>
                <p className="text-gray-300 mt-2">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <motion.div
            animate={{ y:[0,-15,0], rotate:[0,2,0,-2,0] }}
            transition={{ duration:6, repeat:Infinity }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-[80px] opacity-30"></div>
            <div className="absolute inset-2 rounded-full border border-cyan-400 animate-pulse"></div>

            <motion.img
              whileHover={{ scale:1.05 }}
              src={profile}
              alt="Darshit"
              className="relative w-80 h-80 md:w-[430px] md:h-[430px] rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.5)]"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
