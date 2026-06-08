import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────

type ExperienceEntry = {
  id: string;
  role: string;
  org: string;
  orgType: "research" | "internship";
  period: string;
  status: "completed" | "ongoing";
  summary: string;
  bullets: string[];
  technologies: string[];
  accent: string;
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const EXPERIENCES: ExperienceEntry[] = [
  {
    id: "bovision",
    role: "AI & Computer Vision Research",
    org: "BOVISION — Academic Minor Project",
    orgType: "research",
    period: "Mar 2026 – May 2026",
    status: "completed",
    summary:
      "Developed an AI-powered cattle breed classification system as part of an academic minor project, using a ResNet50 backbone enhanced with AGPN and MVFF architectures. Achieved 96.25% peak validation accuracy on a dataset of 1,208 labeled cattle images across five breeds.",
    bullets: [
      "Designed and trained a custom deep learning pipeline built on ResNet50, integrating Attention-Guided Pooling (AGPN) and Multi-View Feature Fusion (MVFF) modules.",
      "Deployed the solution through a Flask-based web application and integrated Grad-CAM visualizations to improve model explainability and transparency.",
      "Collaborated within a project team and contributed to an IEEE-style research paper documenting the system architecture, methodology, and experimental results.",
    ],
    technologies: [
      "Python", "Flask", "OpenCV", "NumPy", "ResNet50",
      "AGPN", "MVFF", "Grad-CAM", "Deep Learning", "Computer Vision",
    ],
    accent: "var(--accent-3)",
  },
  {
    id: "bellwether",
    role: "Web Developer Intern",
    org: "Bellwether Business Solutions Pvt. Ltd.",
    orgType: "internship",
    period: "Dec 2025 – Jan 2026",
    status: "completed",
    summary:
      "Contributed to a production-grade decentralized identity platform that enabled individuals and organizations to securely manage blockchain-protected digital identities while maintaining privacy, ownership, and control over their personal information.",
    bullets: [
      "Developed separate user and organization workflows covering authentication, onboarding, profile creation, and identity verification interfaces for decentralized identity management.",
      "Built frontend experiences for credential verification processes involving government-issued identity information, enabling secure user and organization onboarding.",
      "Contributed to the migration of a large-scale React codebase from JavaScript to TypeScript, improving type safety, maintainability, and long-term scalability.",
      "Worked within a collaborative production environment, gaining exposure to shared codebases, scalable frontend architecture, code reviews, and professional engineering practices.",
    ],
    technologies: [
      "React", "TypeScript", "JavaScript", "Authentication Systems",
      "Identity Verification", "Decentralized Identity", "Frontend Architecture", "Blockchain",
    ],
    accent: "var(--accent-2)",
  },
  {
    id: "xyzon",
    role: "MERN Stack Developer Intern",
    org: "Xyzon Innovations Pvt. Ltd.",
    orgType: "internship",
    period: "Mar 2026 – Present",
    status: "ongoing",
    summary:
      "Contributing to full-stack product development with a primary focus on a Learning Management System, frontend architecture, and user experience improvements across web platforms.",
    bullets: [
      "Developing LMS features including authentication workflows, dashboards, course management interfaces, and frontend-backend integration using the MERN stack.",
      "Contributing to website redesign initiatives focused on improving user experience, visual consistency, responsiveness, interaction quality, and overall product presentation.",
      "Working across React, Node.js, Express.js, and MongoDB to build scalable features, integrate REST APIs, and support end-to-end application functionality.",
      "Collaborating within a structured development environment while gaining hands-on experience with modern web application architecture and product development workflows.",
    ],
    technologies: [
      "React", "Node.js", "Express.js", "MongoDB", "REST APIs",
      "JWT Authentication", "Frontend Architecture", "UI/UX", "Full-Stack Development",
    ],
    accent: "var(--accent)",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const TAG_ICONS: Record<ExperienceEntry["orgType"], string> = {
  research: "◈",
  internship: "◆",
};

function TimelineCard({
  entry,
  index,
}: {
  entry: ExperienceEntry;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ display: "flex", gap: "2rem", position: "relative" }}
    >
      {/* Left: dot + line */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexShrink: 0,
          width: "1.5rem",
          paddingTop: "0.35rem",
        }}
      >
        {/* Dot */}
        <div
          style={{
            width: "0.75rem",
            height: "0.75rem",
            borderRadius: "50%",
            background: entry.accent,
            flexShrink: 0,
            boxShadow:
              entry.status === "ongoing"
                ? `0 0 0 3px color-mix(in srgb, ${entry.accent} 20%, transparent), 0 0 12px color-mix(in srgb, ${entry.accent} 40%, transparent)`
                : "none",
            position: "relative",
            zIndex: 1,
          }}
        >
          {entry.status === "ongoing" && (
            <motion.div
              style={{
                position: "absolute",
                inset: "-4px",
                borderRadius: "50%",
                border: `1.5px solid ${entry.accent}`,
                opacity: 0.5,
              }}
              animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
        </div>

        {/* Vertical line */}
        {index < EXPERIENCES.length - 1 && (
          <div
            style={{
              flex: 1,
              width: "1px",
              background: "var(--border-default)",
              marginTop: "0.5rem",
              minHeight: "2rem",
            }}
          />
        )}
      </div>

      {/* Right: card */}
      <div
        style={{
          flex: 1,
          background: "var(--bg-elevated)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius-lg)",
          padding: "1.75rem 2rem",
          marginBottom: "2rem",
          position: "relative",
          overflow: "hidden",
          boxShadow: "var(--shadow-sm)",
        }}
      >
        {/* Subtle accent strip */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "3px",
            height: "100%",
            background: entry.accent,
            borderRadius: "3px 0 0 3px",
            opacity: 0.6,
          }}
        />

        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "0.35rem",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: entry.accent,
                opacity: 0.85,
              }}
            >
              {TAG_ICONS[entry.orgType]}{" "}
              {entry.orgType === "research" ? "Research" : "Internship"}
            </span>
            <h3
              style={{
                fontSize: "1.15rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                margin: "0.3rem 0 0.1rem",
                letterSpacing: "-0.01em",
              }}
            >
              {entry.role}
            </h3>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--text-secondary)",
                margin: 0,
              }}
            >
              {entry.org}
            </p>
          </div>

          <div style={{ textAlign: "right", flexShrink: 0 }}>
            <p
              style={{
                fontSize: "0.8rem",
                color: "var(--text-tertiary)",
                margin: "0 0 0.35rem",
              }}
            >
              {entry.period}
            </p>
            {entry.status === "ongoing" && (
              <span
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "0.2rem 0.6rem",
                  borderRadius: "999px",
                  background: `color-mix(in srgb, ${entry.accent} 15%, transparent)`,
                  border: `1px solid color-mix(in srgb, ${entry.accent} 35%, transparent)`,
                  color: entry.accent,
                }}
              >
                Ongoing
              </span>
            )}
          </div>
        </div>

        {/* Summary */}
        <p
          style={{
            fontSize: "0.9rem",
            lineHeight: 1.65,
            color: "var(--text-secondary)",
            margin: "1rem 0 0.75rem",
          }}
        >
          {entry.summary}
        </p>

        {/* Bullets */}
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.55rem",
          }}
        >
          {entry.bullets.map((b, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                gap: "0.65rem",
                fontSize: "0.875rem",
                lineHeight: 1.6,
                color: "var(--text-primary)",
              }}
            >
              <span
                style={{
                  color: entry.accent,
                  flexShrink: 0,
                  marginTop: "0.15rem",
                }}
              >
                —
              </span>
              {b}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {entry.technologies.map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.04em",
                padding: "0.2rem 0.55rem",
                borderRadius: "0.375rem",
                background: "var(--accent-muted)",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-tertiary)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ExperiencePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "5rem 1.5rem 6rem",
        maxWidth: "780px",
        margin: "0 auto",
      }}
    >
      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ marginBottom: "4rem" }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "1.25rem",
            padding: "5px 14px",
            borderRadius: "99px",
            background: "var(--accent-muted)",
            border: "1px solid var(--accent-border)",
            color: "var(--accent-hover)",
            fontSize: "0.7rem",
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase" as const,
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--accent)",
              flexShrink: 0,
            }}
          />
          Career Timeline
        </motion.div>

        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "var(--text-primary)",
            margin: "0 0 1rem",
            lineHeight: 1.1,
          }}
        >
          Experience
        </h1>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.7,
            color: "var(--text-secondary)",
            maxWidth: "520px",
            margin: 0,
          }}
        >
          Research, product development, and industry experience — the milestones
          that continue to shape my approach to engineering.
        </p>
      </motion.div>

      {/* Timeline */}
      <div style={{ position: "relative" }}>
        {EXPERIENCES.map((entry, i) => (
          <TimelineCard key={entry.id} entry={entry} index={i} />
        ))}
      </div>
    </div>
  );
}