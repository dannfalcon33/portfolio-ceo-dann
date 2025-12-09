import React from 'react';
import SectionWrapper from './SectionWrapper';
import { RESOURCES, MEDIA } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const ResourcesMedia: React.FC = () => {
  return (
    <SectionWrapper id="resources">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 h-full content-center">
        
        {/* Resources Column */}
        <div className="flex flex-col justify-center">
          <div className="mb-8 flex items-center space-x-4">
             <span className="text-4xl font-serif text-luxury-white">04</span>
             <h2 className="text-xs tracking-[0.3em] uppercase text-luxury-white">Resources</h2>
          </div>
          
          <ul className="space-y-0">
            {RESOURCES.map((item, idx) => (
              <li key={idx} className="group border-b border-luxury-border py-6 flex justify-between items-center cursor-pointer hover:border-luxury-white transition-colors duration-500">
                <div>
                   <h3 className="font-serif text-2xl text-luxury-white group-hover:translate-x-4 transition-transform duration-500">{item.title}</h3>
                   <span className="text-[10px] uppercase tracking-widest text-luxury-gray block mt-1">{item.type}</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-luxury-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </li>
            ))}
          </ul>
        </div>

        {/* Media Column (Now Press) */}
        <div className="flex flex-col justify-center">
          <div className="mb-8 flex items-center space-x-4">
             <span className="text-4xl font-serif text-luxury-white">05</span>
             <h2 className="text-xs tracking-[0.3em] uppercase text-luxury-white">Press & Talks</h2>
          </div>
          
          <ul className="space-y-0">
            {MEDIA.map((item, idx) => (
              <li key={idx} className="group border-b border-luxury-border py-6 flex justify-between items-center cursor-pointer hover:border-luxury-white transition-colors duration-500">
                <div>
                   <h3 className="font-serif text-2xl text-luxury-white group-hover:translate-x-4 transition-transform duration-500">{item.title}</h3>
                   <span className="text-[10px] uppercase tracking-widest text-luxury-gray block mt-1">{item.platform}</span>
                </div>
                <span className="font-mono text-xs text-luxury-gray">{item.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ResourcesMedia;