import { useEffect, useState } from "react";

/** Types and deletes each phrase in turn, looping forever. */
export const Typewriter = ({ phrases, start = true }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (!start) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(phrases[0]);
      return;
    }

    let phrase = 0;
    let length = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const current = phrases[phrase];
      length += deleting ? -1 : 1;
      setText(current.slice(0, length));

      let delay = deleting ? 35 : 75;
      if (!deleting && length === current.length) {
        deleting = true;
        delay = 1800;
      } else if (deleting && length === 0) {
        deleting = false;
        phrase = (phrase + 1) % phrases.length;
        delay = 400;
      }
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, 700);
    return () => clearTimeout(timer);
  }, [phrases, start]);

  return (
    <>
      <span className="sr-only">{phrases.join(", ")}</span>
      <span aria-hidden="true">
        {text}
        <span className="animate-blink text-cyan-400">|</span>
      </span>
    </>
  );
};
