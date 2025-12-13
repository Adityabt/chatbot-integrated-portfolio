import React from "react";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constant/index";
import profilePic from "../assets/ProfilePic2.png";

const container = (delay: number) => ({
  hidden: { x: -80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, delay },
  },
});

const Hero: React.FC = () => {
  return (
    <section className="px-6 py-20 mt-10">
      <div className="glass-ultra glass-hover rounded-3xl px-16 py-20 max-w-9xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-20">

          <div className="w-full lg:w-3/6">
            <motion.div
              className="flex flex-col items-center lg:items-start"
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                variants={container(0)}
                className="pb-6 text-6xl sm:text-7xl lg:text-9xl font-thin text-red-600 text-center lg:text-left"
              >
                Aditya Thakur
              </motion.h1>

              <motion.span
                variants={container(0.3)}
                className="mt-1 pb-8 bg-gradient-to-r from-red-700 via-orange-400 to-yellow-400 bg-clip-text text-3xl sm:text-4xl tracking-tight text-transparent text-center lg:text-left"
              >
                Frontend Developer
              </motion.span>

              <motion.p
                variants={container(0.6)}
                className="mt-4 max-w-4xl font-normal text-justify text-base leading-8 text-yellow-400 glass-ultra glass-hover rounded-2xl p-5"
              >
                {HERO_CONTENT}
              </motion.p>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <motion.img
              initial={{ x: 120, opacity: 0, scale: 0.9 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.8,
                type: "spring",
                stiffness: 70,
              }}
              src={profilePic}
              alt="Aditya Thakur"
              className="w-72 sm:w-96 object-cover glass-ultra glass-hover rounded-3xl shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

