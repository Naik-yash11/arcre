import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import BrandPillars from "@/components/BrandPillars";

type Generation = {
  era: string;
  name: string;
  role: string;
  paragraphs: string[];
  imageBg: string;
};

const generations: Generation[] = [
  {
    era: "First Generation · Foundations",
    name: "Kishore L. Naik",
    role: "Author, Educator & Reinsurance Theorist",
    paragraphs: [
      "Kishore L. Naik is widely recognised as one of the seminal authors and educators in modern reinsurance theory. His written work on treaty structuring, proportional and non-proportional mechanics, and the economic logic of risk transfer has shaped a generation of practitioners across the Indian subcontinent and the broader Asian markets.",
      "His insistence that reinsurance is, at its core, a discipline of intellectual rigour rather than transactional placement remains the defining ethos of the firm. Every engagement Arc Re undertakes today is measured against the standard he set: that advice must be defensible from first principles, and that the cedant's long-term solvency is the only meaningful test of a programme's quality.",
    ],
    imageBg:
      "linear-gradient(135deg, hsl(var(--navy)) 0%, hsl(var(--steel) / 0.6) 100%)",
  },
  {
    era: "Second Generation · Market Relations",
    name: "Vivek K. Naik",
    role: "Principal · Forty Years in Global Broking",
    paragraphs: [
      "Vivek K. Naik has spent over four decades at the table with the world's principal reinsurance markets — from the Lloyd's syndicates and London company market through Continental Europe, Bermuda and the Asian regional carriers. His relationships are direct, personal and earned across hard and soft markets alike.",
      "Under his stewardship, Arc Re has built a reputation for placing programmes that other intermediaries decline: long-tail casualty, complex specialty, and accounts whose data history requires patient explanation rather than aggressive marketing. That reputation translates, in practical terms, into capacity availability and pricing discipline that few firms of comparable size can offer.",
      "His philosophy is straightforward: a broker's value is the willingness of underwriters to read the submission carefully, and that willingness is built one renewal at a time, over years of consistent and honest dealing.",
    ],
    imageBg:
      "linear-gradient(135deg, hsl(var(--steel)) 0%, hsl(var(--navy)) 100%)",
  },
  {
    era: "Third Generation · Data Science",
    name: "Yash V. Naik",
    role: "Chairman · Analytics & Quantitative Structuring",
    paragraphs: [
      "The third generation brings to the firm more than a decade of dedicated work in data science and quantitative analysis. Yash V. Naik leads the analytics practice that now sits at the heart of every major placement, translating raw cedant data into stochastic loss distributions, exposure-based pricing benchmarks and capital-efficiency studies.",
      "This capability allows Arc Re to engage reinsurers in a quantitative dialogue: presenting submissions accompanied by reproducible models, sensitivity analyses and tail-risk diagnostics. The outcome is consistently tighter pricing for clean portfolios and more defensible terms for complex ones.",
      "The integration of data science with traditional broking is not, in our view, a marketing posture. It is the operating model of a modern reinsurance intermediary, and it is the explicit continuation of the intellectual standard set by the first generation of the firm.",
    ],
    imageBg:
      "linear-gradient(135deg, hsl(var(--navy) / 0.85) 0%, hsl(var(--steel) / 0.75) 100%)",
  },
];

const About = () => {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navigation />
      <PageHeader
        eyebrow="About Arc Re"
        title="Three generations of intellectual capital in reinsurance."
        intro="Arc Re — short for Analytics and Risk Consulting — is a privately-held global reinsurance broking firm anchored by an unusual continuity of expertise: from foundational scholarship, through four decades of market relations, into the modern practice of quantitative risk structuring."
      />

      <BrandPillars />


      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32 space-y-28 lg:space-y-40">
          {generations.map((g, i) => {
            const reverse = i % 2 === 1;
            return (
              <motion.article
                key={g.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="lg:col-span-5">
                  <div
                    className="relative aspect-[4/5] w-full rounded-sm overflow-hidden shadow-[0_30px_80px_-30px_hsl(var(--navy)/0.4)]"
                    style={{ background: g.imageBg }}
                  >
                    <div className="absolute inset-0 flex items-end p-8">
                      <div>
                        <div className="text-[11px] uppercase tracking-[0.3em] text-white/70 font-semibold mb-3">
                          {g.era}
                        </div>
                        <div className="font-serif text-white text-3xl lg:text-4xl leading-tight">
                          {g.name}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <span className="text-[11px] uppercase tracking-[0.3em] text-steel font-semibold">
                    {g.era}
                  </span>
                  <h2 className="mt-5 font-serif text-navy text-3xl md:text-4xl lg:text-[2.5rem] leading-tight text-balance">
                    {g.name}
                  </h2>
                  <p className="mt-3 text-sm uppercase tracking-[0.18em] text-ink/55">
                    {g.role}
                  </p>
                  <div className="mt-8 space-y-5 text-ink/80 leading-relaxed text-base md:text-lg">
                    {g.paragraphs.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
