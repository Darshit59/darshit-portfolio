import { motion } from "framer-motion";
import { FaExpandAlt } from "react-icons/fa";
import { useState } from "react";

function TrivNestGallery() {
  const [selected, setSelected] = useState(null);

  const screenshots = [
    {
      image: "/screenshots/trivnest-home.jpeg",
      title: "User Dashboard",
    },
    {
      image: "/screenshots/trivnest-room.jpeg",
      title: "Room Management",
    },
    {
      image: "/screenshots/trivnest-owner.jpeg",
      title: "Owner Dashboard",
    },
    {
      image: "/screenshots/trivnest-register.jpeg",
      title: "Authentication System",
    },
  ];

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-400/50 bg-cyan-400/10 px-6 py-2 text-sm font-bold uppercase tracking-wider text-cyan-300">
            ✦ Project Showcase
          </span>

          <h2 className="mt-6 text-5xl font-black md:text-6xl">
            TrivNest{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            A glimpse of my Flutter based PG Management Platform.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-cyan-400" />
        </motion.div>

        {/* Gallery */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {screenshots.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => setSelected(item.image)}
            >
              <div className="overflow-hidden rounded-[40px] border border-cyan-500/20 bg-slate-900 p-3 shadow-2xl backdrop-blur-xl transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-cyan-500/20">
                {/* Phone Frame */}
                <div className="relative overflow-hidden rounded-[28px] bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/40">
                    <FaExpandAlt className="scale-0 text-3xl text-white transition duration-300 group-hover:scale-100" />
                  </div>
                </div>

                <div className="pt-5 pb-2 text-center">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selected && (
          <div
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
          >
            <img
              src={selected}
              alt=""
              className="max-h-[90vh] rounded-3xl shadow-2xl"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default TrivNestGallery;