import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, Youtube, Video, Link as LinkIcon } from "lucide-react";
import { ABOUT_CONTENT } from "../constants";

const About: React.FC = () => {
  const [showBio, setShowBio] = useState(false);

  return (
    <SectionWrapper id="sobre mi">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative hidden lg:block h-[60vh] border-r border-luxury-border pr-12">
          <img
            src={ABOUT_CONTENT.image.sidebar}
            alt="Yoshua Soto"
            className="w-full h-full object-cover filter brightness-50 contrast-125"
          />
          <div className="absolute bottom-4 left-[-20px] bg-luxury-black p-4 border border-luxury-border">
            <span className="font-serif text-4xl text-luxury-white">01</span>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
          <span className="text-xs tracking-[0.2em] text-luxury-gray uppercase font-sans">
            {ABOUT_CONTENT.badge}
          </span>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-luxury-white">
            {ABOUT_CONTENT.title.main} <br />
            <span className="italic font-light opacity-80">
              {ABOUT_CONTENT.title.highlight}
            </span>
          </h2>

          <p className="font-sans text-sm md:text-base text-luxury-gray leading-loose max-w-xl text-justify">
            {ABOUT_CONTENT.description}
          </p>

          <div className="flex gap-4 mt-4">
            {ABOUT_CONTENT.socialLinks &&
              ABOUT_CONTENT.socialLinks.map((link, index) => {
                const Icon = () => {
                  if (link.platform.includes("GitHub"))
                    return <Github size={25} />;
                };

                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-luxury-gray hover:text-luxury-white transition-colors duration-300"
                    title={link.platform}
                  >
                    <Icon />
                  </a>
                );
              })}
          </div>

          <div className="pt-8 flex flex-wrap gap-6">
            <button
              onClick={() => setShowBio(true)}
              className="group relative px-8 py-3 border border-luxury-border-strong hover:border-luxury-white transition-colors duration-500 overflow-hidden"
            >
              <span className="relative z-10 text-xs tracking-widest uppercase mix-blend-difference text-luxury-white">
                {ABOUT_CONTENT.buttons.readBio}
              </span>
              <div className="absolute top-0 left-0 h-full w-0 bg-luxury-white group-hover:w-full transition-all duration-500 ease-out z-0"></div>
            </button>

            <a
              href={ABOUT_CONTENT.buttons.cvUrl}
              download="Dann CV.pdf"
              className="group relative px-8 py-3 border border-luxury-border-strong hover:border-luxury-white transition-colors duration-500 overflow-hidden flex items-center justify-center"
            >
              <span className="relative z-10 text-xs tracking-widest uppercase mix-blend-difference text-luxury-white">
                {ABOUT_CONTENT.buttons.downloadCv}
              </span>
              <div className="absolute top-0 left-0 h-full w-0 bg-luxury-white group-hover:w-full transition-all duration-500 ease-out z-0"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Biography Modal */}
      <AnimatePresence>
        {showBio && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-12"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-luxury-overlay-strong backdrop-blur-md"
              onClick={() => setShowBio(false)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-luxury-modal border border-luxury-border w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowBio(false)}
                className="absolute top-6 right-6 z-20 p-2 text-luxury-gray hover:text-luxury-white transition-colors border border-transparent hover:border-luxury-border rounded-full bg-luxury-black/50"
              >
                <X size={20} />
              </button>

              {/* Image Section */}
              <div className="w-full md:w-5/12 h-64 md:h-auto relative border-b md:border-b-0 md:border-r border-luxury-border">
                <img
                  src={ABOUT_CONTENT.image.modal}
                  alt="Yoshua Soto Profile"
                  className="w-full h-full object-cover filter brightness-75 contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent md:hidden"></div>
                <div className="absolute bottom-6 left-6 md:left-8">
                  <h3 className="font-serif text-3xl text-white">
                    Yoshua Soto
                  </h3>
                  <p className="text-[10px] tracking-widest uppercase text-white/70 mt-2">
                    The Architect
                  </p>
                </div>
              </div>

              {/* Text Section */}
              <div className="w-full md:w-7/12 p-8 md:p-16 overflow-y-auto">
                <div className="flex items-center space-x-4 mb-8">
                  <span className="text-4xl font-serif text-luxury-border-strong">
                    {ABOUT_CONTENT.expandedBio.badge}
                  </span>
                  <h2 className="text-xs tracking-[0.3em] uppercase text-luxury-white">
                    {ABOUT_CONTENT.expandedBio.title}
                  </h2>
                </div>

                <div className="prose max-w-none">
                  <p className="font-serif text-xl md:text-2xl leading-relaxed text-luxury-white mb-8">
                    {ABOUT_CONTENT.expandedBio.quote}
                  </p>

                  <div className="space-y-6 font-sans text-sm md:text-base leading-loose text-luxury-gray text-justify">
                    {ABOUT_CONTENT.expandedBio.paragraphs.map(
                      (paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ),
                    )}
                  </div>

                  <div className="mt-12 pt-8 border-t border-luxury-border flex justify-between items-center">
                    <span className="font-mono text-[10px] text-luxury-gray">
                      {ABOUT_CONTENT.expandedBio.est}
                    </span>
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 30'%3E%3Ctext x='50' y='20' font-family='cursive' font-size='20' fill='%23888' text-anchor='middle'%3EYoshua Soto%3C/text%3E%3C/svg%3E"
                      alt="Signature"
                      className="h-8 opacity-50"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default About;
