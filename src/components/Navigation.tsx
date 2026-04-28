import { useEffect, useState } from "react";
import ArcReLogo from "./ArcReLogo";

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ease-out ${
        scrolled
          ? "bg-navy/90 backdrop-blur-md border-b border-white/10 shadow-[0_1px_0_0_hsl(var(--white)/0.05)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center" aria-label="Arc Re home">
          <ArcReLogo
            className="h-12 w-auto text-white transition-colors duration-700"
          />
        </a>
        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm tracking-wide font-medium text-white/85 hover:text-white transition-colors duration-500"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
