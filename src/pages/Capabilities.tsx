import { motion } from "framer-motion";
import { Shield, Target, LineChart, type LucideIcon } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

type Service = {
  num: string;
  Icon: LucideIcon;
  title: string;
  tagline: string;
  paragraphs: string[];
  lines: string[];
};

const services: Service[] = [
  {
    num: "01",
    Icon: Shield,
    title: "Treaty Reinsurance",
    tagline: "Portfolio-level capacity, structured around capital and volatility.",
    paragraphs: [
      "Our treaty practice is built around the cedant's underlying capital model. We design proportional and non-proportional structures — quota share, surplus, excess of loss and stop loss — that target specific volatility, retention and earnings outcomes rather than chasing nominal rate reductions.",
      "Long-tail liabilities, in particular, demand a level of structural patience the spot market rarely affords. We work with clients across multi-year placement horizons, modelling reserve development, interest-rate sensitivity and reinsurer credit exposure so that programmes remain economically rational through full underwriting cycles.",
      "Every treaty submission we present is accompanied by reproducible exposure data, stochastic loss diagnostics and a clear narrative of the portfolio's underwriting trajectory. This discipline is the reason our placements consistently attract lead capacity from the world's principal markets.",
    ],
    lines: [
      "Property — Per Risk and Catastrophe",
      "Casualty — Long-tail and Clash",
      "Motor — Quota Share and XoL",
      "Marine, Energy and Offshore",
      "Aviation and Aerospace",
      "Engineering and Construction",
      "Surety, Credit and Political Risk",
    ],
  },
  {
    num: "02",
    Icon: Target,
    title: "Facultative Reinsurance",
    tagline: "Bespoke capacity for complex, high-value individual exposures.",
    paragraphs: [
      "Facultative work is where structuring discipline meets relationship depth. Every account we present is unique: a high-limit property risk, a complex liability programme, or a one-of-a-kind specialty exposure that does not fit neatly within a treaty. Our role is to translate that uniqueness into a submission underwriters can price with confidence.",
      "We secure capacity from a deliberately curated panel of facultative markets across London, Continental Europe, Bermuda, Singapore and the Middle East. The selection is driven by line-of-business expertise and claims behaviour, not by rotation. Cedants benefit from underwriters who genuinely understand the exposure rather than markets who simply have appetite.",
      "Pricing, wording and claims cooperation clauses are negotiated line by line. For complex programmes we coordinate placement across multiple layers and territories while maintaining a single point of contractual accountability for the cedant.",
    ],
    lines: [
      "Large Property and CAR/EAR",
      "High-limit Liability and D&O",
      "Marine Hull and Cargo Specials",
      "Aviation Hull and War",
      "Energy — Onshore and Offshore",
      "Specialty — Fine Art, K&R, Cyber",
      "Political Violence and Terrorism",
    ],
  },
  {
    num: "03",
    Icon: LineChart,
    title: "Analytics & Advisory",
    tagline: "Quantitative structuring grounded in actuarial and exposure science.",
    paragraphs: [
      "Our analytics practice is the connective tissue between cedant data and reinsurance pricing. We build stochastic loss models, exposure-rated pricing benchmarks and capital-efficiency studies that allow clients to see the economic shape of their programme before negotiation begins.",
      "Predictive modelling is applied selectively — where data quality justifies it and where the underwriting question is genuinely quantitative. We are equally comfortable advising that a particular exposure is best handled by experience-rating and market judgement; the value of analytics lies in knowing when to deploy it and when to defer.",
      "Beyond placement, we advise on retention strategy, reinsurer credit management, capital-relief structures and the design of programmes that interact cleanly with regulatory solvency frameworks. Our advisory work is often the foundation on which subsequent placements are built.",
    ],
    lines: [
      "Stochastic Loss Modelling",
      "Catastrophe Model Vendor Reviews",
      "Capital and Solvency Optimisation",
      "Retention and Net Position Strategy",
      "Reinsurer Credit and Counterparty Analytics",
      "Programme Benchmarking",
      "Reserve and Tail-Risk Diagnostics",
    ],
  },
];

const Capabilities = () => {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navigation />
      <PageHeader
        eyebrow="Core Capabilities"
        title="Bespoke reinsurance solutions, structured with precision."
        intro="From treaty placements to facultative capacity and forward-looking advisory, every engagement is engineered around your capital, volatility and growth objectives."
      />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32 space-y-28 lg:space-y-36">
          {services.map((s) => (
            <motion.article
              key={s.num}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="grid lg:grid-cols-12 gap-10 lg:gap-16"
            >
              <div className="lg:col-span-4">
                <div className="flex items-start justify-between mb-8">
                  <div className="h-14 w-14 rounded-sm bg-steel/5 flex items-center justify-center">
                    <s.Icon className="text-steel" strokeWidth={1.5} size={28} aria-hidden />
                  </div>
                  <span className="font-serif text-steel/70 text-2xl">{s.num}</span>
                </div>
                <h2 className="font-serif text-navy text-3xl md:text-4xl lg:text-[2.5rem] leading-tight text-balance">
                  {s.title}
                </h2>
                <p className="mt-4 text-ink/65 italic text-base md:text-lg leading-relaxed">
                  {s.tagline}
                </p>
              </div>

              <div className="lg:col-span-8">
                <div className="space-y-5 text-ink/80 leading-relaxed text-base md:text-lg">
                  {s.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-border">
                  <div className="text-[11px] uppercase tracking-[0.3em] text-steel font-semibold mb-5">
                    Lines of Business
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                    {s.lines.map((line) => (
                      <li
                        key={line}
                        className="flex items-start gap-3 text-ink/80 text-[0.975rem]"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 rounded-full bg-steel flex-shrink-0"
                          aria-hidden
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Capabilities;
