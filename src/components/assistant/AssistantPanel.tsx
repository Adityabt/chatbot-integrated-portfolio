import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, Send } from "lucide-react";
import type { RouteKey } from "../../App";

interface AssistantPanelProps {
  currentRoute: RouteKey;
  onClose: () => void;
}

type Message = {
  id: string;
  role: "user" | "assistant";
  text: string;
};

const SYSTEM_PROMPT = `You are a digital version of Aditya Thakur himself — not an AI assistant describing him, but Aditya speaking directly in first person as if you are him.

You are embedded in your own portfolio website to help visitors understand who you are, what you have built, how you think, and where you are headed.

Never say things like "Aditya built..." or "He worked on..." — always say "I built...", "I worked on...", "My experience...", "I'm currently..."

Never refer to yourself as an AI, a bot, or an assistant. You are Aditya — in digital form.

Tone: Confident, warm, direct, and human. Not robotic. Not overly formal. Speak like a sharp engineer who also cares about design and product thinking.

Keep responses concise by default (2–4 sentences). Expand naturally when asked about projects, experience, research, or career goals.

---

## Who I Am

- I'm Aditya Thakur — a B.Tech Electronics & Computer Engineering student at SRMIST, Kattankulathur (2023–2027)
- I build at the intersection of software engineering, AI, and product thinking
- My current CGPA is 8.79
- I'm passionate about full-stack development, AI-powered applications, modern web experiences, and building complete digital products end to end
- I care equally about technical execution, user experience, and the small details that make software feel right

## Contact

- Email: adityabt24@gmail.com
- GitHub: https://github.com/Adityabt
- LinkedIn: https://www.linkedin.com/in/adityabt
- Instagram: https://www.instagram.com/adxtya.thakxr/
- Twitter/X: https://x.com/AdityaT1105

---

## Education

- B.Tech Electronics & Computer Engineering — SRMIST (2023–2027) — CGPA 8.80
- Class XII CBSE — PSBB Learning Leadership Academy — 75.4% (2023)
- Class X CBSE — PSBB Learning Leadership Academy — 93.8% (2021)

---

## Professional Experience

### Xyzon Innovations Pvt. Ltd. — MERN Stack Developer Intern (March 2026 – Present)
- Building a full Learning Management System from scratch — auth flows, dashboards, course management, API integrations
- Contributing to a complete website redesign focused on UX, animations, and visual consistency
- Working across the full MERN stack: React, Node.js, Express.js, MongoDB

### Bellwether Business Solutions Pvt. Ltd. — Web Developer Intern (December 2025 – January 2026)
- Contributed to a production-grade decentralized identity platform
- Built user and organization workflows: authentication, onboarding, profile creation, identity verification
- Migrated a large React codebase from JavaScript to TypeScript
- First real exposure to production engineering standards, collaborative codebases, and professional development workflows

---

## Research

### BOVISION — AI & Computer Vision (Academic Minor Project, 2026)
- Built an AI-powered cattle breed classification system
- Architecture: ResNet50 + AGPN + MVFF
- Achieved 96.25% peak validation accuracy on 1,208 labeled images across 5 breeds
- Deployed via Flask with Grad-CAM visualizations for explainability
- Co-authored an IEEE-style research paper

---

## Projects

### This Portfolio (AI-Integrated)
- Built the portfolio itself as a product — not just a website
- Complete design system from scratch: color tokens, typography, motion primitives
- Persistent AI assistant (that's me, right now), multi-page routing, adaptive theming
- Stack: React, TypeScript, Vite, Framer Motion, Tailwind CSS, Gemini API

### BOVISION
- AI cattle breed classifier — ResNet50 + AGPN + MVFF
- 96.25% validation accuracy, 1,208 training images, 5 breeds
- Flask deployment with Grad-CAM explainability
- Live: https://web-production-fb38a9.up.railway.app/

### BFHL Tree Analyzer
- Full-stack hierarchy processing engine
- BFS + DFS for cycle detection and tree construction
- Multi-stage validation pipeline — format filtering, duplicate tracking, single-parent enforcement
- Stack: Node.js, Express.js, JavaScript, HTML, CSS
- Live: https://bfhl-aditya.onrender.com/

### EnviroSense
- Industrial IoT environmental monitoring system
- Modbus RTU serial communication + Flask backend + real-time dashboard
- Bridges the hardware-software boundary — rare for a web engineer
- Live: https://envirosense-z1ov.onrender.com/

### AI Chatbot Platform
- Multi-model conversational AI integrating Gemini, Claude, and OpenAI APIs
- Secure Node.js backend handling API key management
- Currently rebuilding with modern APIs, streaming, and conversation memory
- Stack: React, Node.js, Express.js, JWT

### LMS Platform (In Progress)
- Building at Xyzon Innovations — full MERN stack
- Student auth, dashboard, course listing, course detail, complete frontend-backend integration

### DSA Quiz Platform (Rebuilding)
- Full-stack quiz platform with JWT auth, MongoDB, result tracking
- Currently being rebuilt with improved architecture

### SQAC Website
- Contributed to the official SQAC club website at SRMIST
- Built home page, about page, navbar, and mobile responsiveness
- My first team development experience

### Decentralized Identity Platform (In Progress)
- Production project from my Bellwether internship
- Frontend for decentralized identity management — individual and organization workflows
- Stack: React, TypeScript

---

## Technical Skills

### Languages
C, C++, Python, JavaScript, TypeScript, SQL, Java

### Frontend
React.js, Next.js, Tailwind CSS, Framer Motion, HTML5, CSS3, Vite

### Backend
Node.js, Express.js, REST APIs, JWT Authentication, Middleware

### Databases
MongoDB

### AI & ML
TensorFlow, Keras, OpenCV, Computer Vision, Deep Learning, Grad-CAM, ResNet50, AGPN, MVFF

### Generative AI
Gemini API, Claude API, OpenAI API, Prompt Engineering, LLM Integration

### Tools
Git, GitHub, Docker, Vercel, Render, Railway, VS Code, Postman

---

## Certifications
- Generative AI Fundamentals — Databricks
- Fundamentals of Docker & Kubernetes
- DBMS Fundamentals & Advanced Concepts
- Python Programming Masterclass
- Microcontroller Embedded C Programming
- C & C++ Essentials
- UML Fundamentals
- Verilog HDL Fundamentals
- Digital Logic Design

---

## Leadership
- Technical Member, Web Development — SQAC, SRMIST
- Head of Council — PSBB Learning Leadership Academy (Grade XII)

---

## Currently Learning
System Design, Cloud Technologies & AWS, AI-Powered Product Development, UI/UX & Motion Design, Cybersecurity Fundamentals, Blockchain Systems

---

## Behaviour Rules
- Always speak as Aditya in first person — never third person
- Never say you are an AI, a bot, or an assistant
- Never invent projects, experience, or facts not listed above
- If something is not in your knowledge, say "I don't have that info handy — reach out at adityabt24@gmail.com"
- Be concise by default, detailed when asked
- Warm, confident, human tone — never robotic
- For general technical questions, answer naturally and helpfully`;

const SUGGESTIONS = [
  "What have you built?",
  "Tell me about your internships",
  "What's your tech stack?",
  "Walk me through BOVISION",
];

function RenderText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**"))
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        if (part.startsWith("*") && part.endsWith("*"))
          return <em key={i}>{part.slice(1, -1)}</em>;
        if (part.startsWith("`") && part.endsWith("`"))
          return (
            <code
              key={i}
              style={{
                fontFamily: "monospace",
                fontSize: "0.85em",
                padding: "0.1em 0.35em",
                borderRadius: "0.25em",
                background: "var(--accent-muted)",
                color: "var(--accent-hover)",
              }}
            >
              {part.slice(1, -1)}
            </code>
          );
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

function MessageBubble({
  role,
  text,
}: {
  role: "user" | "assistant";
  text: string;
}) {
  const isUser = role === "user";
  const lines = text.split("\n").filter(Boolean);

  return (
    <motion.div
      data-message
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        marginBottom: "0.6rem",
      }}
    >
      {!isUser && (
        <div
          style={{
            width: "1.6rem",
            height: "1.6rem",
            borderRadius: "50%",
            background: "var(--accent-gradient)",
            flexShrink: 0,
            marginRight: "0.5rem",
            marginTop: "0.1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.6rem",
            fontWeight: 700,
            color: "#fff",
          }}
        >
          A
        </div>
      )}
      <div
        style={{
          maxWidth: "82%",
          padding: "0.55rem 0.85rem",
          borderRadius: isUser
            ? "1rem 1rem 0.25rem 1rem"
            : "1rem 1rem 1rem 0.25rem",
          background: isUser
            ? "linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)"
            : "var(--bg-tertiary)",
          border: isUser ? "none" : "1px solid var(--border-subtle)",
          color: isUser ? "#fff" : "var(--text-primary)",
          fontSize: "0.835rem",
          lineHeight: 1.6,
          boxShadow: isUser ? "var(--shadow-glow)" : "none",
        }}
      >
        {lines.map((line, i) => (
          <p key={i} style={{ margin: i < lines.length - 1 ? "0 0 0.35rem" : 0 }}>
            <RenderText text={line} />
          </p>
        ))}
      </div>
    </motion.div>
  );
}

function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        marginBottom: "0.6rem",
      }}
    >
      <div
        style={{
          width: "1.6rem",
          height: "1.6rem",
          borderRadius: "50%",
          background: "var(--accent-gradient)",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.6rem",
          fontWeight: 700,
          color: "#fff",
        }}
      >
        A
      </div>
      <div
        style={{
          padding: "0.55rem 0.85rem",
          borderRadius: "1rem 1rem 1rem 0.25rem",
          background: "var(--bg-tertiary)",
          border: "1px solid var(--border-subtle)",
          display: "flex",
          gap: "0.3rem",
          alignItems: "center",
        }}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            style={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "var(--accent)",
              display: "block",
            }}
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

function useShortcutLabel() {
  const isMac =
    typeof navigator !== "undefined" &&
    /Mac|iPhone|iPod|iPad/.test(navigator.platform);
  return isMac ? "⌘K" : "Ctrl+K";
}

export default function AssistantPanel({ onClose }: AssistantPanelProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const shortcut = useShortcutLabel();

useEffect(() => {
  if (loading) return;
  const lastMessage = messages[messages.length - 1];
  if (lastMessage?.role === "assistant") {
    const container = bottomRef.current?.parentElement;
    if (container) {
      const messageElements = container.querySelectorAll("[data-message]");
      const lastEl = messageElements[messageElements.length - 1] as HTMLElement;
      if (lastEl) {
        lastEl.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
  }
  bottomRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messages, loading]);

  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 300);
  }, []);

  const sendMessage = useCallback(
    async (userText: string) => {
      if (!userText.trim() || loading) return;

      const userMsg: Message = {
        id: crypto.randomUUID(),
        role: "user",
        text: userText,
      };

      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setLoading(true);

      try {
        const apiKey = import.meta.env.VITE_GROQ_API_KEY;
if (!apiKey) throw new Error("Missing VITE_GROQ_API_KEY");

const history = messages.map((m) => ({
  role: m.role === "user" ? "user" : "assistant",
  content: m.text,
}));

const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${apiKey}`,
  },
  body: JSON.stringify({
    model: "llama-3.1-8b-instant",
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      ...history,
      { role: "user", content: userText },
    ],
    temperature: 0.7,
    max_tokens: 512,
  }),
});

if (!res.ok) {
  const errData = await res.json().catch(() => ({}));
  throw new Error(errData?.error?.message ?? `Groq error: ${res.status}`);
}

const data = await res.json();
const replyText =
  data?.choices?.[0]?.message?.content ??
  "Sorry, I couldn't generate a response. Try again.";

        setMessages((prev) => [
          ...prev,
          { id: crypto.randomUUID(), role: "assistant", text: replyText },
        ]);
      } catch (err: unknown) {
        const message =
          err instanceof Error ? err.message : "Something went wrong.";
        const is429 = message.includes("429") || message.toLowerCase().includes("rate limit");

        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: "assistant",
            text: is429
              ? "I'm getting too many requests right now. Give it a moment and try again."
              : "Something went wrong. Please try again in a moment.",
          },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [messages, loading]
  );

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  const showSuggestions = messages.length === 0 && !loading;

  return (
    <motion.div
      initial={{ opacity: 0, x: 40, scale: 0.97 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 40, scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed z-50 overflow-hidden bottom-6 right-6"
      style={{
        width: "min(380px, calc(100vw - 2rem))",
        height: "520px",
        borderRadius: "var(--radius-xl)",
        background: "var(--bg-secondary)",
        border: "1px solid var(--border-default)",
        boxShadow: "var(--shadow-lg)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "0.9rem 1.1rem",
          borderBottom: "1px solid var(--border-subtle)",
          background: "var(--bg-elevated)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <div
            style={{
              width: "2rem",
              height: "2rem",
              borderRadius: "50%",
              background: "var(--accent-gradient)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.7rem",
              fontWeight: 700,
              color: "#fff",
              flexShrink: 0,
            }}
          >
            A
          </div>
          <div>
            <p
              style={{
                fontSize: "0.875rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Aditya Thakur
            </p>
            <p
              style={{
                fontSize: "0.68rem",
                color: "var(--text-tertiary)",
                margin: 0,
              }}
            >
              Digital version · {shortcut} to toggle
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.25rem" }}>
          {messages.length > 0 && (
            <button
              onClick={() => setMessages([])}
              title="Clear chat"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--text-tertiary)",
                padding: "0.35rem",
                borderRadius: "var(--radius-sm)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Trash2 size={14} />
            </button>
          )}
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--text-tertiary)",
              padding: "0.35rem",
              borderRadius: "var(--radius-sm)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <X size={15} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "1rem 1.1rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {showSuggestions && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ marginBottom: "1rem" }}
          >
            <p
              style={{
                fontSize: "0.835rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                marginBottom: "0.85rem",
              }}
            >
              Hey — I'm{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                Aditya
              </strong>
              , in digital form. Ask me anything about my work, projects, or
              background and I'll answer directly.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
              }}
            >
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => sendMessage(s)}
                  style={{
                    textAlign: "left",
                    padding: "0.45rem 0.75rem",
                    borderRadius: "var(--radius-md)",
                    background: "var(--accent-muted)",
                    border: "1px solid var(--accent-border)",
                    color: "var(--accent-hover)",
                    fontSize: "0.8rem",
                    fontFamily: "inherit",
                    cursor: "pointer",
                    transition: "background 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--bg-elevated)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--accent-muted)";
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {messages.map((m) => (
          <MessageBubble key={m.id} role={m.role} text={m.text} />
        ))}

        <AnimatePresence>{loading && <TypingIndicator />}</AnimatePresence>

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div
        style={{
          padding: "0.75rem 1.1rem",
          borderTop: "1px solid var(--border-subtle)",
          background: "var(--bg-elevated)",
          display: "flex",
          gap: "0.5rem",
          flexShrink: 0,
        }}
      >
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask me anything…"
          disabled={loading}
          style={{
            flex: 1,
            padding: "0.5rem 0.8rem",
            borderRadius: "var(--radius-md)",
            background: "var(--bg-secondary)",
            border: "1px solid var(--border-default)",
            color: "var(--text-primary)",
            fontSize: "0.855rem",
            fontFamily: "inherit",
            outline: "none",
            transition: "border-color 0.18s ease",
          }}
          onFocus={(e) => {
            e.target.style.borderColor = "var(--accent)";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "var(--border-default)";
          }}
        />
        <motion.button
          onClick={() => sendMessage(input)}
          disabled={!input.trim() || loading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            width: "2.25rem",
            height: "2.25rem",
            borderRadius: "var(--radius-md)",
            background:
              !input.trim() || loading
                ? "var(--accent-muted)"
                : "linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)",
            border: "none",
            cursor: !input.trim() || loading ? "not-allowed" : "pointer",
            color: !input.trim() || loading ? "var(--accent)" : "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "background 0.18s ease",
            boxShadow:
              !input.trim() || loading ? "none" : "var(--shadow-glow)",
          }}
        >
          <Send size={14} />
        </motion.button>
      </div>
    </motion.div>
  );
}