function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-14">
          Contact Me
        </h2>

        <div className="bg-slate-800 border border-cyan-500/20 rounded-3xl p-10">

          <div className="grid md:grid-cols-3 gap-8">

            {/* Phone */}
            <div className="bg-slate-900 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-semibold mb-3">
                📞 Phone
              </h3>

              <p className="text-gray-300">
                +91 9313796695
              </p>
            </div>

            {/* Email */}
            <div className="bg-slate-900 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-semibold mb-3">
                📧 Email
              </h3>

              <p className="text-gray-300 break-all">
                darshitgohel93@gmail.com
              </p>
            </div>

            {/* LinkedIn */}
            <div className="bg-slate-900 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-semibold mb-3">
                🔗 LinkedIn
              </h3>

              <a
                href="https://www.linkedin.com/in/darshit-gohel-9a170725a/"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 hover:text-cyan-300"
              >
                Visit Profile
              </a>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

            <a
              href="mailto:darshitgohel93@gmail.com"
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-xl font-semibold text-center transition"
            >
              Send Email
            </a>

            <a
              href="https://www.linkedin.com/in/darshit-gohel-9a170725a/"
              target="_blank"
              rel="noreferrer"
              className="border border-cyan-500 hover:bg-cyan-500/10 px-8 py-3 rounded-xl font-semibold text-center transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Darshit59"
              target="_blank"
              rel="noreferrer"
              className="border border-cyan-500 hover:bg-cyan-500/10 px-8 py-3 rounded-xl font-semibold text-center transition"
            >
              GitHub
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;