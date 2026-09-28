import { SocialLinks } from "../SocialLinks";
import { Typewriter } from "../Typewriter";
import { CountUp } from "../CountUp";
import { DownloadIcon, MapPinIcon } from "../Icons";
import { profile, stats } from "../../data/portfolio";

const tokenClass = {
  comment: "text-gray-500 italic",
  keyword: "text-violet-400",
  name: "text-sky-300",
  key: "text-cyan-300",
  string: "text-emerald-300",
  punct: "text-gray-400",
};

const prop = (key, value) => [
  ["punct", "  "],
  ["key", key],
  ["punct", ": "],
  ...value,
  ["punct", ","],
];

const code = [
  [["comment", "// Senior Developer @ Quality Kiosk"]],
  [
    ["keyword", "const "],
    ["name", "developer"],
    ["punct", " = {"],
  ],
  prop("name", [["string", '"Ankit Tiwari"']]),
  prop("role", [["string", '"Full Stack Developer"']]),
  prop("location", [["string", '"Mumbai, India"']]),
  prop("stack", [
    ["punct", "["],
    ["string", '"React"'],
    ["punct", ", "],
    ["string", '"Node.js"'],
    ["punct", ", "],
    ["string", '"MongoDB"'],
    ["punct", "]"],
  ]),
  prop("cloud", [["string", '"AWS EC2"']]),
  prop("experience", [["string", '"4+ years"']]),
  [["punct", "};"]],
  [],
  [
    ["keyword", "export default "],
    ["name", "developer"],
    ["punct", ";"],
  ],
];

const chips = [
  { label: "React.js", dot: "bg-sky-400", position: "-top-5 right-24", delay: "0s" },
  { label: "Node.js", dot: "bg-emerald-400", position: "top-1/3 -right-10", delay: "-2s" },
  { label: "MongoDB", dot: "bg-green-500", position: "-bottom-6 left-8", delay: "-4s" },
  { label: "AWS EC2", dot: "bg-amber-400", position: "-bottom-3 -right-6", delay: "-3s" },
];

const CodeCard = () => (
  <div className="relative">
    <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-blue-500/25 to-cyan-400/20 blur-3xl" />

    <div
      className="relative animate-float rounded-2xl border border-white/10 bg-[#0b0d14]/90 shadow-2xl overflow-hidden"
      style={{ animationDuration: "8s" }}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-3 font-mono text-xs text-gray-500">
          developer.js
        </span>
      </div>
      <pre className="p-5 font-mono text-[13px] leading-7 overflow-x-auto">
        <code>
          {code.map((line, i) => (
            <div key={i} className="flex">
              <span className="w-8 shrink-0 select-none text-gray-600">
                {i + 1}
              </span>
              <span>
                {line.map(([type, text], j) => (
                  <span key={j} className={tokenClass[type]}>
                    {text}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </code>
      </pre>
    </div>

    {chips.map((chip) => (
      <div
        key={chip.label}
        className={`absolute ${chip.position} animate-float flex items-center gap-2 rounded-xl border border-white/10 bg-[#0b0d14]/95 px-3 py-2 text-sm font-medium text-gray-200 shadow-lg`}
        style={{ animationDelay: chip.delay }}
      >
        <span className={`h-2 w-2 rounded-full ${chip.dot}`} />
        {chip.label}
      </div>
    ))}
  </div>
);

export const Home = ({ isLoaded }) => {
  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center pt-28 pb-16 ${
        isLoaded ? "hero-ready" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-16 items-center">
          <div>
            <div
              className="hero-item inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300 mb-8"
              style={{ "--i": 0 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {profile.currently}
            </div>

            <h1
              className="hero-item text-5xl sm:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6"
              style={{ "--i": 1 }}
            >
              Hi, I'm
              <br />
              <span className="bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
                {profile.name}
              </span>
            </h1>

            <p
              className="hero-item text-xl md:text-2xl font-medium text-gray-200 mb-4"
              style={{ "--i": 2 }}
            >
              {profile.role}
            </p>

            <p
              className="hero-item font-mono text-base md:text-lg text-gray-400 mb-6 min-h-[1.75em]"
              style={{ "--i": 3 }}
            >
              <span className="text-cyan-400">&gt;</span> I build{" "}
              <span className="text-white">
                <Typewriter phrases={profile.buildPhrases} start={isLoaded} />
              </span>
            </p>

            <p
              className="hero-item text-gray-400 text-lg mb-10 max-w-xl"
              style={{ "--i": 4 }}
            >
              {profile.tagline}
            </p>

            <div
              className="hero-item flex flex-wrap gap-4 mb-10"
              style={{ "--i": 5 }}
            >
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded-lg font-medium transition hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-[0_0_24px_rgba(59,130,246,0.5)]"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-400 py-3 px-6 rounded-lg font-medium transition hover:-translate-y-0.5 hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
              >
                Get In Touch
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/15 text-gray-200 py-3 px-6 rounded-lg font-medium transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/5"
              >
                <DownloadIcon className="w-4 h-4" />
                Resume
              </a>
            </div>

            <div
              className="hero-item flex flex-wrap items-center gap-6"
              style={{ "--i": 6 }}
            >
              <SocialLinks />
              <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
                <MapPinIcon className="w-4 h-4" />
                {profile.location}
              </span>
            </div>
          </div>

          <div
            className="hero-item hidden lg:block"
            data-from="right"
            style={{ "--i": 3 }}
          >
            <CodeCard />
          </div>
        </div>

        <dl
          className="hero-item grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
          style={{ "--i": 7 }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col-reverse rounded-2xl border border-white/10 bg-[#0b0d14]/80 p-5 transition hover:border-blue-500/40"
            >
              <dt className="text-sm text-gray-400 mt-1">{stat.label}</dt>
              <dd className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                <CountUp value={stat.value} start={isLoaded} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
