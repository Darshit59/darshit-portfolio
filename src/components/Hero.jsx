import profile from "../assets/profile.jpg";
import resume from "../assets/resume.pdf";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="grid md:grid-cols-2 gap-12 items-center text-center md:text-left max-w-7xl mx-auto">

        {/* Left Side */}
        <div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            GOHEL DARSHIT
          </h1>

          <h2 className="text-cyan-400 text-2xl md:text-3xl mt-4 font-semibold">
            M.Sc. IT Student
          </h2>

          <p className="mt-5 text-gray-300 text-lg leading-8">
            Flutter Developer | Python Developer |
            <br className="md:hidden" />
            React Developer
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">

            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              className="bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 px-6 py-3 rounded-lg text-center font-medium"
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
        </div>

        {/* Right Side */}
        <div className="flex justify-center mt-10 md:mt-0">
          <img
            src={profile}
            alt="Darshit"
            className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-cyan-500 shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;