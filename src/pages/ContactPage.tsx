import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────

type FormState = "idle" | "sending" | "success" | "error";

// ─── Constants ────────────────────────────────────────────────────────────────

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzznoava";

const CONTACT_LINKS = [
  {
    id: "email",
    label: "Email",
    value: "adityabt24@gmail.com",
    href: "mailto:adityabt24@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    accent: "var(--accent)",
    accentMuted: "var(--accent-muted)",
    accentBorder: "var(--accent-border)",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/adityabt",
    href: "https://www.linkedin.com/in/adityabt",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    accent: "var(--accent-2)",
    accentMuted: "var(--accent-2-muted)",
    accentBorder: "var(--accent-2-border)",
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/Adityabt",
    href: "https://github.com/Adityabt",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
    accent: "var(--accent-3)",
    accentMuted: "var(--accent-3-muted)",
    accentBorder: "var(--accent-3-border)",
  },
  {
  id: "instagram",
  label: "Instagram",
  value: "@adxtya.thakxr",
  href: "https://www.instagram.com/adxtya.thakxr/",
  icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  accent: "var(--accent-4)",
  accentMuted: "var(--accent-4-muted)",
  accentBorder: "var(--accent-4-border)",
},
{
  id: "twitter",
  label: "Twitter / X",
  value: "@AdityaT1105",
  href: "https://x.com/AdityaT1105",
  icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.25 2.25h6.988l4.27 5.647 4.736-5.647Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
    </svg>
  ),
  accent: "var(--accent-2)",
  accentMuted: "var(--accent-2-muted)",
  accentBorder: "var(--accent-2-border)",
},
];

// ─── Contact Link Card ────────────────────────────────────────────────────────

function ContactLinkCard({
  link,
  index,
}: {
  link: (typeof CONTACT_LINKS)[number];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.a
      ref={ref}
      href={link.href}
      target={link.id !== "email" ? "_blank" : undefined}
      rel={link.id !== "email" ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, x: 24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -2 }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        padding: "1.1rem 1.4rem",
        borderRadius: "var(--radius-lg)",
        background: "var(--bg-elevated)",
        border: "1px solid var(--border-subtle)",
        boxShadow: "var(--shadow-sm)",
        textDecoration: "none",
        cursor: "pointer",
        transition: "border-color 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = link.accentBorder;
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)";
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)";
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: "2.5rem",
          height: "2.5rem",
          borderRadius: "var(--radius-md)",
          background: link.accentMuted,
          border: `1px solid ${link.accentBorder}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: link.accent,
          flexShrink: 0,
        }}
      >
        {link.icon}
      </div>

      {/* Text */}
      <div style={{ minWidth: 0 }}>
        <p
          style={{
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: link.accent,
            margin: "0 0 0.15rem",
          }}
        >
          {link.label}
        </p>
        <p
          style={{
            fontSize: "0.875rem",
            color: "var(--text-secondary)",
            margin: 0,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {link.value}
        </p>
      </div>

      {/* Arrow */}
      <div
        style={{
          marginLeft: "auto",
          color: "var(--text-tertiary)",
          flexShrink: 0,
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17 17 7M7 7h10v10" />
        </svg>
      </div>
    </motion.a>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<typeof fields>>({});

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  // ── Validation ────────────────────────────────────────────────────────────

  function validate() {
    const e: Partial<typeof fields> = {};
    if (!fields.name.trim()) e.name = "Name is required.";
    if (!fields.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      e.email = "Enter a valid email.";
    if (!fields.message.trim()) e.message = "Message is required.";
    return e;
  }

  // ── Submit ─────────────────────────────────────────────────────────────────

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setFormState("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(fields),
      });
      if (res.ok) {
        setFormState("success");
        setFields({ name: "", email: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  // ── Field style helper ─────────────────────────────────────────────────────

  function inputStyle(hasError: boolean): React.CSSProperties {
    return {
      width: "100%",
      padding: "0.7rem 0.9rem",
      borderRadius: "var(--radius-md)",
      background: "var(--bg-secondary)",
      border: `1px solid ${hasError ? "var(--accent-3)" : "var(--border-default)"}`,
      color: "var(--text-primary)",
      fontSize: "0.9rem",
      fontFamily: "inherit",
      outline: "none",
      transition: "border-color 0.18s ease, box-shadow 0.18s ease",
    };
  }

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "5rem 1.5rem 6rem",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      {/* Page header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 24 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ marginBottom: "3.5rem" }}
      >
        <div
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
            textTransform: "uppercase",
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
          Get In Touch
        </div>

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
          Contact
        </h1>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.7,
            color: "var(--text-secondary)",
            maxWidth: "480px",
            margin: 0,
          }}
        >
          Have a project in mind, want to collaborate, or just want to say hi?
          I'm always open to a conversation.
        </p>
      </motion.div>

      {/* Split layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "2.5rem",
          alignItems: "start",
        }}
        className="contact-grid"
      >
        {/* ── Left: Form ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            background: "var(--bg-elevated)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-xl)",
            padding: "2rem",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <h2
            style={{
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "1.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            Send a message
          </h2>

          {formState === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                padding: "2rem",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "50%",
                  background: "var(--accent-muted)",
                  border: "1px solid var(--accent-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent)",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <p style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "1rem" }}>
                Message sent!
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6 }}>
                Thanks for reaching out. I'll get back to you soon.
              </p>
              <button
                onClick={() => setFormState("idle")}
                style={{
                  marginTop: "0.5rem",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "var(--accent)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  padding: 0,
                  letterSpacing: "0.02em",
                }}
              >
                Send another →
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              {/* Name */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "var(--text-tertiary)",
                    marginBottom: "0.4rem",
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={fields.name}
                  onChange={(e) => setFields({ ...fields, name: e.target.value })}
                  onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "var(--accent)"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px var(--accent-muted)"; }}
                  onBlur={(e) => { (e.target as HTMLElement).style.borderColor = errors.name ? "var(--accent-3)" : "var(--border-default)"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                  style={inputStyle(!!errors.name)}
                />
                {errors.name && (
                  <p style={{ fontSize: "0.75rem", color: "var(--accent-3)", marginTop: "0.3rem" }}>
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "var(--text-tertiary)",
                    marginBottom: "0.4rem",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={fields.email}
                  onChange={(e) => setFields({ ...fields, email: e.target.value })}
                  onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "var(--accent)"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px var(--accent-muted)"; }}
                  onBlur={(e) => { (e.target as HTMLElement).style.borderColor = errors.email ? "var(--accent-3)" : "var(--border-default)"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                  style={inputStyle(!!errors.email)}
                />
                {errors.email && (
                  <p style={{ fontSize: "0.75rem", color: "var(--accent-3)", marginTop: "0.3rem" }}>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "var(--text-tertiary)",
                    marginBottom: "0.4rem",
                  }}
                >
                  Message
                </label>
                <textarea
                  placeholder="What's on your mind?"
                  value={fields.message}
                  rows={5}
                  onChange={(e) => setFields({ ...fields, message: e.target.value })}
                  onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "var(--accent)"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px var(--accent-muted)"; }}
                  onBlur={(e) => { (e.target as HTMLElement).style.borderColor = errors.message ? "var(--accent-3)" : "var(--border-default)"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                  style={{ ...inputStyle(!!errors.message), resize: "vertical", minHeight: "120px" }}
                />
                {errors.message && (
                  <p style={{ fontSize: "0.75rem", color: "var(--accent-3)", marginTop: "0.3rem" }}>
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Error banner */}
              {formState === "error" && (
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--accent-3)",
                    padding: "0.6rem 0.9rem",
                    borderRadius: "var(--radius-md)",
                    background: "var(--accent-3-muted)",
                    border: "1px solid var(--accent-3-border)",
                  }}
                >
                  Something went wrong. Please try again or email me directly.
                </p>
              )}

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={formState === "sending"}
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "var(--radius-md)",
                  background: formState === "sending"
                    ? "var(--accent-muted)"
                    : "linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)",
                  border: "none",
                  color: formState === "sending" ? "var(--accent)" : "#fff",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  fontFamily: "inherit",
                  cursor: formState === "sending" ? "not-allowed" : "pointer",
                  letterSpacing: "0.01em",
                  boxShadow: formState === "sending" ? "none" : "var(--shadow-glow)",
                  transition: "box-shadow 0.2s ease, background 0.2s ease",
                  alignSelf: "flex-start",
                }}
              >
                {formState === "sending" ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      style={{ display: "inline-block", width: "14px", height: "14px", border: "2px solid var(--accent)", borderTopColor: "transparent", borderRadius: "50%" }}
                    />
                    Sending…
                  </>
                ) : (
                  <>
                    Send message
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7z" />
                    </svg>
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>

        {/* ── Right: Links ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
          <motion.p
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-tertiary)",
              marginBottom: "0.25rem",
            }}
          >
            Or reach me at
          </motion.p>
          {CONTACT_LINKS.map((link, i) => (
            <ContactLinkCard key={link.id} link={link} index={i} />
          ))}
        </div>
      </div>

      {/* Responsive grid styles */}
      <style>{`
        @media (min-width: 720px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}