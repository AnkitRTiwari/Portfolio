import { useEffect, useRef, useState } from "react";

// One shared observer for every Reveal on the page
const callbacks = new WeakMap();
let observer;

const getObserver = () => {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        callbacks.get(entry.target)?.();
        callbacks.delete(entry.target);
        observer.unobserve(entry.target);
      }
    },
    // threshold 0 so elements taller than the viewport still reveal
    { threshold: 0, rootMargin: "0px 0px -10% 0px" }
  );
  return observer;
};

/**
 * Animates its children in when scrolled into view.
 * variant: "up" | "left" | "right" | "zoom" | "fade"
 */
export const Reveal = ({
  as = "div",
  variant = "up",
  delay = 0,
  className = "",
  children,
}) => {
  const Element = as;
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = getObserver();
    callbacks.set(node, () => setVisible(true));
    obs.observe(node);
    return () => {
      callbacks.delete(node);
      obs.unobserve(node);
    };
  }, []);

  return (
    <Element
      ref={ref}
      data-reveal={variant}
      style={delay ? { "--reveal-delay": `${delay}ms` } : undefined}
      className={`reveal ${visible ? "visible" : ""} ${className}`}
    >
      {children}
    </Element>
  );
};
