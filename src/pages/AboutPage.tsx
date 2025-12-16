import React from "react";
import aboutImg from "../assets/About.png";
import { ABOUT_TEXT } from "../constant/index";
import { motion } from "framer-motion";

const AboutPage: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 py-12 mt-10">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass-ultra rounded-2xl max-w-9xl mx-auto px-6 sm:px-10 py-12 sm:py-14"
      >
        <motion.h2
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-yellow-400 mb-12 sm:mb-16 text-center text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-tight"
        >
          About <span className="text-red-500">Me</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
          >
            <img
              src={aboutImg}
              alt="About"
              className="rounded-2xl shadow-2xl object-cover w-full h-full glass-strong"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-ultra rounded-2xl px-4 sm:px-6 py-6 sm:py-8 max-w-xl"
          >
            <p className="font-normal text-left lg:text-justify text-sm sm:text-base leading-7 text-yellow-400">
              {ABOUT_TEXT}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutPage;
