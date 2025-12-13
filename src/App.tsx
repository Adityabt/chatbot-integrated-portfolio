import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroPage from "./pages/HeroPage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import EducationPage from "./pages/EducationPage";
import ChatWidget from "./components/chat/ChatWidget";

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <ChatWidget />
    </div>
  );
};

export default App;
