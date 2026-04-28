import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
};

const PageHeader = ({ eyebrow, title, intro }: Props) => {
  return (
    <section className="relative bg-navy overflow-hidden">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 80% at 20% 0%, hsl(var(--steel) / 0.35) 0%, hsl(var(--navy) / 0) 60%), radial-gradient(50% 70% at 90% 100%, hsl(var(--steel) / 0.25) 0%, hsl(var(--navy) / 0) 60%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-40 pb-24 lg:pt-48 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-white/40" />
            <span className="text-xs uppercase tracking-[0.3em] text-white/70 font-medium">
              {eyebrow}
            </span>
          </div>
          <h1 className="font-serif text-white text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] text-balance">
            {title}
          </h1>
          {intro ? (
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/75 leading-relaxed font-light">
              {intro}
            </p>
          ) : null}
        </motion.div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-white/10" />
    </section>
  );
};

export default PageHeader;
