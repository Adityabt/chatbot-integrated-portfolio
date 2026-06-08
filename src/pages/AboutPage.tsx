import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import profilePic from "../assets/ProfilePic2.png";
import { portfolioData } from "../lib/portfolio-data";
import PageTransition from "../components/motion/PageTransition";

const CHAPTERS = [
  {
    index: "01",
    title: "Curiosity",
    body: `My journey into technology started with a simple fascination: how does a website actually work? That curiosity led me from HTML and CSS into JavaScript and modern web development, where I began exploring how frontend interfaces connect with backend systems to create complete applications. Along the way, I expanded my knowledge through C, C++, and Python. What began as curiosity about websites evolved into a broader interest in software systems, product development, and modern digital experiences.`,
  },
  {
    index: "02",
    title: "Building",
    body: `As I built more projects, I realized that writing code was only part of the process. A technically correct solution wasn't always a good one. I became interested in the complete experience: architecture, responsiveness, usability, and the details that make software intuitive. Over time, I found myself drawn toward complete products rather than isolated features, connecting frontend experiences, backend systems, AI capabilities, and user needs into something cohesive.`,
  },
  {
    index: "03",
    title: "Professional Exposure",
    body: `My first internship at Bellwether Business Solutions introduced me to production-grade software development. I contributed to a decentralized identity platform, developing user and organization workflows covering authentication, onboarding, profile creation, and identity verification. The platform leveraged blockchain-protected identities accessible through unique private keys. I also contributed to JavaScript-to-TypeScript migration efforts and gained firsthand experience with collaborative development, scalable frontend architecture, and production engineering standards.`,
  },
  {
    index: "04",
    title: "Research & AI",
    body: `My interest in AI began with an early chatbot built using the Claude API, introducing me to conversational AI and API-driven applications. That curiosity led me to BOVISION, an AI-powered cattle breed classification system built using ResNet50, AGPN, and MVFF architectures. Trained on 1,208 labeled images across five breeds, the system achieved 96.25% validation accuracy. I also contributed to Flask deployment and Grad-CAM integration. Today, I continue exploring AI through product-focused applications, including a Gemini-powered portfolio assistant designed to answer questions about my work and experience.`,
  },
  {
    index: "05",
    title: "Current Direction",
    body: `At Xyzon Innovations, I'm contributing to the development of a Learning Management System while also working on website redesign initiatives focused on user experience and interaction quality. Alongside my internship, I'm expanding my knowledge of Java, UI/UX design, cybersecurity, and blockchain technologies to develop a broader understanding of how modern software systems are built, secured, and delivered.`,
  },
  {
    index: "06",
    title: "Where I'm Headed",
    body: `I want to build products at the intersection of software engineering, artificial intelligence, and thoughtful design. As I continue growing as an engineer, I'm focusing on system design, scalable software architecture, cloud technologies, generative AI, and AI agent systems. My long-term goal is to own problems end-to-end, from product ideas and architecture decisions to the final experiences users interact with every day.`,
  },
];

const TRAITS = [
  { label: "Product Thinking",    desc: "I focus on understanding the purpose behind a solution, not just its implementation.",           color: "var(--accent)",   border: "var(--accent-border)"   },
  { label: "Full-Stack Perspective",  desc: "I enjoy connecting frontend experiences, backend systems, and AI capabilities into cohesive products.",             color: "var(--accent-2)", border: "var(--accent-2-border)" },
  { label: "Design Sensibility",  desc: "I believe usability, interaction quality, and attention to detail are essential parts of great software.",       color: "var(--accent-3)", border: "var(--accent-3-border)" },
  { label: "Continuous Learning", desc: "Every project is an opportunity to learn, improve, and expand my perspective as an engineer.", color: "var(--accent)",   border: "var(--accent-border)"   },
];

const SEMESTERS = [
  { sem: "Sem 1", cgpa: 9.00 },
  { sem: "Sem 2", cgpa: 9.20 },
  { sem: "Sem 3", cgpa: 8.30 },
  { sem: "Sem 4", cgpa: 8.80 },
  { sem: "Sem 5", cgpa: 8.65 },
];

type Tech = {
  name: string;
  icon: string;
  variant: string;
  color: string;
  invertOnLight?: boolean;
  customSrc?: string;
};

const STACK: { category: string; accent: string; techs: Tech[] }[] = [
  {
    category: "Frontend",
    accent: "var(--accent)",
    techs: [
      { name: "React",         icon: "react",        variant: "original", color: "#61DAFB" },
      { name: "TypeScript",    icon: "typescript",   variant: "original", color: "#3178C6" },
      { name: "JavaScript",    icon: "javascript",   variant: "original", color: "#F7DF1E" },
      { name: "HTML5",         icon: "html5",        variant: "original", color: "#E34F26" },
      { name: "CSS3",          icon: "css3",         variant: "original", color: "#1572B6" },
      { name: "Tailwind CSS",  icon: "tailwindcss",  variant: "plain",    color: "#06B6D4",
        customSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tailwindcss.svg", invertOnLight: true },
      { name: "Framer Motion", icon: "framermotion", variant: "original", color: "#A78BFA",
        customSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/framer.svg", invertOnLight: true },
      { name: "React Router",  icon: "reactrouter",  variant: "original", color: "#CA4245",
        customSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/reactrouter.svg", invertOnLight: true },
      { name: "Vite",          icon: "vitejs",       variant: "original", color: "#646CFF",
        customSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vite.svg", 
      invertOnLight: true},
    ],
  },
  {
    category: "Backend",
    accent: "var(--accent-2)",
    techs: [
      { name: "Node.js",    icon: "nodejs",  variant: "original", color: "#339933" },
      { name: "Express.js", icon: "express", variant: "original", color: "#CCCCCC", invertOnLight: true },
      { name: "MongoDB",    icon: "mongodb", variant: "original", color: "#47A248" },
      { name: "Flask",      icon: "flask",   variant: "original", color: "#CCCCCC", invertOnLight: true },
      { name: "REST APIs",  icon: "fastapi", variant: "original", color: "#06B6D4",
        customSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/fastapi.svg", invertOnLight: true },
      { name: "JWT",        icon: "jsonwebtokens", variant: "original", color: "#A78BFA",
        customSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/jsonwebtokens.svg", invertOnLight: true },
    ],
  },
  {
    category: "AI & ML",
    accent: "var(--accent-3)",
    techs: [
      { name: "Python",     icon: "python",     variant: "original", color: "#3776AB" },
      { name: "OpenCV",     icon: "opencv",     variant: "original", color: "#5C3EE8" },
      { name: "NumPy",      icon: "numpy",      variant: "original", color: "#4DABCF" },
      { name: "Gemini AI",  icon: "google",     variant: "original", color: "#4285F4",
        customSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlegemini.svg", invertOnLight: true  },
      { name: "OpenAI",     icon: "openai",     variant: "original", color: "#CCCCCC",
        customSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg", invertOnLight: true },
    ],
  },
  {
    category: "Tools",
    accent: "var(--accent)",
    techs: [
      { name: "Git",     icon: "git",    variant: "original", color: "#F05032" },
      { name: "GitHub",  icon: "github", variant: "original", color: "#CCCCCC", invertOnLight: true },
      { name: "VS Code", icon: "vscode", variant: "original", color: "#007ACC" },
      { name: "Postman", icon: "postman",variant: "plain",    color: "#FF6C37",
        customSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postman.svg", invertOnLight: true  },
      { name: "Vercel",  icon: "vercel", variant: "original", color: "#CCCCCC", invertOnLight: true,
        customSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vercel.svg", },
      { name: "Render",  icon: "render", variant: "original", color: "#46E3B7",
        customSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/render.svg", invertOnLight: true  },
      { name: "EmailJS", icon: "emailjs",variant: "original", color: "#F7DF1E",
        customSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/minutemailer.svg", invertOnLight: true  },
    ],
  },
  {
    category: "Languages",
    accent: "var(--accent-2)",
    techs: [
      { name: "JavaScript", icon: "javascript", variant: "original", color: "#F7DF1E" },
      { name: "TypeScript", icon: "typescript", variant: "original", color: "#3178C6" },
      { name: "Python",     icon: "python",     variant: "original", color: "#3776AB" },
      { name: "C",          icon: "c",          variant: "original", color: "#A8B9CC" },
      { name: "C++",        icon: "cplusplus",  variant: "original", color: "#00599C" },
      { name: "Java",       icon: "java",       variant: "original", color: "#ED8B00" },
    ],
  },
];

const LEARNING = [
  { item: "Java & Software Engineering",      accent: "var(--accent)"   },
  { item: "System Design",                    accent: "var(--accent-2)" },
  { item: "Generative AI & AI Agents",        accent: "var(--accent-3)" },
  { item: "Cybersecurity & Blockchain",       accent: "var(--accent)"   },
  { item: "UI/UX & Product Design",           accent: "var(--accent-2)" },
  { item: "Cloud Computing & AWS",            accent: "var(--accent-3)" },
];

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();
  const navigate = useNavigate();
  const [activeStack, setActiveStack] = useState(0);

  const fadeUp = (delay = 0): Variants => ({
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1], delay },
    },
  });

  const SectionLabel = ({ text }: { text: string }) => (
    <motion.div
      variants={fadeUp(0)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3.5rem" }}
    >
      <span style={{
        fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.1em",
        textTransform: "uppercase" as const, color: "var(--text-tertiary)",
        whiteSpace: "nowrap" as const,
      }}>
        {text}
      </span>
      <div style={{ flex: 1, height: "1px", background: "var(--border-subtle)" }} />
    </motion.div>
  );

  const Divider = () => (
    <div className="container-main" style={{ borderTop: "1px solid var(--border-subtle)" }} />
  );

  const maxCGPA = Math.max(...SEMESTERS.map((s) => s.cgpa));

  return (
    <PageTransition>
      <div className="min-h-screen">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <div style={{ paddingTop: "7rem", paddingBottom: "5rem" }}>
          <div className="container-main">
            <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-20">

              <motion.div
                variants={fadeUp(0)}
                initial="hidden"
                animate="visible"
                className="flex justify-center flex-shrink-0 md:justify-start"
              >
                <div style={{
                  width: "300px", height: "340px", borderRadius: "1rem",
                  overflow: "hidden", border: "1px solid var(--accent-border)",
                  boxShadow: "0 0 0 4px var(--bg-secondary), var(--shadow-glow)",
                  position: "relative", marginRight: "-2rem",
                }}>
                  <img
                    src={profilePic}
                    alt={portfolioData.personal.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(7,8,15,0.55) 0%, transparent 50%)" }} />
                  <div style={{ position: "absolute", inset: 0, opacity: 0.12, background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)" }} />
                </div>
              </motion.div>

              <div style={{ flex: 1 }}>
                <motion.div
                  variants={fadeUp(0.05)}
                  initial="hidden"
                  animate="visible"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    marginBottom: "1.25rem", padding: "5px 14px", borderRadius: "99px",
                    background: "var(--accent-muted)", border: "1px solid var(--accent-border)",
                    color: "var(--accent-hover)", fontSize: "0.7rem", fontWeight: 500,
                    letterSpacing: "0.08em", textTransform: "uppercase",
                  }}
                >
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
                  About Me
                </motion.div>

                <motion.h1
                  variants={fadeUp(0.1)}
                  initial="hidden"
                  animate="visible"
                  style={{ color: "var(--text-primary)", marginBottom: "1.25rem", lineHeight: 1.08 }}
                >
                  Engineer. Developer.
                  <br />
                  <span style={{
                    background: "var(--accent-gradient-full)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    Product Thinker.
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeUp(0.15)}
                  initial="hidden"
                  animate="visible"
                  style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "60ch", marginBottom: "2rem" }}
                >
                  I combine software engineering, artificial intelligence, and thoughtful design to create digital experiences that are both functional and intuitive. My interests span full-stack development, AI-powered applications, and product-focused engineering, with a strong emphasis on usability, performance, and attention to detail.
                </motion.p>

                <motion.div
                  variants={fadeUp(0.2)}
                  initial="hidden"
                  animate="visible"
                  style={{ display: "flex", flexWrap: "wrap", gap: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border-subtle)" }}
                >
                  {[
                    { val: "3",    lbl: "Internships"        },
                    { val: "10+",   lbl: "Projects Shipped"   },
                    { val: "8.80", lbl: "CGPA"               },
                    { val: "4+",   lbl: "AI Powered Applications" },
                  ].map((s) => (
                    <div key={s.lbl}>
                      <div style={{
                        fontSize: "1.25rem", fontWeight: 600, letterSpacing: "-0.02em",
                        background: "var(--accent-gradient)",
                        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                      }}>
                        {s.val}
                      </div>
                      <div style={{ fontSize: "0.72rem", color: "var(--text-tertiary)", marginTop: "2px" }}>{s.lbl}</div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <Divider />

        {/* ── Journey ──────────────────────────────────────────── */}
        <div style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
          <div className="container-main">
            <SectionLabel text="My Journey" />
            {CHAPTERS.map((ch, i) => (
              <motion.div
                key={ch.index}
                variants={fadeUp(0)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "60px 1fr",
                  gap: "2rem",
                  paddingTop: i === 0 ? 0 : "2.5rem",
                  paddingBottom: "2.5rem",
                  borderBottom: i < CHAPTERS.length - 1 ? "2px solid var(--border-subtle)" : "none",
                }}
              >
                <div style={{ paddingTop: "3px" }}>
                  <span style={{
                    fontFamily: "monospace", fontSize: "0.75rem", fontWeight: 600,
                    background: "var(--accent-gradient)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  }}>
                    {ch.index}
                  </span>
                </div>
                <div>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                    {ch.title}
                  </h2>
                  <p style={{ fontSize: "0.925rem", lineHeight: 1.75, color: "var(--text-secondary)", maxWidth: "80ch" }}>
                    {ch.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── How I Work ───────────────────────────────────────── */}
        <div style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
          <div className="container-main">
            <SectionLabel text="How I Work" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem", width: "100%" }}>
              {TRAITS.map((trait, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp(i * 0.07)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ borderColor: trait.border }}
                  style={{
                    padding: "1.5rem", borderRadius: "0.875rem",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid var(--border-subtle)",
                    backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
                    transition: "border-color 0.2s ease",
                  }}
                >
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: trait.color, marginBottom: "1rem", boxShadow: `0 0 8px ${trait.color}` }} />
                  <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.5rem", letterSpacing: "-0.01em" }}>{trait.label}</p>
                  <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "var(--text-tertiary)" }}>{trait.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <Divider />

        {/* ── Education ────────────────────────────────────────── */}
        <div style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
          <div className="container-main">
            <SectionLabel text="Education" />

            <motion.div
              variants={fadeUp(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ borderRadius: "1rem", overflow: "hidden", border: "1px solid var(--border-subtle)", marginBottom: "1.5rem" }}
            >
              <div style={{
                padding: "1.75rem 2rem",
                background: "rgba(139,92,246,0.06)",
                borderBottom: "1px solid var(--border-subtle)",
                display: "flex", flexWrap: "wrap", gap: "1rem",
                alignItems: "flex-start", justifyContent: "space-between",
              }}>
                <div>
                  <div style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.4rem" }}>
                    2023 — 2027
                  </div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.25rem", letterSpacing: "-0.02em" }}>
                    SRM Institute of Science and Technology
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                    B.Tech · Electronics & Computer Engineering
                  </p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{
                    fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.04em",
                    background: "var(--accent-gradient)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  }}>
                    8.80
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "var(--text-tertiary)", marginTop: "-2px" }}>Current CGPA</div>
                </div>
              </div>

              <div style={{ padding: "1.75rem 2rem", background: "rgba(255,255,255,0.02)" }}>
                <p style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-tertiary)", marginBottom: "1.25rem" }}>
                  Semester Performance
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  {SEMESTERS.map((s, i) => (
                    <motion.div
                      key={s.sem}
                      variants={fadeUp(i * 0.06)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                    >
                      <span style={{ fontSize: "0.75rem", color: "var(--text-tertiary)", width: "48px", flexShrink: 0 }}>{s.sem}</span>
                      <div style={{ flex: 1, height: "6px", borderRadius: "99px", background: "var(--border-subtle)", overflow: "hidden" }}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(s.cgpa / 10) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                          style={{
                            height: "100%", borderRadius: "99px",
                            background: s.cgpa === maxCGPA
                              ? "var(--accent-gradient)"
                              : "linear-gradient(90deg, var(--accent-soft), var(--accent))",
                          }}
                        />
                      </div>
                      <span style={{
                        fontSize: "0.8rem", fontWeight: 600, width: "36px",
                        textAlign: "right", flexShrink: 0,
                        color: s.cgpa === maxCGPA ? "var(--accent-hover)" : "var(--text-secondary)",
                      }}>
                        {s.cgpa.toFixed(2)}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
              {[
                { level: "Class XII", year: "2023", school: "PSBB Learning Leadership Academy", location: "Bangalore", score: "76%",  accent: "var(--accent-2)" },
                { level: "Class X",   year: "2021", school: "PSBB Learning Leadership Academy", location: "Bangalore", score: "94%",  accent: "var(--accent-3)" },
              ].map((edu) => (
                <motion.div
                  key={edu.level}
                  variants={fadeUp(0)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  style={{
                    padding: "1.5rem", borderRadius: "0.875rem",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid var(--border-subtle)",
                    display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: edu.accent, marginBottom: "0.4rem" }}>
                      {edu.level} · {edu.year}
                    </div>
                    <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.2rem" }}>{edu.school}</p>
                    <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)" }}>{edu.location}</p>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0, marginLeft: "1rem" }}>
                    <div style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.03em", color: edu.accent }}>
                      {edu.score}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <Divider />

        {/* ── Technology Stack ─────────────────────────────────── */}
        <div style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
          <div className="container-main">
            <SectionLabel text="Technology Stack" />

            {/* Category tabs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "3rem" }}>
              {STACK.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStack(i)}
                  style={{
                    padding: "0.5rem 1.1rem", borderRadius: "99px",
                    fontSize: "0.8rem", fontWeight: 500, fontFamily: "inherit", cursor: "pointer",
                    border: `1px solid ${i === activeStack ? s.accent : "var(--border-subtle)"}`,
                    background: i === activeStack ? `${s.accent}18` : "transparent",
                    color: i === activeStack ? s.accent : "var(--text-tertiary)",
                    transition: "all 0.18s ease",
                  }}
                >
                  {s.category}
                  <span style={{ marginLeft: "6px", fontSize: "0.7rem", opacity: 0.7 }}>
                    {s.techs.length}
                  </span>
                </button>
              ))}
            </div>

            {/* Icon grid */}
            {STACK.map((s, i) =>
              i === activeStack ? (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", justifyContent: "center" }}
                >
                  {s.techs.map((tech, j) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: j * 0.05 }}
                      whileHover={{ scale: 1.08, boxShadow: `0 0 0 2px ${tech.color}, 0 0 20px ${tech.color}55` }}
                      style={{
                        width: "90px", height: "90px", borderRadius: "1.1rem",
                        background: "var(--bg-secondary)",
                        border: `1.5px solid ${tech.color}55`,
                        display: "flex", flexDirection: "column",
                        alignItems: "center", justifyContent: "center",
                        gap: "0.4rem", cursor: "default",
                        transition: "box-shadow 0.2s ease, border-color 0.2s ease",
                        position: "relative", overflow: "hidden",
                      }}
                    >
                      <div style={{
                        position: "absolute", inset: 0, opacity: 0.06,
                        background: `radial-gradient(circle at center, ${tech.color}, transparent 70%)`,
                      }} />
                      <img
                        src={
                          tech.customSrc ??
                          `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-${tech.variant}.svg`
                        }
                        alt={tech.name}
                        width={38}
                        height={38}
                        style={{
                          position: "relative",
                          zIndex: 1,
                          filter: tech.invertOnLight
                            ? "var(--icon-mono-filter)"
                            : "none",
                        }}
                        onError={(e) => {
                          const el = e.target as HTMLImageElement;
                          if (!tech.customSrc && el.src.includes("-original")) {
                            el.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-plain.svg`;
                          }
                        }}
                      />
                      <span style={{
                        fontSize: "0.62rem", fontWeight: 500, color: "var(--text-tertiary)",
                        position: "relative", zIndex: 1, textAlign: "center", lineHeight: 1.2,
                      }}>
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              ) : null
            )}
          </div>
        </div>

        <Divider />

        {/* ── Currently Learning ───────────────────────────────── */}
        <div style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
          <div className="container-main">
            <SectionLabel text="Currently Learning" />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {LEARNING.map((l, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp(i * 0.05)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    padding: "0.6rem 1.1rem", borderRadius: "99px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid var(--border-subtle)",
                    cursor: "default", transition: "border-color 0.18s ease",
                  }}
                >
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: l.accent, boxShadow: `0 0 6px ${l.accent}`, flexShrink: 0 }} />
                  <span style={{ fontSize: "0.83rem", fontWeight: 500, color: "var(--text-secondary)" }}>{l.item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <Divider />

        {/* ── CTA ──────────────────────────────────────────────── */}
        <div style={{ paddingTop: "4rem", paddingBottom: "6rem" }}>
          <div className="container-main">
            <motion.div
              variants={fadeUp(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem" }}
            >
              <button onClick={() => navigate("/projects")} className="btn btn-primary">
                See My Work
                <FaArrowRight size={13} />
              </button>
              <button onClick={() => navigate("/contact")} className="btn btn-ghost">
                Get in Touch
              </button>
            </motion.div>
          </div>
        </div>

      </div>
    </PageTransition>
  );
}