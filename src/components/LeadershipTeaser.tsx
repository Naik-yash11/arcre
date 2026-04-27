const LeadershipTeaser = () => {
  return (
    <section id="insights" className="relative bg-navy overflow-hidden">
      {/* decorative arc */}
      <svg
        aria-hidden
        className="absolute -top-40 -right-40 w-[700px] h-[700px] text-white/[0.04]"
        viewBox="0 0 500 500"
      >
        <circle cx="250" cy="250" r="240" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="250" cy="250" r="180" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="250" cy="250" r="120" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-28 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <span className="text-[11px] uppercase tracking-[0.3em] text-white/60 font-semibold">
              Leadership
            </span>
            <h2 className="mt-6 font-serif text-white text-4xl md:text-5xl lg:text-[3.5rem] text-balance">
              Driven by Relationships. Sustained by Trust.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-white/75 text-lg leading-relaxed font-light">
              In a complex global market, the right partnership makes all the
              difference. Arc Re is built on a foundation of intellectual
              capital, direct market relationships, and an unwavering commitment
              to client advocacy.
            </p>
            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-3 border border-white/60 hover:border-white text-white px-8 py-4 text-sm font-medium tracking-wide transition-colors hover:bg-white/5"
            >
              Meet the Team
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeaser;
