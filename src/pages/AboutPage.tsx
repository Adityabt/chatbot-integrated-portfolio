import React from "react";
import aboutImg from "../assets/About.png";
import { ABOUT_TEXT } from "../constant/index";
import { motion } from "framer-motion";

const AboutPage: React.FC = () => {
  return (
    <section className="px-6 py-12 mt-10">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass-ultra rounded-2xl max-w-9xl mx-auto px-10 py-14"
      >
        <motion.h2
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-yellow-400 mb-16 text-center text-7xl font-bold tracking-tight"
        >
          About <span className="text-red-500">Me</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-20">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-80 h-80 sm:w-96 sm:h-96"
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
            className="glass-ultra rounded-2xl p-3 "
          >
            <p className="max-w-4xl py-4 font-normal text-justify text-base 
                           leading-7 text-yellow-400 rounded-2xl p-2">
              {ABOUT_TEXT}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutPage;
