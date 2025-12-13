import { EDUCATION } from "../constant/index.ts";
import { motion } from "framer-motion";

const container = (delay = 0) => ({
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
});

const itemLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay, duration: 0.7 },
  },
});

const itemRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay, duration: 0.7 },
  },
});

const EducationPage: React.FC = () => {
  return (
    <section className="px-6 py-12 mt-10">
      <motion.div
        variants={container(0.15)}
        initial="hidden"
        animate="visible"
        className="glass-ultra rounded-2xl max-w-6xl mx-auto p-10"
      >
        <motion.h3
          variants={container(0)}
          className="mb-10 text-center text-7xl font-bold tracking-tight text-red-500"
        >
          Edu<span className="text-yellow-400">cation</span>
        </motion.h3>

        <div className="space-y-16">
          {EDUCATION.map((edu, idx) => (
            <div
              key={idx}
              className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12"
            >
              <motion.div
                variants={itemLeft(idx * 0.15)}
                initial="hidden"
                whileInView="visible"
                className="min-w-[80px] text-red-500 text-base sm:text-lg font-medium lg:pt-1"
              >
                {edu.year}
              </motion.div>

              <motion.div
                variants={itemRight(idx * 0.15)}
                initial="hidden"
                whileInView="visible"
                className="flex-1 glass-ultra rounded-2xl p-6 shadow-lg"
              >
                <h4 className="text-lg sm:text-xl font-semibold text-yellow-400">
                  {edu.role}
                  <span className="text-sm sm:text-base text-red-600">
                    {" "}
                    – {edu.company}
                  </span>
                </h4>

                <p className="mt-2 text-justify text-sm sm:text-base text-yellow-400 leading-relaxed">
                  {edu.description}
                </p>

                {edu.technologies?.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {edu.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded border border-red-600 hover:bg-red-200 px-3 py-1 text-xs sm:text-sm font-medium text-red-600 shadow-inner"
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
