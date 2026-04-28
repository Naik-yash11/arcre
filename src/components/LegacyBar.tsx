import { motion } from "framer-motion";
import CountUp from "./CountUp";

type Item = {
  label: string;
  metric: { value: number; prefix?: string; suffix?: string };
  heading: string;
  body: string;
};

const items: Item[] = [
  {
    label: "Heritage",
    metric: { value: 3, suffix: "" },
    heading: "Generations of Intellectual Capital",
    body: "Rooted in the foundational texts and visionary expertise of recognized reinsurance author and guru, Kishore L. Naik.",
  },
  {
    label: "Leadership",
    metric: { value: 40, suffix: "+" },
    heading: "Years of Market Leadership",
    body: "Anchored by Vivek K. Naik's four decades of global broking experience and deep, enduring market relationships.",
  },
  {
    label: "Innovation",
    metric: { value: 10, suffix: "+" },
    heading: "Years of Data Science Expertise",
    body: "Yash V. Naik leveraging over a decade of dedicated data science and analytics expertise to modernize risk structuring and capital efficiency.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const LegacyBar = () => {
  return (
    <section id="about" className="bg-slate">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-3 gap-px bg-border"
        >
          {items.map((item) => (
            <motion.article
              key={item.heading}
              variants={cardVariants}
              className="bg-slate p-8 lg:p-10 flex flex-col"
            >
              <span className="text-[11px] uppercase tracking-[0.3em] text-steel font-semibold mb-6">
                {item.label}
              </span>
              <div className="font-serif text-navy text-5xl lg:text-6xl mb-4 leading-none">
                <CountUp
                  end={item.metric.value}
                  prefix={item.metric.prefix}
                  suffix={item.metric.suffix}
                />
              </div>
              <h3 className="font-serif text-navy text-xl sm:text-2xl lg:text-[1.5rem] leading-snug mb-5">
                {item.heading}
              </h3>
              <p className="text-ink/75 leading-relaxed text-[0.975rem]">
                {item.body}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LegacyBar;
