import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

const offices = [
  { city: "Dubai", region: "Middle East Hub" },
  { city: "Mumbai", region: "South Asia Headquarters" },
  { city: "Maldives", region: "Indian Ocean" },
  { city: "Nepal", region: "Himalayan Markets" },
  { city: "Malaysia", region: "Southeast Asia" },
];

const Contact = () => {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navigation />
      <PageHeader
        eyebrow="Contact"
        title="Begin a confidential conversation."
        intro="Whether you are exploring a new placement, a structural review, or an advisory engagement, we welcome a discreet introduction."
      />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <span className="text-[11px] uppercase tracking-[0.3em] text-steel font-semibold">
              Secure Correspondence
            </span>
            <h2 className="mt-6 font-serif text-navy text-3xl md:text-4xl leading-tight">
              Direct lines to the firm's principals.
            </h2>
            <p className="mt-6 text-ink/75 leading-relaxed text-base md:text-lg">
              All initial correspondence is reviewed personally and treated
              under strict confidentiality protocols. We do not maintain
              external sales teams; introductions are handled by the principals
              who will lead any subsequent engagement.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="mailto:secure@arcre.com"
                className="group flex items-center gap-4 p-6 border border-border rounded-sm hover:border-steel/60 hover:bg-slate/50 transition-all duration-500"
              >
                <div className="h-12 w-12 rounded-sm bg-steel/5 flex items-center justify-center group-hover:bg-steel/10 transition-colors">
                  <Mail className="text-steel" strokeWidth={1.5} size={22} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-ink/55 font-semibold">
                    Secure Email
                  </div>
                  <div className="mt-1 font-serif text-navy text-xl">
                    secure@arcre.com
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <span className="text-[11px] uppercase tracking-[0.3em] text-steel font-semibold">
              Global Offices
            </span>
            <h2 className="mt-6 font-serif text-navy text-3xl md:text-4xl leading-tight">
              Five offices across the Asia–Middle East corridor.
            </h2>

            <ul className="mt-10 divide-y divide-border border-y border-border">
              {offices.map((o) => (
                <li key={o.city}>
                  <div className="flex items-center justify-between py-5 group">
                    <div className="flex items-center gap-4">
                      <MapPin className="text-steel" strokeWidth={1.5} size={20} />
                      <span className="font-serif text-navy text-xl">
                        {o.city}
                      </span>
                    </div>
                    <span className="text-sm text-ink/60 tracking-wide">
                      {o.region}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
