import { motion } from "framer-motion";
import heroBridge from "@/assets/hero-bridge.jpg";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      <img
        src={heroBridge}
        alt="Modern suspension bridge over calm water at dusk"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Deep navy heavy overlay for legibility */}
      <div className="absolute inset-0 bg-navy/85" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--navy) / 0.55) 0%, hsl(var(--navy) / 0.85) 60%, hsl(var(--navy) / 0.95) 100%)",
        }}
      />

      {/* Slow breathing gradient mesh — Navy + Steel Blue */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.4, ease: "easeOut" }}
      >
        <motion.div
          className="absolute -top-1/3 -left-1/4 w-[80vw] h-[80vw] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at center, hsl(var(--steel) / 0.45) 0%, hsl(var(--steel) / 0) 60%)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 40, 0],
            y: [0, 30, 0],
            opacity: [0.6, 0.85, 0.6],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-1/3 -right-1/4 w-[70vw] h-[70vw] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at center, hsl(var(--navy) / 0.7) 0%, hsl(var(--navy) / 0) 65%)",
          }}
          animate={{
            scale: [1.05, 1, 1.05],
            x: [0, -30, 0],
            y: [0, -20, 0],
            opacity: [0.55, 0.8, 0.55],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at center, hsl(var(--steel) / 0.25) 0%, hsl(var(--steel) / 0) 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.65, 0.4],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div
        className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl">
          <motion.div
            variants={lineVariants}
            className="flex items-center gap-3 mb-8"
          >
            <span className="h-px w-12 bg-white/40" />
            <span className="text-xs uppercase tracking-[0.3em] text-white/70 font-medium">
              Global Reinsurance Broking
            </span>
          </motion.div>
          <motion.h1
            variants={lineVariants}
            className="font-serif text-white text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] text-balance"
          >
            Elevating Risk Transfer with Unwavering Capital.
          </motion.h1>
          <motion.p
            variants={lineVariants}
            className="mt-8 max-w-2xl text-lg md:text-xl text-white/75 leading-relaxed font-light"
          >
            Aligning sophisticated analytics and bespoke structuring to deliver
            secure, global reinsurance solutions.
          </motion.p>
          <motion.div
            variants={lineVariants}
            className="mt-12 flex flex-wrap items-center gap-6"
          >
            <a
              href="#capabilities"
              className="inline-flex items-center gap-3 bg-steel hover:bg-steel-hover text-white px-8 py-4 text-sm font-medium tracking-wide transition-all duration-500 shadow-sm hover:shadow-[0_10px_30px_-10px_hsl(var(--steel)/0.6)]"
            >
              View Our Solutions
              <span aria-hidden>→</span>
            </a>
            <a
              href="#about"
              className="text-sm text-white/80 hover:text-white tracking-wide border-b border-white/30 hover:border-white pb-1 transition-colors"
            >
              Discover Arc Re
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* bottom hairline */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-white/10" />
    </section>
  );
};

export default Hero;
