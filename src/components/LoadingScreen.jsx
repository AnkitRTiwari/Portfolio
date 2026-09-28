import { useEffect, useRef, useState } from "react";

const NAME = "Ankit Tiwari";
const STEPS = [
  { label: "Compiling React components", at: 0 },
  { label: "Connecting REST APIs", at: 25 },
  { label: "Seeding MongoDB", at: 50 },
  { label: "Deploying to AWS EC2", at: 75 },
];
// match the curtain (and reduced-motion fade) transitions in index.css
const EXIT_MS = 1200;
const REDUCED_EXIT_MS = 350;

const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

// Full intro on the first visit of a session, a quick one on reloads
const loaderTiming = () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return { duration: 400, exit: REDUCED_EXIT_MS };
  }
  try {
    if (sessionStorage.getItem("loader-seen")) return { duration: 900, exit: EXIT_MS };
    sessionStorage.setItem("loader-seen", "1");
  } catch {
    // storage unavailable: always play the full intro
  }
  return { duration: 2200, exit: EXIT_MS };
};

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-3.5 w-3.5 text-emerald-400"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

/**
 * Intro loader. Calls onReveal when the curtain starts lifting (so the hero can
 * animate in underneath) and onDone once it has fully cleared.
 */
export const LoadingScreen = ({ onReveal, onDone }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("loading");
  const timingRef = useRef(null);
  const callbacks = useRef({ onReveal, onDone });

  useEffect(() => {
    callbacks.current = { onReveal, onDone };
  });

  useEffect(() => {
    // kept in a ref so StrictMode's second effect run reuses the same timing
    timingRef.current ??= loaderTiming();
    const { duration, exit } = timingRef.current;
    const root = document.documentElement;
    root.style.overflow = "hidden";

    let frame;
    const timers = [];
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      setProgress(easeInOutCubic(t) * 100);
      if (t < 1) {
        frame = requestAnimationFrame(tick);
        return;
      }
      // hold on "Ready" for a moment, then lift the curtain
      timers.push(
        setTimeout(() => {
          setPhase("exit");
          callbacks.current.onReveal?.();
          timers.push(setTimeout(() => callbacks.current.onDone?.(), exit));
        }, duration < 1000 ? 150 : 450)
      );
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      timers.forEach(clearTimeout);
      root.style.overflow = "";
    };
  }, []);

  const done = progress >= 100;
  const visibleSteps = STEPS.filter((step) => progress >= step.at);

  return (
    <div className="loader fixed inset-0 z-50" data-phase={phase} role="status">
      <span className="sr-only">Loading Ankit Tiwari's portfolio</span>

      <div className="loader-panel loader-panel-accent absolute inset-0 bg-gradient-to-br from-accent to-highlight" />

      <div
        className="loader-panel loader-panel-main absolute inset-0 overflow-hidden bg-page"
        aria-hidden="true"
      >
        <div className="bg-grid absolute inset-0" />
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[120px]" />

        <div className="loader-content relative flex h-full flex-col items-center justify-center px-6">
          {/* Monogram */}
          <div className="relative mb-8 h-28 w-28">
            <div className="loader-ring absolute inset-0 rounded-full" />
            <div className="absolute inset-[5px] flex items-center justify-center rounded-full bg-page shadow-[0_0_40px_rgba(59,130,246,0.25)]">
              <svg
                viewBox="0 0 70 50"
                className="loader-draw w-14"
                fill="none"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <defs>
                  {/* userSpaceOnUse: the straight strokes have zero-area boxes */}
                  <linearGradient
                    id="loader-gradient"
                    gradientUnits="userSpaceOnUse"
                    x1="0"
                    y1="0"
                    x2="70"
                    y2="50"
                  >
                    <stop offset="0" style={{ stopColor: "var(--color-accent)" }} />
                    <stop offset="1" style={{ stopColor: "var(--color-highlight)" }} />
                  </linearGradient>
                </defs>
                <g stroke="url(#loader-gradient)">
                  <path pathLength="1" d="M6 44 L18 8 L30 44" />
                  <path pathLength="1" d="M10.3 31 H25.7" />
                  <path pathLength="1" d="M42 8 H66" />
                  <path pathLength="1" d="M54 8 V44" />
                </g>
                <circle
                  className="loader-dot"
                  cx="36"
                  cy="42"
                  r="3.2"
                  style={{ fill: "var(--color-highlight)" }}
                />
              </svg>
            </div>
          </div>

          {/* Name */}
          <p className="text-2xl font-bold text-fg sm:text-3xl">
            {NAME.split("").map((char, i) => (
              <span
                key={i}
                className="loader-in inline-block"
                style={{ "--i": i }}
              >
                {char === " " ? " " : char}
              </span>
            ))}
          </p>
          <p
            className="loader-in mt-2 font-mono text-xs uppercase tracking-[0.3em] text-fg-subtle"
            style={{ "--i": NAME.length + 2 }}
          >
            Full Stack Developer
          </p>

          {/* Terminal */}
          <div
            className="loader-in mt-10 w-full max-w-sm overflow-hidden rounded-xl border border-white/10 bg-[#0b0d14]/95 shadow-2xl [@media(max-height:600px)]:hidden"
            style={{ "--i": NAME.length + 5 }}
          >
            <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
              <span className="ml-2 font-mono text-[11px] text-gray-500">
                ~/portfolio
              </span>
            </div>
            <div className="min-h-[168px] px-4 py-3 font-mono text-[12.5px] leading-6">
              <p>
                <span className="text-emerald-400">$</span>{" "}
                <span className="text-gray-200">npm run portfolio</span>
              </p>
              {visibleSteps.map((step, i) => {
                const next = STEPS[i + 1];
                const complete = done || (next && progress >= next.at);
                return (
                  <p
                    key={step.label}
                    className="loader-line flex items-center gap-2.5"
                  >
                    <span className="flex h-3.5 w-3.5 items-center justify-center">
                      {complete ? (
                        <CheckIcon />
                      ) : (
                        <span className="h-3 w-3 animate-spin rounded-full border-2 border-cyan-300/25 border-t-cyan-300" />
                      )}
                    </span>
                    <span className={complete ? "text-gray-300" : "text-gray-400"}>
                      {step.label}
                      {!complete && "..."}
                    </span>
                  </p>
                );
              })}
              {done && (
                <p className="loader-line text-cyan-300">➜ Ready. Welcome!</p>
              )}
            </div>
          </div>

          {/* Progress */}
          <div
            className="loader-in mt-6 w-full max-w-sm"
            style={{ "--i": NAME.length + 7 }}
          >
            <div className="mb-2 flex justify-between font-mono text-xs text-fg-subtle">
              <span>{done ? "Ready" : "Booting portfolio"}</span>
              <span className="tabular-nums text-fg-muted">
                {String(Math.round(progress)).padStart(3, "0")}%
              </span>
            </div>
            <div className="h-1 w-full overflow-hidden rounded-full bg-overlay/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-accent to-highlight shadow-[0_0_12px_rgba(34,211,238,0.6)]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
