import React from 'react';

interface NavigationProps {
  currentSection: string;
  onNavigate: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection, onNavigate }) => {
  const links = ['about', 'skills', 'portfolio', 'resources', 'contact'];

  return (
    <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden md:block mix-blend-difference text-white">
      <ul className="flex flex-col space-y-6 items-end">
        {links.map((link) => (
          <li key={link} className="group flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate(link)}>
            <span 
              className={`text-[10px] uppercase tracking-widest font-sans transition-all duration-500 ${
                currentSection === link ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'
              }`}
            >
              {link}
            </span>
            <div 
              className={`h-[1px] bg-current transition-all duration-500 ${
                currentSection === link ? 'w-8' : 'w-4 group-hover:w-6'
              }`} 
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;