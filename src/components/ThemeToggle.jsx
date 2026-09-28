import { useState } from "react";
import { flushSync } from "react-dom";
import { MoonIcon, SunIcon } from "./Icons";

const THEME_COLORS = { dark: "#050508", light: "#f5f7fb" };

const currentTheme = () =>
  document.documentElement.dataset.theme === "light" ? "light" : "dark";

const applyTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", THEME_COLORS[theme]);
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // storage unavailable (private mode); the theme still applies for this visit
  }
};

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(currentTheme);
  const isDark = theme === "dark";

  const toggle = (e) => {
    const next = isDark ? "light" : "dark";
    const update = () => {
      applyTheme(next);
      setTheme(next);
    };

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!document.startViewTransition || reduceMotion) {
      update();
      return;
    }

    // Reveal the new theme as a circle growing out of the button
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => flushSync(update));
    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 600,
          easing: "cubic-bezier(0.4, 0, 0.2, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  const label = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="p-2 rounded-full border border-overlay/10 text-fg-muted cursor-pointer transition hover:text-fg hover:border-accent/50 hover:bg-accent/10 hover:rotate-12"
    >
      {isDark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
    </button>
  );
};
