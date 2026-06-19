function Achievements() {
  const achievements = [
    "Software Developer Intern at Grownited Private Limited",
    "Built and Deployed Personal Portfolio Website",
    "Developed Event Management System using Django",
    "Developed PG Finder Application using Flutter",
    "Currently Integrating Razorpay Payment Gateway",
    "Pursuing M.Sc. Information Technology",
  ];

  return (
    <section
      id="achievements"
      className="py-24 px-6 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-14">
          Achievements
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400 transition-all duration-300"
            >
              <h3 className="text-lg font-medium">
                🏆 {item}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Achievements;