import profile from "../assets/profile.jpg";
import resume from "../assets/resume.pdf";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto"
      >
        {/* Left Section */}
        <div className="text-center md:text-left">

          <p className="text-cyan-400 text-lg mb-3 font-medium">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
            GOHEL DARSHIT
          </h1>

          <h2 className="text-2xl md:text-3xl text-cyan-400 mt-4 font-semibold">
            M.Sc. IT Student
          </h2>

          <p className="mt-6 text-gray-300 text-lg leading-8 max-w-xl">
            Passionate Flutter Developer, React Developer and Python Developer
            focused on building modern web and mobile applications with clean
            user experiences and real-world solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">

            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              className="bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 px-6 py-3 rounded-lg text-center font-medium shadow-lg"
            >
              View Resume
            </a>

            <a
              href={resume}
              download
              className="border border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 px-6 py-3 rounded-lg text-center font-medium"
            >
              Download Resume
            </a>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12">

            <div className="bg-slate-800 border border-cyan-500/20 rounded-xl p-4 text-center">
              <h3 className="text-2xl font-bold text-cyan-400">
                5+
              </h3>
              <p className="text-sm text-gray-300">
                Projects
              </p>
            </div>

            <div className="bg-slate-800 border border-cyan-500/20 rounded-xl p-4 text-center">
              <h3 className="text-2xl font-bold text-cyan-400">
                1
              </h3>
              <p className="text-sm text-gray-300">
                Internship
              </p>
            </div>

            <div className="bg-slate-800 border border-cyan-500/20 rounded-xl p-4 text-center">
              <h3 className="text-2xl font-bold text-cyan-400">
                10+
              </h3>
              <p className="text-sm text-gray-300">
                Certificates
              </p>
            </div>

          </div>

        </div>

        {/* Right Section */}
        <div className="flex justify-center">

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="relative"
          >

            <div className="absolute inset-0 bg-cyan-500 opacity-20 blur-3xl rounded-full"></div>

            <img
              src={profile}
              alt="Darshit"
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-cyan-500 shadow-2xl"
            />

          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}

export default Hero;