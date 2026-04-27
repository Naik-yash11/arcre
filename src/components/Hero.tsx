import heroBridge from "@/assets/hero-bridge.jpg";

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

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24 w-full">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-white/40" />
            <span className="text-xs uppercase tracking-[0.3em] text-white/70 font-medium">
              Global Reinsurance Broking
            </span>
          </div>
          <h1 className="font-serif text-white text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] text-balance">
            Elevating Risk Transfer with Unwavering Capital.
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/75 leading-relaxed font-light">
            Aligning sophisticated analytics and bespoke structuring to deliver
            secure, global reinsurance solutions.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <a
              href="#capabilities"
              className="inline-flex items-center gap-3 bg-steel hover:bg-steel-hover text-white px-8 py-4 text-sm font-medium tracking-wide transition-colors"
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
          </div>
        </div>
      </div>

      {/* bottom hairline */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-white/10" />
    </section>
  );
};

export default Hero;
