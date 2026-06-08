import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import type { Theme } from "../../App";
import Logo from "/ATLogo.png";

interface NavigationProps {
  theme: Theme;
  onThemeToggle: () => void;
  onAssistantOpen: () => void;
}

const NAV_ITEMS = [
  { path: "/",           label: "Home"       },
  { path: "/about",      label: "About"      },
  { path: "/projects",   label: "Work"       },
  { path: "/experience", label: "Experience" },
  { path: "/contact",    label: "Contact"    },
];

export default function Navigation({ theme, onThemeToggle }: NavigationProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const getNavBackground = () => {
    if (isScrolled) return "var(--bg-secondary)";
    return theme === "dark"
      ? "rgba(7, 8, 15, 0.6)"
      : "rgba(250, 249, 255, 0.6)";
  };

  return (
    <>
      {/* Desktop nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 justify-center hidden pt-4 md:flex">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-1 px-3 py-2 border rounded-full"
          style={{
            background: getNavBackground(),
            borderColor: "var(--border-default)",
            boxShadow: isScrolled ? "var(--shadow-lg)" : "none",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            transition: "background 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => navigate("/")}
            style={{ color: "var(--text-primary)" }}
          >
            <img src={Logo} alt="Logo" className="h-11 w-11" />
          </button>

          <div
            className="w-px h-4 mx-1"
            style={{ background: "var(--border-default)" }}
          />

          {/* Nav links */}
          {NAV_ITEMS.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="relative px-3 py-1.5 rounded-full text-sm transition-colors"
              style={{
                color: isActive(item.path)
                  ? "var(--accent-hover)"
                  : "var(--text-secondary)",
              }}
            >
              {isActive(item.path) && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full"
                  style={{ background: "var(--accent-muted)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}

          <div
            className="w-px h-4 mx-1"
            style={{ background: "var(--border-default)" }}
          />

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-full text-sm transition-colors"
            style={{ color: "var(--text-secondary)" }}
          >
            Resume
          </a>

          <div
            className="w-px h-4 mx-1"
            style={{ background: "var(--border-default)" }}
          />

          {/* Theme toggle */}
          <button
            onClick={onThemeToggle}
            className="p-1.5 rounded-full transition-colors"
            style={{ color: "var(--text-secondary)" }}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {theme === "dark" ? (
                <motion.span
                  key="sun"
                  initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun size={15} />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon size={15} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </motion.div>
      </nav>

      {/* Mobile nav */}
      <div className="fixed z-50 flex items-center justify-between top-4 left-4 right-4 md:hidden">
        <button
          onClick={() => navigate("/")}
          className="text-sm font-bold border rounded-full"
          style={{
            background: "var(--bg-secondary)",
            borderColor: "var(--border-default)",
            color: "var(--text-primary)",
            boxShadow: "var(--shadow-md)",
            padding: 0,
          }}
        >
          <img src={Logo} alt="Logo" className="w-10 h-10" />
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={onThemeToggle}
            className="p-2 border rounded-full"
            style={{
              background: "var(--bg-secondary)",
              borderColor: "var(--border-default)",
              color: "var(--text-secondary)",
            }}
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <button
            onClick={() => setIsMobileOpen((p) => !p)}
            className="p-2 border rounded-full"
            style={{
              background: "var(--bg-secondary)",
              borderColor: "var(--border-default)",
              color: "var(--text-secondary)",
            }}
          >
            {isMobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed z-40 p-2 border top-16 left-4 right-4 rounded-2xl md:hidden"
            style={{
              background: "var(--bg-secondary)",
              borderColor: "var(--border-default)",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="w-full px-4 py-3 text-sm text-left transition-colors rounded-xl"
                style={{
                  color: isActive(item.path)
                    ? "var(--accent-hover)"
                    : "var(--text-secondary)",
                  background: isActive(item.path)
                    ? "var(--accent-muted)"
                    : "transparent",
                }}
              >
                {item.label}
              </button>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-4 py-3 text-sm text-left transition-colors rounded-xl"
              style={{ color: "var(--text-secondary)" }}
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}