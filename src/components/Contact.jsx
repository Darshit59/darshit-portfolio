import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaHeading,
  FaCommentDots,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .sendForm(
        "service_b8g9s5f",
        "template_yatefgf",
        form.current,
        "cKDZ89kT9oFuu3-cz"
      )
      .then(
        () => {
          setStatus({
            type: "success",
            message: "Message sent successfully 🚀",
          });
          form.current.reset();
        },
        (error) => {
          setStatus({
            type: "error",
            message: error?.text || "Something went wrong. Please try again.",
          });
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_35%)]" />

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/60 bg-cyan-400/10 px-6 py-2 text-sm font-bold uppercase tracking-wider text-cyan-300">
            ✦ Get In Touch
          </span>

          <h2 className="mt-6 text-5xl font-black md:text-6xl">
            Contact{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            Have a project idea, internship opportunity or collaboration? Send
            me a message.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-cyan-400" />
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.55 }}
          className="rounded-3xl border border-cyan-500/20 bg-slate-900/75 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl"
        >
          {status && (
            <div
              className={`mb-6 flex items-center gap-3 rounded-2xl border px-5 py-4 text-sm font-semibold ${
                status.type === "success"
                  ? "border-emerald-400/40 bg-emerald-500/10 text-emerald-300"
                  : "border-red-400/40 bg-red-500/10 text-red-300"
              }`}
            >
              {status.type === "success" ? (
                <FaCheckCircle />
              ) : (
                <FaExclamationCircle />
              )}
              {status.message}
            </div>
          )}

          <div className="grid gap-5 md:grid-cols-2">
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-800/70 py-4 pl-12 pr-4 text-white outline-none transition-all placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-800/70 py-4 pl-12 pr-4 text-white outline-none transition-all placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>
          </div>

          <div className="relative mt-5">
            <FaHeading className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400" />
            <input
              type="text"
              name="title"
              placeholder="Subject"
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-800/70 py-4 pl-12 pr-4 text-white outline-none transition-all placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
            />
          </div>

          <div className="relative mt-5">
            <FaCommentDots className="absolute left-4 top-5 text-cyan-400" />
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              className="w-full resize-none rounded-xl border border-slate-700 bg-slate-800/70 p-4 pl-12 text-white outline-none transition-all placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 py-4 font-black text-slate-950 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/30 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <FaPaperPlane />
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;