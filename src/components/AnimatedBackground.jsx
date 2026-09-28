import { useEffect, useRef } from "react";

const LINK_DISTANCE = 140;
const MOUSE_DISTANCE = 180;

const PALETTES = {
  dark: { link: "59, 130, 246", linkAlpha: 0.22, mouse: "34, 211, 238", mouseAlpha: 0.45, dot: "rgba(147, 197, 253, 0.7)" },
  light: { link: "37, 99, 235", linkAlpha: 0.16, mouse: "8, 145, 178", mouseAlpha: 0.4, dot: "rgba(37, 99, 235, 0.45)" },
};

/** Fixed full-page background: drifting glow orbs, a faint grid and a particle network. */
export const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let particles = [];
    let frame = null;
    const mouse = { x: null, y: null };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(90, Math.floor((width * height) / 16000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.4 + 0.6,
      }));
    };

    const draw = () => {
      const palette =
        PALETTES[document.documentElement.dataset.theme === "light" ? "light" : "dark"];
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < LINK_DISTANCE) {
            ctx.strokeStyle = `rgba(${palette.link}, ${(1 - dist / LINK_DISTANCE) * palette.linkAlpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        if (mouse.x !== null) {
          const dist = Math.hypot(a.x - mouse.x, a.y - mouse.y);
          if (dist < MOUSE_DISTANCE) {
            ctx.strokeStyle = `rgba(${palette.mouse}, ${(1 - dist / MOUSE_DISTANCE) * palette.mouseAlpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      ctx.fillStyle = palette.dot;
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = () => {
      draw();
      frame = requestAnimationFrame(loop);
    };
    const play = () => {
      if (!reduceMotion && frame === null && !document.hidden) loop();
    };
    const pause = () => {
      cancelAnimationFrame(frame);
      frame = null;
    };

    const onResize = () => {
      resize();
      if (reduceMotion) draw();
    };
    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };
    const onVisibility = () => (document.hidden ? pause() : play());

    // a static (reduced-motion) canvas must be redrawn when the theme changes
    const themeObserver = new MutationObserver(() => {
      if (reduceMotion) draw();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    resize();
    if (reduceMotion) draw();
    else play();

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      pause();
      themeObserver.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="bg-grid absolute inset-0" />
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
};
