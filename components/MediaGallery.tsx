import React, { useRef } from 'react';
import SectionWrapper from './SectionWrapper';
import { AI_MEDIA } from '../constants';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const MediaGallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <SectionWrapper id="media">
      <div className="flex flex-col h-full justify-center w-full">
        <div className="flex justify-between items-end mb-12 px-2">
          <div>
            <span className="text-xs tracking-[0.3em] text-luxury-gray uppercase block mb-2">The Lab</span>
            <h2 className="font-serif text-4xl md:text-6xl text-luxury-white">AI Synthesis</h2>
          </div>
          <span className="font-serif text-xl md:text-3xl text-luxury-gray hidden md:block">06</span>
        </div>

        {/* Horizontal Scroll Container */}
        <div 
          ref={containerRef}
          className="flex space-x-8 overflow-x-auto no-scrollbar pb-8 px-2 items-center min-h-[400px]"
        >
          {AI_MEDIA.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: "easeOut" }}
              viewport={{ root: containerRef }}
              className="relative flex-none w-[280px] md:w-[320px] group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden bg-luxury-panel relative">
                <img 
                  src={item.url} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                />
                
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-4 h-4 text-white fill-white" />
                    </div>
                  </div>
                )}
                
                <div className="absolute inset-0 bg-luxury-overlay group-hover:bg-transparent transition-colors duration-500" />
              </div>

              <div className="mt-4 border-t border-luxury-border pt-3 group-hover:border-luxury-white transition-colors duration-500">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-serif text-lg text-luxury-white">{item.title}</h3>
                  <span className="text-[9px] tracking-widest uppercase text-luxury-gray border border-luxury-border-strong px-1.5 py-0.5 rounded-full">
                    {item.type}
                  </span>
                </div>
                <p className="text-xs text-luxury-gray mt-1 font-sans">{item.description}</p>
              </div>
            </motion.div>
          ))}
          
          {/* Spacer for right padding */}
          <div className="w-12 flex-none" />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default MediaGallery;