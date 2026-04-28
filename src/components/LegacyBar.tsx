import { motion } from "framer-motion";

const items = [
  {
    label: "Heritage",
    heading: "3 Generations of Intellectual Capital",
    body: "Rooted in the foundational texts and visionary expertise of recognized reinsurance author and guru, Kishore L. Naik.",
  },
  {
    label: "Leadership",
    heading: "40+ Years of Market Leadership",
    body: "Anchored by Vivek K. Naik's four decades of global broking experience and deep, enduring market relationships.",
  },
  {
    label: "Innovation",
    heading: "Advanced Data Science Integration",
    body: "Mr. Yash Naik leveraging over a decade of dedicated data science and analytics expertise to modernize risk structuring and capital efficiency.",
  },
];

const LegacyBar = () => {
  return (
    <section id="about" className="bg-slate">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {items.map((item, i) => (
            <motion.article
              key={item.heading}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-slate p-8 lg:p-10 flex flex-col"
            >
              <span className="text-[11px] uppercase tracking-[0.3em] text-steel font-semibold mb-6">
                {item.label}
              </span>
              <h3 className="font-serif text-navy text-xl sm:text-2xl lg:text-[1.75rem] leading-snug mb-5">
                {item.heading}
              </h3>
              <p className="text-ink/75 leading-relaxed text-[0.975rem]">
                {item.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegacyBar;
