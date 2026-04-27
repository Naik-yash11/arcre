const cards = [
  {
    num: "01",
    title: "Treaty Reinsurance",
    body: "Comprehensive portfolio protection to optimize capital efficiency and manage volatility.",
  },
  {
    num: "02",
    title: "Facultative Reinsurance",
    body: "Precision capacity and bespoke placement strategies for complex, high-value individual exposures.",
  },
  {
    num: "03",
    title: "Analytics & Advisory",
    body: "Advanced actuarial modeling and predictive analytics to align risk transfer with exact capital requirements.",
  },
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="text-[11px] uppercase tracking-[0.3em] text-steel font-semibold">
            Core Capabilities
          </span>
          <h2 className="mt-6 font-serif text-navy text-4xl md:text-5xl lg:text-[3.25rem] text-balance">
            Bespoke solutions, structured with precision.
          </h2>
          <p className="mt-6 text-ink/70 text-lg leading-relaxed max-w-2xl">
            From treaty placements to facultative capacity and forward-looking
            advisory, every engagement is engineered around your capital,
            volatility, and growth objectives.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((c) => (
            <article
              key={c.num}
              className="group relative border border-border bg-white p-8 lg:p-10 transition-all duration-300 hover:border-steel hover:shadow-[0_30px_60px_-30px_hsl(var(--navy)/0.25)]"
            >
              <div className="flex items-start justify-between mb-10">
                <span className="font-serif text-steel text-2xl">{c.num}</span>
                <span className="h-px w-12 bg-border group-hover:bg-steel transition-colors mt-4" />
              </div>
              <h3 className="font-serif text-navy text-2xl lg:text-[1.6rem] mb-4 leading-snug">
                {c.title}
              </h3>
              <p className="text-ink/70 leading-relaxed">{c.body}</p>
              <div className="mt-10 pt-6 border-t border-border">
                <span className="text-xs uppercase tracking-[0.25em] text-steel font-semibold inline-flex items-center gap-2">
                  Explore <span aria-hidden>→</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
