import React, { useState, useRef } from "react";
import SectionWrapper from "./SectionWrapper";
import { PROJECTS, PORTFOLIO_CONTENT } from "../constants";
import { Project } from "../types";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Adjust as needed
      const method = direction === "left" ? -scrollAmount : scrollAmount;
      scrollContainerRef.current.scrollBy({ left: method, behavior: "smooth" });
    }
  };

  return (
    <SectionWrapper id="portafolio">
      <div className="flex flex-col h-full justify-center relative">
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-luxury-white">
            {PORTFOLIO_CONTENT.sectionTitle}
          </h2>
          <div className="flex items-center gap-4">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full border border-luxury-border text-luxury-white hover:bg-luxury-white hover:text-luxury-black transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full border border-luxury-border text-luxury-white hover:bg-luxury-white hover:text-luxury-black transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex space-x-6 md:space-x-8 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative cursor-pointer min-w-[300px] md:min-w-[400px] snap-start"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-luxury-panel">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-luxury-overlay group-hover:bg-transparent transition-colors duration-500" />

                {/* Overlay Indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-16 h-16 rounded-full border border-luxury-border-strong backdrop-blur-sm flex items-center justify-center">
                    <span className="text-[10px] uppercase tracking-widest text-white">
                      {PORTFOLIO_CONTENT.viewProject}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-start border-t border-luxury-border pt-4 group-hover:border-luxury-border-strong transition-colors duration-500">
                <div>
                  <h3 className="font-serif text-xl md:text-2xl mb-1 text-luxury-white">
                    {project.title}
                  </h3>
                  <p className="text-xs tracking-widest text-luxury-gray uppercase">
                    {project.category}
                  </p>
                </div>
                <span className="font-mono text-xs text-luxury-gray">
                  {project.year}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:text-right">
          <a
            href="https://github.com/dannfalcon33"
            className="text-xs tracking-[0.2em] uppercase border-b border-transparent hover:border-luxury-white transition-all pb-1 text-luxury-white"
          >
            {PORTFOLIO_CONTENT.viewArchive}
          </a>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-12"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-luxury-overlay-strong backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-luxury-modal border border-luxury-border w-full max-w-5xl max-h-[90vh] overflow-y-auto md:overflow-hidden flex flex-col md:flex-row shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 text-luxury-gray hover:text-luxury-white transition-colors"
              >
                <X size={24} />
              </button>

              {/* Image Section */}
              <div className="w-full md:w-1/2 h-64 md:h-auto bg-luxury-panel">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info Section */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-luxury-gray border border-luxury-border px-2 py-1">
                    {selectedProject.year}
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-luxury-gray">
                    {selectedProject.category}
                  </span>
                </div>

                <h2 className="font-serif text-4xl md:text-5xl mb-6 text-luxury-white">
                  {selectedProject.title}
                </h2>

                <div className="w-12 h-[1px] bg-luxury-border-strong mb-6" />

                <p className="font-sans text-sm leading-loose text-luxury-gray mb-10 text-justify">
                  {selectedProject.description ||
                    PORTFOLIO_CONTENT.modal.defaultDescription}
                </p>

                <div className="mt-auto">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center space-x-3 px-8 py-3 border border-luxury-border-strong hover:border-luxury-white transition-colors duration-500 bg-transparent relative overflow-hidden"
                    >
                      <span className="relative z-10 text-xs tracking-widest uppercase text-luxury-white group-hover:text-luxury-white-inverse">
                        {PORTFOLIO_CONTENT.modal.viewLive}
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="relative z-10 text-luxury-white group-hover:text-luxury-white-inverse group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                      />
                      <div className="absolute top-0 left-0 h-full w-0 bg-luxury-white group-hover:w-full transition-all duration-500 ease-out z-0"></div>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default Portfolio;
