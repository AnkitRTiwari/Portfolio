import { useState } from "react";
import { Reveal } from "../Reveal";
import { Section, SectionHeading } from "../ui";
import { SocialLinks } from "../SocialLinks";
import { MailIcon, MapPinIcon } from "../Icons";
import { profile } from "../../data/portfolio";
import emailjs from "@emailjs/browser";

const inputClass =
  "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setStatus("error");
        console.error("EmailJS error:", error);
      });
  };

  return (
    <Section id="contact">
      <SectionHeading index="06" title="Contact" subtitle="Get In Touch" />

      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-16">
        <Reveal variant="left" className="md:col-span-2 space-y-6">
          <h3 className="text-2xl font-bold text-white">
            Let's build something together.
          </h3>
          <p className="text-gray-400">
            Have a project in mind, a role to discuss, or just want to say
            hello? Send a message and I'll get back to you.
          </p>

          <div className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
            >
              <span className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400">
                <MailIcon className="w-5 h-5" />
              </span>
              {profile.email}
            </a>
            <p className="flex items-center gap-3 text-gray-300">
              <span className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400">
                <MapPinIcon className="w-5 h-5" />
              </span>
              {profile.location}
            </p>
          </div>

          <SocialLinks />
        </Reveal>

        <Reveal variant="right" delay={120} className="md:col-span-3">
          <form
            className="space-y-5 rounded-2xl border border-white/10 bg-[#0b0d14]/80 p-6 md:p-8"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className={inputClass}
                placeholder="Your name"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className={inputClass}
                placeholder="you@example.com"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className={inputClass}
                placeholder="Your message..."
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-medium transition hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            <div aria-live="polite">
              {status === "success" && (
                <p className="text-sm text-emerald-400">
                  Thank you so much for reaching out! I'll reply soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400">
                  Something went wrong. Please try again, or email me at{" "}
                  <a
                    href={`mailto:${profile.email}`}
                    className="underline hover:text-red-300"
                  >
                    {profile.email}
                  </a>
                  .
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
};
