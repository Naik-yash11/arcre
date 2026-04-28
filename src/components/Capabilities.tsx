import { motion } from "framer-motion";
import { Shield, Target, LineChart, type LucideIcon } from "lucide-react";

type Card = {
  num: string;
  title: string;
  body: string;
  Icon: LucideIcon;
};

const cards: Card[] = [
  {
    num: "01",
    title: "Treaty Reinsurance",
    body: "Comprehensive portfolio protection to optimize capital efficiency and manage volatility.",
    Icon: Shield,
  },
  {
    num: "02",
    title: "Facultative Reinsurance",
    body: "Precision capacity and bespoke placement strategies for complex, high-value individual exposures.",
    Icon: Target,
  },
  {
    num: "03",
    title: "Analytics & Advisory",
    body: "Advanced actuarial modeling and predictive analytics to align risk transfer with exact capital requirements.",
    Icon: LineChart,
  },
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-16 lg:mb-20"
        >
          <span className="text-[11px] uppercase tracking-[0.3em] text-steel font-semibold">
            Core Capabilities
          </span>
          <h2 className="mt-6 font-serif text-navy text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-balance">
            Bespoke solutions, structured with precision.
          </h2>
          <p className="mt-6 text-ink/70 text-base md:text-lg leading-relaxed max-w-2xl">
            From treaty placements to facultative capacity and forward-looking
            advisory, every engagement is engineered around your capital,
            volatility, and growth objectives.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((c, i) => (
            <motion.article
              key={c.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative rounded-sm border border-border bg-white p-8 lg:p-10 shadow-sm transition-all duration-500 hover:shadow-[0_25px_50px_-12px_hsl(var(--navy)/0.25)] hover:border-steel/60"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="h-12 w-12 rounded-sm bg-steel/5 flex items-center justify-center transition-all duration-500 group-hover:bg-steel/10 group-hover:scale-110">
                  <c.Icon
                    className="text-steel transition-transform duration-500 group-hover:scale-110"
                    strokeWidth={1.5}
                    size={26}
                    aria-hidden
                  />
                </div>
                <span className="font-serif text-steel/70 text-xl">{c.num}</span>
              </div>
              <h3 className="font-serif text-navy text-2xl lg:text-[1.6rem] mb-4 leading-snug">
                {c.title}
              </h3>
              <p className="text-ink/70 leading-relaxed">{c.body}</p>
              <div className="mt-10 pt-6 border-t border-border">
                <span className="text-xs uppercase tracking-[0.25em] text-steel font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore <span aria-hidden>→</span>
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
