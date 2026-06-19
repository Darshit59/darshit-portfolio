import profile from "../assets/profile.jpg";
import resume from "../assets/resume.pdf";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-5xl md:text-7xl font-bold">
            GOHEL DARSHIT
          </h1>

          <h2 className="text-cyan-400 text-2xl mt-4">
            M.Sc. IT Student
          </h2>

          <p className="mt-5 text-gray-300 text-lg">
            Flutter Developer | Python Developer |
            React Developer
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">

            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              className="bg-cyan-500 px-6 py-3 rounded-lg"
            >
              View Resume
            </a>

            <a
              href={resume}
              download
              className="border border-cyan-500 px-6 py-3 rounded-lg"
            >
              Download Resume
            </a>

          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={profile}
            alt="Darshit"
            className="w-80 h-80 rounded-full object-cover border-4 border-cyan-500 shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;