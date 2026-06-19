function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-14">
          Education
        </h2>

        <div className="space-y-8">

          {/* MSc IT */}
          <div className="bg-slate-800 border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-400 transition-all duration-300">

            <div className="flex flex-col md:flex-row md:justify-between">

              <div>
                <h3 className="text-2xl font-bold">
                  Master of Science in Information Technology
                </h3>

                <p className="text-cyan-400 text-lg mt-2">
                  Lok Jagruti Kendra University
                </p>
              </div>

              <div className="text-gray-400 mt-2 md:mt-0">
                2025 - Present
              </div>

            </div>

          </div>

          {/* BSc IT */}
          <div className="bg-slate-800 border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-400 transition-all duration-300">

            <div className="flex flex-col md:flex-row md:justify-between">

              <div>
                <h3 className="text-2xl font-bold">
                  Bachelor of Science in Information Technology
                </h3>

                <p className="text-cyan-400 text-lg mt-2">
                  Lok Jagruti Kendra University
                </p>
              </div>

              <div className="text-gray-400 mt-2 md:mt-0">
                2022 - 2025
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;