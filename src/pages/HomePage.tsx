import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { portfolioData } from "../lib/portfolio-data";
import PageTransition from "../components/motion/PageTransition";

interface HomePageProps {
  onAssistantOpen: () => void;
}

const STATS = [
  { value: "3",    label: "Internships"          },
  { value: "10+",   label: "Projects Shipped"     },
  { value: "8.80", label: "CGPA"                 },
  { value: "4+", label: "AI-Powered Applications" }
];

export default function HomePage({ onAssistantOpen }: HomePageProps) {
  const shouldReduceMotion = useReducedMotion();
  const navigate = useNavigate();

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  return (
    <PageTransition>
      <div
        className="relative flex flex-col justify-center min-h-screen overflow-hidden"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.04]"
            style={{
              background:
                "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full opacity-[0.03]"
            style={{
              background:
                "radial-gradient(circle, var(--accent-hover) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 pt-24 container-main">
          <motion.div
            className="max-w-4xl"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={item} className="mb-8">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium"
                style={{
                  background: "var(--accent-muted)",
                  borderColor: "var(--accent-border)",
                  color: "var(--accent-hover)",
                }}
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span
                    className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping"
                    style={{ backgroundColor: "var(--accent-hover)" }}
                  />
                  <span
                    className="relative inline-flex rounded-full h-1.5 w-1.5"
                    style={{ backgroundColor: "var(--accent-hover)" }}
                  />
                </span>
                Available for {portfolioData.personal.availableFor}
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={item}
              className="mb-4 font-semibold tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              {portfolioData.personal.name}
            </motion.h1>

            {/* Title */}
            <motion.div variants={item} className="mb-6">
              <span
                className="text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl"
                style={{ color: "var(--accent)" }}
              >
                {portfolioData.personal.title}
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={item}
              className="max-w-2xl mb-8 text-lg font-light sm:text-xl md:text-2xl"
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.5,
                letterSpacing: "-0.01em",
              }}
            >
              {portfolioData.personal.tagline}
            </motion.p>

            {/* Short bio */}
            <motion.p
              variants={item}
              className="max-w-xl mb-10 text-base leading-relaxed"
              style={{ color: "var(--text-tertiary)" }}
            >
              {portfolioData.personal.shortBio}
            </motion.p>

            {/* CTAs */}
            <motion.div
  variants={item}
  className="flex flex-wrap items-center gap-3 mb-16"
>
  <button
    onClick={() => navigate("/projects")}
    className="btn btn-primary"
  >
    View My Work
    <ArrowRight size={15} />
  </button>

  <a
    href={portfolioData.links.resume ?? "/resume.pdf"}
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-secondary"
  >
    <FaFileAlt size={15} />
    Resume
  </a>

  <button
    onClick={onAssistantOpen}
    className="btn btn-ghost"
  >
    <Sparkles size={15} />
    Ask Aditya
  </button>

  <div
    className="hidden w-px h-8 mx-1 sm:block"
    style={{ background: "var(--border-default)" }}
  />

  <a
    href={portfolioData.links.github}
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-ghost p-2.5"
    aria-label="GitHub"
  >
    <FaGithub size={18} />
  </a>

  <a
    href={portfolioData.links.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-ghost p-2.5"
    aria-label="LinkedIn"
  >
    <FaLinkedin size={18} />
  </a>

  <a
    href={`mailto:${portfolioData.personal.email}`}
    className="btn btn-ghost p-2.5"
    aria-label="Email"
  >
    <FaEnvelope size={18} />
  </a>
</motion.div>

            {/* Stats */}
            <motion.div variants={item}>
              <div
                className="flex flex-wrap gap-px overflow-hidden border rounded-2xl"
                style={{ borderColor: "var(--border-subtle)" }}
              >
                {STATS.map((stat, i) => (
                  <div
                    key={i}
                    className="flex-1 min-w-[120px] px-6 py-5"
                    style={{
                      background: "var(--bg-secondary)",
                      borderRight:
                        i < STATS.length - 1
                          ? "1px solid var(--border-subtle)"
                          : "none",
                    }}
                  >
                    <div
                      className="mb-1 text-2xl font-semibold tracking-tight"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: "var(--text-tertiary)" }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* View My work indicator */}
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute flex flex-col items-center gap-2 -translate-x-1/2 cursor-pointer bottom-8 left-1/2"
          onClick={() => navigate("/about")}
          style={{ color: "var(--text-tertiary)" }}
        >
          <span className="text-xs tracking-widest uppercase">
            Explore
          </span>
          <ArrowRight size={14} />
        </motion.div>
      </div>
    </PageTransition>
  );
}
