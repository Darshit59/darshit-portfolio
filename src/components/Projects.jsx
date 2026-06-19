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

          {/* TrivNest */}
          <div className="bg-gradient-to-r from-purple-900/40 to-cyan-900/40 border border-cyan-500/30 rounded-3xl p-8">

            <div className="flex items-center gap-3 mb-3">
              <span className="bg-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                FEATURED PROJECT
              </span>
            </div>

            <h3 className="text-3xl font-bold">
              TrivNest - PG Management Platform
            </h3>

            <p className="text-cyan-400 mt-2">
              Flutter • Firebase • Firestore • Razorpay
            </p>

            <p className="mt-5 text-gray-300 leading-8">
              TrivNest is a complete PG Management and Accommodation
              platform built for students and working professionals.
              The application provides room booking, rent management,
              complaints handling, food menu management, owner dashboard,
              analytics and admin controls.
            </p>

            <div className="grid md:grid-cols-2 gap-3 mt-6 text-gray-300">

              <p>✅ User Authentication</p>
              <p>✅ Room Booking System</p>

              <p>✅ Rent Payment Module</p>
              <p>✅ Complaint Management</p>

              <p>✅ Food Menu Management</p>
              <p>✅ Owner Dashboard</p>

              <p>✅ Income & Expense Analytics</p>
              <p>✅ WhatsApp Integration</p>

              <p>✅ Firebase Backend</p>
              <p>✅ Razorpay Integration (In Progress)</p>

            </div>

            <div className="mt-6">
              <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl">
                🚀 Play Store Launch Coming Soon
              </span>
            </div>

          </div>

          {/* Event Management */}
          <div className="bg-slate-800 border border-cyan-500/20 rounded-3xl p-8">

            <h3 className="text-2xl font-bold">
              Event Management System
            </h3>

            <p className="text-cyan-400 mt-2">
              Django • Python • MySQL
            </p>

            <p className="mt-4 text-gray-300">
              Developed a complete event management platform with user
              authentication, event booking, admin panel and MySQL
              database integration.
            </p>

          </div>

          {/* Portfolio */}
          <div className="bg-slate-800 border border-cyan-500/20 rounded-3xl p-8">

            <h3 className="text-2xl font-bold">
              Personal Portfolio Website
            </h3>

            <p className="text-cyan-400 mt-2">
              React • Tailwind CSS • Vercel
            </p>

            <p className="mt-4 text-gray-300">
              Designed and deployed a professional portfolio website
              showcasing skills, projects, internship experience,
              achievements and certifications.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;