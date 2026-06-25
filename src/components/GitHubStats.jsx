function GitHubStats() {
  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          Connect <span className="text-cyan-400">With Me</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* GitHub */}

          <a
            href="https://github.com/Darshit59"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-800 border border-cyan-500/20 rounded-3xl p-10 hover:border-cyan-400 transition duration-300 hover:-translate-y-2"
          >
            <div className="text-5xl mb-6">💻</div>

            <h3 className="text-3xl font-bold text-cyan-400">
              GitHub
            </h3>

            <p className="text-gray-300 mt-4 leading-7">
              Explore my projects, repositories and source code.
            </p>

            <button className="mt-8 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold">
              Open GitHub
            </button>

          </a>

          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/darshit-gohel-9a170725a/"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-800 border border-cyan-500/20 rounded-3xl p-10 hover:border-cyan-400 transition duration-300 hover:-translate-y-2"
          >
            <div className="text-5xl mb-6">💼</div>

            <h3 className="text-3xl font-bold text-cyan-400">
              LinkedIn
            </h3>

            <p className="text-gray-300 mt-4 leading-7">
              Connect with me professionally and explore my experience, skills and achievements.
            </p>

            <button className="mt-8 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold">
              Open LinkedIn
            </button>

          </a>

          {/* Resume */}

          <a
            href="/Darshit_Gohel_Resume.pdf"
            download
            className="bg-slate-800 border border-cyan-500/20 rounded-3xl p-10 hover:border-cyan-400 transition duration-300 hover:-translate-y-2"
          >
            <div className="text-5xl mb-6">📄</div>

            <h3 className="text-3xl font-bold text-cyan-400">
              Resume
            </h3>

            <p className="text-gray-300 mt-4 leading-7">
              Download my latest resume to explore my skills, education, experience and projects.
            </p>

            <button className="mt-8 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold">
              Download CV
            </button>

          </a>

        </div>

      </div>
    </section>
  );
}

export default GitHubStats;