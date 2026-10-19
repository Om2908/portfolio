# Om Italiya — Portfolio

A responsive React + Vite portfolio focused on full-stack development, AI agents and business automation.

## Run locally

```sh
npm ci
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

The build output is `dist/`. In the existing Vercel project, retain the Vite framework preset, `npm run build` build command and `dist` output directory. The included `vercel.json` supports the previous `/Projects`, `/Contact`, `/Certify` and `/Resume` URLs; the React app scrolls to their matching sections.

## Content and maintenance

- `src/App.jsx`: profile, current TechMonk role, services, project data and contact form.
- `src/App.css`: responsive layouts, light/dark themes and reduced-motion support.
- `src/Components/SocialLinks/om-portrait.png`: the supplied professional portrait, framed through CSS without changing the image.
- `src/Components/SocialLinks/Resume.pdf`: the original downloadable resume, retained from the existing repository. Its contents have not been updated.
- `index.html`: title, description, social metadata and canonical Vercel URL.
- `public/favicon.svg`: custom portfolio favicon.

The gallery contains six fictional interactive concept demos. TechMonk is shown as current employment based on the owner’s description; no employment dates, seniority, client logos, testimonials or performance metrics have been invented. The portfolio does not claim ownership of the TechMonk platform.

## Contact form

The form retains the original Formspree endpoint: `https://formspree.io/f/xovabzaq`. It includes required fields, email validation, a service selector, loading state, success and failure messages, and a direct-email fallback. Production delivery depends on the owner's existing Formspree account and domain configuration. No test inquiry was sent. Google Fonts supplies DM Sans and Manrope, with local sans-serif fallbacks.

## Validation

- Production build: passed.
- Desktop layout reviewed at approximately 1265px; mobile and tablet reviewed in 390px and 768px preview frames.
- Project filtering, dark/light theme switching, mobile menu opening/closing and section navigation checked in the browser.
- Empty contact submission checked: browser required-field validation blocked it.
- Contact service delivery and GitHub/Vercel publication are not verified.

## Apply the redesign

Use the full source ZIP as a replacement checkout, or apply the accompanying binary patch from the original repository root with `git apply --check` followed by `git apply`. The patch was prepared against the base commit recorded in the delivery notes. Commit the changes to your own GitHub repository and deploy through its existing Vercel integration.

## Project Lab additions

Six fictional interactive concepts are featured in the portfolio: Relay (support agent), FlowDesk (workflow automation), Forma (e-commerce), Daylight (task app), LeadPilot (sales-agent concept), and Slotly (booking app). Each has an AI-generated product mockup and a browser-only React prototype. Cards and detail dialogs explicitly identify concepts; they are not represented as completed client engagements or deployed commercial products. Agent responses and scoring use local sample rules, and workflow runs are simulations.

- `src/ProjectLab.jsx` contains the gallery, filters, native accessible project dialogs and the six interactive prototypes.
- `src/ProjectLab.css` styles responsive cards and demos.
- `public/projects/` contains six optimized JPEG visuals (1200 × 800), generated with the built-in ImageGen tool.
- `project-visuals.json` records the final prompt set, asset paths and generation mode.
- The four old repository projects and their collection tab have been removed from the portfolio. Only the six concept demos appear in the gallery.

Browser checks passed for support-agent responses, workflow completion, cart addition/removal and totals, task completion/creation, sample lead scoring, and booking confirmation. No external APIs, real calendar, checkout or LLM service is connected to these prototypes. Changes reset when the demo closes.

## Toolkit update

The owner confirmed the expanded toolkit. Skills are grouped into Languages, Frontend, Backend & APIs, Databases & cache, AI & automation, and Developer tools. Additions include TypeScript, Python, Java, SQL, PostgreSQL, MySQL, Redis, n8n, and LangChain. No proficiency levels or years of experience are assigned.

## Resume and Next.js update

The resume download option and its active import have been removed. The production build no longer includes the resume PDF. Next.js is included under Frontend in the toolkit, as requested by the owner.
