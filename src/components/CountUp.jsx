import { useEffect, useRef, useState } from "react";

const DURATION = 1400;

/** Counts the leading number of `value` (e.g. "25%") up from 0 once visible. */
export const CountUp = ({ value, start = true }) => {
  const match = /^(\d+)(.*)$/.exec(value);
  const ref = useRef(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const parsed = /^(\d+)/.exec(value);
    const node = ref.current;
    if (!parsed || !node || !start) return;

    const target = Number(parsed[1]);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCurrent(target);
      return;
    }

    let frame;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const step = (now) => {
        const progress = Math.min((now - t0) / DURATION, 1);
        setCurrent(Math.round(target * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    });
    io.observe(node);

    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, start]);

  if (!match) return value;

  return (
    <span ref={ref}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">
        {current}
        {match[2]}
      </span>
    </span>
  );
};
