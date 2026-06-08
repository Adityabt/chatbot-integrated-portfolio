import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import PageTransition from "../components/motion/PageTransition";

import bovisionImg   from "../assets/projects/bovision.png";
import bfhlImg       from "../assets/projects/bfhl.png";
import envirosenseImg from "../assets/projects/envirosense.png";
import portfolioImg  from "../assets/projects/portfolio.png";
import sqacImg       from "../assets/projects/sqac.png";
import chatbotImg    from "../assets/projects/chatbot.png";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  status: "live" | "rebuilding" | "in-progress";
  featured: boolean;
  image?: string;
  accent: string;
  accentSecondary?: string;
  descriptionType: "case-study" | "story";
  description?: string;
  problem?: string;
  solution?: string;
  outcome?: string;
  metrics?: { label: string; value: string }[];
  keyDecisions?: string[];
  technologies: string[];
  links: { github?: string; live?: string; note?: string };
  placeholderGradient?: string;
};

const PROJECTS: Project[] = [
  {
    id: "bovision",
    descriptionType: "case-study",
    title: "BOVISION",
    subtitle: "AI-Powered Cattle Breed Classification",
    category: "AI · Computer Vision",
    status: "live",
    featured: true,
    image: bovisionImg,
    accent: "var(--accent)",
    accentSecondary: "var(--accent-2)",
    problem: "Accurate cattle breed identification traditionally requires domain expertise and manual inspection, making the process time-consuming, inconsistent, and difficult to scale. An automated and reliable classification system was needed to improve accessibility and decision-making.",
    solution: "Developed a computer vision pipeline using a ResNet50 backbone enhanced with Attention-Guided Part Network (AGPN) and Meta Multi-View Fusion (MVFF) to capture discriminative breed-specific features. Integrated Grad-CAM visualizations to provide transparency into model predictions and improve interpretability.",
    outcome: "Achieved a peak validation accuracy of 96.25% across five cattle breeds and deployed the solution as a Flask-based web application capable of real-time classification with visual explainability.",
    metrics: [
      { label: "Validation Accuracy", value: "96.25%" },
      { label: "Training Images",     value: "1,208"  },
      { label: "Breeds Classified",   value: "5"      },
      { label: "Architecture",        value: "ResNet50 + AGPN + MVFF" },
    ],
    keyDecisions: [
      "Leveraged attention mechanisms (AGPN) to improve focus on breed-specific visual features over conventional CNN approaches.",
      "Integrated Grad-CAM to make model predictions interpretable and transparent rather than treating the model as a black box.",
      "Implemented a 70-15-15 train, validation, and test split to ensure reliable evaluation and minimize data leakage.",
    ],
    technologies: ["Python", "Flask", "ResNet50", "AGPN", "MVFF", "OpenCV", "Grad-CAM","Numpy", "Computer Vision", "Deep Learning"],
    links: {
      github: "https://github.com/Adityabt/cattle-breed-classifier",
      live:   "https://web-production-fb38a9.up.railway.app/",
    },
  },
{
  id: "bfhl",
  descriptionType: "case-study",
  title: "BFHL Tree Analyzer",
  subtitle: "Hierarchy Validation & Tree Construction Engine",
  category: "Full Stack · Algorithms",
  status: "live",
  featured: true,
  image: bfhlImg,
  accent: "var(--accent-2)",
  accentSecondary: "var(--accent)",

  problem:
    "Transforming arbitrary parent-child edge inputs into valid hierarchical trees requires robust validation, cycle detection, structural integrity checks, and meaningful output generation. Handling malformed data, duplicate relationships, and disconnected components adds significant complexity.",

  solution:
    "Built a Node.js and Express-based processing engine that validates graph inputs through a multi-stage pipeline, including format verification, duplicate edge tracking, single-parent enforcement, connected component grouping using BFS, and cycle detection using DFS. Valid groups are recursively transformed into nested tree structures and visualized through an interactive frontend.",

  outcome:
    "Delivered a live full-stack application capable of processing complex graph structures and generating validated hierarchical trees. Successfully handles cycles, duplicate edges, invalid relationships, and disconnected subgraphs while providing clear feedback and visualization to users.",

  metrics: [
    { label: "Graph Algorithms", value: "BFS + DFS" },
    { label: "Validation Stages", value: "5" },
    { label: "Deployment", value: "Render" },
    { label: "Architecture", value: "Full Stack" },
  ],

  keyDecisions: [
    "Used BFS to identify connected components before cycle detection, reducing unnecessary traversal overhead",
    "Enforced single-parent constraints during ingestion to prevent invalid tree structures early in the pipeline",
    "Implemented recursive tree construction to convert validated graph relationships into nested hierarchical objects",
    "Used lightweight ASCII-based visualization to emphasize structural clarity without introducing graph-rendering dependencies",
  ],

  technologies: [
    "Node.js",
    "Express.js",
    "JavaScript",
    "REST API",
    "Graph Algorithms",
    "BFS",
    "DFS",
    "Tree Data Structures",
    "HTML",
    "CSS",
    "Render",
  ],

  links: {
    github: "https://github.com/Adityabt/-bfhl-project",
    live: "https://bfhl-aditya.onrender.com/",
  },
},
{
  id: "envirosense",
  descriptionType: "case-study",
  title: "EnviroSense",
  subtitle: "Industrial IoT Environmental Monitoring System",
  category: "IoT · Hardware-Software",
  status: "live",
  featured: true,
  image: envirosenseImg,
  accent: "var(--accent-3)",
  accentSecondary: "var(--accent-2)",

  problem:
    "Industrial environmental monitoring often relies on hardware systems that are difficult to access, visualize, and integrate with modern web applications. Bridging industrial communication protocols with real-time software interfaces requires both hardware and software expertise.",

  solution:
    "Developed a hardware-software integrated monitoring platform using Modbus RTU serial communication to collect temperature and humidity sensor data. Built a Flask backend to process incoming readings and a web dashboard to provide real-time environmental visibility through an accessible browser interface.",

  outcome:
    "Delivered a deployed end-to-end IoT monitoring system capable of acquiring sensor data, processing industrial protocol communication, and presenting real-time insights through a web-based interface. The project demonstrated practical experience across both embedded systems and software engineering domains.",

  metrics: [
    { label: "Protocol", value: "Modbus RTU" },
    { label: "Monitoring", value: "Real-Time" },
    { label: "Sensors", value: "Temperature + Humidity" },
    { label: "Deployment", value: "Render" },
  ],

  keyDecisions: [
    "Selected Modbus RTU for reliable communication with industrial-grade hardware devices",
    "Used Flask as a lightweight backend layer to bridge serial communication and web delivery",
    "Implemented a polling-based architecture aligned with sensor update frequencies and system requirements",
    "Designed the dashboard to provide immediate visibility into environmental conditions without requiring specialized software",
  ],

  technologies: [
    "Python",
    "Flask",
    "Modbus RTU",
    "IoT",
    "Industrial Communication",
    "Serial Communication",
    "Sensor Integration",
    "Hardware Interfacing",
    "JavaScript",
    "HTML",
    "CSS",
    "Render",
  ],

  links: {
    github: "https://github.com/Adityabt/envirosense",
    live: "https://envirosense-z1ov.onrender.com/",
  },
},
 {
  id: "portfolio",
  title: "Portfolio",
  subtitle: "AI-Integrated Personal Portfolio",
  category: "Product Engineering",
  status: "live",
  featured: false,
  image: portfolioImg,
  accent: "var(--accent)",
  descriptionType: "story",
  description: "An AI-integrated personal portfolio designed to showcase my experience, projects, and technical background through a carefully crafted digital experience. Built with a custom design system, modern frontend architecture, and a personalized AI assistant, it combines software engineering, AI integration, and thoughtful design to create an interactive and engaging way to explore my work. Every component, interaction, and detail reflects the standards I apply when building digital products.",
  technologies: [
  "React",
  "TypeScript",
  "Vite",
  "Tailwind CSS",
  "Framer Motion",
  "Gemini API",
  "Node.js",
  "Express.js",
  "AI Integration",
  "Responsive Design"
],
  links: {
    github: "https://github.com/Adityabt/chatbot-integrated-portfolio",
    live: "https://chatbot-integrated-portfolio.vercel.app",
  },
},
{
  id: "sqac",
  title: "SQAC Website",
  subtitle: "Community Platform · Team Collaboration",
  category: "Frontend · Team Project",
  status: "live",
  featured: false,
  image: sqacImg,
  accent: "var(--accent-2)",
  descriptionType: "story",

  description:
    "Contributed to the official website of the Software Quality Assurance Community (SQAC) as part of the technical team. Worked on key sections including the homepage, about page, navigation system, and mobile responsiveness while collaborating within a shared codebase. The project provided valuable experience in team-based development, code collaboration, design consistency, and building user-facing features for an active student community.",

  technologies: [
    "React",
    "JavaScript",
    "Frontend Development",
    "Responsive Design",
    "UI Development",
    "Git",
    "Team Collaboration",
  ],

  links: {
    github: "https://github.com/SQAC-Tech/sqac-website",
    live: "https://www.sqac.space/",
  },
},
{
  id: "chatbot",
  title: "AI Chatbot Platform",
  subtitle: "Multi-Model Conversational AI Platform",
  category: "Generative AI",
  status: "rebuilding",
  featured: false,
  image: chatbotImg,
  accent: "var(--accent-3)",
  descriptionType: "story",

  description:
    "Developed a full-stack conversational AI platform integrating multiple large language model providers, including Claude, Gemini, and OpenAI. Built a secure Node.js backend for API orchestration and a React-based frontend for real-time interactions, gaining hands-on experience with AI product architecture, authentication, and model integration. The project is currently being rebuilt to incorporate modern API versions, streaming responses, improved performance, and persistent conversation memory.",

  technologies: [
    "React",
    "Node.js",
    "Express.js",
    "Claude API",
    "Gemini API",
    "OpenAI API",
    "JWT Authentication",
    "AI Integration",
    "REST APIs",
  ],

  links: {
    github: "https://github.com/Adityabt/Ai-Chatbot",
    live: "https://ai-chatbot-adityabts-projects.vercel.app/",
    note: "Actively being rebuilt with modern APIs",
  },
},
{
  id: "decentralized-id",
  title: "Decentralized Identity Platform",
  subtitle: "Blockchain-Based Identity Verification — Bellwether Business Solutions",
  category: "Blockchain · Frontend",
  status: "in-progress",
  featured: false,
  image: portfolioImg, // swap with actual asset once you have it
  accent: "var(--accent)",
  accentSecondary: "var(--accent-2)",
  descriptionType: "story",
  description: "Contributed to a production-grade decentralized identity platform during my internship at Bellwether Business Solutions. Developed separate user and organization workflows covering authentication, onboarding, profile creation, and identity verification processes involving government-issued credentials. The platform enabled users to securely own and manage blockchain-protected digital identities through unique private keys while preserving privacy and data ownership. In addition to frontend development, I contributed to JavaScript-to-TypeScript migration efforts, improved code maintainability, and gained hands-on experience working within a large-scale React codebase and professional engineering environment.",
  technologies: ["React", "TypeScript", "JavaScript","Blockchain", "Decentralized Identity", "Web3" ,"Authentication", "Identity Verification", "Frontend Architecture",],
  links: {},
  placeholderGradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)",
},
{
  id: "dsa-quiz",
  title: "DSA Quiz Platform",
  subtitle: "Interactive Data Structures & Algorithms Learning Tool",
  category: "EdTech · Frontend",
  status: "in-progress",
  featured: false,
  image: chatbotImg, // swap with actual asset once you have it
  accent: "var(--accent-3)",
  accentSecondary: "var(--accent)",
  descriptionType: "story",
  description: "A full-stack learning platform focused on Data Structures and Algorithms, designed to help students practice, assess, and strengthen their problem-solving skills. The platform is currently being rebuilt with secure authentication, quiz management, performance tracking, and a modern user experience supported by a dedicated backend and database layer. The project serves as an opportunity to deepen my understanding of full-stack architecture, API design, authentication workflows, and scalable web application development.",
  technologies: [

    "React",

    "Node.js",

    "Express.js",

    "MongoDB",

    "JWT Authentication",

    "REST APIs",

    "JavaScript",

    "HTML",

    "CSS",

    "Full-Stack Development"

  ],
  links: {},
  placeholderGradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #8b5cf6 100%)",
},
];

const STATUS_CONFIG = {
  live:          { label: "Live",        color: "var(--accent-2)",  bg: "rgba(6,182,212,0.1)",   border: "rgba(6,182,212,0.25)"  },
  rebuilding:    { label: "Rebuilding",  color: "var(--warning, #f59e0b)", bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.25)" },
  "in-progress": { label: "In Progress", color: "var(--accent-4)",    bg: "rgba(139,92,246,0.1)",  border: "rgba(139,92,246,0.25)" },
};

function StatusBadge({ status }: { status: Project["status"] }) {
  const cfg = STATUS_CONFIG[status];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: "5px",
      padding: "3px 10px", borderRadius: "99px", fontSize: "0.7rem",
      fontWeight: 500, color: cfg.color,
      background: cfg.bg, border: `1px solid ${cfg.border}`,
    }}>
      <span style={{
        width: "5px", height: "5px", borderRadius: "50%",
        background: cfg.color,
        boxShadow: status === "live" ? `0 0 6px ${cfg.color}` : "none",
      }} />
      {cfg.label}
    </span>
  );
}

function TechChip({ name }: { name: string; accent: string }) {
  return (
    <span style={{
      padding: "3px 10px", borderRadius: "99px", fontSize: "0.7rem",
      fontWeight: 500, background: "rgba(255,255,255,0.04)",
      border: "1px solid var(--border-subtle)",
      color: "var(--text-tertiary)",
    }}>
      {name}
    </span>
  );
}

function ProjectDrawer({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 50,
          background: "rgba(7,8,15,0.85)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      />

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(600px, 100vw)",
          zIndex: 51,
          background: "var(--bg-secondary)",
          borderLeft: "1px solid var(--border-default)",
          overflowY: "auto",
          boxShadow: "-20px 0 60px rgba(0,0,0,0.5)",
        }}
      >
        {/* Close button */}
        <div style={{ position: "relative" }}>
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "1px solid var(--border-default)",
              background: "var(--bg-elevated)",
              color: "var(--text-secondary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10,
              transition: "all 0.15s ease",
            }}
            aria-label="Close"
          >
            <FaTimes size={13} />
          </button>

          {/* Hero image */}
          <div
            style={{
              height: "240px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {project.placeholderGradient ? (
  <div style={{
    width: "100%", height: "100%",
    background: project.placeholderGradient,
    display: "flex", alignItems: "center", justifyContent: "center",
  }}>
    <span style={{
      fontSize: "0.75rem", fontWeight: 600,
      letterSpacing: "0.1em", textTransform: "uppercase" as const,
      color: "rgba(255,255,255,0.5)",
    }}>
      In Progress
    </span>
  </div>
) : (
  <img
    src={project.image}
    alt={project.title}
    style={{
      width: "100%", height: "100%",
      objectFit: "cover",
      objectPosition: "top",
    }}
  />
)}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, transparent 40%, var(--bg-secondary) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.15,
                background: `linear-gradient(135deg, ${project.accent}, ${
                  project.accentSecondary ?? project.accent
                })`,
              }}
            />
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "2rem" }}>

          {/* Header */}
          <div style={{ marginBottom: "1.5rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "0.5rem",
                flexWrap: "wrap" as const,
              }}
            >
              <span
                style={{
                  fontSize: "0.7rem",
                  color: "var(--text-tertiary)",
                  fontWeight: 500,
                }}
              >
                {project.category}
              </span>
              <StatusBadge status={project.status} />
            </div>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                marginBottom: "0.25rem",
              }}
            >
              {project.title}
            </h2>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
              {project.subtitle}
            </p>
          </div>

          {/* Metrics */}
          {project.metrics && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "0.75rem",
                marginBottom: "2rem",
              }}
            >
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  style={{
                    padding: "1rem",
                    borderRadius: "0.75rem",
                    background: "var(--bg-tertiary)",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      background: `linear-gradient(135deg, ${project.accent}, ${
                        project.accentSecondary ?? project.accent
                      })`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {m.value}
                  </div>
                  <div
                    style={{ fontSize: "0.7rem", color: "var(--text-tertiary)" }}
                  >
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Problem → Solution → Outcome */}
{/* Case study OR story content */}
{project.descriptionType === "story" ? (
  <div style={{ marginBottom: "1.5rem" }}>
    <p
      style={{
        fontSize: "0.95rem",
        lineHeight: 1.8,
        color: "var(--text-secondary)",
      }}
    >
      {project.description}
    </p>
  </div>
) : (
  <>
    {[
      { label: "The Problem",  body: project.problem,  accent: project.accent },
      { label: "The Solution", body: project.solution, accent: project.accentSecondary ?? project.accent },
      { label: "The Outcome",  body: project.outcome,  accent: "var(--accent-2)" },
    ].map((block) => block.body ? (
      <div key={block.label} style={{ marginBottom: "1.5rem" }}>
        <div
          style={{
            fontSize: "0.65rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase" as const,
            color: block.accent,
            marginBottom: "0.5rem",
          }}
        >
          {block.label}
        </div>
        <p
          style={{
            fontSize: "0.9rem",
            lineHeight: 1.75,
            color: "var(--text-secondary)",
          }}
        >
          {block.body}
        </p>
      </div>
    ) : null)}
  </>
)}

          {/* Key Decisions */}
          {project.keyDecisions && project.keyDecisions.length > 0 && (
            <div style={{ marginBottom: "1.5rem" }}>
              <div
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  color: "var(--text-tertiary)",
                  marginBottom: "0.75rem",
                }}
              >
                Key Engineering Decisions
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: "0.6rem",
                }}
              >
                {project.keyDecisions.map((d, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: project.accent,
                        flexShrink: 0,
                        marginTop: "7px",
                        boxShadow: `0 0 6px ${project.accent}`,
                      }}
                    />
                    <p
                      style={{
                        fontSize: "0.875rem",
                        lineHeight: 1.65,
                        color: "var(--text-secondary)",
                        margin: 0,
                      }}
                    >
                      {d}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech stack */}
          <div style={{ marginBottom: "2rem" }}>
            <div
              style={{
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: "var(--text-tertiary)",
                marginBottom: "0.75rem",
              }}
            >
              Tech Stack
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "0.5rem" }}>
              {project.technologies.map((t) => (
                <TechChip accent={project.accent} key={t} name={t} />
              ))}
            </div>
          </div>

          {/* Note */}
          {project.links.note && (
            <div
              style={{
                padding: "0.75rem 1rem",
                borderRadius: "0.5rem",
                background: "rgba(245,158,11,0.08)",
                border: "1px solid rgba(245,158,11,0.2)",
                fontSize: "0.8rem",
                color: "#f59e0b",
                marginBottom: "1.5rem",
              }}
            >
              {project.links.note}
            </div>
          )}

          {/* Links */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" as const }}>
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FaExternalLinkAlt size={12} />
                Live Demo
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <FaGithub size={14} />
                View Code
              </a>
            )}
          </div>

        </div>
      </motion.div>
    </>
  );
}

export default function ProjectsPage() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const fadeUp = (delay = 0): Variants => ({
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay },
    },
  });

  const featured  = PROJECTS.filter((p) => p.featured);
  const secondary = PROJECTS.filter((p) => !p.featured);

  return (
    <PageTransition>
      <div className="min-h-screen">

        {/* ── Page Header ──────────────────────────────────── */}
        <div style={{ paddingTop: "7rem", paddingBottom: "4rem" }}>
          <div className="container-main">
            <motion.div
              variants={fadeUp(0.05)}
              initial="hidden"
              animate="visible"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                marginBottom: "1.25rem", padding: "5px 14px",
                borderRadius: "99px", background: "var(--accent-muted)",
                border: "1px solid var(--accent-border)",
                color: "var(--accent-hover)", fontSize: "0.7rem",
                fontWeight: 500, letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
              Selected Work
            </motion.div>

            <motion.h1
              variants={fadeUp(0.1)}
              initial="hidden"
              animate="visible"
              style={{ color: "var(--text-primary)", marginBottom: "1rem" }}
            >
              Things I've{" "}
              <span style={{
                background: "var(--accent-gradient-full)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Built
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp(0.15)}
              initial="hidden"
              animate="visible"
              style={{
                fontSize: "1.05rem", color: "var(--text-secondary)",
                maxWidth: "52ch", lineHeight: 1.7,
              }}
            >
              A selection of projects across AI, full-stack development, and intelligent digital products. Each one represents a unique technical challenge, architectural decision, and learning experience.
            </motion.p>
          </div>
        </div>

        {/* ── Featured Projects ─────────────────────────── */}
        <div style={{ paddingBottom: "5rem" }}>
          <div className="container-main">

            {/* Section label */}
            <motion.div
              variants={fadeUp(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                display: "flex", alignItems: "center",
                gap: "1rem", marginBottom: "2.5rem",
              }}
            >
              <span style={{
                fontSize: "0.7rem", fontWeight: 500,
                letterSpacing: "0.12em", textTransform: "uppercase" as const,
                color: "var(--text-tertiary)", whiteSpace: "nowrap" as const,
              }}>
                Featured
              </span>
              <div style={{ flex: 1, height: "1px", background: "var(--border-subtle)" }} />
            </motion.div>

            {/* Featured cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {featured.map((project, i) => (
                <motion.div
                  key={project.id}
                  variants={fadeUp(i * 0.1)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  whileHover={{ borderColor: project.accent }}
                  onClick={() => setSelectedProject(project)}
                  style={{
                    borderRadius: "1.25rem", overflow: "hidden",
                    border: "1px solid var(--border-subtle)",
                    background: "var(--bg-secondary)",
                    cursor: "pointer",
                    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                  }}
                  className="featured-card"
                >
                  {/* Image side */}
                  <div style={{
                    position: "relative", overflow: "hidden",
                    minHeight: "280px",
                    order: i % 2 === 0 ? 0 : 1,
                  }}>
                    {project.placeholderGradient ? (
  <div style={{
    width: "100%", height: "100%",
    background: project.placeholderGradient,
    display: "flex", alignItems: "center", justifyContent: "center",
  }}>
    <span style={{
      fontSize: "0.75rem", fontWeight: 600,
      letterSpacing: "0.1em", textTransform: "uppercase" as const,
      color: "rgba(255,255,255,0.5)",
    }}>
      In Progress
    </span>
  </div>
) : (
  <img
    src={project.image}
    alt={project.title}
    style={{
      width: "100%", height: "100%",
      objectFit: "cover",
      transition: "transform 0.4s ease",
    }}
  />
)}
                    <div style={{
                      position: "absolute", inset: 0,
                      background: `linear-gradient(135deg, ${project.accent}22, ${project.accentSecondary ?? project.accent}11)`,
                    }} />
                  </div>

                  {/* Content side */}
                  <div style={{
                    padding: "2.5rem",
                    display: "flex", flexDirection: "column",
                    justifyContent: "space-between",
                    order: i % 2 === 0 ? 1 : 0,
                  }}>
                    <div>
                      {/* Category + status */}
                      <div style={{
                        display: "flex", alignItems: "center",
                        gap: "0.5rem", marginBottom: "1rem",
                        flexWrap: "wrap",
                      }}>
                        <span style={{
                          fontSize: "0.7rem", color: "var(--text-tertiary)",
                          fontWeight: 500,
                        }}>
                          {project.category}
                        </span>
                        <StatusBadge status={project.status} />
                      </div>

                      {/* Title */}
                      <h2 style={{
                        fontSize: "1.6rem", fontWeight: 700,
                        letterSpacing: "-0.03em",
                        color: "var(--text-primary)",
                        marginBottom: "0.4rem",
                      }}>
                        {project.title}
                      </h2>
                      <p style={{
                        fontSize: "0.9rem", color: "var(--text-secondary)",
                        marginBottom: "1.25rem",
                      }}>
                        {project.subtitle}
                      </p>

                      {/* Problem line */}
                      <p style={{
                        fontSize: "0.875rem", lineHeight: 1.7,
                        color: "var(--text-tertiary)",
                        marginBottom: "1.5rem",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical" as const,
                        overflow: "hidden",
                      }}>
                        {project.problem}
                      </p>

                      {/* Metrics strip */}
                      {project.metrics && (
                        <div style={{
                          display: "flex", flexWrap: "wrap",
                          gap: "1.25rem", marginBottom: "1.5rem",
                          paddingTop: "1rem",
                          borderTop: "1px solid var(--border-subtle)",
                        }}>
                          {project.metrics.slice(0, 3).map((m) => (
                            <div key={m.label}>
                              <div style={{
                                fontSize: "0.95rem", fontWeight: 700,
                                letterSpacing: "-0.02em",
                                background: `linear-gradient(135deg, ${project.accent}, ${project.accentSecondary ?? project.accent})`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                              }}>
                                {m.value}
                              </div>
                              <div style={{
                                fontSize: "0.65rem",
                                color: "var(--text-tertiary)",
                                marginTop: "1px",
                              }}>
                                {m.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Bottom row */}
                    <div style={{
                      display: "flex", alignItems: "center",
                      justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem",
                    }}>
                      {/* Tech chips */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                        {project.technologies.slice(0, 4).map((t) => (
                          <TechChip key={t} name={t} accent={project.accent} />
                        ))}
                        {project.technologies.length > 4 && (
                          <span style={{
                            padding: "3px 10px", borderRadius: "99px",
                            fontSize: "0.7rem", color: "var(--text-tertiary)",
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid var(--border-subtle)",
                          }}>
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      {/* View details hint */}
                      <span style={{
                        fontSize: "0.78rem", color: project.accent,
                        fontWeight: 500, display: "flex",
                        alignItems: "center", gap: "4px",
                      }}>
                        View Case Study →
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Secondary Projects ────────────────────────── */}
        <div style={{
          paddingBottom: "6rem",
          borderTop: "1px solid var(--border-subtle)",
          paddingTop: "4rem",
        }}>
          <div className="container-main">

            <motion.div
              variants={fadeUp(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                display: "flex", alignItems: "center",
                gap: "1rem", marginBottom: "2.5rem",
              }}
            >
              <span style={{
                fontSize: "0.7rem", fontWeight: 500,
                letterSpacing: "0.12em", textTransform: "uppercase" as const,
                color: "var(--text-tertiary)", whiteSpace: "nowrap" as const,
              }}>
                More Work
              </span>
              <div style={{ flex: 1, height: "1px", background: "var(--border-subtle)" }} />
            </motion.div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1rem",
            }}>
              {secondary.map((project, i) => (
                <motion.div
                  key={project.id}
                  variants={fadeUp(i * 0.08)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ borderColor: project.accent, y: -4 }}
                  onClick={() => setSelectedProject(project)}
                  style={{
                    borderRadius: "1rem", overflow: "hidden",
                    border: "1px solid var(--border-subtle)",
                    background: "var(--bg-secondary)",
                    cursor: "pointer",
                    transition: "border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
                  }}
                >
                  {/* Image */}
                  <div style={{ height: "160px", overflow: "hidden", position: "relative" }}>
                    {project.placeholderGradient ? (
  <div style={{
    width: "100%", height: "100%",
    background: project.placeholderGradient,
    display: "flex", alignItems: "center", justifyContent: "center",
  }}>
    <span style={{
      fontSize: "0.75rem", fontWeight: 600,
      letterSpacing: "0.1em", textTransform: "uppercase" as const,
      color: "rgba(255,255,255,0.5)",
    }}>
      In Progress
    </span>
  </div>
) : (
  <img
    src={project.image}
    alt={project.title}
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
  />
)}
                    <div style={{
                      position: "absolute", inset: 0,
                      background: `linear-gradient(to bottom, transparent 50%, var(--bg-secondary) 100%)`,
                    }} />
                    <div style={{
                      position: "absolute", inset: 0, opacity: 0.12,
                      background: `linear-gradient(135deg, ${project.accent}, transparent)`,
                    }} />
                  </div>

                  {/* Content */}
                  <div style={{ padding: "1.5rem" }}>
                    <div style={{
                      display: "flex", alignItems: "center",
                      gap: "0.5rem", marginBottom: "0.75rem",
                      flexWrap: "wrap",
                    }}>
                      <span style={{
                        fontSize: "0.68rem",
                        color: "var(--text-tertiary)", fontWeight: 500,
                      }}>
                        {project.category}
                      </span>
                      <StatusBadge status={project.status} />
                    </div>

                    <h3 style={{
                      fontSize: "1.1rem", fontWeight: 700,
                      letterSpacing: "-0.02em",
                      color: "var(--text-primary)", marginBottom: "0.3rem",
                    }}>
                      {project.title}
                    </h3>
                    <p style={{
                      fontSize: "0.82rem", color: "var(--text-secondary)",
                      marginBottom: "1rem",
                    }}>
                      {project.subtitle}
                    </p>

                    <p style={{
                      fontSize: "0.82rem", lineHeight: 1.65,
                      color: "var(--text-tertiary)", marginBottom: "1.25rem",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical" as const,
                      overflow: "hidden",
                    }}>
                      {project.descriptionType === "story" ? project.description : project.problem}
                    </p>

                    <div style={{
                      display: "flex", flexWrap: "wrap",
                      gap: "0.4rem", marginBottom: "1rem",
                    }}>
                      {project.technologies.slice(0, 3).map((t) => (
                        <TechChip key={t} name={t} accent={project.accent} />
                      ))}
                      {project.technologies.length > 3 && (
                        <span style={{
                          padding: "3px 10px", borderRadius: "99px",
                          fontSize: "0.7rem", color: "var(--text-tertiary)",
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid var(--border-subtle)",
                        }}>
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <div style={{
                      display: "flex", gap: "0.75rem",
                      paddingTop: "1rem",
                      borderTop: "1px solid var(--border-subtle)",
                    }}>
                      {project.links.live && (
                        <a
                          href={project.links.live ?? "#"}
  target="_blank"
  rel="noopener noreferrer"
  onClick={(e: React.MouseEvent) => e.stopPropagation()}
  style={{
    display: "flex",
    alignItems: "center",
    gap: "5px",
    fontSize: "0.78rem",
    color: "var(--text-tertiary)",
    textDecoration: "none",
    transition: "color 0.15s ease",
  }}
>
  <FaExternalLinkAlt size={10} /> Live
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github ?? "#"}
  target="_blank"
  rel="noopener noreferrer"
  onClick={(e: React.MouseEvent) => e.stopPropagation()}
  style={{
    display: "flex",
    alignItems: "center",
    gap: "5px",
    fontSize: "0.78rem",
    color: "var(--text-tertiary)",
    textDecoration: "none",
    transition: "color 0.15s ease",
  }}
>
  <FaGithub size={11} /> Code
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Drawer ───────────────────────────────────── */}
        <AnimatePresence>
          {selectedProject !== null && (
  <ProjectDrawer
    project={selectedProject as Project}
    onClose={() => setSelectedProject(null)}
  />
)}
        </AnimatePresence>

      </div>
    </PageTransition>
  );
}