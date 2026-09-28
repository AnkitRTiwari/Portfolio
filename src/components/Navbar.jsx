import { useEffect, useRef, useState } from "react";
import { navLinks, profile } from "../data/portfolio";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
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

  // Highlight the link for the section crossing the middle of the screen
  useEffect(() => {
    const sections = ["#home", ...navLinks.map((link) => link.href)]
      .map((href) => document.querySelector(href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-40 border-b transition-colors duration-300 ${
        scrolled
          ? "bg-[rgba(5,5,8,0.85)] backdrop-blur-lg border-white/10 shadow-lg"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            A<span className="text-blue-500">.T</span>{" "}
            <span className="text-[10px] text-gray-400">portfolio</span>
          </a>

          <button
            className="w-7 h-5 relative cursor-pointer z-40 lg:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Open Menu"
          >
            &#9776;
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative py-1 transition-colors ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-0.5 w-full origin-left rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-transform duration-300 ${
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
              className="border border-blue-500/50 text-blue-400 py-1.5 px-4 rounded-lg text-sm font-medium transition hover:bg-blue-500/10"
            >
              Resume
            </a>
          </div>
        </div>
      </div>

      <div
        ref={progressRef}
        className="absolute left-0 bottom-0 h-0.5 w-full origin-left bg-gradient-to-r from-blue-500 to-cyan-400"
        style={{ transform: "scaleX(0)" }}
      />
    </nav>
  );
};
