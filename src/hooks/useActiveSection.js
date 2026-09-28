import { useEffect, useState } from "react";
import { navLinks } from "../data/portfolio";

/** Returns the href ("#about", ...) of the section crossing the middle of the screen. */
export const useActiveSection = () => {
  const [active, setActive] = useState("");

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

  return active;
};
