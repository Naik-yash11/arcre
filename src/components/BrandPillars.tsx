import { motion } from "framer-motion";

const pillars = [
  {
    label: "The Name",
    title: "Analytics and Risk Consulting",
    body: "Arc Re is the working contraction of Analytics and Risk Consulting — Reinsurance. The name is deliberate. It places quantitative analysis ahead of placement, and frames every engagement as a consulting relationship rather than a transactional broking exchange. Capacity is the outcome of clear analysis, never the starting point.",
  },
  {
    label: "Our Vision",
    title: "Reinsurance, evidenced.",
    body: "To be the reinsurance intermediary of choice for institutions that expect their risk transfer programmes to be defended on evidence — exposure data, stochastic modelling and reproducible analysis — rather than on market convention. We aspire to set the standard for what a quantitatively-grounded broking relationship looks like across the markets we serve.",
  },
  {
    label: "Our Mission",
    title: "Translate complex risk into capital-efficient capacity.",
    body: "We partner with cedants and capital providers to structure reinsurance that is materially better-priced, better-structured and better-understood than the market default. We do this by combining three generations of underwriter relationships with a modern analytics practice, and by holding ourselves to a single test on every renewal: did our advice protect the cedant's balance sheet through the cycle.",
  },
];

const BrandPillars = () => {
  return (
    <section className="bg-cream/40 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-16 lg:mb-20"
        >
          <span className="text-[11px] uppercase tracking-[0.3em] text-steel font-semibold">
            Identity, Vision & Mission
          </span>
          <h2 className="mt-6 font-serif text-navy text-3xl md:text-4xl lg:text-[2.75rem] leading-tight text-balance">
            What the name carries, and the standard it commits us to.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-px bg-border">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-white p-10 lg:p-12 flex flex-col"
            >
              <span className="text-[11px] uppercase tracking-[0.3em] text-steel font-semibold">
                {p.label}
              </span>
              <h3 className="mt-6 font-serif text-navy text-2xl lg:text-[1.75rem] leading-snug text-balance">
                {p.title}
              </h3>
              <p className="mt-6 text-ink/75 leading-relaxed text-base">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPillars;
