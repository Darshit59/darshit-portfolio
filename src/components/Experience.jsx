function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-slate-900"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-14">
          Experience
        </h2>

        <div className="relative border-l-4 border-cyan-500 ml-4">

          <div className="mb-12 ml-8">
            <div className="absolute w-5 h-5 bg-cyan-500 rounded-full -left-[11px]"></div>

            <h3 className="text-2xl font-bold">
              Software Developer Intern
            </h3>

            <p className="text-cyan-400 mt-2">
              Grownited Private Limited
            </p>

            <p className="text-gray-400 mt-1">
              2025 - Present
            </p>

            <ul className="mt-4 space-y-2 text-gray-300">
              <li>• Dashboard UI Development</li>
              <li>• Email OTP Verification</li>
              <li>• Backend Integration</li>
              <li>• Database Connectivity</li>
            </ul>
          </div>

          <div className="ml-8">
            <div className="absolute w-5 h-5 bg-cyan-500 rounded-full -left-[11px]"></div>

            <h3 className="text-2xl font-bold">
              TrivNest Application
            </h3>

            <p className="text-cyan-400 mt-2">
              Flutter Developer
            </p>

            <p className="text-gray-400 mt-1">
              Current Project
            </p>

            <ul className="mt-4 space-y-2 text-gray-300">
              <li>• PG Management Platform</li>
              <li>• Firebase Integration</li>
              <li>• Owner Dashboard</li>
              <li>• Razorpay Integration</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;