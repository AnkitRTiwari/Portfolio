# Ankit Tiwari — Portfolio

Personal portfolio site built with React, Vite and Tailwind CSS. It has a typing-style loading screen, scroll-reveal sections (Home, About, Skills, Experience, Projects, Education, Contact), a mobile menu, and a contact form that sends email through [EmailJS](https://www.emailjs.com/).

## Tech stack

- [React 19](https://react.dev/)
- [Vite 7](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/) (via `@tailwindcss/vite`)
- [@emailjs/browser](https://www.npmjs.com/package/@emailjs/browser)

## Getting started

Requires [Node.js](https://nodejs.org/) 20.19+ or 22.12+.

```bash
git clone https://github.com/AnkitRTiwari/Portfolio.git
cd Portfolio
npm install
npm run dev
```

The dev server runs at http://localhost:5173.

## Environment variables

The contact form needs EmailJS credentials. Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

You can find these values in your EmailJS dashboard. The template receives `name`, `email` and `message` fields. `.env` is gitignored, so set the same variables in your hosting provider's settings when you deploy.

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the dev server                 |
| `npm run build`   | Build for production into `dist/`    |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

## Editing content

All text on the site (profile, stats, skills, experience, projects, education and certifications) lives in [`src/data/portfolio.js`](src/data/portfolio.js). Edit that file to update the portfolio; the section components read from it.

To update the resume, replace `public/resume.pdf` with the new file, keeping the same name.

## Project structure

```
public/
  favicon.svg
  resume.pdf              # Linked from the navbar and hero
src/
  App.jsx                 # Page layout and loading state
  index.css               # Tailwind import, animations, reveal styles
  data/
    portfolio.js          # All site content
  components/
    LoadingScreen.jsx
    AnimatedBackground.jsx  # Drifting glows + canvas particle network
    Navbar.jsx              # Scroll progress bar, active-section highlight
    MobileMenu.jsx
    Footer.jsx
    Reveal.jsx              # Scroll-triggered entrance animations
    CountUp.jsx             # Animated hero stats
    Typewriter.jsx          # Rotating "I build ..." phrases
    SocialLinks.jsx
    Icons.jsx               # Inline SVG icons
    ui.jsx                  # Section, SectionHeading, Card, Tag
    sections/
      Home.jsx
      About.jsx
      Skills.jsx
      Experience.jsx
      Projects.jsx
      Education.jsx
      Contact.jsx
```
