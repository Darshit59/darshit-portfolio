function Projects() {
  const projects = [
    {
      title: "Event Management System",
      tech: "Django • Python • MySQL",
      description:
        "Developed a complete event management platform with user authentication, event booking, event search functionality and MySQL database integration.",
    },
    {
      title: "Personal Portfolio Website",
      tech: "React • Tailwind CSS",
      description:
        "Designed and developed a responsive personal portfolio website with modern UI, resume download functionality and recruiter-friendly layout.",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-14">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
                bg-slate-800
                border border-cyan-500/20
                rounded-3xl
                p-8
                hover:border-cyan-400
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <h3 className="text-2xl font-bold mb-3">
                {project.title}
              </h3>

              <p className="text-cyan-400 mb-4">
                {project.tech}
              </p>

              <p className="text-gray-300 leading-7">
                {project.description}
              </p>

              <button
                className="
                mt-6
                px-5
                py-2
                bg-cyan-500
                rounded-lg
                hover:bg-cyan-600
                transition
                "
              >
                View Details
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;