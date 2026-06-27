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
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 pb-16 pt-32 text-white sm:px-6 lg:pt-24"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px] sm:h-96 sm:w-96 sm:blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/20 blur-[100px] sm:h-96 sm:w-96 sm:blur-[120px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 overflow-hidden lg:grid-cols-2 lg:gap-20"
      >
        <div className="min-w-0 text-center lg:text-left">
          <p className="text-lg font-medium text-cyan-400 sm:text-xl">
            Hello, I'm
          </p>

          <h1 className="mt-4 break-words text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-7xl">
            GOHEL <span className="text-cyan-400">DARSHIT</span>
          </h1>

          <div className="mt-5 min-h-[44px] break-words text-2xl font-bold text-cyan-400 sm:mt-6 sm:text-3xl">
            <TypeAnimation
              sequence={[
                "Flutter Developer",
                2000,
                "React Developer",
                2000,
                "Python Developer",
                2000,
                "Full Stack Developer",
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </div>

          <p className="mx-auto mt-6 max-w-xl break-words text-base leading-8 text-gray-300 sm:mt-8 sm:text-lg lg:mx-0">
            Passionate Flutter, React and Python Developer focused on building
            modern web and mobile applications with beautiful UI, scalable
            architecture and excellent user experience.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-500 px-5 py-4 font-semibold shadow-lg duration-300 hover:bg-cyan-600 sm:w-auto sm:px-7"
            >
              <FaFileAlt className="shrink-0" /> View Resume
            </a>

            <a
              href={resume}
              download
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-cyan-500 px-5 py-4 font-semibold duration-300 hover:bg-cyan-500/20 sm:w-auto sm:px-7"
            >
              <FaDownload className="shrink-0" /> Download Resume
            </a>
          </div>

          <div className="mt-8 flex justify-center gap-6 sm:mt-10 lg:justify-start">
            <a
              href="https://github.com/Darshit59"
              target="_blank"
              rel="noreferrer"
              className="text-3xl duration-300 hover:text-cyan-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/darshit-gohel-9a170725a/"
              target="_blank"
              rel="noreferrer"
              className="text-3xl duration-300 hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-3 sm:gap-5">
            {[
              ["5+", "Projects"],
              ["1", "Internship"],
              ["10+", "Certificates"],
            ].map(([n, label]) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.03 }}
                className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl"
              >
                <h3 className="text-3xl font-bold text-cyan-400">{n}</h3>
                <p className="mt-2 text-gray-300">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 2, 0, -2, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="relative max-w-full"
          >
            <div className="absolute inset-0 rounded-full bg-cyan-500 opacity-30 blur-[60px] sm:blur-[80px]"></div>
            <div className="absolute inset-2 rounded-full border border-cyan-400"></div>

            <motion.img
              whileHover={{ scale: 1.03 }}
              src={profile}
              alt="Darshit"
              className="relative h-64 w-64 rounded-full border-4 border-cyan-400 object-cover shadow-[0_0_40px_rgba(34,211,238,0.45)] sm:h-80 sm:w-80 md:h-[430px] md:w-[430px]"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;