import React from "react";
import SectionWrapper from "./SectionWrapper";
import { SKILLS, SKILLS_CONTENT } from "../constants";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="habilidades">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-luxury-border-strong pb-4">
          <h2 className="font-serif text-5xl md:text-7xl text-luxury-white">
            {SKILLS_CONTENT.sectionTitle}
          </h2>
          <span className="font-serif text-xl md:text-3xl text-luxury-gray">
            {SKILLS_CONTENT.sectionNumber}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {SKILLS.map((category, idx) => (
            <div key={idx} className="flex flex-col space-y-6">
              <h3 className="text-xs tracking-[0.25em] uppercase border-b border-luxury-border pb-2 text-luxury-gray">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <motion.li
                    key={sIdx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: idx * 0.2 + sIdx * 0.1,
                      duration: 0.5,
                    }}
                    className="font-serif text-xl md:text-2xl text-luxury-white hover:text-luxury-gray transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
