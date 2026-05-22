import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navigation from "../Navigation";

export default function EventsNews() {
  const items = [
    {
      img: "e1.jpg",
      title: "AI Development Workshop",
      desc: "We conducted an advanced AI workshop for modern software engineers.",
    },
    {
      img: "e2.jpg",
      title: "Tech Conference 2026",
      desc: "Micronsoft Solutions showcased futuristic digital solutions.",
    },
    {
      img: "e3.jpg",
      title: "Mobile App Launch",
      desc: "New enterprise mobile system launched for business clients.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <Navigation />
    <section className="relative w-full min-h-screen bg-[#04060D] flex items-center justify-center px-6 overflow-hidden">

      {/* GLOW BACKGROUND */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-125 h-50 bg-cyan-500 blur-3xl opacity-20 rounded-full animate-pulse" />
      </div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#06B6D420_1px,transparent_1px),linear-gradient(to_bottom,#06B6D420_1px,transparent_1px)] bg-size-[4rem_4rem]" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 space-y-6"
        >
          <span className="text-cyan-400 text-xs font-black tracking-[0.4em] uppercase">
            LATEST UPDATES
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase leading-none">
            Events & <span className="text-cyan-400">News</span>
          </h2>

          <div className="w-24 h-0.5 bg-cyan-400 shadow-[0_0_10px_#06B6D4]" />

          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Stay updated with our latest workshops, tech events, product launches and industry innovations.
          </p>

          {/* ACTIVE NEWS INFO */}
          <div className="p-5 rounded-2xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl">
            <h3 className="text-cyan-300 text-lg font-bold">
              {items[index].title}
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              {items[index].desc}
            </p>
          </div>
        </motion.div>

        {/* RIGHT SLIDER */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 h-100 md:h-125 lg:h-137.5 relative rounded-3xl overflow-hidden border border-cyan-500/20 shadow-2xl"
        >

          {items.map((item, i) => (
            <motion.img
              key={i}
              src={item.img}
              className="absolute w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{
                opacity: i === index ? 1 : 0,
                scale: i === index ? 1 : 1.1,
              }}
              transition={{ duration: 1 }}
            />
          ))}

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

          {/* TITLE OVERLAY */}
          <div className="absolute bottom-10 left-10">
            <h3 className="text-white text-2xl md:text-3xl font-black">
              {items[index].title}
            </h3>
          </div>

          {/* DOTS */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {items.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === index
                    ? "bg-cyan-400 shadow-[0_0_10px_#06B6D4]"
                    : "bg-slate-600"
                }`}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
    </>
  );
}