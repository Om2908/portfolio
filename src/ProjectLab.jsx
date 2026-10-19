import { useEffect, useRef, useState } from "react";
import {
  FiArrowUpRight,
  FiArrowRight,
  FiGithub,
  FiX,
  FiCpu,
  FiSend,
  FiCheck,
  FiMail,
  FiFileText,
  FiShoppingBag,
  FiWatch,
  FiBox,
  FiPlus,
  FiCalendar,
  FiClock,
  FiCheckCircle,
  FiPlay,
  FiRefreshCw,
} from "react-icons/fi";
import "./ProjectLab.css";

const concepts = [
  {
    id: "relay",
    name: "Relay",
    category: "AI agents",
    type: "AI customer support",
    tagline: "An answer, without the wait.",
    description:
      "A support-agent concept for product questions, order updates and a smooth handoff to a human. Try the simulated conversation.",
    tags: ["Conversational UI", "Support workflows", "Agent concept"],
    color: "#c8e3de",
    features: [
      "Intent-based sample replies",
      "Order and returns conversation",
      "Human handoff flow",
    ],
  },
  {
    id: "flowdesk",
    name: "FlowDesk",
    category: "Automation",
    type: "Business workflow automation",
    tagline: "From trigger to done.",
    description:
      "A visual workflow concept that turns a new lead or invoice into a sequence of connected steps. Run a simulated workflow.",
    tags: ["Workflow builder", "Execution timeline", "Automation"],
    color: "#dcd9f0",
    features: [
      "Two sample workflow recipes",
      "Animated step-by-step execution",
      "Execution status and replay",
    ],
  },
  {
    id: "forma",
    name: "Forma",
    category: "E-commerce",
    type: "Lifestyle e-commerce",
    tagline: "Everyday, considered.",
    description:
      "An editorial storefront concept for thoughtful everyday objects. Explore a small sample collection and build a cart.",
    tags: ["Product browsing", "Cart logic", "Storefront"],
    color: "#e7d8c7",
    features: [
      "Sample product collection",
      "Add and remove cart items",
      "Live quantity and subtotal calculations",
    ],
  },
  {
    id: "daylight",
    name: "Daylight",
    category: "Apps",
    type: "Daily planning app",
    tagline: "A little more room in your day.",
    description:
      "A mobile-first planning concept with a focused daily checklist, task creation and a clear view of your progress.",
    tags: ["Mobile-first UI", "Task management", "Progress"],
    color: "#efdbcf",
    features: [
      "Interactive daily checklist",
      "Add your own demo tasks",
      "Live completion progress",
    ],
  },
  {
    id: "leadpilot",
    name: "LeadPilot",
    category: "AI agents",
    type: "AI sales assistant",
    tagline: "Find the next conversation.",
    description:
      "A sales-agent concept that helps a team prioritise incoming leads. Score a sample pipeline and inspect the recommendations.",
    tags: ["Lead prioritisation", "CRM concept", "Agent workflow"],
    color: "#eadfc8",
    features: [
      "Sample lead pipeline",
      "Transparent scoring factors",
      "Suggested next actions",
    ],
  },
  {
    id: "slotly",
    name: "Slotly",
    category: "Apps",
    type: "Appointment booking app",
    tagline: "Good plans start here.",
    description:
      "A booking experience concept with simple date selection, available time slots and an instant demo confirmation.",
    tags: ["Booking flow", "Date selection", "Mobile UI"],
    color: "#e5ddf1",
    features: [
      "Choose a day and time",
      "Session duration selection",
      "Local confirmation with reset",
    ],
  },
];

function RelayDemo() {
  const [messages, setMessages] = useState([
    {
      role: "agent",
      text: "Hi! I’m Relay, a demo support assistant. Ask about an order, delivery, returns, or speaking to a person.",
    },
  ]);
  const [input, setInput] = useState("");
  const thread = useRef(null);
  useEffect(() => {
    if (thread.current) thread.current.scrollTop = thread.current.scrollHeight;
  }, [messages]);
  function reply(text) {
    if (!text.trim()) return;
    const value = text.toLowerCase();
    const answer = /human|person|team/.test(value)
      ? "In a connected product, this would create a handoff for the support team. This demo has recorded your handoff request locally."
      : /return|refund/.test(value)
        ? "For this sample store, unused items can be returned within 14 days. In a connected product, I would check the order and start the return request."
        : /deliver|ship/.test(value)
          ? "The sample delivery window is 3–5 business days. A connected agent would look up a live shipping estimate for your address."
          : /order|track/.test(value)
            ? "Sample order #1042 is packed and ready for dispatch. This is fictional demo data; no real order system is connected."
            : "I can demonstrate order tracking, delivery questions, returns and a human handoff. Choose a suggestion below to explore one.";
    setMessages((prev) => [
      ...prev,
      { role: "user", text: text.trim() },
      { role: "agent", text: answer },
    ]);
    setInput("");
  }
  return (
    <div className="demo-app relay-demo">
      <div className="demo-app-header">
        <span className="demo-app-logo">
          <FiCpu />
        </span>
        <div>
          <strong>Relay assistant</strong>
          <small>Sample support inbox</small>
        </div>
        <span className="demo-online">Demo</span>
      </div>
      <div className="chat-thread" aria-live="polite" ref={thread}>
        {messages.map((message, i) => (
          <div key={i} className={`chat-message ${message.role}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-suggestions">
        {["Track my order", "Returns policy", "Speak to a person"].map(
          (text) => (
            <button key={text} onClick={() => reply(text)}>
              {text}
            </button>
          ),
        )}
      </div>
      <form
        className="chat-input"
        onSubmit={(e) => {
          e.preventDefault();
          reply(input);
        }}
      >
        <input
          aria-label="Message Relay"
          placeholder="Ask a sample question…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxLength={300}
        />
        <button aria-label="Send demo message" disabled={!input.trim()}>
          <FiSend />
        </button>
      </form>
      <p className="demo-footnote">
        Simulated replies. No live AI model or customer data.
      </p>
    </div>
  );
}

const recipes = {
  "New lead": [
    {
      icon: FiMail,
      label: "Receive sample inquiry",
      detail: "Contact form trigger received",
    },
    {
      icon: FiCpu,
      label: "Classify the inquiry",
      detail: "Category: website project",
    },
    {
      icon: FiFileText,
      label: "Prepare CRM entry",
      detail: "Sample lead fields prepared",
    },
    {
      icon: FiCheckCircle,
      label: "Prepare a follow-up",
      detail: "Draft reply ready for review",
    },
  ],
  "New invoice": [
    {
      icon: FiFileText,
      label: "Receive sample invoice",
      detail: "Invoice upload trigger received",
    },
    {
      icon: FiCpu,
      label: "Read invoice fields",
      detail: "Vendor, amount and date extracted",
    },
    {
      icon: FiBox,
      label: "Check required fields",
      detail: "All sample fields present",
    },
    {
      icon: FiCheckCircle,
      label: "Prepare approval request",
      detail: "Sample request ready for review",
    },
  ],
};
function FlowDemo() {
  const [recipe, setRecipe] = useState("New lead");
  const [step, setStep] = useState(-1);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    if (!running) return;
    const timer = setInterval(() => setStep((prev) => prev + 1), 650);
    return () => clearInterval(timer);
  }, [running]);
  useEffect(() => {
    if (step >= 3) setRunning(false);
  }, [step]);
  return (
    <div className="demo-app flow-demo">
      <div className="demo-app-header">
        <span className="demo-app-logo">
          <FiRefreshCw />
        </span>
        <div>
          <strong>FlowDesk</strong>
          <small>Workflow playground</small>
        </div>
      </div>
      <label className="demo-label">
        Choose a recipe
        <select
          value={recipe}
          disabled={running}
          onChange={(e) => {
            setRecipe(e.target.value);
            setStep(-1);
          }}
        >
          {Object.keys(recipes).map((name) => (
            <option key={name}>{name}</option>
          ))}
        </select>
      </label>
      <div className="flow-timeline" aria-live="polite">
        {recipes[recipe].map((node, i) => (
          <div
            className={`flow-step ${step >= i ? "complete" : ""}`}
            key={node.label}
          >
            <span>{step >= i ? <FiCheck /> : <node.icon />}</span>
            <div>
              <strong>{node.label}</strong>
              <small>{step >= i ? node.detail : "Waiting for trigger"}</small>
            </div>
            <small>{step >= i ? "Done" : `0${i + 1}`}</small>
          </div>
        ))}
      </div>
      <button
        className="demo-primary"
        disabled={running}
        onClick={() => {
          setStep(-1);
          setRunning(true);
        }}
      >
        <FiPlay />
        {running
          ? "Running simulation…"
          : step >= 3
            ? "Run again"
            : "Run demo workflow"}
      </button>
      <p className="demo-footnote" role="status">
        {step >= 3 ? "Simulation complete. " : ""}No external emails, CRM
        entries or invoices are created.
      </p>
    </div>
  );
}

const products = [
  { name: "Everyday tote", price: 89, icon: FiShoppingBag, color: "#e9ddce" },
  { name: "Studio watch", price: 129, icon: FiWatch, color: "#e1e3d9" },
  { name: "Desk object", price: 45, icon: FiBox, color: "#e9e1d8" },
];
const money = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
function StoreDemo() {
  const [cart, setCart] = useState([0, 0, 0]);
  const [notice, setNotice] = useState("");
  const total = products.reduce((sum, p, i) => sum + p.price * cart[i], 0);
  const count = cart.reduce((a, b) => a + b, 0);
  function update(i, delta) {
    setCart((prev) =>
      prev.map((n, index) => (index === i ? Math.max(0, n + delta) : n)),
    );
    setNotice("");
  }
  return (
    <div className="demo-app store-demo">
      <div className="demo-app-header">
        <div>
          <strong className="forma-logo">forma.</strong>
          <small>Objects for everyday living</small>
        </div>
        <span className="cart-count">
          <FiShoppingBag />
          {count}
        </span>
      </div>
      <div className="store-collection">
        {products.map((p, i) => (
          <article key={p.name}>
            <div className="store-product-art" style={{ background: p.color }}>
              <p.icon />
            </div>
            <strong>{p.name}</strong>
            <div>
              <span>{money(p.price)}</span>
              <button
                onClick={() => update(i, 1)}
                aria-label={`Add ${p.name} to cart`}
              >
                <FiPlus />
              </button>
            </div>
          </article>
        ))}
      </div>
      <div className="cart-panel">
        <h4>
          Your bag{" "}
          <span>
            {count} {count === 1 ? "item" : "items"}
          </span>
        </h4>
        {count === 0 ? (
          <p className="empty-cart">A few good things. Start with one.</p>
        ) : (
          products.map(
            (p, i) =>
              cart[i] > 0 && (
                <div className="cart-line" key={p.name}>
                  <span>{p.name}</span>
                  <div>
                    <button
                      onClick={() => update(i, -1)}
                      aria-label={`Remove one ${p.name}`}
                    >
                      −
                    </button>
                    <span>{cart[i]}</span>
                    <button
                      onClick={() => update(i, 1)}
                      aria-label={`Add one ${p.name}`}
                    >
                      +
                    </button>
                  </div>
                  <strong>{money(p.price * cart[i])}</strong>
                </div>
              ),
          )
        )}
        <div className="cart-total">
          <span>Subtotal</span>
          <strong>{money(total)}</strong>
        </div>
      </div>
      <button
        className="demo-primary"
        disabled={!count}
        onClick={() =>
          setNotice(
            "Demo checkout ready. No payment is taken and no order is placed.",
          )
        }
      >
        Preview checkout <FiArrowRight />
      </button>
      <p className="demo-footnote" role="status">
        {notice ||
          "Sample catalog and prices in USD. No payment system connected."}
      </p>
    </div>
  );
}

function TaskDemo() {
  const [tasks, setTasks] = useState([
    { name: "Plan the next product sprint", done: true },
    { name: "Review the homepage design", done: false },
    { name: "Build something meaningful", done: false },
  ]);
  const [input, setInput] = useState("");
  const done = tasks.filter((t) => t.done).length;
  return (
    <div className="demo-app task-demo">
      <div className="demo-app-header">
        <div>
          <strong>
            daylight<span>☀</span>
          </strong>
          <small>Your space to focus</small>
        </div>
        <span className="demo-online">Today</span>
      </div>
      <h4>Make room for what matters.</h4>
      <div className="task-progress">
        <div>
          <span>Daily progress</span>
          <strong>
            {done}/{tasks.length}
          </strong>
        </div>
        <progress
          value={done}
          max={tasks.length}
          aria-label="Tasks completed"
        />
      </div>
      <div className="task-list">
        {tasks.map((task, i) => (
          <label className={task.done ? "done" : ""} key={i}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() =>
                setTasks((prev) =>
                  prev.map((t, index) =>
                    index === i ? { ...t, done: !t.done } : t,
                  ),
                )
              }
            />
            <span>{task.name}</span>
          </label>
        ))}
      </div>
      <form
        className="new-task"
        onSubmit={(e) => {
          e.preventDefault();
          if (input.trim()) {
            setTasks((prev) => [...prev, { name: input.trim(), done: false }]);
            setInput("");
          }
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-label="New demo task"
          placeholder="Add a small next step…"
          maxLength={80}
          required
        />
        <button aria-label="Add task">
          <FiPlus />
        </button>
      </form>
      <p className="demo-footnote">
        Try completing a task or adding your own. Changes reset when closed.
      </p>
    </div>
  );
}

const leads = [
  {
    name: "Northstar Studio",
    detail: "Business email · 24-person team",
    fit: 88,
    next: "Invite to a discovery call",
    tier: "High fit",
  },
  {
    name: "Mira Retail",
    detail: "Business email · 12-person team",
    fit: 72,
    next: "Share the integration overview",
    tier: "Good fit",
  },
  {
    name: "Solo Creator",
    detail: "Personal email · 1-person team",
    fit: 46,
    next: "Send a self-serve introduction",
    tier: "Explore",
  },
];
function LeadsDemo() {
  const [scored, setScored] = useState(false);
  const [selected, setSelected] = useState(0);
  return (
    <div className="demo-app leads-demo">
      <div className="demo-app-header">
        <span className="demo-app-logo">
          <FiCpu />
        </span>
        <div>
          <strong>LeadPilot</strong>
          <small>Pipeline intelligence</small>
        </div>
        <span className="demo-online">3 sample leads</span>
      </div>
      <p className="leads-intro">A clearer first conversation.</p>
      <div className="leads-list">
        {leads.map((lead, i) => (
          <button
            key={lead.name}
            className={selected === i ? "selected" : ""}
            onClick={() => setSelected(i)}
          >
            <span className="lead-avatar">
              {lead.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
            <span>
              <strong>{lead.name}</strong>
              <small>{lead.detail}</small>
            </span>
            <span className="lead-score">{scored ? lead.fit : "—"}</span>
          </button>
        ))}
      </div>
      <div className="lead-insight">
        <span className="lab-eyebrow">
          {scored ? "SUGGESTED NEXT ACTION" : "SCORING PREVIEW"}
        </span>
        <h4>{scored ? leads[selected].tier : "Review before reaching out"}</h4>
        <p>
          {scored
            ? leads[selected].next
            : "Run the sample scoring to see a fictional recommendation based on company size and email type."}
        </p>
        {scored && (
          <small>Demo rule-based score, not a live AI prediction.</small>
        )}
      </div>
      <button className="demo-primary" onClick={() => setScored(!scored)}>
        <FiCpu />
        {scored ? "Reset sample scores" : "Score sample leads"}
      </button>
      <p className="demo-footnote">
        Fictional companies. No outreach or CRM updates are sent.
      </p>
    </div>
  );
}
function BookingDemo() {
  const [day, setDay] = useState(0);
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState(30);
  const [confirmed, setConfirmed] = useState(false);
  const days = Array.from({ length: 5 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return d;
  });
  return (
    <div className="demo-app booking-demo">
      <div className="demo-app-header">
        <span className="demo-app-logo">
          <FiCalendar />
        </span>
        <div>
          <strong>slotly</strong>
          <small>A simpler way to meet</small>
        </div>
      </div>
      {confirmed ? (
        <div className="booking-confirmation" role="status">
          <FiCheckCircle />
          <h4>You’re on the demo calendar.</h4>
          <p>
            {days[day].toLocaleDateString("en-US", {
              weekday: "long",
              month: "short",
              day: "numeric",
            })}
            <br />
            {time} · {duration} minutes · IST
          </p>
          <button
            className="demo-primary"
            onClick={() => {
              setConfirmed(false);
              setTime("");
            }}
          >
            Try another booking
          </button>
        </div>
      ) : (
        <>
          <h4>A good time for a good conversation.</h4>
          <p className="booking-timezone">
            <FiClock /> Times shown in India Standard Time
          </p>
          <div className="duration-picker" aria-label="Session length">
            {[30, 60].map((n) => (
              <button
                key={n}
                aria-pressed={duration === n}
                className={duration === n ? "active" : ""}
                onClick={() => setDuration(n)}
              >
                {n} minutes
              </button>
            ))}
          </div>
          <div className="booking-days" aria-label="Choose a day">
            {days.map((d, i) => (
              <button
                key={i}
                aria-pressed={day === i}
                className={day === i ? "active" : ""}
                onClick={() => {
                  setDay(i);
                  setTime("");
                }}
              >
                <small>
                  {d.toLocaleDateString("en-US", { weekday: "short" })}
                </small>
                <strong>{d.getDate()}</strong>
                <small>
                  {d.toLocaleDateString("en-US", { month: "short" })}
                </small>
              </button>
            ))}
          </div>
          <div className="booking-times" aria-label="Choose a time">
            {["10:00 AM", "11:30 AM", "02:00 PM", "04:00 PM"].map((t) => (
              <button
                key={t}
                className={time === t ? "active" : ""}
                aria-pressed={time === t}
                onClick={() => setTime(t)}
              >
                {t}
              </button>
            ))}
          </div>
          <button
            className="demo-primary"
            disabled={!time}
            onClick={() => setConfirmed(true)}
          >
            Confirm demo booking <FiArrowRight />
          </button>
        </>
      )}
      <p className="demo-footnote">
        Sample availability. No real appointment or calendar event is created.
      </p>
    </div>
  );
}
const demos = {
  relay: RelayDemo,
  flowdesk: FlowDemo,
  forma: StoreDemo,
  daylight: TaskDemo,
  leadpilot: LeadsDemo,
  slotly: BookingDemo,
};

export default function ProjectLab() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  useEffect(() => {
    if (!selected) return;
    const modal = dialog.current;
    const overflow = document.body.style.overflow;
    modal.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      modal.close();
      document.body.style.overflow = overflow;
    };
  }, [selected]);
  const categories = ["All", "Apps", "AI agents", "Automation", "E-commerce"];
  const entries = concepts.filter((p) => filter === "All" || p.category === filter);
  const Demo = selected ? demos[selected.id] : null;
  return (
    <>
      <div className="project-toolbar">
        <div className="filters" aria-label="Filter projects">
          {categories.map((item) => (
            <button
              className={filter === item ? "filter active" : "filter"}
              aria-pressed={filter === item}
              key={item}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <a
          className="text-link"
          href="https://github.com/Om2908"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <FiGithub />
        </a>
      </div>
        <p className="lab-collection-note">
          An exploration of what I can build with you. These are interactive
          concept prototypes with AI-generated mockups, not completed client
          engagements.
        </p>
      <div className="projects-grid lab-grid" aria-live="polite">
        {entries.map((project, index) => (
            <article className="project lab-project" key={project.id}>
              <button
                className="lab-visual"
                style={{ background: project.color }}
                onClick={() => setSelected(project)}
                aria-label={`Explore ${project.name} concept demo`}
              >
                <img
                  src={`/projects/${project.id}.jpg`}
                  alt={`${project.name} — AI-generated ${project.type.toLowerCase()} concept mockup`}
                  loading="lazy"
                  width="1200"
                  height="800"
                />
                <span className="concept-badge">CONCEPT DEMO</span>
                <span className="lab-open">
                  <FiArrowUpRight />
                </span>
                <span className="lab-visual-caption">
                  {project.type}
                  <span>0{index + 1} / 06</span>
                </span>
              </button>
              <div className="lab-project-title">
                <div>
                  <p className="project-type">{project.category}</p>
                  <h3>
                    <button onClick={() => setSelected(project)}>
                      {project.name}
                      <FiArrowUpRight />
                    </button>
                  </h3>
                </div>
                <span
                  className="lab-mini-dot"
                  style={{ background: project.color }}
                />
              </div>
              <p className="lab-tagline">{project.tagline}</p>
              <p className="project-description">{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <button
                className="lab-demo-link"
                onClick={() => setSelected(project)}
              >
                Try the concept <FiArrowRight />
              </button>
            </article>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="project-dialog"
        onCancel={() => setSelected(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setSelected(null);
        }}
        aria-labelledby="project-dialog-title"
      >
        {selected && (
          <>
            <div className="dialog-top">
              <span className="lab-eyebrow">PROJECT LAB / CONCEPT DEMO</span>
              <button
                className="dialog-close"
                onClick={() => setSelected(null)}
                aria-label="Close project demo"
              >
                <FiX />
              </button>
            </div>
            <div className="dialog-body">
              <div className="dialog-story">
                <img
                  src={`/projects/${selected.id}.jpg`}
                  alt={`${selected.name} concept product mockup`}
                  width="1200"
                  height="800"
                />
                <p className="mockup-note">
                  AI-generated concept visual · the demo is a simplified
                  prototype
                </p>
                <p className="project-type">{selected.type}</p>
                <h2 id="project-dialog-title">{selected.name}</h2>
                <p className="dialog-tagline">{selected.tagline}</p>
                <p>{selected.description}</p>
                <ul>
                  {selected.features.map((feature) => (
                    <li key={feature}>
                      <FiCheck />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="dialog-disclosure">
                  Designed and implemented for this portfolio as a browser-only
                  prototype. No external services, payments or business systems
                  are connected.
                </p>
                <a
                  href="#contact"
                  className="text-link"
                  onClick={() => setSelected(null)}
                >
                  Build something like this with me <FiArrowUpRight />
                </a>
              </div>
              <div className={`dialog-playground playground-${selected.id}`}>
                <div className="playground-title">
                  <span className="playground-dot" />
                  INTERACTIVE PROTOTYPE
                </div>
                <Demo key={selected.id} />
              </div>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
