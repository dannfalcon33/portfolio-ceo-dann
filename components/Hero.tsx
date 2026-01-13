import React from "react";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";

const Hero: React.FC = () => {
  return (
    <SectionWrapper id="home">
      <div className="flex flex-col items-center justify-center text-center z-10">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="text-xs md:text-sm font-sans tracking-[0.3em] uppercase mb-6 text-luxury-gray"
        >
          {HERO_CONTENT.badge}
        </motion.span>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-2 text-luxury-white px-4">
          {HERO_CONTENT.title.first}{" "}
          <span className="block md:inline my-2 md:my-0">
            {HERO_CONTENT.title.highlight}
          </span>{" "}
          {HERO_CONTENT.title.last}
        </h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 1.5, ease: "circOut" }}
          className="w-24 h-[1px] bg-luxury-white my-8"
        />

        <p className="font-sans text-sm md:text-base tracking-widest uppercase text-luxury-gray">
          {HERO_CONTENT.subtitle}
        </p>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 z-0">
        {HERO_CONTENT.backgroundElements.circle1 && (
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-luxury-gray rounded-full mix-blend-overlay"></div>
        )}
        {HERO_CONTENT.backgroundElements.circle2 && (
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-luxury-gray rounded-full mix-blend-overlay"></div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default Hero;
