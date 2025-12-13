import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from "../assets/adityaThakurLogo2.png";

const Navbar: React.FC = () => {
  const baseLink =
    "text-sm md:text-base font-medium text-neutral-100 hover:text-yellow-400 transition-colors group relative";
  const activeLink = "text-red-500";

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        w-full flex items-center justify-between px-8 py-4
        glass-ultra border-b border-red-500/40
        sticky top-0 z-50
      "
    >
      <div className="relative flex items-center gap-4 group">
        <NavLink to="/">
          <img
            src={logo}
            alt="Aditya Thakur Logo"
            className="
              h-11 w-11 rounded-full object-cover cursor-pointer
              outline outline-1 outline-gray-500  glass-hover
              transition-all duration-200 
            "
          />
        </NavLink>

        <div
          className="
            flex items-center pl-4 gap-8
            opacity-0 translate-x-2
            pointer-events-none
            group-hover:opacity-100
            group-hover:translate-x-0
            group-hover:pointer-events-auto
            transition-all duration-200
          "
        >
          <a
            href="www.linkedin.com/in/aditya-thakur-4086bb2a7"
            target="_blank"
            rel="noopener noreferrer"
            className="outline outline-2 outline-gray-500/60 rounded text-xl text-neutral-300 hover:text-blue-500 glass-ultra glass-hover"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="outline outline-2 outline-gray-500/60 rounded-full text-xl text-neutral-300 hover:text-purple-400 glass-ultra glass-hover"
          >
            <FaGithub />
          </a>

          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="outline outline-2 outline-gray-500/60 rounded-lg text-xl text-neutral-300 hover:text-pink-500 glass-ultra glass-hover"
          >
            <FaInstagram />
          </a>

          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="outline outline-2 outline-gray-500/60 rounded text-xl text-neutral-300 hover:text-cyan-500 glass-ultra glass-hover"
          >
            <FaSquareXTwitter />
          </a>
        </div>
      </div>

      <div className="flex items-center gap-9 outline outline-1 outline-gray-500 rounded-full px-6 py-3 glass-ultra">
        <NavLink to="/" className={({ isActive }) =>
          `${baseLink} ${isActive ? activeLink : ""}`
        }>
          Home
          <span className="block h-[2px] max-w-0 group-hover:max-w-full transition-all duration-300 bg-gradient-to-r from-red-500 to-yellow-500"></span>
        </NavLink>

        <NavLink to="/about" className={({ isActive }) =>
          `${baseLink} ${isActive ? activeLink : ""}`
        }>
          About
          <span className="block h-[2px] max-w-0 group-hover:max-w-full transition-all duration-300 bg-gradient-to-r from-red-500 to-yellow-500"></span>
        </NavLink>

        <NavLink to="/education" className={({ isActive }) =>
          `${baseLink} ${isActive ? activeLink : ""}`
        }>
          Education
          <span className="block h-[2px] max-w-0 group-hover:max-w-full transition-all duration-300 bg-gradient-to-r from-red-500 to-yellow-500"></span>
        </NavLink>

        <NavLink to="/projects" className={({ isActive }) =>
          `${baseLink} ${isActive ? activeLink : ""}`
        }>
          Projects
          <span className="block h-[2px] max-w-0 group-hover:max-w-full transition-all duration-300 bg-gradient-to-r from-red-500 to-yellow-500"></span>
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) =>
          `${baseLink} ${isActive ? activeLink : ""}`
        }>
          Contact
          <span className="block h-[2px] max-w-0 group-hover:max-w-full transition-all duration-300 bg-gradient-to-r from-red-500 to-yellow-500"></span>
        </NavLink>

      </div>
    </motion.nav>
  );
};

export default Navbar;
