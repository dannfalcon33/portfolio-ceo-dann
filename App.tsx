import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import ResourcesMedia from './components/ResourcesMedia';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { Sun, Moon } from 'lucide-react';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string>('home');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Handle scroll detection to update active nav link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'portfolio', 'resources', 'contact'];
      
      // Find the section that is currently most visible in the viewport
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the section is occupying the middle of the screen
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setCurrentSection(sectionId);
            break;
          }
        }
      }
    };

    const container = document.getElementById('main-container');
    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div 
      className="relative w-full h-screen bg-luxury-black text-luxury-white overflow-hidden font-sans selection:bg-luxury-white selection:text-luxury-black transition-colors duration-500"
      data-theme={theme}
    >
      {/* Header / Logo Fixed */}
      <header className="fixed top-0 left-0 w-full p-8 z-50 flex justify-between items-center pointer-events-none">
        <div 
          className="pointer-events-auto cursor-pointer mix-blend-difference text-white" 
          onClick={() => handleNavigate('home')}
        >
          <span className="font-serif font-bold text-xl tracking-widest">YS.</span>
        </div>
        
        <div className="pointer-events-auto flex items-center space-x-6">
           <button 
             onClick={toggleTheme} 
             className="mix-blend-difference text-white hover:opacity-70 transition-opacity duration-300 focus:outline-none"
             aria-label="Toggle Theme"
           >
             {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
           </button>
           
           <div className="md:hidden mix-blend-difference text-white">
            {/* Mobile Menu Icon Placeholder */}
            <div className="space-y-1.5 cursor-pointer">
              <div className="w-6 h-[1px] bg-current"></div>
              <div className="w-6 h-[1px] bg-current"></div>
            </div>
          </div>
        </div>
      </header>

      <Navigation currentSection={currentSection} onNavigate={handleNavigate} />

      {/* 
        Scroll Container
        snap-y: Axis
        snap-mandatory: Forces snap
        h-screen: Full height
        overflow-y-scroll: Enables scrolling
      */}
      <main 
        id="main-container"
        className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar"
      >
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <ResourcesMedia />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;