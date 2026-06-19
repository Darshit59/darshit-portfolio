function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-14">
          Featured Projects
        </h2>

        <div className="space-y-8">

          <div className="bg-slate-800 border border-cyan-500/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold">
              PG Finder Application
            </h3>

            <p className="text-cyan-400 mt-2">
              Flutter • Dart • Firebase
            </p>

            <p className="mt-4 text-gray-300">
              A modern PG accommodation application designed to help students
              and professionals find suitable PGs. Razorpay payment integration
              is currently in progress before Play Store launch.
            </p>
          </div>

          <div className="bg-slate-800 border border-cyan-500/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold">
              Event Management System
            </h3>

            <p className="text-cyan-400 mt-2">
              Django • Python • MySQL
            </p>

            <p className="mt-4 text-gray-300">
              Developed a complete event management platform with user
              authentication, event booking and database integration.
            </p>
          </div>

          <div className="bg-slate-800 border border-cyan-500/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold">
              Personal Portfolio Website
            </h3>

            <p className="text-cyan-400 mt-2">
              React • Tailwind CSS • Vercel
            </p>

            <p className="mt-4 text-gray-300">
              Designed and deployed a professional portfolio website showcasing
              skills, projects, internship experience and certifications.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;