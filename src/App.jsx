import { useEffect, useState } from "react";
import {
  FiArrowUpRight,
  FiArrowRight,
  FiArrowDown,
  FiGithub,
  FiLinkedin,
  FiMenu,
  FiX,
  FiCode,
  FiCpu,
  FiLayers,
  FiCheck,
  FiSun,
  FiMoon,
} from "react-icons/fi";
import portrait from "./Components/SocialLinks/om-portrait.png";
import "./App.css";
import ProjectLab from "./ProjectLab";

const nav = [
  ["work", "Work"],
  ["services", "Services"],
  ["about", "About"],
  ["contact", "Contact"],
];
const services = [
  {
    icon: FiCpu,
    title: "AI agents & automation",
    text: "Turn repetitive business processes into connected workflows. AI agents and API integrations built around how your business works.",
    tags: "AI agents / Workflows / Integrations",
  },
  {
    icon: FiCode,
    title: "Web & app development",
    text: "From your first business website to a custom application. Thoughtful interfaces, responsive experiences and maintainable code.",
    tags: "Business websites / Web apps / MVPs",
  },
  {
    icon: FiLayers,
    title: "Backend & integrations",
    text: "Connect the parts behind your product. REST APIs, database-backed features and integrations that keep information moving.",
    tags: "Node.js / REST APIs / MongoDB",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState("idle");
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("om-theme") || "dark";
    } catch {
      return "dark";
    }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("om-theme", theme);
    } catch {
      /* Storage is optional. */
    }
  }, [theme]);
  useEffect(() => {
    const legacy = {
      "/Projects": "work",
      "/Contact": "contact",
      "/Certify": "skills",
      "/Resume": "about",
    };
    const id = legacy[window.location.pathname] || window.location.hash.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView();
    const close = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  async function submitInquiry(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setFormState("sending");
    try {
      const response = await fetch("https://formspree.io/f/xovabzaq", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Could not send");
      setFormState("sent");
      form.reset();
    } catch {
      setFormState("error");
    }
  }
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="wordmark" href="#home" aria-label="Om Italiya home">
            om<span>.</span>
          </a>
          <nav
            className={menuOpen ? "navigation open" : "navigation"}
            id="main-navigation"
            aria-label="Main navigation"
          >
            {nav.map(([id, title]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {title}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <button
              className="icon-button theme-toggle"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </button>
            <a className="header-cta" href="#contact">
              Let’s talk <FiArrowUpRight />
            </a>
            <button
              className="icon-button menu-button"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="main-navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </header>
      <main id="main">
        <section
          className="hero container"
          id="home"
          aria-labelledby="hero-title"
        >
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" /> Software developer · AI &
              automation
            </div>
            <h1 id="hero-title">
              I build digital
              <br />
              products.
              <br />
              <span>
                And make them
                <br className="desktop-break" /> work smarter.
              </span>
            </h1>
            <p className="hero-intro">
              Hi, I’m <strong>Om Italiya.</strong> I turn ideas into websites,
              apps and AI-powered workflows that help businesses move forward.
            </p>
            <div className="hero-buttons">
              <a className="button primary" href="#work">
                Explore my work <FiArrowUpRight />
              </a>
              <a className="text-link" href="#contact">
                Have a project? <FiArrowRight />
              </a>
            </div>
            <div className="hero-note">
              <span className="tiny-avatar">
                <img src={portrait} alt="" />
              </span>
              <span>
                Currently building AI agents & business automation at{" "}
                <a href="https://techmonk.io/" target="_blank" rel="noreferrer">
                  TechMonk <FiArrowUpRight />
                </a>
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <div className="portrait-topline">
                <span>THE DEVELOPER BEHIND THE CODE</span>
                <span>01 / OM</span>
              </div>
              <img
                className="portrait"
                src={portrait}
                alt="Om Italiya wearing a navy suit and white shirt"
                fetchPriority="high"
              />
              <div className="portrait-caption">
                <div>
                  <strong>Om Italiya</strong>
                  <span>Software Developer</span>
                </div>
                <span className="portrait-arrow">
                  <FiArrowUpRight />
                </span>
              </div>
            </div>
            <div
              className="workflow-card"
              aria-label="Illustrative business automation workflow"
            >
              <span className="workflow-label">
                <FiCpu /> BUILT TO CONNECT
              </span>
              <div className="workflow-nodes">
                <span>Business need</span>
                <FiArrowRight />
                <span className="agent-node">AI agent</span>
                <FiArrowRight />
                <FiCheck className="workflow-check" />
              </div>
              <span className="workflow-footnote">
                Less busywork. More possibility.
              </span>
            </div>
            <div className="visual-coordinate">
              BASED IN GUJARAT, INDIA · WORKING BEYOND BORDERS
            </div>
          </div>
          <a className="scroll-cue" href="#work">
            <FiArrowDown /> Scroll to explore
          </a>
        </section>
        <div className="expertise-strip">
          <div className="container">
            <span>IDEAS TO IMPLEMENTATION</span>
            <p>
              Full-stack development <i /> AI agents <i /> Business automation{" "}
              <i /> API integrations
            </p>
          </div>
        </div>
        <section
          className="section work-section"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">01 / SELECTED WORK</p>
                <h2 id="work-title">
                  Ideas into experiences.
                  <br />
                  <span>Explore the possibilities.</span>
                </h2>
              </div>
              <p className="section-intro">
                Interactive concepts for apps, AI agents, business automation
                and e-commerce. Explore each idea and try the experience.
              </p>
            </div>
            <ProjectLab />
          </div>
        </section>
        <section
          className="section services-section container"
          id="services"
          aria-labelledby="services-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / HOW I CAN HELP</p>
              <h2 id="services-title">
                Your next idea.
                <br />
                <span>Let’s build it right.</span>
              </h2>
            </div>
            <p className="section-intro">
              A business website, a custom product, or a workflow that gives
              your team time back.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <article className="service" key={service.title}>
                <div className="service-top">
                  <service.icon />
                  <span>0{index + 1}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="service-tags">{service.tags}</span>
              </article>
            ))}
          </div>
          <div className="process">
            <p className="eyebrow">A CLEAR PATH FROM IDEA TO LAUNCH</p>
            <div>
              {[
                ["Discover", "Understand the problem and define the scope."],
                ["Build", "Develop in focused steps, with regular reviews."],
                ["Launch", "Test, deliver and plan what comes next."],
              ].map(([title, description], index) => (
                <article key={title}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                  {index < 2 && <FiArrowRight />}
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          className="section about-section"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="container about-grid">
            <div className="about-title">
              <p className="eyebrow">03 / A LITTLE ABOUT ME</p>
              <h2 id="about-title">
                Curious mind.
                <br />
                Practical builder.
              </h2>
              <div className="about-signature">
                Om Italiya<span>Software Developer · Gujarat, India</span>
              </div>
            </div>
            <div className="about-copy">
              <p className="large-copy">
                I enjoy connecting good software with the way businesses
                actually work.
              </p>
              <p>
                My work spans full-stack development, AI agents and business
                automation. I like taking a problem apart, finding the right
                approach and turning it into a useful, approachable product.
              </p>
              <div className="experience">
                <div className="experience-heading">
                  <span className="status-dot" />
                  <span>CURRENTLY</span>
                </div>
                <h3>AI Agents & Business Automation</h3>
                <a href="https://techmonk.io/" target="_blank" rel="noreferrer">
                  TechMonk <FiArrowUpRight />
                </a>
                <p>
                  Building AI agents and automating business workflows, with a
                  focus on connecting software to practical business needs.
                </p>
              </div>
              <div className="skill-groups" id="skills">
                <h3>My toolkit</h3>
                <div className="toolkit-grid">
                  {[
                    {
                      category: "Languages",
                      skills: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
                    },
                    {
                      category: "Frontend",
                      skills: ["React", "Next.js", "HTML & CSS", "Tailwind CSS"],
                    },
                    {
                      category: "Backend & APIs",
                      skills: ["Node.js", "Express", "REST APIs"],
                    },
                    {
                      category: "Databases & cache",
                      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
                    },
                    {
                      category: "AI & automation",
                      skills: ["AI agents", "Workflow automation", "n8n", "LangChain"],
                    },
                    {
                      category: "Developer tools",
                      skills: ["Git", "GitHub", "Postman"],
                    },
                  ].map((group) => (
                    <div className="toolkit-category" key={group.category}>
                      <h4>{group.category}</h4>
                      <div className="tags">
                        {group.skills.map((skill) => (
                          <span key={skill}>{skill}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="section contact-section container"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-copy">
            <p className="eyebrow">04 / LET’S MAKE IT HAPPEN</p>
            <h2 id="contact-title">
              Something
              <br />
              in mind<span>?</span>
              <br />
              Let’s talk.
            </h2>
            <p>
              Tell me what you’re building, what you need and where you want to
              go.
            </p>
            <a className="contact-email" href="mailto:omitaliya2525@gmail.com">
              omitaliya2525@gmail.com <FiArrowUpRight />
            </a>
            <div className="social-links">
              <a
                href="https://github.com/Om2908"
                target="_blank"
                rel="noreferrer"
              >
                <FiGithub /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/om-italiya-0a68b3253/"
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin /> LinkedIn
              </a>
              <a href="tel:+917046632296">
                Call me <FiArrowUpRight />
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={submitInquiry}>
            <div className="form-row">
              <label htmlFor="name">
                Your name
                <input
                  id="name"
                  name="name"
                  placeholder="How should I call you?"
                  autoComplete="name"
                  required
                  maxLength={100}
                />
              </label>
              <label htmlFor="email">
                Email address
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  autoComplete="email"
                  required
                  maxLength={200}
                />
              </label>
            </div>
            <label htmlFor="service">
              What can I help with?
              <select name="service" id="service" defaultValue="" required>
                <option value="" disabled>
                  Select a service
                </option>
                <option>AI agents & business automation</option>
                <option>Website development</option>
                <option>Web / mobile application</option>
                <option>Backend & API integrations</option>
                <option>Something else</option>
              </select>
            </label>
            <label htmlFor="message">
              A little about your project
              <textarea
                name="message"
                id="message"
                placeholder="Your idea, goals, timeline and budget…"
                rows={4}
                required
                minLength={15}
                maxLength={5000}
              />
            </label>
            <button
              className="button primary submit-button"
              type="submit"
              disabled={formState === "sending"}
            >
              {formState === "sending" ? "Sending…" : "Send project inquiry"}
              <FiArrowUpRight />
            </button>
            <p className="form-note">
              Sent securely through Formspree. Prefer email?{" "}
              <a href="mailto:omitaliya2525@gmail.com">Write to me directly.</a>
            </p>
            <div className={`form-status ${formState}`} role="status">
              {formState === "sent" &&
                "Thanks! Your inquiry has been sent. I’ll get back to you by email."}
              {formState === "error" && (
                <>
                  Your message could not be sent. Please try again or{" "}
                  <a href="mailto:omitaliya2525@gmail.com">email me directly</a>
                  .
                </>
              )}
            </div>
          </form>
        </section>
      </main>
      <footer className="container footer">
        <a className="wordmark" href="#home">
          om<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} Om Italiya. Built with intention.</p>
        <a className="text-link" href="#home">
          Back to top <FiArrowUpRight />
        </a>
      </footer>
    </>
  );
}
export default App;
