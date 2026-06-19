function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="bg-slate-800 rounded-3xl p-10 shadow-xl border border-cyan-500/20">

          <p className="text-gray-300 text-lg leading-9">

            I am <span className="text-cyan-400 font-semibold">
              Gohel Darshit
            </span>, currently pursuing
            <span className="text-cyan-400 font-semibold">
              {" "}M.Sc. Information Technology
            </span> and passionate about building modern
            web and mobile applications.

            <br /><br />

            My expertise includes
            Flutter, React.js, Python,
            Django, MySQL and modern frontend
            technologies.

            <br /><br />

            I enjoy solving real-world problems,
            learning new technologies and developing
            user-friendly applications that deliver
            great user experiences.

            <br /><br />

            My goal is to become a skilled
            Full Stack & Flutter Developer and contribute
            to innovative software solutions.
          </p>

        </div>

      </div>
    </section>
  );
}

export default About;