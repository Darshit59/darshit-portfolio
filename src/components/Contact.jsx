import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b8g9s5f",
        "template_yatefgf",
        form.current,
        "cKDZ89kT9oFuu3-cz"
      )
      .then(
        () => {
          alert("Message Sent Successfully 🚀");
        },
        (error) => {
          alert("Failed: " + error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-900">
      <div className="max-w-3xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-12">
          Contact Me
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-slate-800 p-8 rounded-3xl space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-xl bg-slate-700"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-xl bg-slate-700"
          />

          <input
            type="text"
            name="title"
            placeholder="Subject"
            required
            className="w-full p-4 rounded-xl bg-slate-700"
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="w-full p-4 rounded-xl bg-slate-700"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-cyan-500 py-4 rounded-xl font-bold hover:bg-cyan-600"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;