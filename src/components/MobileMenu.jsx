import { useEffect, useRef } from "react";
import { navLinks, profile } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";
import { SocialLinks } from "./SocialLinks";
import { ArrowUpRightIcon, DownloadIcon, MailIcon } from "./Icons";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const active = useActiveSection();
  const firstLinkRef = useRef(null);
  const close = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;
    firstLinkRef.current?.focus({ preventScroll: true });

    const onKeyDown = (e) => {
      if (e.key !== "Escape") return;
      setMenuOpen(false);
      document.querySelector('[aria-controls="mobile-menu"]')?.focus();
    };
    // the menu is mobile-only, so close it if the screen grows to desktop size
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onDesktop = (e) => {
      if (e.matches) setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onDesktop);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [menuOpen, setMenuOpen]);

  const footerIndex = navLinks.length + 1;

  return (
    <div
      id="mobile-menu"
      data-open={menuOpen}
      inert={!menuOpen}
      className="mobile-menu fixed inset-0 z-30 overflow-y-auto bg-page/90 backdrop-blur-xl lg:hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-highlight/15 blur-3xl"
      />

      <nav
        aria-label="Mobile"
        className="relative flex min-h-full flex-col px-6 pt-24 pb-10"
      >
        <p
          className="mobile-menu-item mb-4 font-mono text-xs uppercase tracking-[0.25em] text-fg-subtle"
          style={{ "--i": 0 }}
        >
          Navigation
        </p>

        <ul>
          {navLinks.map((link, i) => {
            const isActive = active === link.href;
            return (
              <li
                key={link.href}
                className="mobile-menu-item border-b border-overlay/10"
                style={{ "--i": i + 1 }}
              >
                <a
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={link.href}
                  onClick={close}
                  aria-current={isActive ? "true" : undefined}
                  className="group flex items-center gap-4 py-4 outline-none"
                >
                  <span className="w-6 font-mono text-sm text-highlight">
                    0{i + 1}
                  </span>
                  <span
                    className={`text-3xl font-bold transition-transform duration-300 group-hover:translate-x-2 group-focus-visible:translate-x-2 ${
                      isActive
                        ? "bg-gradient-to-r from-accent to-highlight bg-clip-text text-transparent"
                        : "text-fg"
                    }`}
                  >
                    {link.label}
                  </span>
                  <ArrowUpRightIcon
                    className={`ml-auto h-5 w-5 transition duration-300 group-hover:rotate-45 group-hover:text-link group-focus-visible:rotate-45 group-focus-visible:text-link ${
                      isActive ? "rotate-45 text-link" : "text-fg-subtle"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mt-auto space-y-6 pt-10">
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="mobile-menu-item flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3.5 font-medium text-white transition hover:bg-accent-hover"
            style={{ "--i": footerIndex }}
          >
            <DownloadIcon className="h-4 w-4" />
            View Resume
          </a>

          <div
            className="mobile-menu-item space-y-4"
            style={{ "--i": footerIndex + 1 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-fg-subtle">
              Get in touch
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 text-fg-body transition-colors hover:text-link"
            >
              <MailIcon className="h-4 w-4" />
              {profile.email}
            </a>
            <SocialLinks />
          </div>
        </div>
      </nav>
    </div>
  );
};
