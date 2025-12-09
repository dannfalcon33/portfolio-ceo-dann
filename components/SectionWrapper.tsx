import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section 
      id={id} 
      ref={ref}
      className={`min-h-screen w-full snap-start relative flex flex-col justify-center overflow-x-hidden py-24 md:py-0 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} // Elegant easing
        className="container mx-auto px-6 md:px-12 lg:px-24 h-full flex flex-col justify-center"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;