import { profile } from "../data/portfolio";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

const links = [
  { label: "GitHub", href: profile.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: profile.linkedin, Icon: LinkedInIcon },
  { label: "Email", href: `mailto:${profile.email}`, Icon: MailIcon },
];

export const SocialLinks = ({ className = "" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    {links.map((link) => (
      <a
        key={link.label}
        href={link.href}
        target={link.href.startsWith("mailto:") ? undefined : "_blank"}
        rel="noopener noreferrer"
        aria-label={link.label}
        className="p-2.5 rounded-full border border-white/10 text-gray-400 transition hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 hover:-translate-y-0.5"
      >
        <link.Icon className="w-5 h-5" />
      </a>
    ))}
  </div>
);
