import { SocialLinks } from "./SocialLinks";
import { profile } from "../data/portfolio";

export const Footer = () => (
  <footer className="relative border-t border-white/10 py-8">
    <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-gray-500 text-center sm:text-left">
        © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind
        CSS.
      </p>
      <SocialLinks />
    </div>
  </footer>
);
