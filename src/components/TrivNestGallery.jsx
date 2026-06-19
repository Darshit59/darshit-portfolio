function TrivNestGallery() {
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
      className="py-24 px-6 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-4">
          TrivNest Gallery
        </h2>

        <p className="text-center text-gray-400 mb-14">
          A glimpse of my Flutter based PG Management Platform
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {screenshots.map((item, index) => (
            <div
              key={index}
              className="
              group
              overflow-hidden
              rounded-3xl
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              shadow-xl
              hover:shadow-cyan-500/30
              transition-all
              duration-500
              hover:-translate-y-3
              "
            >

              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                  w-full
                  h-[550px]
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                  "
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-center">
                  {item.title}
                </h3>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default TrivNestGallery;