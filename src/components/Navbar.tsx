import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from "../assets/adityaThakurLogo2.png";

const Navbar: React.FC = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const baseLink =
    "text-base font-medium text-neutral-100 hover:text-yellow-400 transition-colors";
  const activeLink = "text-red-500";

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex items-center justify-between px-5 md:px-8 py-4 glass-ultra border-b border-red-500/40 sticky top-0 z-50"
      >
        <button
          onClick={() => setProfileOpen(true)}
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="Aditya Thakur Logo"
            className="h-10 w-10 rounded-full object-cover outline outline-1 outline-gray-500 glass-hover"
          />
        </button>

        <div className="hidden md:flex items-center gap-9 outline outline-1 outline-gray-500 rounded-full px-6 py-3 glass-ultra">
          <NavLink to="/" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : ""}`}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : ""}`}>
            About
          </NavLink>
          <NavLink to="/education" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : ""}`}>
            Education
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : ""}`}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : ""}`}>
            Contact
          </NavLink>
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-xl text-neutral-200"
        >
          <FaBars />
        </button>
      </motion.nav>

      <AnimatePresence>
        {profileOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.35 }}
            className="fixed inset-y-0 left-0 w-64 glass-ultra z-50 p-6 flex flex-col gap-6"
          >
            <button
              onClick={() => setProfileOpen(false)}
              className="self-end text-xl text-neutral-200"
            >
              <FaTimes />
            </button>

            <a href="https://www.linkedin.com/in/aditya-thakur-4086bb2a7" target="_blank" className="flex items-center gap-3 text-lg text-neutral-200">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/Adityabt" target="_blank" className="flex items-center gap-3 text-lg text-neutral-200">
              <FaGithub /> GitHub
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" className="flex items-center gap-3 text-lg text-neutral-200">
              <FaInstagram /> Instagram
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" className="flex items-center gap-3 text-lg text-neutral-200">
              <FaSquareXTwitter /> Twitter
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed inset-y-0 right-0 w-64 glass-ultra z-50 p-6 flex flex-col gap-6"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end text-xl text-neutral-200"
            >
              <FaTimes />
            </button>

            <NavLink to="/" onClick={() => setMenuOpen(false)} className="text-lg text-neutral-200">
              Home
            </NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)} className="text-lg text-neutral-200">
              About
            </NavLink>
            <NavLink to="/education" onClick={() => setMenuOpen(false)} className="text-lg text-neutral-200">
              Education
            </NavLink>
            <NavLink to="/projects" onClick={() => setMenuOpen(false)} className="text-lg text-neutral-200">
              Projects
            </NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)} className="text-lg text-neutral-200">
              Contact
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
