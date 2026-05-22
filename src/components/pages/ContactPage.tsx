import { motion } from "framer-motion";
import Navigation from "../Navigation";

export default function Contact() {
  return (
    <>
      <Navigation />
      <section className="relative w-full min-h-screen py-32 px-6 bg-black text-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-125 h-50 bg-cyan-500 blur-[160px] opacity-20 rounded-full animate-pulse" />
      </div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#06B6D420_1px,transparent_1px),linear-gradient(to_bottom,#06B6D420_1px,transparent_1px)] bg-size-[4rem_4rem]" />

      {/* SIDE GLOWS */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500 blur-[140px] opacity-20 rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-fuchsia-500 blur-[160px] opacity-20 rounded-full" />

      {/* HEADER */}
      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-cyan-400 text-xs tracking-[0.4em] uppercase font-black"
        >
          INITIATE CONTACT PROTOCOL
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black leading-tight"
        >
          Let’s Build Something <span className="text-cyan-400">Futuristic</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-slate-400 text-sm md:text-base"
        >
          Connect with our team and turn your idea into a high-performance digital system.
        </motion.p>
      </div>

      {/* MAIN GRID */}
      <div className="relative z-10 mt-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="p-8 rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl shadow-[0_0_40px_rgba(6,182,212,0.1)]"
        >
          <h3 className="text-xl font-bold text-cyan-300 mb-6">
            Send Message
          </h3>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400 outline-none"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full p-3 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400 outline-none"
            />

            <button className="w-full py-3 bg-cyan-500 text-black font-black rounded-xl hover:scale-105 transition shadow-[0_0_30px_#06B6D4]">
              Send Message
            </button>
          </div>
        </motion.div>

        {/* INFO PANEL */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="p-8 rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl"
        >
          <h3 className="text-xl font-bold text-cyan-300 mb-6">
            Contact Info
          </h3>

          <div className="space-y-6 text-slate-300">

            <div>
              <p className="text-white font-semibold">📍 Location</p>
              <p>Sri Lanka — Matara / Colombo</p>
            </div>

            <div>
              <p className="text-white font-semibold">✉ Email</p>
              <p>hello@micronsoft.com</p>
            </div>

            <div>
              <p className="text-white font-semibold">📞 Phone</p>
              <p>+94 77 123 4567</p>
            </div>

            {/* SOCIALS */}
            <div className="pt-6 flex gap-4">

              <div className="w-10 h-10 rounded-xl border border-cyan-400/20 flex items-center justify-center hover:bg-cyan-500 transition">
                f
              </div>

              <div className="w-10 h-10 rounded-xl border border-cyan-400/20 flex items-center justify-center hover:bg-cyan-500 transition">
                in
              </div>

              <div className="w-10 h-10 rounded-xl border border-cyan-400/20 flex items-center justify-center hover:bg-cyan-500 transition">
                ig
              </div>

            </div>

          </div>
        </motion.div>

      </div>

      {/* BOTTOM CTA */}
      <div className="relative z-10 text-center mt-24">
        <h3 className="text-2xl md:text-4xl font-black">
          Ready to start your <span className="text-cyan-400">digital journey?</span>
        </h3>

        <button className="mt-6 px-8 py-3 bg-cyan-500 text-black font-bold rounded-xl hover:scale-105 transition shadow-[0_0_30px_#06B6D4]">
          Get Started
        </button>
      </div>

    </section>
    </>
  );
}