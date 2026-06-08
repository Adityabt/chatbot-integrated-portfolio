import { useState, useEffect, useCallback } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navigation from "./components/layout/Navigation";
import AssistantPanel from "./components/assistant/AssistantPanel";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";
import ContactPage from "./pages/ContactPage";

export type Theme = "dark" | "light";

export type RouteKey =
  | "/"
  | "/about"
  | "/projects"
  | "/experience"
  | "/skills"
  | "/contact";

function App() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const location = useLocation();

  // Theme initialization
  // Theme initialization
  useEffect(() => {
    const stored = localStorage.getItem("portfolio-theme") as Theme | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initial = stored ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const applyTheme = useCallback((newTheme: Theme) => {
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    applyTheme(newTheme);
  }, [theme, applyTheme]);

  // Keyboard shortcut
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsAssistantOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isAssistantOpen) {
        setIsAssistantOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isAssistantOpen]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div style={{ backgroundColor: "var(--bg-primary)", minHeight: "100vh" }}>
      <Navigation
        theme={theme}
        onThemeToggle={toggleTheme}
        onAssistantOpen={() => setIsAssistantOpen(true)}
      />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <HomePage onAssistantOpen={() => setIsAssistantOpen(true)} />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>

      {/* Persistent AI Assistant */}
      <AnimatePresence>
        {isAssistantOpen && (
          <AssistantPanel
            currentRoute={location.pathname as RouteKey}
            onClose={() => setIsAssistantOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Assistant trigger */}
      {!isAssistantOpen && (
        <button
          onClick={() => setIsAssistantOpen(true)}
          className="fixed z-40 flex items-center gap-2 px-4 py-3 text-sm font-medium text-white rounded-full bottom-6 right-6"
          style={{
            background: "var(--accent)",
            boxShadow: "var(--shadow-accent), var(--shadow-lg)",
          }}
          aria-label="Open AI Assistant"
        >
          <span className="relative flex w-2 h-2">
            <span
              className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping"
              style={{ backgroundColor: "white" }}
            />
            <span
              className="relative inline-flex w-2 h-2 rounded-full"
              style={{ backgroundColor: "white" }}
            />
          </span>
          Ask Aditya
          <kbd
  className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-xs"
  style={{ background: "rgba(255,255,255,0.2)", fontSize: "0.65rem" }}
>
  {/Mac|iPhone|iPod|iPad/.test(navigator.platform) ? "⌘K" : "Ctrl+K"}
</kbd>
        </button>
      )}
    </div>
  );
}

export default App;
