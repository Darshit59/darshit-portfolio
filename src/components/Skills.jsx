const skills = [
  "Flutter",
  "Dart",
  "React.js",
  "JavaScript",
  "Python",
  "Django",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "MySQL",
  "Git",
  "GitHub",
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-14">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {skills.map((skill) => (
            <div
              key={skill}
              className="
              bg-slate-800
              border border-cyan-500/20
              rounded-2xl
              p-6
              text-center
              text-lg
              font-semibold
              hover:border-cyan-400
              hover:-translate-y-2
              transition-all
              duration-300
              cursor-pointer
              "
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;