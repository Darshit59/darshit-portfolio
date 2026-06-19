function Certificates() {
  const certificates = [
    "Introduction to Object-Oriented Programming with Java",
    "Learn PHP Database Connectivity",
    "Database Design and Basic SQL in PostgreSQL",
    "Development with HTML, CSS and JavaScript",
    "Build Your First Android App",
    "Introduction to Web Development",
    "Foundations of Cybersecurity",
  ];

  return (
    <section
      id="certificates"
      className="py-24 px-6 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-14">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400 transition-all duration-300"
            >
              📜 {certificate}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certificates;