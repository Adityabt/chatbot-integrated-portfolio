import React from "react";
import { PROJECTS } from "../constant/index";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const headingVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, delay: i * 0.15 }
  })
};

const Projects: React.FC = () => {
  return (
    <section className="px-6 py-20 mt-10">
      <motion.h3
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        className="mb-16 text-center text-5xl sm:text-7xl font-bold tracking-tight text-yellow-400"
      >
        <span className="text-red-500">Pro</span>jects
      </motion.h3>

      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2">
        {PROJECTS.map((project, idx) => (
          <motion.article
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            key={idx}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 160, damping: 12 }}
            className="glass-ultra rounded-2xl overflow-hidden shadow-3xl cursor-pointer transition-shadow duration-300 hover:shadow-[0_25px_60px_rgba(255,255,255,0.12)]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-20 w-full object-cover object-top md:h-64"
            />

            <div className="flex grow flex-col justify-between p-8">
              <div>
                <h4 className="text-2xl font-semibold text-red-500">
                  {project.title}
                </h4>
                <p className="mt-3 text-neutral-200 text-sm sm:text-base leading-7">
                  {project.description}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech: string, i: number) => (
                  <span
                    key={i}
                    className="rounded-lg border border-yellow-500/40 bg-black/40 px-3 py-1 text-xs font-medium text-yellow-300 backdrop-blur"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-red-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-red-500"
                  >
                    <FaGithub className="text-lg" /> GitHub
                  </a>
                )}

                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-yellow-400 px-5 py-2 text-sm font-medium text-white transition hover:bg-yellow-400"
                  >
                    <FaExternalLinkAlt className="text-sm" /> Preview
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
