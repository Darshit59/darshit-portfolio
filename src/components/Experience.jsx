function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-14">
          Experience
        </h2>

        <div className="bg-slate-800 border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-400 transition-all duration-300">

          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
            <div>
              <h3 className="text-2xl font-bold">
                Software Developer Intern
              </h3>

              <p className="text-cyan-400 text-lg">
                Grownited Private Limited
              </p>
            </div>

            <div className="text-gray-400 mt-2 md:mt-0">
              Jan 2026 – Apr 2026
            </div>
          </div>

          <ul className="space-y-3 text-gray-300 mt-6">
            <li>✅ Developed responsive web applications and dashboard UI.</li>
            <li>✅ Implemented login, registration and Email OTP verification.</li>
            <li>✅ Worked on backend integration and database connectivity.</li>
            <li>✅ Improved application performance and user experience.</li>
          </ul>

        </div>

      </div>
    </section>
  );
}

export default Experience;