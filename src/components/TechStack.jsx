import {
  FaReact,
  FaGithub,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

import {
  SiFlutter,
  SiFirebase,
  SiDjango,
  SiMysql,
  SiTailwindcss,
  SiDart,
} from "react-icons/si";

function TechStack() {
  const techs = [
    {
      name: "Flutter",
      icon: <SiFlutter className="text-5xl mx-auto" />,
    },
    {
      name: "Dart",
      icon: <SiDart className="text-5xl mx-auto" />,
    },
    {
      name: "React",
      icon: <FaReact className="text-5xl mx-auto" />,
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-5xl mx-auto" />,
    },
    {
      name: "Python",
      icon: <FaPython className="text-5xl mx-auto" />,
    },
    {
      name: "Django",
      icon: <SiDjango className="text-5xl mx-auto" />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-5xl mx-auto" />,
    },
    {
      name: "MySQL",
      icon: <SiMysql className="text-5xl mx-auto" />,
    },
    {
      name: "Git",
      icon: <FaGitAlt className="text-5xl mx-auto" />,
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-5xl mx-auto" />,
    },
    {
      name: "HTML",
      icon: <FaHtml5 className="text-5xl mx-auto" />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-5xl mx-auto" />,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-5xl mx-auto" />,
    },
  ];

  return (
    <section
      id="techstack"
      className="py-24 px-6 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-4">
          Tech Stack
        </h2>

        <p className="text-center text-gray-400 mb-14">
          Technologies I work with
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">

          {techs.map((tech, index) => (
            <div
              key={index}
              className="
                bg-slate-800
                border
                border-cyan-500/20
                rounded-3xl
                p-6
                text-center
                hover:border-cyan-400
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="mb-4 text-cyan-400">
                {tech.icon}
              </div>

              <h3 className="font-semibold">
                {tech.name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default TechStack;