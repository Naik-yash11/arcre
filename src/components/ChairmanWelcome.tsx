import { motion } from "framer-motion";

const ChairmanWelcome = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4"
        >
          <span className="text-[11px] uppercase tracking-[0.3em] text-steel font-semibold">
            Firm Overview
          </span>
          <h2 className="mt-6 font-serif text-navy text-3xl md:text-4xl lg:text-[2.75rem] leading-tight text-balance">
            A heritage of capacity, reimagined for the modern market.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-8 space-y-6 text-ink/80 leading-relaxed text-base md:text-lg"
        >
          <p>
            Arc Re — Analytics and Risk Consulting — occupies a deliberate
            position at the intersection of traditional reinsurance market
            capacity and modern actuarial data science. The name is the
            mandate: every engagement begins with analysis, and capacity is
            structured as the consequence of evidence rather than the starting
            point of a negotiation. For three generations, our principals have
            advised cedants and capital providers across diverse geographies,
            structuring risk transfer that protects balance sheets through
            cycles of soft and hard market conditions alike.
          </p>
          <p>
            Today, the discipline of reinsurance is being reshaped by granular
            exposure data, machine-assisted catastrophe modeling, and a more
            quantitative dialogue between cedants and reinsurers. We have
            invested deeply in this evolution. Our analytics practice translates
            portfolio data into clear narratives of volatility, frequency and
            severity, allowing us to negotiate terms that reflect the true
            economic shape of a programme rather than market consensus alone.
          </p>
          <p>
            The result is a brokerage built for institutions that expect more
            than placement. Our clients receive a partner whose advice is
            grounded in decades of market relationships, sharpened by rigorous
            actuarial analysis, and delivered with the discretion and
            consistency that long-tail risk demands.
          </p>
          <div className="pt-6 border-t border-border">
            <p className="font-serif text-navy text-lg">Vivek K. Naik</p>
            <p className="text-sm text-ink/60 mt-1">Chairman, Arc Re</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChairmanWelcome;
