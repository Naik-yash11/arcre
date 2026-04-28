import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import ArcReLogo from "./ArcReLogo";

const links = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Capabilities", to: "/capabilities" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  // Solid nav on all pages other than Home, where the hero provides the dark backdrop
  const forceSolid = pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isOpaque = scrolled || forceSolid;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ease-out ${
        isOpaque
          ? "bg-navy/90 backdrop-blur-md border-b border-white/10 shadow-[0_1px_0_0_hsl(var(--white)/0.05)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="Arc Re home">
          <ArcReLogo className="h-12 w-auto text-white transition-colors duration-700" />
        </Link>
        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.label}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `text-sm tracking-wide font-medium transition-colors duration-500 ${
                    isActive
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
