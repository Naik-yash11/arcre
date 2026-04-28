import { MapPin } from "lucide-react";
import ArcReLogo from "./ArcReLogo";

const offices = ["Dubai", "Mumbai", "Maldives", "Nepal", "Malaysia"];

const Footer = () => {
  return (
    <footer id="contact" className="bg-[hsl(215_69%_10%)] text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-4">
            <ArcReLogo className="h-14 w-auto text-white" />
            <p className="mt-6 text-sm leading-relaxed text-white/60 max-w-sm">
              A global reinsurance broking firm built on three generations of
              intellectual capital and enduring market relationships.
            </p>
          </div>

          <div className="lg:col-span-5">
            <h4 className="font-serif text-white text-lg mb-6 tracking-wide">Global Offices</h4>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {offices.map((city) => (
                <li key={city}>
                  <a
                    href="#"
                    className="group flex items-center gap-2 px-4 py-2.5 rounded-md border border-white/10 bg-white/[0.03] text-sm font-medium text-white/90 tracking-wide transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:text-white hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-12px_rgba(255,255,255,0.25)]"
                  >
                    <MapPin className="h-3.5 w-3.5 text-white/50 transition-colors duration-300 group-hover:text-white" />
                    <span className="relative">
                      {city}
                      <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-serif text-white text-lg mb-6">Secure Contact</h4>
            <a
              href="mailto:secure@arcre.com"
              className="inline-flex items-center gap-2 text-sm text-white border-b border-white/30 hover:border-white pb-1 transition-colors"
            >
              secure@arcre.com
              <span aria-hidden>→</span>
            </a>
            <p className="mt-4 text-xs text-white/50 leading-relaxed">
              All correspondence is encrypted and reviewed under strict
              confidentiality protocols.
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Arc Re. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Regulatory</a>
            <a href="#" className="hover:text-white transition-colors">Disclosures</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
