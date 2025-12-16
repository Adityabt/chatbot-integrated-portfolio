import { EDUCATION } from "../constant/index.ts";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const container = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6 },
  },
});

const itemLeft = (delay = 0): Variants => ({
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay, duration: 0.6 },
  },
});

const itemRight = (delay = 0): Variants => ({
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay, duration: 0.6 },
  },
});

const EducationPage: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 py-12 mt-10">
      <motion.div
        variants={container(0.15)}
        initial="hidden"
        animate="visible"
        className="glass-ultra rounded-2xl max-w-6xl mx-auto px-6 sm:px-10 py-12"
      >
        <motion.h3
          variants={container(0)}
          className="mb-12 text-center text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-red-500"
        >
          Edu<span className="text-yellow-400">cation</span>
        </motion.h3>

        <div className="space-y-14">
          {EDUCATION.map((edu, idx) => (
            <div
              key={idx}
              className="flex flex-col lg:flex-row gap-6 lg:gap-12"
            >
              <motion.div
                variants={itemLeft(idx * 0.15)}
                initial="hidden"
                whileInView="visible"
                className="text-red-500 text-sm sm:text-base font-medium lg:min-w-[90px]"
              >
                {edu.year}
              </motion.div>

              <motion.div
                variants={itemRight(idx * 0.15)}
                initial="hidden"
                whileInView="visible"
                className="flex-1 glass-ultra rounded-2xl px-5 sm:px-6 py-6 shadow-lg"
              >
                <h4 className="text-base sm:text-lg font-semibold text-yellow-400">
                  {edu.role}
                  <span className="block sm:inline text-sm sm:text-base text-red-600">
                    {" "}
                    – {edu.company}
                  </span>
                </h4>

                <p className="mt-3 text-left lg:text-justify text-sm sm:text-base text-yellow-400 leading-7">
                  {edu.description}
                </p>

                {edu.technologies?.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {edu.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded-lg glass-strong px-3 py-1 text-xs sm:text-sm font-medium text-red-500 border border-red-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EducationPage;
