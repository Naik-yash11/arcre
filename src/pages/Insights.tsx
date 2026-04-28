import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

const articles = [
  {
    category: "Market Outlook",
    date: "Q2 · 2026",
    title: "Reading the soft-market signal in global property catastrophe.",
    excerpt:
      "Capacity is returning, but selectively. We examine where rate adequacy persists and where cedants should resist the temptation to over-cede.",
  },
  {
    category: "Analytics",
    date: "April · 2026",
    title: "Beyond vendor models: the case for blended catastrophe views.",
    excerpt:
      "Why a single vendor model is increasingly insufficient for primary insurers managing concentrated peril exposure across emerging markets.",
  },
  {
    category: "Casualty",
    date: "March · 2026",
    title: "Long-tail liability in an inflationary regime.",
    excerpt:
      "Social and economic inflation are reshaping reserve adequacy. A structural look at how reinsurance terms must adapt to keep pace.",
  },
  {
    category: "Capital",
    date: "February · 2026",
    title: "Solvency II equivalence and the architecture of capital relief.",
    excerpt:
      "Designing reinsurance programmes that deliver both economic protection and measurable regulatory capital benefit.",
  },
];

const Insights = () => {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navigation />
      <PageHeader
        eyebrow="Insights"
        title="Perspectives on capacity, capital and the discipline of risk transfer."
        intro="Our analytics and broking teams publish periodic notes on market dynamics, structuring questions and the quantitative methods that inform our advice."
      />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {articles.map((a, i) => (
              <motion.article
                key={a.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group bg-white p-10 lg:p-12 transition-colors duration-500 hover:bg-slate cursor-pointer"
              >
                <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-steel font-semibold mb-6">
                  <span>{a.category}</span>
                  <span className="h-px w-8 bg-steel/40" />
                  <span className="text-ink/50">{a.date}</span>
                </div>
                <h3 className="font-serif text-navy text-2xl lg:text-[1.75rem] leading-snug mb-5 text-balance">
                  {a.title}
                </h3>
                <p className="text-ink/70 leading-relaxed">{a.excerpt}</p>
                <div className="mt-8 text-xs uppercase tracking-[0.25em] text-steel font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read note <span aria-hidden>→</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Insights;
