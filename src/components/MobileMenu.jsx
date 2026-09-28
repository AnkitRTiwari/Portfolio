import { navLinks, profile } from "../data/portfolio";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const itemClass = `text-2xl font-semibold my-4 transform transition-all duration-300 ${
    menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
  }`;

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.95)] backdrop-blur-lg z-40 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out lg:hidden
                     ${
                       menuOpen
                         ? "h-screen opacity-100 pointer-events-auto"
                         : "h-0 opacity-0 pointer-events-none"
                     }
                   `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={() => setMenuOpen(false)}
          className={`${itemClass} text-white`}
        >
          {link.label}
        </a>
      ))}
      <a
        href={profile.resume}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setMenuOpen(false)}
        className={`${itemClass} text-blue-400`}
      >
        Resume
      </a>
    </div>
  );
};
