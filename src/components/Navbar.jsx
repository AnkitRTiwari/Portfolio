import { useEffect, useRef, useState } from "react";
import { navLinks, profile } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";
import { ThemeToggle } from "./ThemeToggle";

const barClass =
  "absolute left-1/2 top-1/2 h-0.5 -ml-2.5 -mt-px rounded-full bg-fg transition-all duration-300 ease-[cubic-bezier(0.77,0,0.18,1)] motion-reduce:transition-none";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();
  const progressRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // Scroll progress bar + solid background once scrolled
  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
      setScrolled(window.scrollY > 20);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-40 border-b transition-colors duration-300 ${
        scrolled && !menuOpen
          ? "bg-page/85 backdrop-blur-lg border-overlay/10 shadow-lg"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-fg">
            A<span className="text-accent">.T</span>{" "}
            <span className="text-[10px] text-fg-muted">portfolio</span>
          </a>

          <div className="flex items-center gap-4 lg:gap-8">
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = active === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative py-1 transition-colors ${
                      isActive ? "text-fg" : "text-fg-muted hover:text-fg"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute left-0 -bottom-0.5 h-0.5 w-full origin-left rounded-full bg-gradient-to-r from-accent to-highlight transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                );
              })}
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-accent/50 text-link py-1.5 px-4 rounded-lg text-sm font-medium transition hover:bg-accent/10"
              >
                Resume
              </a>
            </div>

            <ThemeToggle />

            <button
              type="button"
              className="relative h-10 w-10 cursor-pointer rounded-full border border-overlay/10 transition hover:border-accent/50 hover:bg-accent/10 lg:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span
                className={`${barClass} w-5 ${
                  menuOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`${barClass} ${
                  menuOpen ? "w-0 opacity-0" : "w-3.5"
                }`}
              />
              <span
                className={`${barClass} w-5 ${
                  menuOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={progressRef}
        className={`absolute left-0 bottom-0 h-0.5 w-full origin-left bg-gradient-to-r from-accent to-highlight transition-opacity ${
          menuOpen ? "opacity-0" : ""
        }`}
        style={{ transform: "scaleX(0)" }}
      />
    </nav>
  );
};
